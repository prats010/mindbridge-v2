import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Mood Tracker",
    intro: "Emotions are fluid. Keeping track of them is a highly effective cognitive-behavioral technique to identify triggers, validate feelings, and measure the effectiveness of new habits or medications.",
    loggingH2: "Logging your mood",
    loggingP1: <>You can log your mood manually from the <strong>Dashboard</strong> page. MindBridge provides a simple 1-10 slider where 1 represents "Extremely Low" and 10 represents "Extremely High/Positive".</>,
    loggingP2: <>We encourage you to use the optional text area underneath the slider to briefly describe <em>why</em> you feel the way you do. "Got 8 hours of sleep!" or "Struggling with a deadline at work" adds vital context to your score.</>,
    microCalloutTitle: "Micro-Logging",
    microCalloutText: "You don't just have to log manually. MindBridge also runs JavaScript sentiment analysis on your Chat Support messages. If you tell the bot you're having an awful day, that sentiment is subtly factored into your overarching mood profile.",
    readingH2: "Reading your mood chart",
    readingP: "The Dashboard visualizes your exact mood trajectory over the last 14 days using a clean line graph.",
    chartItems: [
      <><strong>X-Axis:</strong> The date of the log.</>,
      <><strong>Y-Axis:</strong> Your 1-10 score.</>,
      <><strong>Baseline (5.0):</strong> We draw a subtle mid-line across the graph. Consistently staying below this line for weeks may correlate with depressive symptoms and should encourage you to take a PHQ-9 screening.</>,
    ],
    aiH2: "How AI uses your mood data",
    aiP: <>Your mood chart is not just a passive display. When you click the "Generate AI Insights" button, Gemini 2.5 Flash analyzes the slope, variance, and notes of your mood data alongside your clinical assessments to provide a comprehensive weekly report.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "मूड ट्रैकर",
    intro: "भावनाएं तरल होती हैं। उन्हें ट्रैक करना ट्रिगर की पहचान, भावनाओं को मान्य करने और नई आदतों या दवाओं की प्रभावशीलता मापने के लिए एक अत्यधिक प्रभावी संज्ञानात्मक-व्यवहारिक तकनीक है।",
    loggingH2: "अपना मूड लॉग करना",
    loggingP1: <>आप <strong>डैशबोर्ड</strong> पेज से मैन्युअल रूप से अपना मूड लॉग कर सकते हैं। MindBridge एक सरल 1-10 स्लाइडर प्रदान करता है जहाँ 1 "बहुत कम" और 10 "बहुत अधिक/सकारात्मक" दर्शाता है।</>,
    loggingP2: <>हम आपको स्लाइडर के नीचे वैकल्पिक टेक्स्ट क्षेत्र का उपयोग करके संक्षेप में यह बताने के लिए प्रोत्साहित करते हैं कि आप <em>क्यों</em> ऐसा महसूस करते हैं। "8 घंटे की नींद आई!" या "काम पर डेडलाइन से जूझ रहा हूँ" आपके स्कोर में महत्वपूर्ण संदर्भ जोड़ता है।</>,
    microCalloutTitle: "माइक्रो-लॉगिंग",
    microCalloutText: "आपको केवल मैन्युअल रूप से लॉग नहीं करना होगा। MindBridge आपके चैट सपोर्ट संदेशों पर JavaScript सेंटिमेंट विश्लेषण भी चलाता है। यदि आप बॉट को बताते हैं कि आपका दिन बहुत बुरा गया, तो वह सेंटिमेंट सूक्ष्म रूप से आपके समग्र मूड प्रोफ़ाइल में जोड़ा जाता है।",
    readingH2: "अपना मूड चार्ट पढ़ना",
    readingP: "डैशबोर्ड एक साफ लाइन ग्राफ का उपयोग करके पिछले 14 दिनों में आपकी सटीक मूड ट्रैजेक्टरी विज़ुअलाइज़ करता है।",
    chartItems: [
      <><strong>X-अक्ष:</strong> लॉग की तारीख।</>,
      <><strong>Y-अक्ष:</strong> आपका 1-10 स्कोर।</>,
      <><strong>बेसलाइन (5.0):</strong> हम ग्राफ में एक सटल मध्य-रेखा खींचते हैं। हफ्तों तक इस रेखा के नीचे रहना अवसादग्रस्त लक्षणों से संबंधित हो सकता है और PHQ-9 स्क्रीनिंग लेने के लिए प्रोत्साहित करना चाहिए।</>,
    ],
    aiH2: "AI आपके मूड डेटा का उपयोग कैसे करता है",
    aiP: <>आपका मूड चार्ट सिर्फ एक निष्क्रिय प्रदर्शन नहीं है। जब आप "AI इनसाइट्स जनरेट करें" बटन पर क्लिक करते हैं, तो Gemini 2.5 Flash आपके नैदानिक मूल्यांकनों के साथ आपके मूड डेटा की ढाल, भिन्नता और नोट्स का विश्लेषण करके एक व्यापक साप्ताहिक रिपोर्ट प्रदान करता है।</>,
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "मूड ट्रॅकर",
    intro: "भावना तरल आहेत. त्यांचा मागोवा घेणे ट्रिगर ओळखण्यासाठी, भावना प्रमाणित करण्यासाठी आणि नवीन सवयी किंवा औषधांची प्रभावीता मोजण्यासाठी एक अत्यंत प्रभावी संज्ञानात्मक-वर्तनात्मक तंत्र आहे.",
    loggingH2: "तुमचा मूड लॉग करणे",
    loggingP1: <>तुम्ही <strong>डॅशबोर्ड</strong> पेजवरून मॅन्युअली तुमचा मूड लॉग करू शकता. MindBridge एक साधा 1-10 स्लाइडर प्रदान करतो जेथे 1 "अत्यंत कमी" आणि 10 "अत्यंत जास्त/सकारात्मक" दर्शवतो.</>,
    loggingP2: <>आम्ही तुम्हाला स्लाइडरच्या खाली पर्यायी टेक्स्ट क्षेत्र वापरून तुम्हाला असे <em>का</em> वाटते हे थोडक्यात वर्णन करण्यास प्रोत्साहित करतो. "8 तासांची झोप मिळाली!" किंवा "कामावर डेडलाइनशी झुंजत आहे" तुमच्या स्कोरला महत्त्वाचा संदर्भ जोडतो.</>,
    microCalloutTitle: "मायक्रो-लॉगिंग",
    microCalloutText: "तुम्हाला फक्त मॅन्युअली लॉग करावे लागणार नाही. MindBridge तुमच्या चॅट सपोर्ट संदेशांवर JavaScript सेंटिमेंट विश्लेषण देखील चालवतो. तुम्ही बॉटला सांगितल्यास की तुमचा दिवस खूप वाईट गेला, ते सेंटिमेंट सूक्ष्मपणे तुमच्या एकंदर मूड प्रोफाइलमध्ये समाविष्ट केले जाते.",
    readingH2: "तुमचा मूड चार्ट वाचणे",
    readingP: "डॅशबोर्ड एक स्वच्छ लाइन ग्राफ वापरून मागील 14 दिवसांतील तुमची अचूक मूड ट्राजेक्टरी दृश्यमान करतो.",
    chartItems: [
      <><strong>X-अक्ष:</strong> लॉगची तारीख.</>,
      <><strong>Y-अक्ष:</strong> तुमचा 1-10 स्कोर.</>,
      <><strong>बेसलाइन (5.0):</strong> आम्ही ग्राफवर एक सूक्ष्म मध्य-रेषा काढतो. आठवडे या रेषेखाली राहिल्यास नैराश्याच्या लक्षणांशी संबंधित असू शकते आणि PHQ-9 स्क्रीनिंग घेण्यास प्रोत्साहित करावे.</>,
    ],
    aiH2: "AI तुमचा मूड डेटा कसा वापरतो",
    aiP: <>तुमचा मूड चार्ट फक्त निष्क्रिय प्रदर्शन नाही. जेव्हा तुम्ही "AI इनसाइट्स तयार करा" बटणावर क्लिक करता, Gemini 2.5 Flash तुमच्या क्लिनिकल मूल्यमापनांसोबत तुमच्या मूड डेटाची उतार, भिन्नता आणि नोट्सचे विश्लेषण करून एक सर्वसमावेशक साप्ताहिक अहवाल प्रदान करतो.</>,
  },
};

export default function MoodTracker() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="logging-your-mood">{c.loggingH2}</h2>
      <p>{c.loggingP1}</p>
      <p>{c.loggingP2}</p>

      <Callout type="info" title={c.microCalloutTitle}>
        {c.microCalloutText}
      </Callout>

      <h2 id="reading-your-chart">{c.readingH2}</h2>
      <p>{c.readingP}</p>
      <ul>
        {c.chartItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="ai-usage">{c.aiH2}</h2>
      <p>{c.aiP}</p>
    </>
  );
}
