import { Callout } from "../../components/docs/Callout";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "AI Chat Support",
    intro: "The core of MindBridge is our conversational AI assistant, powered by Google Gemini 2.5 Flash. It is fundamentally different from standard chatbots because of its highly specific system prompt and local sentiment tracking.",
    howH2: "How the Chat Works",
    howP: "When you send a message, it is packaged alongside your last 30 messages (to maintain context) and sent directly to Gemini. However, before the AI generates a single word, it references an invisible \"System Prompt\":",
    sentimentH2: "Sentiment Analysis",
    sentimentP: "We run a pure-JavaScript sentiment scoring algorithm locally in your browser before the message even hits our servers. Words like \"exhausted,\" \"hopeless,\" and \"angry\" lower the score, while words like \"excited,\" \"calm,\" and \"better\" raise it. This score is saved alongside the encrypted message in Firebase, feeding into your Dashboard insights.",
    crisisH2: "Crisis Detection",
    crisisP: "Safety is non-negotiable. We employ a dual-layered crisis detection mechanism:",
    crisisItems: [
      <><strong>Local Keyword Matching:</strong> If you type high-risk keywords ("kill myself", "want to die", "end it"), the UI intercepts the message immediately and throws the <em>CrisisModal</em> blocking overlay.</>,
      <><strong>AI Contextual Matching:</strong> If the AI infers suicidal ideation contextually (even without specific trigger words), it prepends the hidden <code>[CRISIS]</code> tag to its response, which also triggers the safety overlay.</>,
    ],
    crisisCalloutTitle: "The Crisis Overlay",
    crisisCalloutText: "The Crisis Overlay locks the screen, displays your Trusted Contact's phone number, and provides quick-tap links to national Indian suicide helplines (like iCall and Vandrevala Foundation).",
    historyH2: "Conversation History",
    historyP: "Every time you chat, your messages are securely appended to your private Firebase Cloud Firestore document. They are tied directly to your Google Identity UID. Loading the app pulls the last 30 days of context so the AI remembers what you were struggling with yesterday.",
    voiceH2: "Voice Mode",
    voiceP: <>Sometimes typing is too much. You can tap the Microphone icon to speak into your device. We use the browser's native Web Speech API to transcribe your voice instantly, and the Speech Synthesis API to speak the AI's responses back in a calming voice. Read more on the <a href="/docs/voice-mode" className="text-teal-400">Voice Mode page</a>.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "AI चैट सपोर्ट",
    intro: "MindBridge का मूल हमारा संवादी AI सहायक है, जो Google Gemini 2.5 Flash द्वारा संचालित है। यह अपने अत्यधिक विशिष्ट सिस्टम प्रॉम्प्ट और स्थानीय सेंटिमेंट ट्रैकिंग के कारण मानक चैटबॉट्स से मौलिक रूप से अलग है।",
    howH2: "चैट कैसे काम करती है",
    howP: "जब आप कोई संदेश भेजते हैं, तो उसे आपके पिछले 30 संदेशों (संदर्भ बनाए रखने के लिए) के साथ पैकेज करके सीधे Gemini को भेजा जाता है। हालांकि, AI एक भी शब्द उत्पन्न करने से पहले, एक अदृश्य \"System Prompt\" का संदर्भ लेता है:",
    sentimentH2: "सेंटिमेंट विश्लेषण",
    sentimentP: "संदेश हमारे सर्वर तक पहुंचने से पहले ही हम आपके ब्राउज़र में स्थानीय रूप से एक शुद्ध-JavaScript सेंटिमेंट स्कोरिंग एल्गोरिदम चलाते हैं। \"exhausted,\" \"hopeless,\" और \"angry\" जैसे शब्द स्कोर कम करते हैं, जबकि \"excited,\" \"calm,\" और \"better\" जैसे शब्द इसे बढ़ाते हैं। यह स्कोर Firebase में एन्क्रिप्टेड संदेश के साथ सहेजा जाता है, जो आपके डैशबोर्ड इनसाइट्स में योगदान देता है।",
    crisisH2: "संकट पहचान",
    crisisP: "सुरक्षा से कोई समझौता नहीं। हम दो-स्तरीय संकट पहचान तंत्र का उपयोग करते हैं:",
    crisisItems: [
      <><strong>स्थानीय कीवर्ड मिलान:</strong> यदि आप उच्च-जोखिम कीवर्ड टाइप करते हैं ("kill myself", "want to die", "end it"), UI तुरंत संदेश को इंटरसेप्ट करता है और <em>CrisisModal</em> ब्लॉकिंग ओवरले दिखाता है।</>,
      <><strong>AI प्रासंगिक मिलान:</strong> यदि AI संदर्भगत रूप से आत्मघाती विचार का अनुमान लगाता है (विशिष्ट ट्रिगर शब्दों के बिना भी), तो यह अपनी प्रतिक्रिया में छिपा हुआ <code>[CRISIS]</code> टैग जोड़ता है, जो सुरक्षा ओवरले को भी ट्रिगर करता है।</>,
    ],
    crisisCalloutTitle: "संकट ओवरले",
    crisisCalloutText: "संकट ओवरले स्क्रीन को लॉक कर देता है, आपके विश्वसनीय संपर्क का फोन नंबर दिखाता है, और राष्ट्रीय भारतीय आत्महत्या हेल्पलाइन (जैसे iCall और Vandrevala Foundation) के लिए क्विक-टैप लिंक प्रदान करता है।",
    historyH2: "बातचीत का इतिहास",
    historyP: "हर बार जब आप चैट करते हैं, तो आपके संदेश सुरक्षित रूप से आपके निजी Firebase Cloud Firestore दस्तावेज़ में जोड़े जाते हैं। वे सीधे आपके Google Identity UID से जुड़े होते हैं। ऐप लोड करने पर पिछले 30 दिनों का संदर्भ आता है, इसलिए AI को याद रहता है कि आप कल किस चीज़ से जूझ रहे थे।",
    voiceH2: "वॉइस मोड",
    voiceP: <>कभी-कभी टाइपिंग बहुत ज़्यादा लगती है। आप माइक्रोफ़ोन आइकन टैप करके अपने डिवाइस में बोल सकते हैं। हम ब्राउज़र के मूल Web Speech API का उपयोग करके आपकी आवाज़ को तुरंत ट्रांसक्राइब करते हैं, और एक शांत आवाज़ में AI की प्रतिक्रियाएं वापस बोलने के लिए Speech Synthesis API का उपयोग करते हैं। <a href="/info/voice-mode" className="text-teal-400">वॉइस मोड पेज</a> पर अधिक पढ़ें।</>,
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "AI चॅट सपोर्ट",
    intro: "MindBridge चा मूळ भाग आमचा संभाषणात्मक AI सहाय्यक आहे, जो Google Gemini 2.5 Flash द्वारे चालवला जातो. हे त्याच्या अत्यंत विशिष्ट सिस्टम प्रॉम्प्ट आणि स्थानिक सेंटिमेंट ट्रॅकिंगमुळे मानक चॅटबॉट्सपेक्षा मूलतः वेगळे आहे.",
    howH2: "चॅट कसे काम करते",
    howP: "जेव्हा तुम्ही संदेश पाठवता, तेव्हा तो संदर्भ राखण्यासाठी तुमच्या शेवटच्या 30 संदेशांसह पॅकेज केला जातो आणि थेट Gemini ला पाठवला जातो. तथापि, AI एकही शब्द निर्माण करण्यापूर्वी, ते एका अदृश्य \"System Prompt\" चा संदर्भ घेते:",
    sentimentH2: "सेंटिमेंट विश्लेषण",
    sentimentP: "संदेश आमच्या सर्व्हरवर पोहोचण्यापूर्वीच आम्ही तुमच्या ब्राउझरमध्ये स्थानिकरित्या एक शुद्ध-JavaScript सेंटिमेंट स्कोरिंग अल्गोरिदम चालवतो. \"exhausted,\" \"hopeless,\" आणि \"angry\" सारखे शब्द स्कोर कमी करतात, तर \"excited,\" \"calm,\" आणि \"better\" सारखे शब्द तो वाढवतात. हा स्कोर Firebase मधील एन्क्रिप्टेड संदेशासोबत जतन केला जातो, तुमच्या डॅशबोर्ड इनसाइट्समध्ये योगदान देतो.",
    crisisH2: "संकट शोध",
    crisisP: "सुरक्षा बाबत तडजोड नाही. आम्ही दुहेरी-स्तरीय संकट शोध यंत्रणा वापरतो:",
    crisisItems: [
      <><strong>स्थानिक कीवर्ड जुळणी:</strong> तुम्ही उच्च-जोखीम कीवर्ड टाइप केल्यास ("kill myself", "want to die", "end it"), UI तत्काळ संदेश इंटरसेप्ट करतो आणि <em>CrisisModal</em> ब्लॉकिंग ओव्हरले दाखवतो.</>,
      <><strong>AI संदर्भात्मक जुळणी:</strong> AI संदर्भानुसार आत्मघाती विचार अनुमान करत असल्यास (विशिष्ट ट्रिगर शब्दांशिवायही), ते त्याच्या प्रतिसादात लपलेला <code>[CRISIS]</code> टॅग जोडते, जे सुरक्षा ओव्हरले देखील ट्रिगर करते.</>,
    ],
    crisisCalloutTitle: "संकट ओव्हरले",
    crisisCalloutText: "संकट ओव्हरले स्क्रीन लॉक करतो, तुमच्या विश्वासू संपर्काचा फोन नंबर दाखवतो, आणि राष्ट्रीय भारतीय आत्महत्या हेल्पलाइन (जसे iCall आणि Vandrevala Foundation) साठी क्विक-टॅप लिंक प्रदान करतो.",
    historyH2: "संभाषण इतिहास",
    historyP: "प्रत्येक वेळी तुम्ही चॅट करता, तुमचे संदेश सुरक्षितपणे तुमच्या खाजगी Firebase Cloud Firestore दस्तऐवजात जोडले जातात. ते थेट तुमच्या Google Identity UID शी जोडलेले असतात. ॲप लोड केल्यावर शेवटच्या 30 दिवसांचा संदर्भ येतो, त्यामुळे AI ला आठवते की तुम्ही काल कशाशी झुंजत होता.",
    voiceH2: "व्हॉइस मोड",
    voiceP: <>काहीवेळा टाइपिंग खूप जड वाटते. तुम्ही मायक्रोफोन आयकन टॅप करून तुमच्या डिव्हाइसमध्ये बोलू शकता. आम्ही ब्राउझरच्या मूळ Web Speech API चा वापर करून तुमचा आवाज त्वरित ट्रान्सक्राइब करतो, आणि शांत आवाजात AI च्या प्रतिसाद परत बोलण्यासाठी Speech Synthesis API वापरतो. <a href="/info/voice-mode" className="text-teal-400">व्हॉइस मोड पेज</a> वर अधिक वाचा.</>,
  },
};

