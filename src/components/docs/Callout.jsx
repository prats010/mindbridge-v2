import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";

export function Callout({ type = "info", title, children }) {
    const types = {
        info: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/50",
            icon: <Info className="w-5 h-5 text-blue-400 mt-0.5" />,
            text: "text-blue-100",
            titleColor: "text-blue-300",
        },
        warning: {
            bg: "bg-orange-500/10",
            border: "border-orange-500/50",
            icon: <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />,
            text: "text-orange-100",
            titleColor: "text-orange-300",
        },
        danger: {
            bg: "bg-rose-500/10",
            border: "border-rose-500/50",
            icon: <XCircle className="w-5 h-5 text-rose-400 mt-0.5" />,
            text: "text-rose-100",
            titleColor: "text-rose-300",
        },
        success: {
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/50",
            icon: <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />,
            text: "text-emerald-100",
            titleColor: "text-emerald-300",
        },
    };

    const style = types[type] || types.info;

    return (
        <div className={`p-4 rounded-xl border-l-4 my-6 flex gap-3 ${style.bg} ${style.border}`}>
            <div className="shrink-0">{style.icon}</div>
            <div className="flex-1">
                {title && <h4 className={`font-semibold mb-1 ${style.titleColor}`}>{title}</h4>}
                <div className={`text-[15px] leading-relaxed ${style.text} prose-custom-callout`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
