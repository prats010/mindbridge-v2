import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { useLanguage } from '../../context/LanguageContext';

export function Stats() {
    const { ref, isVisible } = useScrollReveal();
    const indiansCount = useCountUp(150, 2000);
    const supportCount = useCountUp(24, 2000);
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-[#080C14] border-y border-[#1A1F2E]">
            <div
                ref={ref}
                className={`max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#0D9488] mb-2 flex items-center">
                        <span ref={indiansCount.ref}>{indiansCount.count}</span>M+
                    </div>
                    <div className="text-sm font-medium text-[#8B949E] uppercase tracking-wider">{t("stats.indiansCare")}</div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#0D9488] mb-2 flex items-center">
                        <span ref={supportCount.ref}>{supportCount.count}</span>/7
                    </div>
                    <div className="text-sm font-medium text-[#8B949E] uppercase tracking-wider">{t("stats.aiSupport")}</div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#0D9488] mb-2">100%</div>
                    <div className="text-sm font-medium text-[#8B949E] uppercase tracking-wider">{t("stats.private")}</div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#0D9488] mb-2">{t("stats.free")}</div>
                    <div className="text-sm font-medium text-[#8B949E] uppercase tracking-wider">{t("stats.forever")}</div>
                </div>
            </div>
        </section>
    );
}
