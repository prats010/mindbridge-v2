import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

export function Quote() {
    const { ref, isVisible } = useScrollReveal();
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-[#0D1117] border-y border-[#1A1F2E]">
            <div
                ref={ref}
                className={`max-w-[800px] mx-auto px-6 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <blockquote className="text-2xl md:text-4xl font-light italic text-[#F0F6FC] leading-snug mb-10">
                    {t("quote.text")}
                </blockquote>

                <div className="text-[#8B949E] font-medium tracking-wide mb-12">
                    {t("quote.attr")}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 rounded-full border border-[#1A1F2E] bg-[#080C14] text-sm text-[#F0F6FC] font-medium flex items-center gap-2">
                        <span>🔒</span> {t("quote.badge1")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-[#1A1F2E] bg-[#080C14] text-sm text-[#F0F6FC] font-medium flex items-center gap-2">
                        <span>🆓</span> {t("quote.badge2")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-[#1A1F2E] bg-[#080C14] text-sm text-[#F0F6FC] font-medium flex items-center gap-2">
                        <span>🇮🇳</span> {t("quote.badge3")}
                    </span>
                </div>
            </div>
        </section>
    );
}
