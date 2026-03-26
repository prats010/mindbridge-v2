import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

export function HowItWorks() {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
    const { t } = useLanguage();

    const steps = [
        { step: '01', titleKey: 'how.step1.title', descKey: 'how.step1.desc' },
        { step: '02', titleKey: 'how.step2.title', descKey: 'how.step2.desc' },
        { step: '03', titleKey: 'how.step3.title', descKey: 'how.step3.desc' },
    ];

    return (
        <section id="how-it-works" className="py-32 bg-[#080C14]">
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F0F6FC] mb-6">{t("how.heading")}</h2>
                    <p className="text-lg text-[#8B949E] max-w-[600px] mx-auto">{t("how.sub")}</p>
                </div>

                <div
                    ref={ref}
                    className="relative grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {/* Animated Connecting Line */}
                    <div className="absolute top-[28px] left-[15%] right-[15%] h-[2px] hidden md:block z-0 overflow-hidden">
                        <div className="w-full h-full bg-[#1A1F2E]" />
                        <div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#0D9488] to-[#7C3AED] transition-all duration-1500 ease-out z-10`}
                            style={{ width: isVisible ? '100%' : '0%' }}
                        />
                    </div>

                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 transform delay-[${idx * 200}ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${idx * 200}ms` }}
                        >
                            <div className="w-14 h-14 rounded-full bg-[#0D1117] border-[2px] border-[#0D9488] flex items-center justify-center text-[#F0F6FC] font-bold text-lg mb-6 shadow-[0_0_20px_rgba(13,148,136,0.2)]">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-semibold text-[#F0F6FC] mb-3">{t(item.titleKey)}</h3>
                            <p className="text-[#8B949E] leading-relaxed max-w-[250px]">{t(item.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
