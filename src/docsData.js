export const DOCS_NAV = [
    {
        title: "GETTING STARTED",
        links: [
            { title: "What is MindBridge?", href: "/docs/what-is-mindbridge" },
            { title: "How it works", href: "/docs/how-it-works" },
            { title: "Quick start guide", href: "/docs/quick-start" },
        ]
    },
    {
        title: "FEATURES",
        links: [
            { title: "AI Chat Support", href: "/docs/ai-chat" },
            { title: "PHQ-9 Depression Screening", href: "/docs/phq9" },
            { title: "GAD-7 Anxiety Screening", href: "/docs/gad7" },
            { title: "Mood Tracker", href: "/docs/mood-tracker" },
            { title: "AI Insights Dashboard", href: "/docs/insights" },
            { title: "Voice Mode", href: "/docs/voice-mode" },
        ]
    },
    {
        title: "MENTAL HEALTH GUIDES",
        links: [
            { title: "Understanding Depression", href: "/docs/depression" },
            { title: "Understanding Anxiety", href: "/docs/anxiety" },
            { title: "Coping Strategies", href: "/docs/coping-strategies" },
            { title: "Crisis Resources India", href: "/docs/crisis-resources" },
        ]
    },
    {
        title: "ABOUT",
        links: [
            { title: "Our mission", href: "/docs/mission" },
            { title: "Technology stack", href: "/docs/tech-stack" },
            { title: "Built with Google Gemini", href: "/docs/built-with-gemini" },
        ]
    }
];

// Flattens nav for search and previous/next link generation
export const ALL_DOC_LINKS = DOCS_NAV.flatMap(section => section.links);
