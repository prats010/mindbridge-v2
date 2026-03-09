import { Callout } from "../../components/docs/Callout";
import { Steps, Step } from "../../components/docs/Steps";

export default function HowItWorks() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>How MindBridge Works</h1>

            <p>
                MindBridge operates at the intersection of modern web technology, generative AI, and clinical psychology frameworks to deliver a seamless support experience.
            </p>

            <h2 id="the-technology">The Technology</h2>
            <p>
                At its core, MindBridge leverages <strong>Google Gemini 2.5 Flash</strong> to drive the conversational interface. We utilize a highly specialized system prompt that restricts Gemini from offering medical advice, forcing it instead into a supportive, empathetic listening mode.
            </p>
            <p>
                We also employ real-time <strong>JavaScript-based Sentiment Analysis</strong> on the client side. Every message you send is scored (from highly negative to highly positive). This data is silently fed into your historical profile, allowing the AI to generate long-term insights without requiring manual mood logging.
            </p>

            <h2 id="conversation-flow">Conversation Flow</h2>
            <p>The standard user journey designed to keep you safe and supported is simple:</p>

            <Steps>
                <Step number="1" title="Sign in with Google">
                    Authentication is handled securely via Firebase. We only store your basic profile information (Name and Email) to personalize your experience.
                </Step>
                <Step number="2" title="Add a Trusted Contact">
                    Before you can chat, MindBridge requires you to input a Trusted Contact. This is a crucial safety mechanism; if you ever express thoughts of self-harm, this contact is immediately presented to you.
                </Step>
                <Step number="3" title="Chat with MindBridge AI">
                    Talk freely. The AI remembers the context of your current conversation and uses your past sentiment scores to understand your baseline mood.
                </Step>
                <Step number="4" title="Take Clinical Assessments">
                    Periodically navigate to the Assessments tab to take the PHQ-9 or GAD-7. The results are saved to your profile and interpreted by Gemini.
                </Step>
                <Step number="5" title="Review Insights on Dashboard">
                    Visit the Dashboard to see your 14-day mood trend, your assessment history, and tap the "Generate AI Insights" button for a comprehensive weekly psychological review.
                </Step>
            </Steps>

            <h2 id="data-and-privacy">Data & Privacy</h2>
            <p>
                We understand that mental health data is highly sensitive. MindBridge is built with zero-trust architecture using Firebase Firestore Security Rules.
            </p>
            <Callout type="success" title="Your Data is Yours">
                Your chat logs, assessment scores, and mood entries are tied strictly to your authenticated UID. Not even database administrators can query your data without your explicit permission. We <strong>never</strong> sell or share your conversational data with third-party advertisers.
            </Callout>
        </>
    );
}
