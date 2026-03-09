import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export function CTA() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="relative py-32 bg-[#080C14] overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.15)_0%,transparent_60%)] animate-pulse pointer-events-none" />

            <div
                ref={ref}
                className={`relative z-10 max-w-[800px] mx-auto px-6 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F0F6FC] mb-8">
                    Your mental health matters.
                </h2>

                <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-medium text-lg transition-all duration-300 shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:shadow-[0_0_30px_rgba(13,148,136,0.6)] group"
                >
                    Open MindBridge <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>

                <div className="mt-12 p-4 rounded-2xl border border-rose-900/50 bg-rose-950/20 max-w-[400px] mx-auto backdrop-blur-sm">
                    <p className="text-rose-200 text-sm font-medium">In crisis? iCall India:</p>
                    <a href="tel:9152987821" className="text-rose-400 font-bold text-lg hover:underline mt-1 block">9152987821</a>
                </div>
            </div>
        </section>
    );
}
