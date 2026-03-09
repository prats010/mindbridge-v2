// src/pages/ChatPage.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { Send, Mic, MicOff, Volume2, VolumeX, Loader2, Menu } from "lucide-react";
import { createSession, getSessions, getSessionMessages, updateSessionPreview, saveMessage } from "../firebase";
import { sendToGemini, detectCrisis } from "../gemini";
import { analyzeSentiment } from "../sentiment";

const WELCOME = {
  role: "assistant",
  content: "Hi there 👋 I'm **MindBridge**, your personal wellness companion.\n\nI'm here to listen without judgment. How are you feeling today?",
};

// ── Helpers ──
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
  if (typeof timestamp.toDate === 'function') {
    date = timestamp.toDate();
  } else if (typeof timestamp.toMillis === 'function') {
    date = new Date(timestamp.toMillis());
  } else {
    date = new Date(timestamp);
  }

  if (isNaN(date.getTime())) return "Just now";

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (date.getTime() >= todayStart - 86400000) { // Today or Yesterday
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function groupSessions(sessions) {
  const groups = {
    "Today": [],
    "Yesterday": [],
    "Last 7 days": [],
    "This month": [],
    "Older": []
  };

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yesterdayStart = todayStart - 86400000;
  const last7DaysStart = todayStart - 7 * 86400000;
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

  sessions.forEach(s => {
    let t = s.createdAt?.toMillis ? s.createdAt.toMillis() : Date.now();
    if (t >= todayStart) groups["Today"].push(s);
    else if (t >= yesterdayStart) groups["Yesterday"].push(s);
    else if (t >= last7DaysStart) groups["Last 7 days"].push(s);
    else if (t >= thisMonthStart) groups["This month"].push(s);
    else groups["Older"].push(s);
  });
  return groups;
}

// ── Main Component ──
export default function ChatPage({ user, onCrisis }) {
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);

  const [messages, setMessages] = useState([WELCOME]);
  const [geminiHistory, setGeminiHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false); // for messages in active session
  const [recording, setRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [voiceTooltip, setVoiceTooltip] = useState("");
  const bottomRef = useRef(null);
  const recognRef = useRef(null);
  const sendMsgRef = useRef(null);

  // Load Sessions on mount
  useEffect(() => {
    (async () => {
      try {
        const historySessions = await getSessions(user.uid);

        // Find today's session
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const todaysSession = historySessions.find(s => {
          const t = s.createdAt?.toMillis ? s.createdAt.toMillis() : Date.now();
          return t >= todayStart;
        });

        let activeId = null;
        if (todaysSession) {
          activeId = todaysSession.id;
          setSessions(historySessions);
        } else {
          activeId = await createSession(user.uid);
          const newSession = { id: activeId, createdAt: { toMillis: () => Date.now(), toDate: () => new Date() }, firstMessage: "New Chat", messageCount: 0 };
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
    if (window.innerWidth < 768) setSidebarOpen(false);
    try {
      const newId = await createSession(user.uid);
      const newSession = { id: newId, createdAt: { toMillis: () => Date.now(), toDate: () => new Date() }, firstMessage: "New Chat", messageCount: 0 };
      setSessions(prev => [newSession, ...prev]);
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

  const sendMessage = useCallback(async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading || !activeSessionId) return;

    setInput("");
    const isFirstMessage = messages.length <= 1;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    if (detectCrisis(text)) onCrisis();

    try {
      if (isFirstMessage) {
        const preview = text.length > 35 ? text.substring(0, 35) + "..." : text;
        await updateSessionPreview(user.uid, activeSessionId, preview, 2);
        setSessions(prev => prev.map(s => s.id === activeSessionId ? { ...s, firstMessage: preview, messageCount: 2 } : s));
      }

      const aiText = await sendToGemini(geminiHistory, text);
      if (aiText.includes("[CRISIS]")) onCrisis();
      const cleanText = aiText.replace("[CRISIS]", "").trim();

      const { score } = analyzeSentiment(text);
      setMessages((prev) => [...prev, { role: "assistant", content: cleanText }]);
      setGeminiHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text }] },
        { role: "model", parts: [{ text: cleanText }] },
      ]);

      if (voiceEnabled) speakText(cleanText);

      await saveMessage(user.uid, activeSessionId, "user", text, score);
      await saveMessage(user.uid, activeSessionId, "assistant", cleanText, 0);

    } catch (err) {
      console.error("Gemini error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I had trouble responding. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, geminiHistory, voiceEnabled, user.uid, onCrisis, activeSessionId, messages.length]);

  useEffect(() => { sendMsgRef.current = sendMessage; }, [sendMessage]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const toggleRecording = () => {
    if (!hasSpeechRecognition) {
      setVoiceTooltip("Voice input not supported in this browser. Try Chrome.");
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
      setVoiceTooltip("Speech synthesis not supported in this browser.");
      setTimeout(() => setVoiceTooltip(""), 3000);
      return;
    }
    if (voiceEnabled) window.speechSynthesis.cancel();
    setVoiceEnabled((v) => !v);
  };

  const groupedSessions = groupSessions(sessions);

  return (
    <div className="flex h-full w-full relative overflow-hidden bg-[var(--bg-dark)]">

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* History Sidebar */}
      <div className={`absolute md:relative z-40 h-full w-[260px] shrink-0 bg-[#0D1117] border-r border-[#1A1F2E] flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="p-4 border-b border-[#1A1F2E] shrink-0">
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-teal-500/30 bg-teal-500/5 hover:border-teal-500 hover:bg-teal-500/10 text-teal-400 text-[14px] font-medium transition-all shadow-sm transform hover:scale-[1.02]"
          >
            New Chat +
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-7 scroll-smooth">
          {sessionLoading ? (
            <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-teal-500" /></div>
          ) : (
            Object.entries(groupedSessions).map(([label, groupItems]) => {
              if (groupItems.length === 0) return null;
              return (
                <div key={label} className="animate-fade-in" style={{ animationTimingFunction: 'ease-out' }}>
                  <h3 className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-2 px-2">{label}</h3>
                  <div className="space-y-0.5">
                    {groupItems.map((s, idx) => {
                      const isActive = s.id === activeSessionId;
                      return (
                        <button
                          key={s.id}
                          onClick={() => loadSessionChat(s.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex flex-col gap-1 transition-all duration-150 relative group
                            ${isActive ? 'bg-[#1A1F2E]/80 text-white' : 'text-slate-300 hover:bg-[#1A1F2E] hover:text-white'}
                          `}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-teal-500 rounded-r-full shadow-[0_0_8px_rgba(13,148,136,0.6)]" />}
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

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 relative">
        <div className="flex-1 flex flex-col h-full w-full max-w-[800px] mx-auto px-4 sm:px-8 relative">

          {/* Header */}
          <div className="pt-6 pb-5 border-b border-[var(--border)] mb-4 shrink-0 flex items-center gap-3">
            <button
              className="md:hidden p-2 -ml-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--text-main)] tracking-tight flex items-center gap-2">
                MindBridge Chat
                {fetching && <Loader2 className="w-4 h-4 animate-spin text-teal-500 ml-2" />}
              </h1>
              <p className="text-[var(--text-muted)] mt-1 hidden sm:block">Your secure, AI-powered wellness space.</p>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto space-y-6 sm:space-y-8 mb-4 min-h-0 pr-1 sm:pr-2 pb-4 scroll-smooth">
            {!fetching && messages.map((msg, i) => (
              <Bubble key={i} msg={msg} user={user} index={i} />
            ))}
            {loading && <TypingIndicator />}
            <div ref={bottomRef} className="h-4" />
          </div>

          {/* Modern Input Panel */}
          <div className="sticky bottom-0 bg-[var(--bg-dark)]/90 backdrop-blur-xl border-t border-[var(--border)] -mx-4 sm:-mx-8 px-4 sm:px-8 pt-4 pb-4 z-10 shrink-0">
            <div className="relative max-w-[800px] mx-auto">
              {voiceTooltip && (
                <div className="absolute -top-12 left-0 right-0 text-center text-xs text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-lg py-2 px-3 mx-auto max-w-sm animate-fade-in shadow-xl backdrop-blur-md">
                  {voiceTooltip}
                </div>
              )}

              <div className="flex items-end gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-2 shadow-sm focus-within:border-[var(--teal)]/50 focus-within:ring-1 focus-within:ring-[var(--teal)]/20 transition-all duration-300">
                {/* Voice output toggle */}
                <button
                  onClick={toggleVoiceOutput}
                  title={voiceEnabled ? "Mute AI voice" : "Enable AI voice"}
                  className={`p-2.5 rounded-xl transition-colors shrink-0
                    ${voiceEnabled
                      ? "text-teal-400 bg-teal-500/10 hover:bg-teal-500/20"
                      : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/60"}`}
                >
                  {voiceEnabled ? <Volume2 className="w-[18px] h-[18px]" /> : <VolumeX className="w-[18px] h-[18px]" />}
                </button>

                {/* Text area */}
                <textarea
                  className="flex-1 text-[var(--text-main)] placeholder-[var(--text-muted)]/70 bg-transparent resize-none text-[15px] leading-relaxed px-2 py-3 focus:outline-none max-h-32"
                  placeholder="Share how you're feeling…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  rows={1}
                  disabled={loading || fetching}
                />

                {/* Mic & Send Container */}
                <div className="flex items-center gap-1 shrink-0 bg-black/20 rounded-xl p-1">
                  <button
                    onClick={toggleRecording}
                    disabled={fetching}
                    title={recording ? "Stop recording" : "Start voice input"}
                    className={`relative p-2 rounded-lg transition-colors
                      ${recording
                        ? "text-rose-400 bg-rose-500/20"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 disabled:opacity-50"
                      }`}
                  >
                    {recording ? <MicOff className="w-[18px] h-[18px]" /> : <Mic className="w-[18px] h-[18px]" />}
                    {recording && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    )}
                  </button>

                  <button
                    onClick={() => sendMessage()}
                    disabled={loading || fetching || !input.trim()}
                    className={`p-2 rounded-lg transition-all flex items-center justify-center
                      ${input.trim() && !loading && !fetching
                        ? "bg-[var(--teal)] hover:bg-[var(--teal-hover)] text-white shadow-sm"
                        : "bg-transparent text-slate-600 cursor-not-allowed"
                      }`}
                  >
                    {loading ? <Loader2 className="w-[18px] h-[18px] animate-spin" /> : <Send className="w-[18px] h-[18px]" />}
                  </button>
                </div>
              </div>

              {recording && (
                <div className="flex items-center justify-center gap-1.5 py-3 animate-fade-in absolute -top-14 left-1/2 -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-6 shadow-xl w-max">
                  <span className="text-rose-400 text-xs font-medium mr-1 tracking-wide">Listening</span>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="waveform-bar h-2.5 bg-rose-400" style={{ animationDelay: `${i * 0.15}s` }} />
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

// ── Bubble ──
function Bubble({ msg, user, index }) {
  const isUser = msg.role === "user";
  const parts = msg.content.split("**");
  const formatted = parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-white drop-shadow-sm">{p}</strong> : p
  );

  return (
    <div className={`flex gap-4 ${isUser ? "flex-row-reverse" : "flex-row"} animate-fade-in`} style={{ animationFillMode: "both" }}>
      {/* Avatar */}
      <div className="shrink-0 mt-1">
        {isUser
          ? <img src={user.photoURL} alt="" className="w-9 h-9 rounded-full object-cover shadow-sm ring-1 ring-white/10" />
          : (
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-[var(--bg-sidebar)] border border-[var(--border)] shadow-sm">
              🧠
            </div>
          )
        }
      </div>

      {/* Bubble Content */}
      <div
        className={`max-w-[90%] sm:max-w-[75%] px-5 py-4 text-[15px] leading-relaxed whitespace-pre-wrap shadow-sm
          ${isUser
            ? "bg-[var(--teal)] text-white rounded-2xl rounded-tr-sm"
            : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-main)] rounded-2xl rounded-tl-sm prose-custom"
          }`}
      >
        {formatted}
      </div>
    </div>
  );
}

// ── Typing Indicator ──
function TypingIndicator() {
  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 bg-[var(--bg-sidebar)] border border-[var(--border)] shadow-sm mt-1">
        🧠
      </div>
      <div className="bg-[var(--bg-card)] border border-[var(--border)] px-6 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center">
        <div className="typing-wave flex gap-1.5 items-center h-2">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}
