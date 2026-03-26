import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "GAD-7 Anxiety Screening",
    intro: "MindBridge incorporates the General Anxiety Disorder-7 (GAD-7), a reliable and valid 7-item clinical tool used to screen for and measure the severity of generalized anxiety disorder in clinical practice.",
    whatH2: "What is the GAD-7?",
    whatP: "The GAD-7 asks you to reflect on the last two weeks and rate how often you've been bothered by specific anxiety-related problems, such as:",
    whatItems: ["Feeling nervous, anxious, or on edge", "Not being able to stop or control worrying", "Trouble relaxing", "Being so restless it's hard to sit still"],
    interpretH2: "How to interpret your score",
    interpretP: "Each of the 7 questions is scored from 0 (Not at all) to 3 (Nearly every day). The total score ranges from 0 to 21. Here is how medical professionals generally interpret the score:",
    tableHeaders: ["Score Range", "Anxiety Severity", "Recommendation"],
    tableRows: [
      { range: "0 - 4", sev: "Minimal Anxiety", sevClass: "text-emerald-400", action: "No specific treatment required. Manage stress normally." },
      { range: "5 - 9", sev: "Mild Anxiety", sevClass: "text-yellow-400", action: "Monitor symptoms. Consider preventative stress management." },
      { range: "10 - 14", sev: "Moderate Anxiety", sevClass: "text-orange-400", action: "Consider further evaluation and therapy." },
      { range: "15 - 21", sev: "Severe Anxiety", sevClass: "text-red-500", action: "Active evaluation and treatment by a professional indicated." },
    ],
    howH2: "How MindBridge uses the GAD-7",
    howP: <>Similar to the PHQ-9, your GAD-7 results are stored securely in your dashboard history. MindBridge uses these scores to construct longitudinal data about your anxiety levels over time. If your scores are consistently in the "Moderate" or "Severe" range, the <strong>AI Insights Dashboard</strong> will pick up on this pattern and suggest breathing techniques, cognitive reframing exercises, or professional help.</>,
    limitH2: "Important Limitations",
    calloutTitle: "Not a complete diagnosis",
    calloutText: "While the GAD-7 is excellent at screening for Generalized Anxiety Disorder, it may not fully capture other forms of anxiety like Panic Disorder, Social Anxiety Disorder, or PTSD. Always consult a healthcare provider for a thorough examination.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "GAD-7 चिंता स्क्रीनिंग",
    intro: "MindBridge में General Anxiety Disorder-7 (GAD-7) शामिल है, जो नैदानिक अभ्यास में सामान्यीकृत चिंता विकार की जाँच और गंभीरता मापने के लिए उपयोग किया जाने वाला एक विश्वसनीय और वैध 7-आइटम नैदानिक उपकरण है।",
    whatH2: "GAD-7 क्या है?",
    whatP: "GAD-7 आपसे पिछले दो हफ्तों पर विचार करने और विशिष्ट चिंता-संबंधित समस्याओं से कितनी बार परेशान हुए यह रेट करने के लिए कहता है, जैसे:",
    whatItems: ["घबराहट, बेचैनी या तनाव महसूस करना", "चिंता रोकना मुश्किल लगना", "आराम न कर पाना", "इतनी बेचैनी कि बैठना मुश्किल"],
    interpretH2: "अपना स्कोर कैसे समझें",
    interpretP: "7 प्रश्नों में से प्रत्येक को 0 (बिल्कुल नहीं) से 3 (लगभग हर दिन) तक स्कोर किया जाता है। कुल स्कोर 0 से 21 तक होता है। चिकित्सा पेशेवर आमतौर पर स्कोर की व्याख्या इस प्रकार करते हैं:",
    tableHeaders: ["स्कोर सीमा", "चिंता की गंभीरता", "अनुशंसा"],
    tableRows: [
      { range: "0 - 4", sev: "न्यूनतम चिंता", sevClass: "text-emerald-400", action: "कोई विशिष्ट उपचार आवश्यक नहीं। सामान्य रूप से तनाव प्रबंधन करें।" },
      { range: "5 - 9", sev: "हल्की चिंता", sevClass: "text-yellow-400", action: "लक्षणों की निगरानी करें। निवारक तनाव प्रबंधन पर विचार करें।" },
      { range: "10 - 14", sev: "मध्यम चिंता", sevClass: "text-orange-400", action: "आगे मूल्यांकन और थेरेपी पर विचार करें।" },
      { range: "15 - 21", sev: "गंभीर चिंता", sevClass: "text-red-500", action: "पेशेवर द्वारा सक्रिय मूल्यांकन और उपचार इंगित।" },
    ],
    howH2: "MindBridge GAD-7 का उपयोग कैसे करता है",
    howP: <>PHQ-9 की तरह, आपके GAD-7 परिणाम आपके डैशबोर्ड इतिहास में सुरक्षित रूप से संग्रहीत हैं। MindBridge इन स्कोर का उपयोग समय के साथ आपके चिंता स्तरों के बारे में दीर्घकालिक डेटा बनाने के लिए करता है। यदि आपके स्कोर लगातार "मध्यम" या "गंभीर" श्रेणी में हैं, तो <strong>AI इनसाइट्स डैशबोर्ड</strong> इस पैटर्न को पकड़ेगा और साँस लेने की तकनीकें, संज्ञानात्मक पुनर्रचना अभ्यास, या पेशेवर मदद का सुझाव देगा।</>,
    limitH2: "महत्वपूर्ण सीमाएं",
    calloutTitle: "पूर्ण निदान नहीं",
    calloutText: "हालांकि GAD-7 सामान्यीकृत चिंता विकार की जाँच में उत्कृष्ट है, यह Panic Disorder, Social Anxiety Disorder, या PTSD जैसी अन्य प्रकार की चिंता को पूरी तरह से नहीं पकड़ सकता। गहन जाँच के लिए हमेशा स्वास्थ्य सेवा प्रदाता से परामर्श लें।",
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "GAD-7 चिंता स्क्रीनिंग",
    intro: "MindBridge मध्ये General Anxiety Disorder-7 (GAD-7) समाविष्ट आहे, एक विश्वसनीय आणि वैध 7-आयटम क्लिनिकल साधन जे क्लिनिकल सरावात सामान्यीकृत चिंता विकाराची तपासणी आणि तीव्रता मोजण्यासाठी वापरले जाते.",
    whatH2: "GAD-7 म्हणजे काय?",
    whatP: "GAD-7 तुम्हाला मागील दोन आठवड्यांवर विचार करण्यास आणि विशिष्ट चिंता-संबंधित समस्यांमुळे किती वेळा त्रास झाला हे रेट करण्यास सांगते, जसे:",
    whatItems: ["घाबरणे, चिंता किंवा अस्वस्थ वाटणे", "काळजी थांबवणे कठीण वाटणे", "आराम करण्यात अडचण", "इतके अस्वस्थ वाटणे की स्थिर बसणे कठीण"],
    interpretH2: "तुमचा स्कोर कसा समजून घ्याल",
    interpretP: "7 प्रश्नांपैकी प्रत्येक 0 (अजिबात नाही) ते 3 (जवळजवळ दररोज) स्कोर केला जातो. एकूण स्कोर 0 ते 21 च्या श्रेणीत असतो. वैद्यकीय व्यावसायिक साधारणत: स्कोरचा अर्थ असा लावतात:",
    tableHeaders: ["स्कोर श्रेणी", "चिंतेची तीव्रता", "शिफारस"],
    tableRows: [
      { range: "0 - 4", sev: "न्यूनतम चिंता", sevClass: "text-emerald-400", action: "कोणत्याही विशिष्ट उपचाराची आवश्यकता नाही. सामान्यपणे तणाव व्यवस्थापित करा." },
      { range: "5 - 9", sev: "सौम्य चिंता", sevClass: "text-yellow-400", action: "लक्षणांवर देखरेख ठेवा. प्रतिबंधात्मक तणाव व्यवस्थापनाचा विचार करा." },
      { range: "10 - 14", sev: "मध्यम चिंता", sevClass: "text-orange-400", action: "पुढील मूल्यांकन आणि थेरपीचा विचार करा." },
      { range: "15 - 21", sev: "तीव्र चिंता", sevClass: "text-red-500", action: "व्यावसायिकाद्वारे सक्रिय मूल्यांकन आणि उपचार सूचित." },
    ],
    howH2: "MindBridge GAD-7 कसा वापरतो",
    howP: <>PHQ-9 सारखेच, तुमचे GAD-7 परिणाम तुमच्या डॅशबोर्ड इतिहासात सुरक्षितपणे संग्रहित आहेत. MindBridge हे स्कोर कालांतराने तुमच्या चिंतेच्या पातळीबद्दल रेखांशात्मक डेटा तयार करण्यासाठी वापरतो. तुमचे स्कोर सातत्याने "मध्यम" किंवा "तीव्र" श्रेणीत असल्यास, <strong>AI इनसाइट्स डॅशबोर्ड</strong> हा नमुना ओळखेल आणि श्वास घेण्याचे तंत्र, संज्ञानात्मक पुनर्रचना व्यायाम, किंवा व्यावसायिक मदत सुचवेल.</>,
    limitH2: "महत्त्वाच्या मर्यादा",
    calloutTitle: "संपूर्ण निदान नाही",
    calloutText: "GAD-7 सामान्यीकृत चिंता विकाराच्या तपासणीत उत्कृष्ट असले तरी, ते Panic Disorder, Social Anxiety Disorder, किंवा PTSD सारख्या इतर प्रकारच्या चिंता पूर्णपणे पकडणार नाही. सखोल तपासणीसाठी नेहमी आरोग्यसेवा प्रदात्याचा सल्ला घ्या.",
  },
};

export default function GAD7Screening() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="what-is-gad-7">{c.whatH2}</h2>
      <p>{c.whatP}</p>
      <ul>
        {c.whatItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="how-to-interpret">{c.interpretH2}</h2>
      <p>{c.interpretP}</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-left border-collapse border border-[#1F2937]">
          <thead className="bg-[#1E293B]">
            <tr>
              {c.tableHeaders.map((h, i) => (
                <th key={i} className="px-4 py-3 border-b border-[#1F2937] font-semibold text-white">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.tableRows.map((row, i) => (
              <tr key={i} className={`${i < c.tableRows.length - 1 ? "border-b border-[#1F2937]/50" : ""} hover:bg-[#1E293B]/50 transition-colors`}>
                <td className="px-4 py-3">{row.range}</td>
                <td className={`px-4 py-3 font-medium ${row.sevClass}`}>{row.sev}</td>
                <td className="px-4 py-3 text-slate-300">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="how-mindbridge-uses-gad7">{c.howH2}</h2>
      <p>{c.howP}</p>

      <h2 id="limitations">{c.limitH2}</h2>
      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>
    </>
  );
}
