import { Steps, Step } from "../../components/docs/Steps";
import { CodeBlock } from "../../components/docs/CodeBlock";

export default function QuickStart() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Quick Start Guide</h1>

            <p>
                Ready to get started with MindBridge? Follow these simple steps to set up your account and begin your wellness journey.
            </p>

            <Steps>
                <Step number="1" title="Open the App">
                    Navigate to the main application by clicking the "Try MindBridge" button in the top right, or going directly to the root domain.
                </Step>

                <Step number="2" title="Sign in Securely">
                    Click the "Continue with Google" button. You will be redirected to Google's secure authentication flow.
                </Step>

                <Step number="3" title="Configure Emergency Safety">
                    Upon your first login, a modal will appear requesting a Trusted Contact. This cannot be skipped.
                    <CodeBlock
                        language="text"
                        code={`Name: Jane Doe\nPhone: +91 98765 43210\nRelationship: Sister`}
                    />
                    This information is encrypted and only shown back to you if the AI detects a crisis.
                </Step>

                <Step number="4" title="Start Your First Chat">
                    You'll be dropped immediately into the chat interface. Try saying something natural:
                    <CodeBlock
                        language="text"
                        code={`"I have a massive presentation tomorrow and my chest feels tight."`}
                    />
                    Notice how the AI responds with validating statements rather than just generic advice.
                </Step>

                <Step number="5" title="Establish a Baseline">
                    Head over to the <strong>Assessments</strong> tab on the left sidebar and take the PHQ-9. This establishes a baseline for your psychological profile, allowing your AI Insights dashboard to track your progress accurately over the coming weeks.
                </Step>
            </Steps>

            <div className="mt-8 p-6 bg-[#1E293B] rounded-xl border border-[#1F2937] text-center">
                <h3 className="text-white font-semibold text-lg mb-2">Ready to explore?</h3>
                <p className="text-slate-400 text-sm mb-4">Read about our specific features in the next section.</p>
            </div>
        </>
    );
}
