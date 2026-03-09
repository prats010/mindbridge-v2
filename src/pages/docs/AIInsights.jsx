import { Steps, Step } from "../../components/docs/Steps";
import { Badge } from "../../components/docs/Badge";

export default function AIInsights() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>AI Insights Dashboard <Badge type="ai">Powered by Gemini</Badge></h1>

            <p>
                The AI Insights feature is the analytical brain of MindBridge. Instead of leaving you to interpret raw graphs and assessment scores by yourself, MindBridge uses Google Gemini to synthesize your data into a clear, actionable weekly psychological report.
            </p>

            <h2 id="what-are-ai-insights">What are AI Insights?</h2>
            <p>
                Unlike the Chat Support feature (which is tactical and immediate), AI Insights is strategic to your mental well-being over time. It reviews your data and searches for patterns you might have missed.
            </p>

            <h2 id="how-insights-are-generated">How insights are generated</h2>
            <Steps>
                <Step number="1" title="Data Aggregation">
                    MindBridge fetches your last 14 days of mood logs, text-sentiment logs, and your 3 most recent clinical assessments (PHQ-9 and GAD-7) from secure Firebase storage.
                </Step>
                <Step number="2" title="Format and Payload construction">
                    This raw data is simplified and securely bundled into a JSON payload. Personal identifiers (like your exact messages) are heavily limited in this contextual payload.
                </Step>
                <Step number="3" title="Gemini 2.5 Analysis">
                    The payload is sent to Google Gemini 2.5 Flash with a strict medical-grade system prompt guiding the model to act as a psychological analyst, writing a structured Markdown report highlighting variances and suggesting CBT/DBT frameworks.
                </Step>
            </Steps>

            <h2 id="understanding-your-report">Understanding your report</h2>
            <p>
                The generated report is heavily structured so it is easy to read. You will typically see:
            </p>
            <ul>
                <li><strong>Observed Patterns:</strong> "Your mood tends to dip significantly on Thursdays, correlating with your notes about weekly sprint deadlines."</li>
                <li><strong>Assessment Context:</strong> "Your recent GAD-7 score moved from 12 (Moderate) to 8 (Mild) over the last three weeks, indicating a positive trend in anxiety management."</li>
                <li><strong>Action Plan:</strong> A short, bulleted list of immediate, low-friction coping strategies (like 5-4-3-2-1 grounding) specifically targeted at the negative emotions you've charted recently.</li>
                <li><strong>Focus Area:</strong> One primary mental health goal for you to work on for the upcoming week.</li>
            </ul>
        </>
    );
}
