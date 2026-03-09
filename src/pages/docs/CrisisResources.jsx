import { Callout } from "../../components/docs/Callout";

export default function CrisisResources() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Crisis Resources in India</h1>

            <p>
                If you are feeling overwhelmed, having thoughts of self-harm, or experiencing a mental health emergency, please reach out for professional help immediately. You do not have to go through this alone.
            </p>

            <Callout type="danger" title="Immediate Hotlines">
                <ul className="mt-2 text-rose-100 space-y-2 border-none pl-4">
                    <li><strong>iCall:</strong> <a href="tel:9152987821" className="text-rose-300 font-bold hover:underline">9152987821</a></li>
                    <li><strong>Vandrevala Foundation:</strong> <a href="tel:18602662345" className="text-rose-300 font-bold hover:underline">1860-2662-345</a></li>
                    <li><strong>NIMHANS:</strong> <a href="tel:08046110007" className="text-rose-300 font-bold hover:underline">080-46110007</a></li>
                    <li><strong>AASRA:</strong> <a href="tel:9820466627" className="text-rose-300 font-bold hover:underline">9820466627</a></li>
                </ul>
            </Callout>

            <h2 id="about-these-services">About these services</h2>

            <h3 id="icall">iCall (TISS)</h3>
            <p>
                Initiated by the Tata Institute of Social Sciences (TISS). They offer free telephone and email-based counseling services. Telephone lines run Monday to Saturday, 10 AM to 8 PM.
            </p>

            <h3 id="vandrevala-foundation">Vandrevala Foundation</h3>
            <p>
                A 24x7 crisis intervention and mental health helpline operated by trained clinical psychologists and psychiatrists. They offer multilingual support and are always available for suicide prevention.
            </p>

            <h3 id="nimhans">NIMHANS Toll-Free Helpline</h3>
            <p>
                The National Institute of Mental Health and Neuro-Sciences provides psychosocial support and mental health care. Highly recommended for acute distress.
            </p>

            <h3 id="aasra">AASRA</h3>
            <p>
                A 24x7 crisis intervention center specifically focused on suicide prevention. Confidential and non-judgmental support.
            </p>

            <hr className="my-8 border-[#1F2937]" />

            <h2 id="what-to-do-right-now">What to do right now</h2>
            <ol>
                <li><strong>Ensure your physical safety.</strong> Remove yourself from any immediately dangerous situations or implements.</li>
                <li><strong>Call a hotline.</strong> The people on the other end are trained to listen without judgment.</li>
                <li><strong>Reach out to your trusted contact.</strong> Call a friend, family member, or whoever you listed in the MindBridge onboarding flow. Tell them "I am not safe right now."</li>
                <li><strong>Go to the hospital.</strong> If you cannot guarantee your own safety, go to the nearest hospital casualty (ER) ward.</li>
            </ol>
        </>
    );
}
