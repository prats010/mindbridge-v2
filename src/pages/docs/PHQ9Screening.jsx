import { Callout } from "../../components/docs/Callout";

export default function PHQ9Screening() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>PHQ-9 Depression Screening</h1>

            <p>
                MindBridge includes a built-in Patient Health Questionnaire (PHQ-9), the gold-standard diagnostic tool used by healthcare professionals worldwide for screening, diagnosing, monitoring and measuring the severity of depression.
            </p>

            <h2 id="what-is-phq-9">What is the PHQ-9?</h2>
            <p>
                The PHQ-9 is a 9-question instrument given to patients in a primary care setting to screen for the presence and severity of depression. It asks you to reflect on the last two weeks and rate how often you've been bothered by specific problems, such as:
            </p>
            <ul>
                <li>Little interest or pleasure in doing things</li>
                <li>Feeling down, depressed, or hopeless</li>
                <li>Trouble falling or staying asleep, or sleeping too much</li>
                <li>Feeling tired or having little energy</li>
            </ul>

            <h2 id="how-to-interpret">How to interpret your score</h2>
            <p>
                Each of the 9 questions is scored from 0 (Not at all) to 3 (Nearly every day). The total score ranges from 0 to 27. Here is how medical professionals generally interpret the score:
            </p>

            <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-[#1F2937]">
                    <thead className="bg-[#1E293B]">
                        <tr>
                            <th className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">Score Range</th>
                            <th className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">Depression Severity</th>
                            <th className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">Recommended Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">0 - 4</td>
                            <td className="px-4 py-3 text-emerald-400 font-medium">Minimal</td>
                            <td className="px-4 py-3 text-slate-300">None to minimal action required. Monitor weekly.</td>
                        </tr>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">5 - 9</td>
                            <td className="px-4 py-3 text-yellow-400 font-medium">Mild</td>
                            <td className="px-4 py-3 text-slate-300">Watchful waiting; consider supportive counseling.</td>
                        </tr>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">10 - 14</td>
                            <td className="px-4 py-3 text-orange-400 font-medium">Moderate</td>
                            <td className="px-4 py-3 text-slate-300">Evaluate for active treatment (therapy/counseling).</td>
                        </tr>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">15 - 19</td>
                            <td className="px-4 py-3 text-rose-400 font-medium">Moderately Severe</td>
                            <td className="px-4 py-3 text-slate-300">Active treatment required (therapy and/or medication).</td>
                        </tr>
                        <tr className="hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">20 - 27</td>
                            <td className="px-4 py-3 text-red-500 font-medium">Severe</td>
                            <td className="px-4 py-3 text-slate-300">Immediate active treatment necessary by a psychiatrist.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="how-mindbridge-uses-phq9">How MindBridge uses the PHQ-9</h2>
            <p>
                When you complete the test in MindBridge:
            </p>
            <ol>
                <li>The score is beautifully visualized in the UI.</li>
                <li>The result is saved to your medical history in your Dashboard.</li>
                <li><strong>Question 9 Check:</strong> If you score &gt; 0 on question 9 (thoughts of self-harm), MindBridge immediately triggers a safety warning with crisis hotline numbers.</li>
                <li>Gemini analyzes your score bracket and generates 3 personalized coping strategies right on the results page.</li>
            </ol>

            <h2 id="limitations">Important Limitations</h2>
            <Callout type="warning" title="Screening ≠ Diagnosis">
                Questionnaires like the PHQ-9 are screening tools, which means they highlight people who <em>might</em> be depressed. Only a qualified doctor or mental health professional can make an actual clinical diagnosis of Major Depressive Disorder.
            </Callout>
        </>
    );
}
