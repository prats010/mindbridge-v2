// src/pages/AssessmentPage.jsx
import { useState } from "react";
import { saveAssessment } from "../firebase";
import { interpretAssessment } from "../gemini";
import { Loader2 } from "lucide-react";

const PHQ9 = [
  "Little interest or pleasure in doing things?",
  "Feeling down, depressed, or hopeless?",
  "Trouble falling/staying asleep, or sleeping too much?",
  "Feeling tired or having little energy?",
  "Poor appetite or overeating?",
  "Feeling bad about yourself or that you are a failure?",
  "Trouble concentrating on things?",
  "Moving/speaking so slowly others noticed, or being fidgety/restless?",
  "Thoughts that you'd be better off dead or of hurting yourself?",
];

const GAD7 = [
  "Feeling nervous, anxious, or on edge?",
  "Not being able to stop or control worrying?",
  "Worrying too much about different things?",
  "Trouble relaxing?",
  "Being so restless it's hard to sit still?",
  "Becoming easily annoyed or irritable?",
  "Feeling afraid as if something awful might happen?",
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

function getSeverity(type, score) {
  if (type === "phq9") {
    if (score <= 4) return { label: "Minimal", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", ring: "#34d399" };
    if (score <= 9) return { label: "Mild", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", ring: "#facc15" };
    if (score <= 14) return { label: "Moderate", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", ring: "#fb923c" };
    if (score <= 19) return { label: "Moderately Severe", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20", ring: "#fb7185" };
    return { label: "Severe", color: "text-red-500", bg: "bg-red-500/10 border-red-500/20", ring: "#ef4444" };
  } else {
    if (score <= 4) return { label: "Minimal Anxiety", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", ring: "#34d399" };
    if (score <= 9) return { label: "Mild Anxiety", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", ring: "#facc15" };
    if (score <= 14) return { label: "Moderate Anxiety", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", ring: "#fb923c" };
    return { label: "Severe Anxiety", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", ring: "#ef4444" };
  }
}

export default function AssessmentPage({ user }) {
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = test === "phq9" ? PHQ9 : GAD7;
  const maxScore = test === "phq9" ? 27 : 21;
  const answered = answers.filter((a) => a !== undefined).length;

  const start = (type) => {
    setTest(type);
    setAnswers(new Array(type === "phq9" ? 9 : 7).fill(undefined));
    setResult(null);
  };

  const submit = async () => {
    if (answers.includes(undefined)) { alert("Please answer all questions."); return; }
    setLoading(true);
    try {
      const total = answers.reduce((s, a) => s + a, 0);
      const sev = getSeverity(test, total);
      const name = user.displayName?.split(" ")[0] ?? "there";

      saveAssessment(user.uid, test, answers, total, sev.label).catch((e) =>
        console.error("saveAssessment failed:", e)
      );

      let ai = {
        interpretation: `Thank you for completing this assessment, ${name}. Your score of ${total} indicates ${sev.label}. These results can be a helpful starting point for conversations with a mental health professional.`,
        tips: [
          "Practice slow, deep breathing for 5 minutes when you feel overwhelmed",
          "Keep a short daily mood journal to spot patterns early",
          "Reach out to one trusted person this week to share how you're feeling",
        ],
      };

      try {
        const geminiResult = await interpretAssessment(test, total, sev.label, name);
        if (geminiResult?.interpretation) ai = geminiResult;
      } catch (geminiErr) {
        console.error("interpretAssessment failed, using fallback:", geminiErr);
      }

      setResult({
        total,
        sev,
        interpretation: ai.interpretation,
        tips: ai.tips,
        crisis: test === "phq9" && answers[8] > 0,
      });
    } catch (err) {
      console.error("Assessment submission error:", err);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Selector ────────────────────────────────────────────────────
  if (!test) return (
    <div className="flex-1 w-full max-w-[800px] mx-auto animate-fade-in relative pb-12">
      <div className="pb-6 border-b border-[var(--border)] mb-8">
        <h1 className="text-3xl font-semibold text-[var(--text-main)] tracking-tight">Assessments</h1>
        <p className="text-[14px] mt-2 text-[var(--text-muted)] max-w-lg leading-relaxed">Scientifically validated screening tools to understand your well-being. These tests take only a few minutes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { type: "phq9", emoji: "😔", title: "PHQ-9", sub: "Depression Screening", desc: "9 questions about the past 2 weeks. Takes ~2 minutes." },
          { type: "gad7", emoji: "😰", title: "GAD-7", sub: "Anxiety Screening", desc: "7 questions about the past 2 weeks. Takes ~1 minute." },
        ].map((c) => (
          <button key={c.type} onClick={() => start(c.type)}
            className="text-left bg-[var(--bg-card)] border border-[var(--border)] hover:border-slate-600/60 rounded-2xl p-7 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-teal-500/40 group-hover:to-indigo-500/40 transition-all duration-500"></div>
            <div className="text-4xl mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 transform origin-left">{c.emoji}</div>
            <div className="text-[var(--text-main)] font-semibold text-xl mb-1">{c.title}</div>
            <div className="text-teal-400 text-[13px] font-medium mb-3 tracking-wide">{c.sub}</div>
            <div className="text-[14px] text-[var(--text-muted)] leading-relaxed">{c.desc}</div>
          </button>
        ))}
      </div>
      <p className="text-[13px] mt-10 text-slate-500 px-2">
        <strong className="font-semibold text-slate-400">Note:</strong> These tools are for screening only and do not constitute a clinical diagnosis. Always consult a healthcare professional.
      </p>
    </div>
  );

  // ── Result ───────────────────────────────────────────────────────
  if (result) {
    return (
      <div className="flex-1 w-full max-w-[800px] animate-fade-in mx-auto mt-4 pb-12">
        {result.crisis && (
          <div className="rounded-2xl p-6 mb-8 text-center bg-rose-500/10 border border-rose-500/20 shadow-sm animate-fade-in">
            <p className="text-rose-400 font-bold mb-2">⚠️ Please reach out for support</p>
            <p className="text-rose-200/80 text-[14px] mb-4">Your response suggests you may be having thoughts of self-harm. Help is available.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[14px]">
              <a href="tel:9152987821" className="bg-rose-500 hover:bg-rose-400 text-white font-medium px-4 py-2 rounded-lg transition-colors">Call iCall: 9152987821</a>
              <a href="tel:18602662345" className="bg-rose-500 hover:bg-rose-400 text-white font-medium px-4 py-2 rounded-lg transition-colors">Call Vandrevala: 1860-2662-345</a>
            </div>
          </div>
        )}

        {/* Score card */}
        <div className={`border rounded-2xl p-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-8 ${result.sev.bg} shadow-sm relative overflow-hidden`}>
          <div className="absolute top-0 left-0 w-2 h-full bg-current opacity-20"></div>
          <div className="pl-4">
            <span className="text-slate-400 text-[12px] font-semibold uppercase tracking-widest">{test?.toUpperCase()} Score</span>
            <div className={`text-4xl font-bold mt-2 ${result.sev.color} tracking-tight`}>{result.sev.label}</div>
          </div>
          <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
            <svg width="112" height="112" viewBox="0 0 100 100" className="-rotate-90 absolute inset-0">
              <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
              <circle
                cx="50" cy="50" r="44"
                fill="none" stroke={result.sev.ring} strokeWidth="6" strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 44}
                strokeDashoffset={2 * Math.PI * 44}
                className="ring-progress drop-shadow-md"
                style={{ "--target-offset": 2 * Math.PI * 44 * (1 - result.total / maxScore) }}
              />
            </svg>
            <div className="relative z-10 text-center flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-100 leading-none">{result.total}</span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-widest mt-1">/{maxScore}</span>
            </div>
          </div>
        </div>

        {/* AI Interpretation */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 mb-6 shadow-sm">
          <h3 className="text-[16px] font-semibold text-[var(--text-main)] mb-4">MindBridge Analysis</h3>
          <p className="text-slate-300 text-[15px] leading-[1.7] whitespace-pre-wrap prose-custom">{result.interpretation}</p>
        </div>

        {/* Coping tips */}
        {result.tips?.length > 0 && (
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 mb-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-500/50"></div>
            <h3 className="text-[16px] font-semibold text-[var(--text-main)] mb-5">Recommended Strategies</h3>
            <ul className="space-y-4">
              {result.tips.map((t, i) => (
                <li key={i} className="flex gap-4 text-[14px] text-slate-300 leading-relaxed items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-4">
          <button onClick={() => setTest(null)}
            className="flex-1 py-3 rounded-xl text-[14px] font-medium transition-colors bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-main)] hover:bg-[var(--bg-hover)] shadow-sm">
            Take another test
          </button>
        </div>
      </div>
    );
  }

  // ── Questions ────────────────────────────────────────────────────
  return (
    <div className="flex-1 w-full max-w-[800px] mx-auto animate-fade-in pb-12">
      <div className="pb-6 border-b border-[var(--border)] mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-[var(--text-main)] tracking-tight">{test?.toUpperCase()}</h2>
          <p className="text-[14px] mt-2 text-[var(--text-muted)]">Over the last 2 weeks, how often have you been bothered by:</p>
        </div>
        <div className="bg-[var(--bg-sidebar)] border border-[var(--border)] px-4 py-1.5 rounded-lg text-sm font-medium text-[var(--text-main)] flex items-center gap-2 shadow-sm">
          <span className="text-teal-400">{answered}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{questions.length}</span>
        </div>
      </div>

      <div className="w-full h-1.5 bg-slate-800/60 rounded-full mb-10 overflow-hidden shadow-inner">
        <div
          className="h-full transition-all duration-[600ms] ease-out bg-teal-500 rounded-full relative"
          style={{ width: `${(answered / questions.length) * 100}%` }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/20 to-transparent"></div>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-sm transition-opacity duration-300 ${answers[i] !== undefined ? 'opacity-80 hover:opacity-100' : 'opacity-100'}`}>
            <p className="text-[16px] text-[var(--text-main)] font-medium mb-6 leading-relaxed flex items-start gap-4">
              <span className="text-slate-500 font-normal shrink-0 mt-0.5">{i + 1}.</span>
              <span>{q}</span>
            </p>
            {test === "phq9" && i === 8 && (
              <p className="text-[13px] mb-6 text-rose-400 bg-rose-500/10 px-4 py-3 rounded-xl border border-rose-500/20 flex items-center gap-3">
                <span className="text-lg">⚠️</span>
                <span>If you're having thoughts of self-harm, please reach out to <strong className="text-rose-300 underline font-semibold">iCall (9152987821)</strong> immediately.</span>
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {OPTIONS.map((opt) => {
                const selected = answers[i] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => {
                      const updated = [...answers];
                      updated[i] = opt.value;
                      setAnswers(updated);
                    }}
                    className={`py-3 px-4 rounded-xl text-[14px] transition-all duration-200 text-center border font-medium ${selected
                        ? "bg-[var(--teal)] border-[var(--teal)] text-white shadow-md shadow-teal-500/10 scale-[1.02]"
                        : "bg-[var(--bg-sidebar)] border-[var(--border)] text-slate-400 hover:border-slate-500 hover:text-slate-200"
                      }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-4 pt-8 border-t border-[var(--border)]">
        <button onClick={() => setTest(null)}
          className="px-6 py-3 rounded-xl text-[14px] font-medium transition-colors bg-[var(--bg-card)] border border-[var(--border)] text-slate-300 hover:text-white hover:bg-[var(--bg-hover)]">
          Cancel
        </button>
        <button onClick={submit} disabled={loading || answers.includes(undefined)}
          className="flex-1 py-3 flex justify-center items-center gap-2 rounded-xl text-[14px] font-medium text-white transition-all bg-[var(--teal)] hover:bg-[var(--teal-hover)] disabled:opacity-50 disabled:bg-slate-800 disabled:border-slate-700 disabled:text-slate-500 disabled:shadow-none shadow-sm shadow-teal-500/20 hover:shadow-md hover:shadow-teal-500/30">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Assessment"}
        </button>
      </div>
    </div>
  );
}
