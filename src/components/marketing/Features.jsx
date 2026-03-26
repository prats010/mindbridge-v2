import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MessageSquareText, Mic, FileText, LineChart, BrainCircuit, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Features() {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    const features = [
        {
            titleKey: "features.chat.title",
            descKey: "features.chat.desc",
            icon: <MessageSquareText className="w-6 h-6 text-[#0D9488]" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            titleKey: "features.voice.title",
            descKey: "features.voice.desc",
            icon: <Mic className="w-6 h-6 text-[#7C3AED]" />,
            colSpan: "col-span-1",
        },
        {
            titleKey: "features.phq9.title",
            descKey: "features.phq9.desc",
            icon: <FileText className="w-6 h-6 text-[#0D9488]" />,
            colSpan: "col-span-1",
        },
        {
            titleKey: "features.mood.title",
            descKey: "features.mood.desc",
            icon: <LineChart className="w-6 h-6 text-[#7C3AED]" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            titleKey: "features.insights.title",
            descKey: "features.insights.desc",
            icon: <BrainCircuit className="w-6 h-6 text-[#7C3AED]" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            titleKey: "features.privacy.title",
            descKey: "features.privacy.desc",
            icon: <ShieldCheck className="w-6 h-6 text-[#0D9488]" />,
            colSpan: "col-span-1",
        }
    ];

    return (
        <section id="features" className="py-32 bg-[#080C14]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F0F6FC] mb-6">{t("features.heading")}</h2>
                    <p className="text-lg text-[#8B949E] max-w-[600px] mx-auto">{t("features.sub")}</p>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`group flex flex-col p-8 bg-[#0D1117] border border-[#1A1F2E] rounded-3xl hover:border-[#0D9488] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(13,148,136,0.1)] transition-all duration-300 ${feature.colSpan}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#080C14] border border-[#1A1F2E] flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#F0F6FC] mb-3">{t(feature.titleKey)}</h3>
                            <p className="text-[#8B949E] leading-relaxed">{t(feature.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
