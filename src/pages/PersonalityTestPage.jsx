import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

// Question definitions using translation keys
const QUESTION_KEYS = [
    {
        key: "personality",
        qKey: "personality.q1",
        optionKeys: ["personality.q1.o1", "personality.q1.o2", "personality.q1.o3"],
    },
    {
        key: "support",
        qKey: "personality.q2",
        optionKeys: ["personality.q2.o1", "personality.q2.o2", "personality.q2.o3", "personality.q2.o4"],
    },
    {
        key: "comfort",
        qKey: "personality.q3",
        optionKeys: ["personality.q3.o1", "personality.q3.o2", "personality.q3.o3", "personality.q3.o4"],
    },
    {
        key: "coping",
        qKey: "personality.q4",
        optionKeys: ["personality.q4.o1", "personality.q4.o2", "personality.q4.o3", "personality.q4.o4"],
    },
    {
        key: "situation",
        qKey: "personality.q5",
        optionKeys: ["personality.q5.o1", "personality.q5.o2", "personality.q5.o3", "personality.q5.o4"],
    },
    {
        key: "tone",
        qKey: "personality.q6",
        optionKeys: ["personality.q6.o1", "personality.q6.o2", "personality.q6.o3", "personality.q6.o4"],
    },
];

export default function PersonalityTestPage({ userId, onDone }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [saving, setSaving] = useState(false);
    const { t } = useLanguage();

    const handleAnswer = async (optionKey) => {
        // Store the translation key so the AI always gets consistent data regardless of language
        const newAnswers = { ...answers, [QUESTION_KEYS[current].key]: optionKey };
        setAnswers(newAnswers);

        if (current < QUESTION_KEYS.length - 1) {
            setCurrent(current + 1);
        } else {
            setSaving(true);
            try {
                const { savePersonality } = await import("../firebase");
                await savePersonality(userId, newAnswers);
            } catch (e) {
                console.error("Personality save failed:", e);
            } finally {
                onDone(newAnswers);
            }
        }
    };

    const progress = (current / QUESTION_KEYS.length) * 100;
    const question = QUESTION_KEYS[current];

    // Build "Question X of Y" string
    const questionLabel = t("personality.questionOf")
        .replace("{n}", current + 1)
        .replace("{total}", QUESTION_KEYS.length);

    return (
        <div className="min-h-screen bg-[#0A0C10] flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                {/* Header */}
                <div className="text-center mb-8 relative">
                    {/* Language selector top-right */}
                    <div className="absolute right-0 top-0">
                        <LanguageSelector variant="navbar" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{t("personality.title")}</div>
                    <p className="text-slate-400 text-sm">
                        {t("personality.sub")}
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8">
                    <div
                        className="bg-teal-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Question card */}
                <div className="bg-[#111318] border border-slate-700/50 rounded-2xl p-8">
                    <div className="text-xs text-teal-400 font-medium mb-3 tracking-wider uppercase">
                        {questionLabel}
                    </div>
                    <h2 className="text-white text-xl font-semibold mb-6 leading-snug">
                        {t(question.qKey)}
                    </h2>
                    <div className="flex flex-col gap-3">
                        {question.optionKeys.map((optKey) => (
                            <button
                                key={optKey}
                                onClick={() => handleAnswer(optKey)}
                                disabled={saving}
                                className="w-full text-left px-5 py-4 rounded-xl border border-slate-700 text-slate-300
                           hover:border-teal-500 hover:text-white hover:bg-teal-500/10
                           transition-all duration-200 text-sm font-medium"
                            >
                                {t(optKey)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skip */}
                <div className="text-center mt-6">
                    <button
                        onClick={() => onDone(null)}
                        className="text-slate-500 text-xs hover:text-slate-400 transition-colors"
                    >
                        {t("personality.skip")}
                    </button>
                </div>
            </div>
        </div>
    );
}