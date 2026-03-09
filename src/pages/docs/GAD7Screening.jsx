import { Callout } from "../../components/docs/Callout";

export default function GAD7Screening() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>GAD-7 Anxiety Screening</h1>

            <p>
                MindBridge incorporates the General Anxiety Disorder-7 (GAD-7), a reliable and valid 7-item clinical tool used to screen for and measure the severity of generalized anxiety disorder in clinical practice.
            </p>

            <h2 id="what-is-gad-7">What is the GAD-7?</h2>
            <p>
                The GAD-7 asks you to reflect on the last two weeks and rate how often you've been bothered by specific anxiety-related problems, such as:
            </p>
            <ul>
                <li>Feeling nervous, anxious, or on edge</li>
                <li>Not being able to stop or control worrying</li>
                <li>Trouble relaxing</li>
                <li>Being so restless it's hard to sit still</li>
            </ul>

            <h2 id="how-to-interpret">How to interpret your score</h2>
            <p>
                Each of the 7 questions is scored from 0 (Not at all) to 3 (Nearly every day). The total score ranges from 0 to 21. Here is how medical professionals generally interpret the score:
            </p>

            <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-[#1F2937]">
                    <thead className="bg-[#1E293B]">
                        <tr>
                            <th className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">Score Range</th>
                            <th className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">Anxiety Severity</th>
                            <th className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">Recommendation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">0 - 4</td>
                            <td className="px-4 py-3 text-emerald-400 font-medium">Minimal Anxiety</td>
                            <td className="px-4 py-3 text-slate-300">No specific treatment required. Manage stress normally.</td>
                        </tr>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">5 - 9</td>
                            <td className="px-4 py-3 text-yellow-400 font-medium">Mild Anxiety</td>
                            <td className="px-4 py-3 text-slate-300">Monitor symptoms. Consider preventative stress management.</td>
                        </tr>
                        <tr className="border-b border-[#1F2937]/50 hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">10 - 14</td>
                            <td className="px-4 py-3 text-orange-400 font-medium">Moderate Anxiety</td>
                            <td className="px-4 py-3 text-slate-300">Consider further evaluation and therapy.</td>
                        </tr>
                        <tr className="hover:bg-[#1E293B]/50 transition-colors">
                            <td className="px-4 py-3">15 - 21</td>
                            <td className="px-4 py-3 text-red-500 font-medium">Severe Anxiety</td>
                            <td className="px-4 py-3 text-slate-300">Active evaluation and treatment by a professional indicated.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="how-mindbridge-uses-gad7">How MindBridge uses the GAD-7</h2>
            <p>
                Similar to the PHQ-9, your GAD-7 results are stored securely in your dashboard history. MindBridge uses these scores to construct longitudinal data about your anxiety levels over time. If your scores are consistently in the "Moderate" or "Severe" range, the <strong>AI Insights Dashboard</strong> will pick up on this pattern and suggest breathing techniques, cognitive reframing exercises, or professional help.
            </p>

            <h2 id="limitations">Important Limitations</h2>
            <Callout type="warning" title="Not a complete diagnosis">
                While the GAD-7 is excellent at screening for Generalized Anxiety Disorder, it may not fully capture other forms of anxiety like Panic Disorder, Social Anxiety Disorder, or PTSD. Always consult a healthcare provider for a thorough examination.
            </Callout>
        </>
    );
}
