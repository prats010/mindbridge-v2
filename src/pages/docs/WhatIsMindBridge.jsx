import { Callout } from "../../components/docs/Callout";

export default function WhatIsMindBridge() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>What is MindBridge?</h1>

            <p>
                MindBridge is an intelligent, accessible mental health companion built to bridge the gap between people in distress and the psychological support they need. Powered by Google Gemini AI, MindBridge offers a private, non-judgmental space to express your feelings, track your mood, and take scientifically validated mental health screenings.
            </p>

            <Callout type="warning" title="Not a Replacement for Professional Care">
                MindBridge is designed to provide immediate support, emotional tracking, and self-guided screening. It is <strong>not</strong> a substitute for a licensed therapist, psychiatrist, or medical professional. If you are experiencing a severe mental health crisis, please reach out to emergency services immediately.
            </Callout>

            <h2 id="core-capabilities">Core Capabilities</h2>
            <p>MindBridge was built with a comprehensive toolkit designed to foster mental well-being:</p>

            <ul>
                <li><strong>AI Chat Support:</strong> Talk naturally about your day, your stress, or your anxieties. The Gemini-powered assistant is fine-tuned to listen with empathy and offer grounding techniques without rushing to "solve" your problems.</li>
                <li><strong>Clinical Screenings:</strong> Take the PHQ-9 (Depression) and GAD-7 (Anxiety) assessments directly in the app.</li>
                <li><strong>AI Score Interpretation:</strong> Instead of leaving you with just a number, Gemini analyzes your assessment scores and provides tailored coping strategies.</li>
                <li><strong>Daily Mood Tracker:</strong> Keep a record of your daily emotional state to identify triggers and trends over time.</li>
                <li><strong>Crisis Detection:</strong> Built-in safeguards instantly detect phrases related to self-harm and automatically present the user with a pre-configured Trusted Contact and national crisis hotlines.</li>
                <li><strong>Voice Interaction:</strong> Speak your thoughts aloud using the Web Speech API, and listen to the AI's responses for a completely hands-free, conversational experience.</li>
            </ul>

            <h2 id="who-is-it-for">Who is it for?</h2>
            <p>
                MindBridge is designed for anyone navigating the complexities of modern life. Whether you are a student facing exam pressure, a working professional dealing with burnout, or simply someone going through a tough week, MindBridge provides a safe, anonymous outlet. We built this specifically keeping in mind the 150+ million people in India requiring mental health care interventions who currently lack access.
            </p>

            <h2 id="what-mindbridge-is-not">What MindBridge is NOT</h2>
            <Callout type="danger" title="Important Limitations">
                <ul className="mt-2 mb-0 border-none pl-4 space-y-1">
                    <li><strong>Not a therapist:</strong> MindBridge cannot build a long-term clinical treatment plan.</li>
                    <li><strong>Not for emergencies:</strong> The AI cannot dispatch emergency services to your location.</li>
                    <li><strong>Not a diagnostic tool:</strong> The PHQ-9 and GAD-7 screenings are indicative, not definitive medical diagnoses.</li>
                </ul>
            </Callout>
        </>
    );
}
