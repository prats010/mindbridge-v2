import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-[#080C14] border-t border-[#1A1F2E] pt-20 pb-10">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                {/* Col 1 */}
                <div className="flex flex-col">
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <span className="text-xl">🧠</span>
                        <span className="font-semibold text-[#F0F6FC] tracking-tight text-lg">MindBridge</span>
                    </Link>
                    <p className="text-[#8B949E] text-sm leading-relaxed max-w-[250px]">
                        An AI mental health companion powered by Google Gemini. Accessible, private, and 100% free. Built for India.
                    </p>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col">
                    <h4 className="text-[#F0F6FC] font-semibold mb-4 tracking-wide text-sm">Product</h4>
                    <ul className="space-y-3 text-sm text-[#8B949E]">
                        <li><Link to="/login" className="hover:text-[#F0F6FC] transition-colors">Sign in</Link></li>
                        <li><Link to="/docs" className="hover:text-[#F0F6FC] transition-colors">Documentation</Link></li>
                        <li><a href="#features" className="hover:text-[#F0F6FC] transition-colors">Features</a></li>
                        <li><Link to="/docs/privacy" className="hover:text-[#F0F6FC] transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Col 3 */}
                <div className="flex flex-col">
                    <h4 className="text-[#F0F6FC] font-semibold mb-4 tracking-wide text-sm">Crisis Helplines (India)</h4>
                    <ul className="space-y-3 text-sm text-[#8B949E]">
                        <li>iCall (TISS): <a href="tel:9152987821" className="text-[#0D9488] hover:underline hover:text-teal-400 transition-colors">9152987821</a></li>
                        <li>Vandrevala: <a href="tel:18602662345" className="text-[#0D9488] hover:underline hover:text-teal-400 transition-colors">1860-2662-345</a></li>
                        <li>AASRA: <a href="tel:9820466627" className="text-[#0D9488] hover:underline hover:text-teal-400 transition-colors">9820466627</a></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-[1200px] mx-auto px-6 pt-8 border-t border-[#1A1F2E] flex flex-col md:flex-row items-center justify-between text-xs text-[#8B949E]">
                <p>&copy; {new Date().getFullYear()} MindBridge AI. All rights reserved.</p>
                <p className="mt-2 md:mt-0 flex items-center gap-1">Built with 🤍 and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#7C3AED] font-medium ml-1">Google Gemini</span></p>
            </div>
        </footer>
    );
}
