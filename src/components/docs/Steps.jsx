export function Steps({ children }) {
    return (
        <div className="my-8 relative">
            <div className="absolute top-0 bottom-0 left-[19px] w-px bg-[#1F2937]" />
            <div className="space-y-8">{children}</div>
        </div>
    );
}

export function Step({ title, children, number }) {
    return (
        <div className="relative pl-12">
            <div className="absolute left-0 top-0.5 w-10 h-10 rounded-full bg-[#1E293B] border-4 border-[#111827] flex items-center justify-center font-bold text-teal-400 shadow-sm z-10 text-sm">
                {number}
            </div>
            <div>
                {title && <h3 className="text-lg font-semibold text-white mb-2 pt-1.5">{title}</h3>}
                <div className="text-[15px] leading-relaxed text-slate-300 prose-custom-step">{children}</div>
            </div>
        </div>
    );
}
