import { Badge } from "../../components/docs/Badge";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Built with Gemini",
    intro: "MindBridge is built on top of Google's Gemini 2.5 Flash, a highly capable multimodal generative AI model. We specifically chose Gemini for MindBridge for the following reasons:",
    whyH2: "Why Gemini?",
    reasons: [
      <><strong>Safety-first design:</strong> Gemini's safety filters and layered safety features make it the most responsible choice for a healthcare-adjacent application.</>,
      <><strong>Speed:</strong> Flash is optimized for speed, which is important in an app centered around synchronous conversation.</>,
      <><strong>Deep reasoning:</strong> Mental health assessment interpretation requires sophisticated understanding of context and nuance.</>,
      <><strong>Google ecosystem integration:</strong> The project uses Firebase (a Google product) for backend, making a unified API architecture natural.</>,
    ],
    usageH2: "How Gemini is used in MindBridge",
    usages: [
      { feature: "AI Chat Support", badge: "Core", desc: "Every conversational exchange is backed by Gemini. The system prompt is carefully engineered to restrict responses to empathetic, non-clinical support." },
      { feature: "Assessment Interpretation", badge: "Insights", desc: "After you submit a PHQ-9 or GAD-7 score, the numerical results are passed to Gemini to generate a natural-language explanation and coping strategies." },
      { feature: "AI Insights Dashboard", badge: "Analytics", desc: "Your 14-day mood and sentiment history, alongside recent assessments, form the context that Gemini analyzes to write your weekly psychological report." },
    ],
    safetyH2: "AI Safety & Responsibility",
    safetyP: "We have not disabled Gemini's built-in safety filters. In addition to its defaults, we further constrain the model via our System Prompt to prevent it from ever providing medical diagnoses, medication recommendations, or triggering dangerous thoughts.",
    privacyH2: "Privacy Considerations",
    privacyP: "Your individual chat messages and personal details are NOT passed directly to Gemini. For the AI Insights report, only an aggregated statistical summary of your activity (not the messages themselves) is included in the Gemini prompt payload.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "Gemini के साथ बनाया",
    intro: "MindBridge Google के Gemini 2.5 Flash पर बनाया गया है, जो एक अत्यधिक सक्षम मल्टीमोडल जेनेरेटिव AI मॉडल है। हमने MindBridge के लिए विशेष रूप से Gemini को निम्नलिखित कारणों से चुना:",
    whyH2: "Gemini क्यों?",
    reasons: [
      <><strong>सुरक्षा-प्रथम डिज़ाइन:</strong> Gemini के सुरक्षा फ़िल्टर और स्तरित सुरक्षा सुविधाएं इसे स्वास्थ्य-संबंधी अनुप्रयोग के लिए सबसे जिम्मेदार विकल्प बनाती हैं।</>,
      <><strong>गति:</strong> Flash गति के लिए अनुकूलित है, जो समकालिक बातचीत केंद्रित ऐप में महत्वपूर्ण है।</>,
      <><strong>गहरा तर्क:</strong> मानसिक स्वास्थ्य मूल्यांकन की व्याख्या के लिए संदर्भ और सूक्ष्मता की परिष्कृत समझ की आवश्यकता होती है।</>,
      <><strong>Google इकोसिस्टम एकीकरण:</strong> परियोजना बैकएंड के लिए Firebase (एक Google उत्पाद) का उपयोग करती है, जिससे एकीकृत API आर्किटेक्चर स्वाभाविक है।</>,
    ],
    usageH2: "MindBridge में Gemini का उपयोग",
    usages: [
      { feature: "AI चैट सपोर्ट", badge: "Core", desc: "प्रत्येक संवादी आदान-प्रदान Gemini द्वारा समर्थित है। सिस्टम प्रॉम्प्ट सावधानीपूर्वक सहानुभूतिपूर्ण, गैर-नैदानिक समर्थन तक प्रतिक्रियाओं को प्रतिबंधित करने के लिए इंजीनियर किया गया है।" },
      { feature: "मूल्यांकन व्याख्या", badge: "Insights", desc: "PHQ-9 या GAD-7 स्कोर जमा करने के बाद, संख्यात्मक परिणाम प्राकृतिक-भाषा स्पष्टीकरण और कॉपिंग रणनीतियां उत्पन्न करने के लिए Gemini को पास किए जाते हैं।" },
      { feature: "AI इनसाइट्स डैशबोर्ड", badge: "Analytics", desc: "आपका 14-दिन का मूड और सेंटिमेंट इतिहास, हालिया मूल्यांकनों के साथ, वह संदर्भ बनाते हैं जिसे Gemini आपकी साप्ताहिक मनोवैज्ञानिक रिपोर्ट लिखने के लिए विश्लेषण करता है।" },
    ],
    safetyH2: "AI सुरक्षा और जिम्मेदारी",
    safetyP: "हमने Gemini के अंतर्निहित सुरक्षा फ़िल्टर को अक्षम नहीं किया है। इसके डिफ़ॉल्ट के अलावा, हम आगे मॉडल को अपने System Prompt के माध्यम से प्रतिबंधित करते हैं ताकि यह कभी चिकित्सा निदान, दवा सिफारिशें न दे, या खतरनाक विचारों को ट्रिगर न करे।",
    privacyH2: "गोपनीयता विचार",
    privacyP: "आपके व्यक्तिगत चैट संदेश और व्यक्तिगत विवरण सीधे Gemini को पास नहीं किए जाते। AI इनसाइट्स रिपोर्ट के लिए, Gemini प्रॉम्प्ट पेलोड में केवल आपकी गतिविधि का एकत्रित सांख्यिकीय सारांश (संदेश स्वयं नहीं) शामिल है।",
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "Gemini सह बांधले",
    intro: "MindBridge Google च्या Gemini 2.5 Flash वर बांधले आहे, एक अत्यंत सक्षम मल्टीमोडल जेनेरेटिव्ह AI मॉडेल. आम्ही MindBridge साठी विशेषतः Gemini खालील कारणांसाठी निवडला:",
    whyH2: "Gemini का?",
    reasons: [
      <><strong>सुरक्षा-प्रथम डिझाइन:</strong> Gemini च्या सुरक्षा फिल्टर आणि स्तरित सुरक्षा वैशिष्ट्ये आरोग्य-संबंधित ॲप्लिकेशनसाठी सर्वात जबाबदार निवड बनवतात.</>,
      <><strong>गती:</strong> Flash गतीसाठी अनुकूलित आहे, जे समकालिक संभाषण केंद्रित ॲपमध्ये महत्त्वाचे आहे.</>,
      <><strong>सखोल तर्क:</strong> मानसिक आरोग्य मूल्यमापन स्पष्टीकरणासाठी संदर्भ आणि सूक्ष्मतेची परिष्कृत समज आवश्यक आहे.</>,
      <><strong>Google इकोसिस्टम एकीकरण:</strong> प्रकल्प बॅकएंडसाठी Firebase (एक Google उत्पादन) वापरतो, एकीकृत API आर्किटेक्चर नैसर्गिक बनवतो.</>,
    ],
    usageH2: "MindBridge मध्ये Gemini कसा वापरला जातो",
    usages: [
      { feature: "AI चॅट सपोर्ट", badge: "Core", desc: "प्रत्येक संभाषणात्मक देवाणघेवाण Gemini द्वारे समर्थित आहे. सिस्टम प्रॉम्प्ट सहानुभूतीपूर्ण, गैर-क्लिनिकल सहाय्यापुरते प्रतिसाद प्रतिबंधित करण्यासाठी काळजीपूर्वक तयार केले आहे." },
      { feature: "मूल्यमापन स्पष्टीकरण", badge: "Insights", desc: "PHQ-9 किंवा GAD-7 स्कोर सबमिट केल्यानंतर, नैसर्गिक-भाषा स्पष्टीकरण आणि कोपिंग धोरणे तयार करण्यासाठी संख्यात्मक परिणाम Gemini ला दिले जातात." },
      { feature: "AI इनसाइट्स डॅशबोर्ड", badge: "Analytics", desc: "तुमचा 14-दिवसांचा मूड आणि सेंटिमेंट इतिहास, अलीकडील मूल्यमापनांसोबत, Gemini तुमचा साप्ताहिक मनोवैज्ञानिक अहवाल लिहिण्यासाठी विश्लेषण करण्याचा संदर्भ बनवतात." },
    ],
    safetyH2: "AI सुरक्षा आणि जबाबदारी",
    safetyP: "आम्ही Gemini चे अंगभूत सुरक्षा फिल्टर अक्षम केले नाहीत. त्याच्या डिफ़ॉल्टच्या व्यतिरिक्त, आम्ही आमच्या System Prompt द्वारे मॉडेलला आणखी मर्यादित करतो जेणेकरून ते कधीही वैद्यकीय निदान, औषध शिफारसी देणार नाही, किंवा धोकादायक विचार ट्रिगर करणार नाही.",
    privacyH2: "गोपनीयतेचे विचार",
    privacyP: "तुमचे वैयक्तिक चॅट संदेश आणि वैयक्तिक तपशील थेट Gemini ला दिले जात नाहीत. AI इनसाइट्स अहवालासाठी, Gemini प्रॉम्प्ट पेलोडमध्ये फक्त तुमच्या क्रियाकलापाचा एकत्रित सांख्यिकीय सारांश (संदेश स्वतः नाही) समाविष्ट आहे.",
  },
};

export default function BuiltWithGemini() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1} <Badge type="ai">Gemini</Badge></h1>

      <p>{c.intro}</p>

      <h2 id="why-gemini">{c.whyH2}</h2>
      <ul>
        {c.reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h2 id="how-gemini-is-used">{c.usageH2}</h2>
      {c.usages.map((usage, i) => (
        <div key={i} className="mb-6 p-4 rounded-xl border border-[#1F2937] bg-[#1E293B]/50">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-white font-semibold text-base m-0">{usage.feature}</h3>
            <Badge type="ai">{usage.badge}</Badge>
          </div>
          <p className="text-slate-300 text-sm m-0">{usage.desc}</p>
        </div>
      ))}

      <h2 id="ai-safety">{c.safetyH2}</h2>
      <p>{c.safetyP}</p>

      <h2 id="privacy">{c.privacyH2}</h2>
      <p>{c.privacyP}</p>
    </>
  );
}
