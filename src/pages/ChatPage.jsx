// src/pages/ChatPage.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { Send, Mic, MicOff, Volume2, VolumeX, Loader2, Menu } from "lucide-react";
import { createSession, getSessions, getSessionMessages, updateSessionPreview, saveMessage, saveMoodLog } from "../firebase";
import { sendToOwnModel, detectCrisis } from "../gemini";
import { analyzeSentiment } from "../sentiment";
import { analyzeMessage, aggregateSessionMood } from "../utils/passiveMoodDetector";
import { useLanguage } from "../context/LanguageContext";

const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;
const hasSpeechRecognition = !!SpeechRecognitionAPI;
const hasSpeechSynthesis = typeof window !== "undefined" && "speechSynthesis" in window;

function speakText(text) {
  if (!hasSpeechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/\*\*/g, "").replace(/\[.*?\]/g, "").trim();
  const utt = new SpeechSynthesisUtterance(clean);
  utt.rate = 0.9;
  utt.pitch = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const female = voices.find(
    (v) => /female|woman|samantha|karen|victoria|zira|susan|moira/i.test(v.name)
  );
  if (female) utt.voice = female;
  window.speechSynthesis.speak(utt);
}

function formatSessionTime(timestamp) {
  if (!timestamp) return "";
  let date;
  if (typeof timestamp.toDate === "function") {
    date = timestamp.toDate();
  } else if (typeof timestamp.toMillis === "function") {
    date = new Date(timestamp.toMillis());
  } else {
    date = new Date(timestamp);
  }
  if (isNaN(date.getTime())) return "Just now";
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (date.getTime() >= todayStart - 86400000) {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function groupSessions(sessions, labels) {
  const groups = {
    [labels.today]: [],
    [labels.yesterday]: [],
    [labels.last7]: [],
    [labels.thisMonth]: [],
    [labels.older]: [],
  };
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yesterdayStart = todayStart - 86400000;
  const last7DaysStart = todayStart - 7 * 86400000;
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  sessions.forEach((s) => {
    let t = s.createdAt?.toMillis ? s.createdAt.toMillis() : Date.now();
    if (t >= todayStart) groups[labels.today].push(s);
    else if (t >= yesterdayStart) groups[labels.yesterday].push(s);
    else if (t >= last7DaysStart) groups[labels.last7].push(s);
    else if (t >= thisMonthStart) groups[labels.thisMonth].push(s);
    else groups[labels.older].push(s);
  });
  return groups;
}

// ── Passive mood saver (standalone so it runs even on AI error) ──
function saveMoodIfNeeded(analyses, userId, setToastMsg) {
  if (analyses.length > 0 && analyses.length % 3 === 0) {
    const finalScore = aggregateSessionMood(analyses);
    const roundedScore = Math.round(finalScore);
    saveMoodLog(userId, roundedScore, "Auto-detected from conversation")
      .then(() => {
        setToastMsg(`Mood logged: ${roundedScore}/10`);
        setTimeout(() => setToastMsg(""), 3000);
      })
      .catch((err) => console.error("Mood save failed:", err));
  }
}

export default function ChatPage({ user, onCrisis }) {
  const { t } = useLanguage();
  const WELCOME = {
    role: "assistant",
    content: t("chat.welcome"),
  };

  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);

  const [messages, setMessages] = useState([WELCOME]);
  const [geminiHistory, setGeminiHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [recording, setRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [voiceTooltip, setVoiceTooltip] = useState("");

  // Passive mood detection
  const [moodAnalyses, setMoodAnalyses] = useState([]);
  const [lastAiMessageTime, setLastAiMessageTime] = useState(null);
  const [inputStartTime, setInputStartTime] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const bottomRef = useRef(null);
  const recognRef = useRef(null);
  const sendMsgRef = useRef(null);
  const moodAnalysesRef = useRef([]);

  // Keep ref in sync with state so we can access latest value anywhere
  useEffect(() => {
    moodAnalysesRef.current = moodAnalyses;
  }, [moodAnalyses]);

  useEffect(() => {
    (async () => {
      try {
        const historySessions = await getSessions(user.uid);
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const todaysSession = historySessions.find((s) => {
          const t = s.createdAt?.toMillis ? s.createdAt.toMillis() : Date.now();
          return t >= todayStart;
        });
        let activeId = null;
        if (todaysSession) {
          activeId = todaysSession.id;
          setSessions(historySessions);
        } else {
          activeId = await createSession(user.uid);
          const newSession = {
            id: activeId,
            createdAt: { toMillis: () => Date.now(), toDate: () => new Date() },
            firstMessage: "New Chat",
            messageCount: 0,
          };
          setSessions([newSession, ...historySessions]);
        }
        await loadSessionChat(activeId);
      } catch (err) {
        console.error("Failed to load sessions:", err);
      } finally {
        setSessionLoading(false);
      }
    })();
  }, [user.uid]);

  const loadSessionChat = async (sessionId) => {
    setFetching(true);
    setActiveSessionId(sessionId);
    setMoodAnalyses([]);
    moodAnalysesRef.current = [];
    if (window.innerWidth < 768) setSidebarOpen(false);
    try {
      const history = await getSessionMessages(user.uid, sessionId, 50);
      if (history.length > 0) {
        setMessages([WELCOME, ...history]);
        setGeminiHistory(
          history.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          }))
        );
      } else {
        setMessages([WELCOME]);
        setGeminiHistory([]);
      }
    } catch (err) {
      console.error("Failed to load session messages:", err);
    } finally {
      setFetching(false);
    }
  };

  const startNewChat = async () => {
    setFetching(true);
    setMoodAnalyses([]);
    moodAnalysesRef.current = [];
    if (window.innerWidth < 768) setSidebarOpen(false);
    try {
      const newId = await createSession(user.uid);
      const newSession = {
        id: newId,
        createdAt: { toMillis: () => Date.now(), toDate: () => new Date() },
        firstMessage: "New Chat",
        messageCount: 0,
      };
      setSessions((prev) => [newSession, ...prev]);
      setActiveSessionId(newId);
      setMessages([WELCOME]);
      setGeminiHistory([]);
    } catch (e) {
      console.error(e);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (hasSpeechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }, []);

  const sendMessage = useCallback(
    async (textOverride) => {
      const text = (textOverride ?? input).trim();
      if (!text || loading || !activeSessionId) return;

      setInput("");
      const isFirstMessage = messages.length <= 1;
      setMessages((prev) => [...prev, { role: "user", content: text }]);
      setLoading(true);

      if (detectCrisis(text)) onCrisis();

      // Capture timing BEFORE async calls
      const typingDuration = inputStartTime ? Date.now() - inputStartTime : 0;
      const responseDelay = lastAiMessageTime ? Date.now() - lastAiMessageTime : 0;
      setInputStartTime(null);

      // ── Run passive mood detection immediately (before AI call) ──
      const analysis = analyzeMessage(text, typingDuration, responseDelay);
      const updatedAnalyses = [...moodAnalysesRef.current, analysis];
      moodAnalysesRef.current = updatedAnalyses;
      setMoodAnalyses(updatedAnalyses);

      // Save mood every 3 messages — runs regardless of AI success/failure
      saveMoodIfNeeded(updatedAnalyses, user.uid, setToastMsg);

      try {
        if (isFirstMessage) {
          const preview = text.length > 35 ? text.substring(0, 35) + "..." : text;
          await updateSessionPreview(user.uid, activeSessionId, preview, 2);
          setSessions((prev) =>
            prev.map((s) =>
              s.id === activeSessionId
                ? { ...s, firstMessage: preview, messageCount: 2 }
                : s
            )
          );
        }

        const aiText = await sendToOwnModel(text);
        if (!aiText) throw new Error("Own model returned null");
        if (aiText.includes("[CRISIS]")) onCrisis();
        const cleanText = aiText.replace("[CRISIS]", "").trim();

        const { score } = analyzeSentiment(text);

        setLastAiMessageTime(Date.now());

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: cleanText },
        ]);
        setGeminiHistory((prev) => [
          ...prev,
          { role: "user", parts: [{ text }] },
          { role: "model", parts: [{ text: cleanText }] },
        ]);

        if (voiceEnabled) speakText(cleanText);

        await saveMessage(user.uid, activeSessionId, "user", text, score);
        await saveMessage(user.uid, activeSessionId, "assistant", cleanText, 0);
      } catch (err) {
        console.error("AI error:", err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: t("chat.errorMsg") },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, geminiHistory, voiceEnabled, user.uid, onCrisis, activeSessionId, messages.length, inputStartTime, lastAiMessageTime]
  );

  useEffect(() => {
    sendMsgRef.current = sendMessage;
  }, [sendMessage]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleRecording = () => {
    if (!hasSpeechRecognition) {
      setVoiceTooltip(t("chat.voiceUnsupported"));
      setTimeout(() => setVoiceTooltip(""), 3000);
      return;
    }
    if (recording) {
      recognRef.current?.stop();
      setRecording(false);
      return;
    }
    const recog = new SpeechRecognitionAPI();
    recog.lang = "en-IN";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onstart = () => setRecording(true);
    recog.onend = () => setRecording(false);
    recog.onerror = () => setRecording(false);
    recog.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      sendMsgRef.current(transcript);
    };
    recognRef.current = recog;
    recog.start();
  };

  const toggleVoiceOutput = () => {
    if (!hasSpeechSynthesis) {
      setVoiceTooltip(t("chat.speechUnsupported"));
      setTimeout(() => setVoiceTooltip(""), 3000);
      return;
    }
    if (voiceEnabled) window.speechSynthesis.cancel();
    setVoiceEnabled((v) => !v);
  };

  const sessionLabels = {
    today: t("chat.today"),
    yesterday: t("chat.yesterday"),
    last7: t("chat.last7"),
    thisMonth: t("chat.thisMonth"),
    older: t("chat.older"),
  };
  const groupedSessions = groupSessions(sessions, sessionLabels);

  return (
    <div className="flex h-full w-full relative overflow-hidden bg-[var(--bg-dark)]">

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`absolute md:relative z-40 h-full w-[260px] shrink-0 bg-[#0D1117] border-r border-[#1A1F2E] flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-[#1A1F2E] shrink-0">
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-teal-500/30 bg-teal-500/5 hover:border-teal-500 hover:bg-teal-500/10 text-teal-400 text-[14px] font-medium transition-all shadow-sm transform hover:scale-[1.02]"
          >
            {t("chat.newChat")}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-7 scroll-smooth">
          {sessionLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-5 h-5 animate-spin text-teal-500" />
            </div>
          ) : (
            Object.entries(groupedSessions).map(([label, groupItems]) => {
              if (groupItems.length === 0) return null;
              return (
                <div key={label} className="animate-fade-in">
                  <h3 className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-2 px-2">
                    {label}
                  </h3>
                  <div className="space-y-0.5">
                    {groupItems.map((s, idx) => {
                      const isActive = s.id === activeSessionId;
                      return (
                        <button
                          key={s.id}
                          onClick={() => loadSessionChat(s.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex flex-col gap-1 transition-all duration-150 relative group ${
                            isActive
                              ? "bg-[#1A1F2E]/80 text-white"
                              : "text-slate-300 hover:bg-[#1A1F2E] hover:text-white"
                          }`}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-teal-500 rounded-r-full shadow-[0_0_8px_rgba(13,148,136,0.6)]" />
                          )}
                          <span className="text-[14px] font-medium leading-tight truncate px-1">
                            {s.firstMessage || "New Chat"}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium px-1">
                            {formatSessionTime(s.createdAt)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full min-w-0 relative">
        <div className="flex-1 flex flex-col h-full w-full max-w-[800px] mx-auto px-4 sm:px-8 relative">

          <div className="pt-6 pb-5 border-b border-[var(--border)] mb-4 shrink-0 flex items-center gap-3">
            <button
              className="md:hidden p-2 -ml-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--text-main)] tracking-tight flex items-center gap-2">
                {t("chat.title")}
                {fetching && (
                  <Loader2 className="w-4 h-4 animate-spin text-teal-500 ml-2" />
                )}
              </h1>
              <p className="text-[var(--text-muted)] mt-1 hidden sm:block">
                {t("chat.subtitle")}
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 sm:space-y-8 mb-4 min-h-0 pr-1 sm:pr-2 pb-4 scroll-smooth">
            {!fetching &&
              messages.map((msg, i) => (
                <Bubble key={i} msg={msg} user={user} index={i} />
              ))}
            {loading && <TypingIndicator />}
            <div ref={bottomRef} className="h-4" />
          </div>

          <div className="sticky bottom-0 bg-[var(--bg-dark)]/90 backdrop-blur-xl border-t border-[var(--border)] -mx-4 sm:-mx-8 px-4 sm:px-8 pt-4 pb-4 z-10 shrink-0">
            <div className="relative max-w-[800px] mx-auto">

              {toastMsg && (
                <div className="absolute -top-12 left-0 right-0 flex justify-center animate-fade-in">
                  <div className="text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full py-1.5 px-4 shadow-lg backdrop-blur-md">
                    ✓ {toastMsg}
                  </div>
                </div>
              )}

              {voiceTooltip && (
                <div className="absolute -top-12 left-0 right-0 text-center text-xs text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-lg py-2 px-3 mx-auto max-w-sm animate-fade-in shadow-xl backdrop-blur-md">
                  {voiceTooltip}
                </div>
              )}

              <div className="flex items-end gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-2 shadow-sm focus-within:border-[var(--teal)]/50 focus-within:ring-1 focus-within:ring-[var(--teal)]/20 transition-all duration-300">
                <button
                  onClick={toggleVoiceOutput}
                  title={voiceEnabled ? "Mute AI voice" : "Enable AI voice"}
                  className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                    voiceEnabled
                      ? "text-teal-400 bg-teal-500/10 hover:bg-teal-500/20"
                      : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/60"
                  }`}
                >
                  {voiceEnabled ? (
                    <Volume2 className="w-[18px] h-[18px]" />
                  ) : (
                    <VolumeX className="w-[18px] h-[18px]" />
                  )}
                </button>

                <textarea
                  className="flex-1 text-[var(--text-main)] placeholder-[var(--text-muted)]/70 bg-transparent resize-none text-[15px] leading-relaxed px-2 py-3 focus:outline-none max-h-32"
                  placeholder={t("chat.placeholder")}
                  value={input}
                  onChange={(e) => {
                    if (!inputStartTime) setInputStartTime(Date.now());
                    setInput(e.target.value);
                  }}
                  onKeyDown={handleKey}
                  rows={1}
                  disabled={loading || fetching}
                />

                <div className="flex items-center gap-1 shrink-0 bg-black/20 rounded-xl p-1">
                  <button
                    onClick={toggleRecording}
                    disabled={fetching}
                    title={recording ? "Stop recording" : "Start voice input"}
                    className={`relative p-2 rounded-lg transition-colors ${
                      recording
                        ? "text-rose-400 bg-rose-500/20"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 disabled:opacity-50"
                    }`}
                  >
                    {recording ? (
                      <MicOff className="w-[18px] h-[18px]" />
                    ) : (
                      <Mic className="w-[18px] h-[18px]" />
                    )}
                    {recording && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    )}
                  </button>

                  <button
                    onClick={() => sendMessage()}
                    disabled={loading || fetching || !input.trim()}
                    className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                      input.trim() && !loading && !fetching
                        ? "bg-[var(--teal)] hover:bg-[var(--teal-hover)] text-white shadow-sm"
                        : "bg-transparent text-slate-600 cursor-not-allowed"
                    }`}
                  >
                    {loading ? (
                      <Loader2 className="w-[18px] h-[18px] animate-spin" />
                    ) : (
                      <Send className="w-[18px] h-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              {recording && (
                <div className="flex items-center justify-center gap-1.5 py-3 animate-fade-in absolute -top-14 left-1/2 -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-6 shadow-xl w-max">
                  <span className="text-rose-400 text-xs font-medium mr-1 tracking-wide">
                    {t("chat.listening")}
                  </span>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className="waveform-bar h-2.5 bg-rose-400"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ msg, user, index }) {
  const isUser = msg.role === "user";
  const parts = msg.content.split("**");
  const formatted = parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-white drop-shadow-sm">
        {p}
      </strong>
    ) : (
      p
    )
  );

  return (
    <div
      className={`flex gap-4 ${isUser ? "flex-row-reverse" : "flex-row"} animate-fade-in`}
      style={{ animationFillMode: "both" }}
    >
      <div className="shrink-0 mt-1">
        {isUser ? (
          <img
            src={user.photoURL}
            alt=""
            className="w-9 h-9 rounded-full object-cover shadow-sm ring-1 ring-white/10"
          />
        ) : (
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-[var(--bg-sidebar)] border border-[var(--border)] shadow-sm">
            🧠
          </div>
        )}
      </div>
      <div
        className={`max-w-[90%] sm:max-w-[75%] px-5 py-4 text-[15px] leading-relaxed whitespace-pre-wrap shadow-sm ${
          isUser
            ? "bg-[var(--teal)] text-white rounded-2xl rounded-tr-sm"
            : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-main)] rounded-2xl rounded-tl-sm prose-custom"
        }`}
      >
        {formatted}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 bg-[var(--bg-sidebar)] border border-[var(--border)] shadow-sm mt-1">
        🧠
      </div>
      <div className="bg-[var(--bg-card)] border border-[var(--border)] px-6 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center">
        <div className="typing-wave flex gap-1.5 items-center h-2">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
