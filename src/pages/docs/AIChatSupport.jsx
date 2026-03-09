import { Callout } from "../../components/docs/Callout";
import { CodeBlock } from "../../components/docs/CodeBlock";

export default function AIChatSupport() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>AI Chat Support</h1>

            <p>
                The core of MindBridge is our conversational AI assistant, powered by Google Gemini 2.5 Flash. It is fundamentally different from standard chatbots because of its highly specific system prompt and local sentiment tracking.
            </p>

            <h2 id="how-the-chat-works">How the Chat Works</h2>
            <p>
                When you send a message, it is packaged alongside your last 30 messages (to maintain context) and sent directly to Gemini. However, before the AI generates a single word, it references an invisible "System Prompt":
            </p>

            <CodeBlock
                language="javascript"
                code={`// The strict psychological guardrails placed on Gemini
const SYSTEM_PROMPT = \`
You are MindBridge, an empathetic, non-judgmental mental health companion.
1. NEVER offer clinical advice, diagnoses, or medication recommendations.
2. If the user mentions self-harm, immediately prepend your response with [CRISIS].
3. Validate emotions before offering coping mechanisms.
4. Keep responses conversational, concise, and grounded in DBT/CBT principles.
\`;`}
            />

            <h2 id="sentiment-analysis">Sentiment Analysis</h2>
            <p>
                We run a pure-JavaScript sentiment scoring algorithm locally in your browser before the message even hits our servers.
                Words like "exhausted," "hopeless," and "angry" lower the score, while words like "excited," "calm," and "better" raise it.
                This score is saved alongside the encrypted message in Firebase, feeding into your Dashboard insights.
            </p>

            <h2 id="crisis-detection">Crisis Detection</h2>
            <p>
                Safety is non-negotiable. We employ a dual-layered crisis detection mechanism:
            </p>
            <ol>
                <li><strong>Local Keyword Matching:</strong> If you type high-risk keywords ("kill myself", "want to die", "end it"), the UI intercepts the message immediately and throws the <em>CrisisModal</em> blocking overlay.</li>
                <li><strong>AI Contextual Matching:</strong> If the AI infers suicidal ideation contextually (even without specific trigger words), it prepends the hidden <code>[CRISIS]</code> tag to its response, which also triggers the safety overlay.</li>
            </ol>

            <Callout type="danger" title="The Crisis Overlay">
                The Crisis Overlay locks the screen, displays your Trusted Contact's phone number, and provides quick-tap links to national Indian suicide helplines (like iCall and Vandrevala Foundation).
            </Callout>

            <h2 id="conversation-history">Conversation History</h2>
            <p>
                Every time you chat, your messages are securely appended to your private Firebase Cloud Firestore document. They are tied directly to your Google Identity UID. Loading the app pulls the last 30 days of context so the AI remembers what you were struggling with yesterday.
            </p>

            <h2 id="voice-mode">Voice Mode</h2>
            <p>
                Sometimes typing is too much. You can tap the Microphone icon to speak into your device. We use the browser's native Web Speech API to transcribe your voice instantly, and the Speech Synthesis API to speak the AI's responses back in a calming voice. Read more on the <a href="/docs/voice-mode" className="text-teal-400">Voice Mode page</a>.
            </p>
        </>
    );
}
