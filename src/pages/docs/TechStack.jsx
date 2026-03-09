import { Callout } from "../../components/docs/Callout";
import { Card } from "../../components/docs/Card";
import { Layout, Database, Bot, Navigation } from "lucide-react";

export default function TechStack() {
    return (
        <>
            <p className="text-sm text-slate-500 mb-6">Last updated: Oct 24, 2024</p>
            <h1>Technology Stack</h1>

            <p>
                MindBridge is a modern, single-page web application (SPA) built entirely on the React ecosystem. It is designed to be lightweight, incredibly fast, and serverless.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <Card
                    icon={<Layout className="w-5 h-5" />}
                    title="Frontend Framework"
                    description="React 18 + Vite. We leverage modern React hooks for state management and Vite for lightning-fast HMR and optimized production bundles."
                />
                <Card
                    icon={<Layout className="w-5 h-5" />}
                    title="Styling System"
                    description="Tailwind CSS. The entire application (including this documentation site) is styled purely with Tailwind utility classes to simulate a high-end GitBook or SaaS aesthetic."
                />
                <Card
                    icon={<Bot className="w-5 h-5" />}
                    title="Artificial Intelligence"
                    description="Google Gemini 2.5 Flash via the @google/genai SDK. We utilize the free tier for high-speed, empathetic conversations and data analysis."
                />
                <Card
                    icon={<Database className="w-5 h-5" />}
                    title="Backend & Storage"
                    description="Firebase (Auth, Firestore). Secure, rules-based NoSQL storage handles all user profiles, chat history, mood aggregates, and clinical tests."
                />
                <Card
                    icon={<Navigation className="w-5 h-5" />}
                    title="Routing"
                    description="React Router DOM v6. Handles navigation between the main authenticated application and this public documentation site."
                />
            </div>

            <h2 id="why-no-server">Why No Server?</h2>
            <p>
                By communicating directly with Firebase and the Gemini API from the client (using securely deployed environment variables restricted by HTTP referrers), we bypassed the need for an intermediary Node.js server. This drastically reduces the cost and complexity of deployment while maintaining speed.
            </p>

            <Callout type="info" title="Sentiment Analysis Algorithm">
                The real-time sentiment analysis running under the chat interface does not use an external API. It uses a lightweight, custom JavaScript dictionary algorithm mapping thousands of English words to valence scores (AFINN-based), ensuring completely private, zero-latency NLP.
            </Callout>
        </>
    );
}
