import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ALL_DOC_LINKS, DOCS_NAV } from "../../../docsData";
import { ChevronRight, ChevronLeft, ThumbsUp, ThumbsDown } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

const uiStrings = {
  en: { helpful: "Was this page helpful?", yes: "Yes", no: "No", previous: "Previous", next: "Next" },
  hi: { helpful: "क्या यह पृष्ठ उपयोगी था?", yes: "हाँ", no: "नहीं", previous: "पिछला", next: "अगला" },
  mr: { helpful: "हे पृष्ठ उपयुक्त होते का?", yes: "होय", no: "नाही", previous: "मागील", next: "पुढील" },
};

export function InAppDocsLayout({ children }) {
    const { pathname } = useLocation();
    const { lang } = useLanguage();
    const ui = uiStrings[lang] || uiStrings.en;
    
    // We rewrite the pathname to match the original /docs/... data structure to find links correctly
    const mockDocsPathname = pathname.replace(/^\/info/, '/docs');

    // Find the current link using the path starting with /docs/
    const currentLinkIndex = ALL_DOC_LINKS.findIndex(l => l.href === mockDocsPathname || l.href + "/" === mockDocsPathname);
    const currentLink = ALL_DOC_LINKS[currentLinkIndex];
    let prevLink = currentLinkIndex > 0 ? ALL_DOC_LINKS[currentLinkIndex - 1] : null;
    let nextLink = currentLinkIndex < ALL_DOC_LINKS.length - 1 ? ALL_DOC_LINKS[currentLinkIndex + 1] : null;

    // Helper to transform link to /info/...
    const toInfoLink = (linkObj) => {
        if (!linkObj) return null;
        return {
            ...linkObj,
            href: linkObj.href.replace(/^\/docs/, '/info')
        };
    };

    prevLink = toInfoLink(prevLink);
    nextLink = toInfoLink(nextLink);

    // Find Breadcrumbs (Section > Page)
    let sectionTitle = "";
    for (const sec of DOCS_NAV) {
        if (sec.links.some(l => l.href === currentLink?.href)) {
            sectionTitle = sec.title;
            break;
        }
    }

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex-1 w-full max-w-4xl mx-auto animate-fade-in" key={pathname}>
            {/* Breadcrumb */}
            {sectionTitle && currentLink && (
                <div className="flex items-center gap-2 text-[13px] text-teal-400/80 font-medium mb-4 uppercase tracking-wider">
                    <span>{sectionTitle}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-slate-400">{currentLink.title}</span>
                </div>
            )}

            {/* Page Content from child routes */}
            <div className="prose prose-invert max-w-none 
  prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-white prose-h1:mb-3 
  prose-h2:text-[22px] prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-slate-100 prose-h2:border-b prose-h2:border-[#1F2937] prose-h2:pb-2
  prose-h3:text-[18px] prose-h3:font-semibold prose-h3:mt-8 prose-h3:text-slate-200
  prose-p:text-[15px] prose-p:leading-[1.75] prose-p:text-slate-300 prose-p:mb-5
  prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300 hover:prose-a:underline
  prose-ul:my-5 prose-ul:list-disc prose-ul:pl-5
  prose-li:text-[15px] prose-li:text-slate-300 prose-li:my-1.5
  prose-code:bg-[#1E293B] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-[13px] prose-code:text-teal-300 before:prose-code:content-none after:prose-code:content-none
">
                {children}
            </div>

            {/* Content End Divider */}
            <hr className="my-12 border-[#1F2937]" />

            {/* Feedback Widget */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                <span className="text-[14px] font-medium text-slate-300">{ui.helpful}</span>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#1E293B]/80 hover:text-white text-slate-400 border border-[#1F2937] hover:border-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        <ThumbsUp className="w-4 h-4" /> {ui.yes}
                    </button>
                    <button className="flex items-center gap-2 bg-[#1E293B] hover:bg-[#1E293B]/80 hover:text-white text-slate-400 border border-[#1F2937] hover:border-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        <ThumbsDown className="w-4 h-4" /> {ui.no}
                    </button>
                </div>
            </div>

            {/* Previous / Next Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevLink ? (
                    <Link to={prevLink.href} className="flex flex-col p-4 rounded-xl border border-[#1F2937] hover:border-teal-500/50 hover:bg-[#1E293B]/30 transition-all text-left group">
                        <span className="text-[13px] font-medium text-slate-500 mb-1 flex items-center gap-1 group-hover:text-teal-400/80 transition-colors">
                            <ChevronLeft className="w-4 h-4" /> {ui.previous}
                        </span>
                        <span className="text-[15px] font-medium text-white group-hover:text-teal-300 transition-colors">{prevLink.title}</span>
                    </Link>
                ) : (<div />)}

                {nextLink ? (
                    <Link to={nextLink.href} className="flex flex-col p-4 rounded-xl border border-[#1F2937] hover:border-teal-500/50 hover:bg-[#1E293B]/30 transition-all text-right group items-end">
                        <span className="text-[13px] font-medium text-slate-500 mb-1 flex items-center gap-1 group-hover:text-teal-400/80 transition-colors">
                            {ui.next} <ChevronRight className="w-4 h-4" />
                        </span>
                        <span className="text-[15px] font-medium text-white group-hover:text-teal-300 transition-colors">{nextLink.title}</span>
                    </Link>
                ) : (<div />)}
            </div>
        </div>
    );
}