export default function AIChatSupport() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="how-the-chat-works">{c.howH2}</h2>
      <p>{c.howP}</p>

      <CodeBlock
        language="javascript"
        code={`// The strict psychological guardrails placed on Gemini
const SYSTEM_PROMPT = \`
You are MindBridge, an empathetic, non-judgmental mental health companion.
1. NEVER offer clinical advice, diagnoses, or medication recommendations.
2. If the user mentions self-harm, immediately prepend your response with [CRISIS].
3. Validate emotions before offering coping mechanisms.
4. Keep responses conversational, concise, and grounded in DBT/CBT principles.
\`;`}
      />

      <h2 id="sentiment-analysis">{c.sentimentH2}</h2>
      <p>{c.sentimentP}</p>

      <h2 id="crisis-detection">{c.crisisH2}</h2>
      <p>{c.crisisP}</p>
      <ol>
        {c.crisisItems.map((item, i) => <li key={i}>{item}</li>)}
      </ol>

      <Callout type="danger" title={c.crisisCalloutTitle}>
        {c.crisisCalloutText}
      </Callout>

      <h2 id="conversation-history">{c.historyH2}</h2>
      <p>{c.historyP}</p>

      <h2 id="voice-mode">{c.voiceH2}</h2>
      <p>{c.voiceP}</p>
    </>
  );
}
