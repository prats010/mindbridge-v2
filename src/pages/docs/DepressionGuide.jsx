import { Callout } from "../../components/docs/Callout";

export default function DepressionGuide() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Understanding Depression</h1>

            <p>
                Depression (Major Depressive Disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It is also highly treatable. It causes feelings of sadness and/or a loss of interest in activities you once enjoyed.
            </p>

            <h2 id="signs-you-may-be-experiencing-depression">Signs you may be experiencing depression</h2>
            <p>Symptoms can vary from mild to severe and can include:</p>
            <ul>
                <li>Feeling sad or having a depressed mood</li>
                <li>Loss of interest or pleasure in activities once enjoyed</li>
                <li>Changes in appetite — weight loss or gain unrelated to dieting</li>
                <li>Trouble sleeping or sleeping too much</li>
                <li>Loss of energy or increased fatigue</li>
                <li>Increase in purposeless physical activity (e.g., inability to sit still, pacing) or slowed movements/speech</li>
                <li>Feeling worthless or guilty</li>
                <li>Difficulty thinking, concentrating, or making decisions</li>
                <li>Thoughts of death or suicide</li>
            </ul>

            <Callout type="warning" title="Note on clinical diagnosis">
                Symptoms must last at least two weeks and must represent a change in your previous level of functioning for a diagnosis of depression.
            </Callout>

            <h2 id="common-myths">Common myths about depression</h2>
            <ul>
                <li><strong>Myth:</strong> "It's just sadness, you can snap out of it."<br /><strong>Fact:</strong> Depression is a complex medical condition, not a weakness of character.</li>
                <li><strong>Myth:</strong> "You need a reason to be depressed."<br /><strong>Fact:</strong> While trauma or grief can trigger depression, it can also manifest due to biological chemistry without a precise "event" triggering it.</li>
            </ul>

            <h2 id="self-help-strategies">Self-help strategies</h2>
            <p>While professional help is critical, certain lifestyle changes can assist in recovery:</p>
            <ul>
                <li><strong>Physical Activity:</strong> Exercise releases endorphins which act as natural mood lifters.</li>
                <li><strong>Sleep Hygiene:</strong> Regulate your circadian rhythm by sleeping strictly at the same times every day.</li>
                <li><strong>Set limits:</strong> Reduce stress by unburdening your daily schedule where possible.</li>
            </ul>

            <h2 id="professional-resources">Professional resources in India</h2>
            <p>If you are struggling heavily with depression to the point it interferes with your daily functioning, we recommend reaching out to clinical professionals in India through resources like Practo, or directly visiting your nearest government hospital's Psychiatric ward.</p>
        </>
    );
}
