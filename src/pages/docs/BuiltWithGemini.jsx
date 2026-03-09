import { Badge } from "../../components/docs/Badge";

export default function BuiltWithGemini() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Built with Google Gemini AI</h1>

            <p>
                MindBridge is completely powered by the Gemini 2.5 Flash model via the official Google Gemini API.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                <Badge type="ai">Gemini 2.5 Flash</Badge>
                <Badge type="free">Free Tier API</Badge>
                <Badge type="primary">JSON Structured Output</Badge>
            </div>

            <h2 id="why-gemini">Why Gemini?</h2>
            <p>
                In building a mental health companion, speed and deep contextual understanding are paramount. <strong>Gemini 2.5 Flash</strong> was selected because it offers incredibly low latency (crucial for real-time text and Voice Mode interactions) while maintaining a massive context window (to seamlessly ingest 14 days of mood logs and assessment data).
            </p>

            <h2 id="how-we-use-gemini">How we use Gemini</h2>
            <p>MindBridge interfaces with the Gemini API in exactly three places:</p>

            <ol>
                <li>
                    <strong>Conversational Chat Support:</strong> The core conversational loop. Gemini parses the user's message, alongside hidden variables representing the user's local sentiment score, and replies maintaining strict character as an empathetic listener.
                </li>
                <li>
                    <strong>Assessment Interpretation:</strong> After a user scores their PHQ-9 or GAD-7, the raw score and severity bracket are passed entirely to Gemini to generate three personalized, real-world coping mechanisms tailored to that exact score level.
                </li>
                <li>
                    <strong>The AI Insights Dashboard:</strong> A massive JSON payload consisting of all the user's recent Firebase documents is sent to Gemini, which is prompted to return a precise Markdown report detailing negative trends and proposing an action plan.
                </li>
            </ol>

            <h2 id="safety-considerations">Safety Considerations</h2>
            <p>
                We do not rely on Gemini to perfectly moderate itself regarding self-harm logic, as LLMs can be bypassed. Instead, we use hardcoded <em>Client-Side String Matching</em> for crisis words (e.g., "kill myself"). However, we also explicitly instruct the Gemini <code>system_instruction</code> to prepend <code>[CRISIS]</code> to any response where it infers the user is at risk.
            </p>
            <p>
                This creates a highly fault-tolerant safety system combining deterministic word matching with AI intent inference.
            </p>
        </>
    );
}
