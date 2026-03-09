export function Divider({ label }) {
    if (label) {
        return (
            <div className="relative flex items-center py-6 my-2">
                <div className="flex-grow border-t border-[#1F2937]"></div>
                <span className="flex-shrink-0 mx-4 text-slate-500 text-sm font-medium tracking-widest uppercase">{label}</span>
                <div className="flex-grow border-t border-[#1F2937]"></div>
            </div>
        );
    }
    return <hr className="my-8 border-[#1F2937]" />;
}
