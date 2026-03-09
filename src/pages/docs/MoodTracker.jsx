import { Callout } from "../../components/docs/Callout";

export default function MoodTracker() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Mood Tracker</h1>

            <p>
                Emotions are fluid. Keeping track of them is a highly effective cognitive-behavioral technique to identify triggers, validate feelings, and measure the effectiveness of new habits or medications.
            </p>

            <h2 id="logging-your-mood">Logging your mood</h2>
            <p>
                You can log your mood manually from the <strong>Dashboard</strong> page.
                MindBridge provides a simple 1-10 slider where 1 represents "Extremely Low" and 10 represents "Extremely High/Positive".
            </p>
            <p>
                We encourage you to use the optional text area underneath the slider to briefly describe <em>why</em> you feel the way you do. "Got 8 hours of sleep!" or "Struggling with a deadline at work" adds vital context to your score.
            </p>

            <Callout type="info" title="Micro-Logging">
                You don't just have to log manually. MindBridge also runs JavaScript sentiment analysis on your Chat Support messages. If you tell the bot you're having an awful day, that sentiment is subtly factored into your overarching mood profile.
            </Callout>

            <h2 id="reading-your-chart">Reading your mood chart</h2>
            <p>
                The Dashboard visualizes your exact mood trajectory over the last 14 days using a clean line graph.
            </p>
            <ul>
                <li><strong>X-Axis:</strong> The date of the log.</li>
                <li><strong>Y-Axis:</strong> Your 1-10 score.</li>
                <li><strong>Baseline (5.0):</strong> We draw a subtle mid-line across the graph. Consistently staying below this line for weeks may correlate with depressive symptoms and should encourage you to take a PHQ-9 screening.</li>
            </ul>

            <h2 id="ai-usage">How AI uses your mood data</h2>
            <p>
                Your mood chart is not just a passive display. When you click the "Generate AI Insights" button, Gemini 2.5 Flash analyzes the slope, variance, and notes of your mood data alongside your clinical assessments to provide a comprehensive weekly report.
            </p>
        </>
    );
}
