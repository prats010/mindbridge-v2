import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Quote() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-32 bg-[#0D1117] border-y border-[#1A1F2E]">
            <div
                ref={ref}
                className={`max-w-[800px] mx-auto px-6 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <blockquote className="text-2xl md:text-4xl font-light italic text-[#F0F6FC] leading-snug mb-10">
                    "I didn't think an AI could make me feel heard. MindBridge was there at 2am when I had no one else to talk to."
                </blockquote>

                <div className="text-[#8B949E] font-medium tracking-wide mb-12">
                    — A MindBridge User, Mumbai
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 rounded-full border border-[#1A1F2E] bg-[#080C14] text-sm text-[#F0F6FC] font-medium flex items-center gap-2">
                        <span>🔒</span> Private
                    </span>
                    <span className="px-4 py-2 rounded-full border border-[#1A1F2E] bg-[#080C14] text-sm text-[#F0F6FC] font-medium flex items-center gap-2">
                        <span>🆓</span> Free
                    </span>
                    <span className="px-4 py-2 rounded-full border border-[#1A1F2E] bg-[#080C14] text-sm text-[#F0F6FC] font-medium flex items-center gap-2">
                        <span>🇮🇳</span> India
                    </span>
                </div>
            </div>
        </section>
    );
}
