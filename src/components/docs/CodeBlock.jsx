import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ code, language = "javascript" }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 relative rounded-xl overflow-hidden bg-[#1E293B] border border-[#1F2937] group">
            <div className="flex justify-between items-center px-4 py-2 bg-black/20 border-b border-[#1F2937]">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{language}</span>
                <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white transition-colors p-1 rounded"
                    title="Copy to clipboard"
                >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-slate-200 leading-relaxed whitespace-pre font-['JetBrains_Mono',_monospace]">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
