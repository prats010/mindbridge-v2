import { Steps, Step } from "../../components/docs/Steps";
import { Badge } from "../../components/docs/Badge";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "AI Insights Dashboard",
    intro: "The AI Insights feature is the analytical brain of MindBridge. Instead of leaving you to interpret raw graphs and assessment scores by yourself, MindBridge uses Google Gemini to synthesize your data into a clear, actionable weekly psychological report.",
    whatH2: "What are AI Insights?",
    whatP: "Unlike the Chat Support feature (which is tactical and immediate), AI Insights is strategic to your mental well-being over time. It reviews your data and searches for patterns you might have missed.",
    howH2: "How insights are generated",
    steps: [
      { title: "Data Aggregation", desc: "MindBridge fetches your last 14 days of mood logs, text-sentiment logs, and your 3 most recent clinical assessments (PHQ-9 and GAD-7) from secure Firebase storage." },
      { title: "Format and Payload construction", desc: "This raw data is simplified and securely bundled into a JSON payload. Personal identifiers (like your exact messages) are heavily limited in this contextual payload." },
      { title: "Gemini 2.5 Analysis", desc: "The payload is sent to Google Gemini 2.5 Flash with a strict medical-grade system prompt guiding the model to act as a psychological analyst, writing a structured Markdown report highlighting variances and suggesting CBT/DBT frameworks." },
    ],
    understandH2: "Understanding your report",
    understandP: "The generated report is heavily structured so it is easy to read. You will typically see:",
    sections: [
      <><strong>Observed Patterns:</strong> "Your mood tends to dip significantly on Thursdays, correlating with your notes about weekly sprint deadlines."</>,
      <><strong>Assessment Context:</strong> "Your recent GAD-7 score moved from 12 (Moderate) to 8 (Mild) over the last three weeks, indicating a positive trend in anxiety management."</>,
      <><strong>Action Plan:</strong> A short, bulleted list of immediate, low-friction coping strategies (like 5-4-3-2-1 grounding) specifically targeted at the negative emotions you've charted recently.</>,
      <><strong>Focus Area:</strong> One primary mental health goal for you to work on for the upcoming week.</>,
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "AI इनसाइट्स डैशबोर्ड",
    intro: "AI इनसाइट्स फीचर MindBridge का विश्लेषणात्मक दिमाग है। आपको कच्चे ग्राफ और मूल्यांकन स्कोर खुद समझने के लिए छोड़ने के बजाय, MindBridge आपके डेटा को स्पष्ट, कार्रवाई योग्य साप्ताहिक मनोवैज्ञानिक रिपोर्ट में संश्लेषित करने के लिए Google Gemini का उपयोग करता है।",
    whatH2: "AI इनसाइट्स क्या हैं?",
    whatP: "चैट सपोर्ट फीचर (जो सामरिक और तत्काल है) के विपरीत, AI इनसाइट्स समय के साथ आपकी मानसिक भलाई के लिए रणनीतिक है। यह आपके डेटा की समीक्षा करता है और उन पैटर्न की खोज करता है जो आपने शायद नहीं देखे।",
    howH2: "इनसाइट्स कैसे उत्पन्न होते हैं",
    steps: [
      { title: "डेटा एकत्रीकरण", desc: "MindBridge सुरक्षित Firebase स्टोरेज से आपके पिछले 14 दिनों के मूड लॉग, टेक्स्ट-सेंटिमेंट लॉग और आपके 3 सबसे हालिया नैदानिक मूल्यांकन (PHQ-9 और GAD-7) प्राप्त करता है।" },
      { title: "प्रारूप और पेलोड निर्माण", desc: "इस कच्चे डेटा को सरल बनाया जाता है और JSON पेलोड में सुरक्षित रूप से बांधा जाता है। व्यक्तिगत पहचानकर्ता (जैसे आपके सटीक संदेश) इस संदर्भात्मक पेलोड में बहुत सीमित हैं।" },
      { title: "Gemini 2.5 विश्लेषण", desc: "पेलोड को Google Gemini 2.5 Flash को कड़े चिकित्सा-ग्रेड सिस्टम प्रॉम्प्ट के साथ भेजा जाता है जो मॉडल को मनोवैज्ञानिक विश्लेषक के रूप में कार्य करने के लिए, भिन्नताओं को उजागर करते हुए और CBT/DBT फ्रेमवर्क सुझाते हुए एक संरचित Markdown रिपोर्ट लिखने के लिए निर्देशित करता है।" },
    ],
    understandH2: "अपनी रिपोर्ट समझना",
    understandP: "उत्पन्न रिपोर्ट बहुत संरचित है इसलिए पढ़ना आसान है। आप आमतौर पर देखेंगे:",
    sections: [
      <><strong>अवलोकित पैटर्न:</strong> "आपका मूड गुरुवार को काफी गिरता है, जो साप्ताहिक स्प्रिंट डेडलाइन के बारे में आपके नोट्स से संबंधित है।"</>,
      <><strong>मूल्यांकन संदर्भ:</strong> "आपका हालिया GAD-7 स्कोर पिछले तीन हफ्तों में 12 (मध्यम) से 8 (हल्का) हो गया, जो चिंता प्रबंधन में सकारात्मक रुझान दर्शाता है।"</>,
      <><strong>कार्य योजना:</strong> तत्काल, कम-ऊर्जा वाली कॉपिंग रणनीतियों (जैसे 5-4-3-2-1 ग्राउंडिंग) की एक छोटी, बुलेटेड सूची जो विशेष रूप से आपकी हाल की नकारात्मक भावनाओं पर लक्षित है।</>,
      <><strong>फोकस क्षेत्र:</strong> आने वाले हफ्ते के लिए आपके लिए काम करने का एक प्राथमिक मानसिक स्वास्थ्य लक्ष्य।</>,
    ],
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "AI इनसाइट्स डॅशबोर्ड",
    intro: "AI इनसाइट्स वैशिष्ट्य हे MindBridge चे विश्लेषणात्मक मेंदू आहे. तुम्हाला कच्चे आलेख आणि मूल्यमापन स्कोर स्वतः अर्थ लावण्यासाठी सोडण्याऐवजी, MindBridge तुमच्या डेटाला स्पष्ट, कृतियोग्य साप्ताहिक मनोवैज्ञानिक अहवालात संश्लेषित करण्यासाठी Google Gemini वापरतो.",
    whatH2: "AI इनसाइट्स म्हणजे काय?",
    whatP: "चॅट सपोर्ट वैशिष्ट्याच्या विपरीत (जे सामरिक आणि तात्काळ आहे), AI इनसाइट्स कालांतराने तुमच्या मानसिक कल्याणासाठी धोरणात्मक आहे. ते तुमचा डेटा आढावा घेते आणि तुम्ही कदाचित चुकवले असतील असे नमुने शोधते.",
    howH2: "इनसाइट्स कसे तयार होतात",
    steps: [
      { title: "डेटा एकत्रीकरण", desc: "MindBridge सुरक्षित Firebase स्टोरेजमधून तुमचे मागील 14 दिवसांचे मूड लॉग, टेक्स्ट-सेंटिमेंट लॉग आणि तुमचे 3 सर्वात अलीकडील क्लिनिकल मूल्यमापन (PHQ-9 आणि GAD-7) आणतो." },
      { title: "स्वरूप आणि पेलोड बांधणी", desc: "हा कच्चा डेटा सरल केला जातो आणि JSON पेलोडमध्ये सुरक्षितपणे बांधला जातो. वैयक्तिक ओळखकर्ते (तुमच्या अचूक संदेशांसारखे) या संदर्भात्मक पेलोडमध्ये मोठ्या प्रमाणात मर्यादित आहेत." },
      { title: "Gemini 2.5 विश्लेषण", desc: "पेलोड Google Gemini 2.5 Flash ला कडक वैद्यकीय-श्रेणी सिस्टम प्रॉम्प्टसह पाठवला जातो जे मॉडेलला मनोवैज्ञानिक विश्लेषक म्हणून कार्य करण्यास, फरक अधोरेखित करणारा आणि CBT/DBT फ्रेमवर्क सुचवणारा संरचित Markdown अहवाल लिहिण्यास मार्गदर्शन करतो." },
    ],
    understandH2: "तुमचा अहवाल समजून घेणे",
    understandP: "तयार केलेला अहवाल खूप संरचित आहे त्यामुळे वाचणे सोपे आहे. तुम्ही साधारणत: पाहाल:",
    sections: [
      <><strong>निरीक्षित नमुने:</strong> "तुमचा मूड गुरुवारी लक्षणीयरित्या घसरतो, जे साप्ताहिक स्प्रिंट डेडलाइनबद्दलच्या तुमच्या नोट्सशी संबंधित आहे."</>,
      <><strong>मूल्यमापन संदर्भ:</strong> "तुमचा अलीकडील GAD-7 स्कोर मागील तीन आठवड्यांत 12 (मध्यम) वरून 8 (सौम्य) वर गेला, चिंता व्यवस्थापनात सकारात्मक ट्रेंड दर्शवतो."</>,
      <><strong>कृती योजना:</strong> तात्काळ, कमी-घर्षण कोपिंग धोरणांची (जसे 5-4-3-2-1 ग्राउंडिंग) एक छोटी, बुलेट केलेली यादी विशेषतः तुम्ही अलीकडे चार्ट केलेल्या नकारात्मक भावनांवर लक्ष्यित.</>,
      <><strong>फोकस क्षेत्र:</strong> येणाऱ्या आठवड्यासाठी तुमच्यासाठी काम करण्याचे एक प्राथमिक मानसिक आरोग्य ध्येय.</>,
    ],
  },
};

export default function AIInsights() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1} <Badge type="ai">Powered by Gemini</Badge></h1>

      <p>{c.intro}</p>

      <h2 id="what-are-ai-insights">{c.whatH2}</h2>
      <p>{c.whatP}</p>

      <h2 id="how-insights-are-generated">{c.howH2}</h2>
      <Steps>
        {c.steps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <h2 id="understanding-your-report">{c.understandH2}</h2>
      <p>{c.understandP}</p>
      <ul>
        {c.sections.map((section, i) => <li key={i}>{section}</li>)}
      </ul>
    </>
  );
}
