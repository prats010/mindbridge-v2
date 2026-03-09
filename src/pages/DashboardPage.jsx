// src/pages/DashboardPage.jsx
import { useState, useEffect, useRef } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";
import { loadMoodLogs, loadAssessments, saveMoodLog } from "../firebase";
import { getAIInsights } from "../gemini";
import { Loader2, Sparkles, TrendingUp, NotebookPen } from "lucide-react";
import InsightsModal from "../components/InsightsModal";

export default function DashboardPage({ user }) {
  const [moodLogs, setMoodLogs] = useState([]);
  const [phq9, setPhq9] = useState([]);
  const [gad7, setGad7] = useState([]);
  const [moodScore, setMoodScore] = useState(5);
  const [moodNote, setMoodNote] = useState("");
  const [logging, setLogging] = useState(false);
  const [loading, setLoading] = useState(true);

  // Insights state
  const [showInsights, setShowInsights] = useState(false);
  const [insightsText, setInsightsText] = useState("");
  const [insightsLoading, setInsightsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [logs, p, g] = await Promise.all([
          loadMoodLogs(user.uid, 14),
          loadAssessments(user.uid, "phq9", 5),
          loadAssessments(user.uid, "gad7", 5),
        ]);
        setMoodLogs(logs); setPhq9(p); setGad7(g);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [user.uid]);

  const logMood = async () => {
    setLogging(true);
    try {
      await saveMoodLog(user.uid, moodScore, moodNote);
      const updated = await loadMoodLogs(user.uid, 14);
      setMoodLogs(updated);
      setMoodNote("");
    } catch (err) { console.error(err); }
    setLogging(false);
  };

  const fetchInsights = async () => {
    setShowInsights(true);
    if (insightsText) return;
    setInsightsLoading(true);
    try {
      const [latestLogs, latestPhq9, latestGad7] = await Promise.all([
        loadMoodLogs(user.uid, 14),
        loadAssessments(user.uid, "phq9", 3),
        loadAssessments(user.uid, "gad7", 3),
      ]);
      const text = await getAIInsights(latestLogs, latestPhq9, latestGad7);
      setInsightsText(text);
    } catch (err) {
      console.error(err);
      setInsightsText("Unable to generate insights at this time. Please try again later.");
    } finally {
      setInsightsLoading(false);
    }
  };

  const avgMood = moodLogs.length
    ? (moodLogs.reduce((s, l) => s + l.score, 0) / moodLogs.length).toFixed(1)
    : null;

  if (loading) return (
    <div className="flex-1 flex items-center justify-center">
      <div className="spinner-orbital" />
    </div>
  );

  return (
    <div className="flex-1 w-full max-w-[1000px] mx-auto animate-fade-in relative pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border)] mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-[var(--text-main)] tracking-tight">Dashboard</h1>
          <p className="text-sm mt-1.5 text-[var(--text-muted)]">Track and review your psychological well-being.</p>
        </div>
        <button
          onClick={fetchInsights}
          className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-medium text-white transition-all duration-300 bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-500/10 hover:shadow-md hover:shadow-indigo-500/20"
        >
          <Sparkles className="w-4 h-4 text-indigo-200 group-hover:text-white transition-colors" />
          <span>Generate AI Insights</span>
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:border-slate-700/50 transition-colors group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mt-1">
              <TrendingUp className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-widest px-2 py-1">Overall</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--text-main)] tracking-tight">{avgMood ?? "—"}<span className="text-base font-normal text-slate-500 ml-1">/10</span></div>
            <div className="text-[13px] text-[var(--text-muted)] mt-1.5 font-medium">Avg Mood (14 days)</div>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:border-slate-700/50 transition-colors group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mt-1 text-xl">
              😔
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-widest px-2 py-1">Depression</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--text-main)] tracking-tight">{phq9[0] ? String(phq9[0].totalScore) : "—"}<span className="text-base font-normal text-slate-500 ml-1">{phq9[0] ? "/27" : ""}</span></div>
            <div className="text-[13px] text-[var(--text-muted)] mt-1.5 font-medium">{phq9[0]?.severity ? phq9[0].severity : "Not taken yet"}</div>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:border-slate-700/50 transition-colors group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mt-1 text-xl">
              😰
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-widest px-2 py-1">Anxiety</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[var(--text-main)] tracking-tight">{gad7[0] ? String(gad7[0].totalScore) : "—"}<span className="text-base font-normal text-slate-500 ml-1">{gad7[0] ? "/21" : ""}</span></div>
            <div className="text-[13px] text-[var(--text-muted)] mt-1.5 font-medium">{gad7[0]?.severity ? gad7[0].severity : "Not taken yet"}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Mood Chart */}
        <div className="lg:col-span-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 shadow-sm">
          <h2 className="text-[16px] font-semibold text-[var(--text-main)] mb-1">Mood Trend</h2>
          <p className="text-[13px] text-[var(--text-muted)] mb-8">Daily mood score over the past 14 days</p>
          {moodLogs.length === 0 ? (
            <div className="flex items-center justify-center h-48 border border-dashed border-slate-800 rounded-xl">
              <p className="text-sm text-slate-500">No mood logs yet. Log below to see trends.</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={moodLogs} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="date" tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} dy={15} />
                <YAxis domain={[1, 10]} tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip
                  contentStyle={{ background: "#181A20", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", color: "#F1F5F9", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.4)" }}
                  itemStyle={{ color: "#0d9488", fontWeight: 600 }}
                  labelStyle={{ color: "#94A3B8", marginBottom: "4px", fontSize: "12px" }}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: "4 4" }}
                />
                <ReferenceLine y={5} stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#0d9488"
                  strokeWidth={2.5}
                  dot={{ fill: "#0d9488", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#14b8a6", stroke: "#0D0F14", strokeWidth: 2 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Log Mood Sidebar Panel */}
        <div className="lg:col-span-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <NotebookPen className="w-4 h-4 text-[var(--teal)]" />
            <h2 className="text-[16px] font-semibold text-[var(--text-main)]">Log Today's Mood</h2>
          </div>
          <p className="text-[13px] text-[var(--text-muted)] mb-8 pl-7">How are you feeling right now?</p>

          <div className="mb-8 flex-1">
            <div className="flex justify-between items-center text-xs mb-4 text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">😞 <span>Low</span></span>
              <span className="font-semibold text-lg text-teal-400 bg-teal-500/10 px-4 py-1.5 rounded-lg border border-teal-500/20">{moodScore}/10</span>
              <span className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"><span>High</span> 😄</span>
            </div>
            <input
              type="range" min={1} max={10} value={moodScore}
              onChange={(e) => setMoodScore(Number(e.target.value))}
              className="w-full cursor-pointer accent-teal-500 mb-8 h-1.5 bg-slate-800 rounded-lg appearance-none"
            />
            <div className="relative">
              <textarea
                className="w-full bg-[var(--bg-dark)] text-[var(--text-main)] placeholder-[var(--text-muted)] border border-[var(--border)] rounded-xl px-4 py-3 text-[14px] leading-relaxed resize-none focus:outline-none focus:border-[var(--teal)]/50 focus:ring-1 focus:ring-[var(--teal)]/20 transition-all"
                placeholder="Add an optional note about your day..."
                rows={3}
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={logMood}
            disabled={logging}
            className="w-full py-3 rounded-xl text-[14px] font-semibold text-white transition-all bg-[var(--teal)] hover:bg-[var(--teal-hover)] disabled:opacity-50 disabled:hover:bg-[var(--teal)] flex justify-center items-center gap-2 shadow-sm"
          >
            {logging ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Entry"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* PHQ-9 History */}
        {phq9.length > 0 && (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-[var(--text-main)] mb-6">PHQ-9 History</h2>
            <div className="space-y-5">
              {phq9.map((a, i) => <HistoryRow key={i} a={a} max={27} />)}
            </div>
          </div>
        )}

        {/* GAD-7 History */}
        {gad7.length > 0 && (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-[var(--text-main)] mb-6">GAD-7 History</h2>
            <div className="space-y-5">
              {gad7.map((a, i) => <HistoryRow key={i} a={a} max={21} />)}
            </div>
          </div>
        )}
      </div>

      {/* AI Insights Modal */}
      {showInsights && (
        <InsightsModal
          userId={user.uid}
          text={insightsText}
          loading={insightsLoading}
          onClose={() => setShowInsights(false)}
        />
      )}
    </div>
  );
}

function HistoryRow({ a, max }) {
  const pct = Math.round((a.totalScore / max) * 100);
  const bar = pct <= 33 ? "#10b981" : pct <= 55 ? "#eab308" : pct <= 74 ? "#f97316" : "#ef4444";
  return (
    <div className="flex items-center gap-5 group">
      <div className="text-[12px] font-medium w-16 flex-shrink-0 text-slate-500 group-hover:text-slate-400 transition-colors">{a.date}</div>
      <div className="flex-1">
        <div className="flex justify-between text-[12px] mb-2 font-medium">
          <span className="text-slate-300">{a.severity}</span>
          <span className="text-slate-500">{a.totalScore}<span className="text-slate-600">/{max}</span></span>
        </div>
        <div className="w-full rounded-full h-1.5 bg-slate-800/80 overflow-hidden">
          <div
            className="h-full transition-all duration-700 ease-out rounded-full"
            style={{ width: `${pct}%`, background: bar }}
          />
        </div>
      </div>
    </div>
  );
}
