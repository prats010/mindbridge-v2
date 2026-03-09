import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export function Hero() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#080C14]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.15)_0%,transparent_70%)] animate-orb-drift" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_70%)] animate-orb-drift border-orb-delay" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />
            </div>

            <div
                ref={ref}
                className={`relative z-10 max-w-[1000px] w-full mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1117] border border-[#1A1F2E] mb-8 shadow-sm">
                    <span className="text-[#0D9488] text-xs">✦</span>
                    <span className="text-xs font-medium text-[#8B949E] tracking-wide uppercase">Powered by Google Gemini</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#F0F6FC] mb-6 leading-[1.1]">
                    Mental health support that <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#7C3AED]">actually understands you</span>
                </h1>

                <p className="text-lg md:text-xl text-[#8B949E] max-w-[600px] mb-10 leading-relaxed font-light">
                    An empathetic, private, and intelligent companion built for India. Access clinical-grade screenings, daily mood tracking, and instant support without the cost.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <Link to="/login" className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#F0F6FC] text-[#080C14] font-medium hover:bg-white transition-colors duration-200">
                        Get Started Free
                    </Link>
                    <a href="#how-it-works" className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0D1117] text-[#F0F6FC] border border-[#1A1F2E] font-medium hover:bg-[#1A1F2E] transition-colors duration-200">
                        See how it works
                    </a>
                </div>

                <p className="text-sm text-[#8B949E] flex items-center gap-2">
                    <span>No subscription</span>
                    <span>·</span>
                    <span>100% free</span>
                    <span>·</span>
                    <span>Built for India</span>
                </p>

                {/* Floating Chat Mockup */}
                <div className="mt-20 w-full max-w-[700px] animate-float relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0D9488] to-[#7C3AED] rounded-2xl blur opacity-20" />
                    <div className="relative bg-[#0D1117] border border-[#1A1F2E] rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-left">

                        <div className="flex items-end justify-end gap-2">
                            <div className="bg-[#1A1F2E] text-[#F0F6FC] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] text-[15px]">
                                I'm feeling really overwhelmed with everything going on right now.
                            </div>
                        </div>

                        <div className="flex items-end gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0D9488] to-emerald-600 flex items-center justify-center shrink-0 shadow-lg border border-[#1A1F2E]">
                                <span className="text-white text-xs">🧠</span>
                            </div>
                            <div className="bg-[#080C14] border border-[#1A1F2E] text-[#8B949E] px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-[15px] leading-relaxed">
                                I hear you. It's completely valid to feel overwhelmed when so much is on your plate. Take a deep breath. Would it help to break down what's on your mind right now?
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
