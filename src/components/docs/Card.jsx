import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Card({ title, description, icon, href }) {
    const content = (
        <>
            <div className="flex items-center gap-3 mb-3">
                {icon && <div className="text-teal-400">{icon}</div>}
                <h3 className="font-semibold text-white text-lg">{title}</h3>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-4">{description}</p>
            {href && (
                <div className="mt-auto flex items-center text-teal-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-200">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
            )}
        </>
    );

    const baseClasses = "flex flex-col p-6 rounded-2xl bg-[#1E293B] border border-[#1F2937] hover:border-teal-500/30 transition-all duration-300 group hover:bg-[#1E293B]/80 h-full shadow-sm hover:shadow-md";

    if (href) {
        if (href.startsWith("http")) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                    {content}
                </a>
            );
        }
        return (
            <Link to={href} className={baseClasses}>
                {content}
            </Link>
        );
    }

    return <div className={baseClasses}>{content}</div>;
}
