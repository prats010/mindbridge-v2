import { Steps, Step } from "../../components/docs/Steps";

export default function CopingStrategies() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Evidence-Based Coping Strategies</h1>

            <p>
                When you are experiencing an acute mental health episode (like a panic attack or severe depressive spiral), attempting to "think your way out of it" rarely works. The strategies below are physiological and cognitive interventions designed to short-circuit the stress response.
            </p>

            <h2 id="breathing-techniques">Breathing Techniques</h2>
            <p>
                Deep breathing stimulates the parasympathetic nervous system, which acts as a brake on your body's stress response.
            </p>

            <Steps>
                <Step number="1" title="Box Breathing">
                    Inhale for 4 seconds. Hold for 4 seconds. Exhale for 4 seconds. Hold empty for 4 seconds. Repeat 4 times. This is used by military personnel to maintain calm in high-stress situations.
                </Step>
                <Step number="2" title="4-7-8 Breathing">
                    Inhale through your nose for 4 seconds. Hold your breath for 7 seconds. Exhale completely through your mouth with a whoosh sound for 8 seconds. This acts as a natural tranquilizer.
                </Step>
            </Steps>

            <h2 id="grounding-techniques">Grounding Techniques</h2>
            <p>
                Grounding pulls you out of your head and forcefully anchors your attention in the physical world. The most famous is the <strong>5-4-3-2-1</strong> method. Look around you and identify:
            </p>
            <ul>
                <li><strong>5</strong> things you can <em>see</em></li>
                <li><strong>4</strong> things you can <em>touch</em> (and feel their texture)</li>
                <li><strong>3</strong> things you can <em>hear</em></li>
                <li><strong>2</strong> things you can <em>smell</em></li>
                <li><strong>1</strong> thing you can <em>taste</em></li>
            </ul>

            <h2 id="cognitive-reframing">Cognitive Reframing</h2>
            <p>
                Cognitive reframing is a core CBT technique. It involves noticing a negative thought, challenging its factual accuracy, and replacing it.
            </p>
            <blockquote>
                <p className="not-italic text-slate-300 border-l-4 border-teal-500 pl-4 py-1 my-4 bg-[#1E293B] rounded-r-lg">
                    <strong>Instead of:</strong> "I failed this test, I'm going to ruin my entire career."<br />
                    <strong>Reframe to:</strong> "I didn't do well on this test, which is disappointing. But one test does not dictate my entire future, and I can study differently next time."
                </p>
            </blockquote>

            <h2 id="physical-strategies">Physical Strategies</h2>
            <p>Sometimes you need to physically change your body chemistry:</p>
            <ul>
                <li><strong>The Mammalian Dive Reflex:</strong> Submerging your face in ice-cold water for 15-30 seconds instantly slows your heart rate.</li>
                <li><strong>Intense Exercise:</strong> Doing jumping jacks or sprinting for 60 seconds burns off excess adrenaline during a panic attack.</li>
            </ul>

            <h2 id="building-support-systems">Building Support Systems</h2>
            <p>
                Isolation feeds mental illness. Simply stating, "I am having a really hard time right now" to a trusted friend or family member breaks the illusion that you have to suffer alone. This is why MindBridge requires a <strong>Trusted Contact</strong> inside the app.
            </p>
        </>
    );
}
