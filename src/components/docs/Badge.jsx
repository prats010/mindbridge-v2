export function Badge({ children, type = "default" }) {
    const styles = {
        default: "bg-slate-800 text-slate-300 border-slate-700",
        primary: "bg-teal-500/10 text-teal-400 border-teal-500/20",
        ai: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        free: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };

    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${styles[type] || styles.default}`}>
            {children}
        </span>
    );
}
