import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "What is MindBridge?",
    intro: "MindBridge is an intelligent, accessible mental health companion built to bridge the gap between people in distress and the psychological support they need. Powered by Google Gemini AI, MindBridge offers a private, non-judgmental space to express your feelings, track your mood, and take scientifically validated mental health screenings.",
    calloutTitle: "Not a Replacement for Professional Care",
    calloutText: <>MindBridge is designed to provide immediate support, emotional tracking, and self-guided screening. It is <strong>not</strong> a substitute for a licensed therapist, psychiatrist, or medical professional. If you are experiencing a severe mental health crisis, please reach out to emergency services immediately.</>,
    coreCapH2: "Core Capabilities",
    coreCapIntro: "MindBridge was built with a comprehensive toolkit designed to foster mental well-being:",
    caps: [
      <><strong>AI Chat Support:</strong> Talk naturally about your day, your stress, or your anxieties. The Gemini-powered assistant is fine-tuned to listen with empathy and offer grounding techniques without rushing to "solve" your problems.</>,
      <><strong>Clinical Screenings:</strong> Take the PHQ-9 (Depression) and GAD-7 (Anxiety) assessments directly in the app.</>,
      <><strong>AI Score Interpretation:</strong> Instead of leaving you with just a number, Gemini analyzes your assessment scores and provides tailored coping strategies.</>,
      <><strong>Daily Mood Tracker:</strong> Keep a record of your daily emotional state to identify triggers and trends over time.</>,
      <><strong>Crisis Detection:</strong> Built-in safeguards instantly detect phrases related to self-harm and automatically present the user with a pre-configured Trusted Contact and national crisis hotlines.</>,
      <><strong>Voice Interaction:</strong> Speak your thoughts aloud using the Web Speech API, and listen to the AI's responses for a completely hands-free, conversational experience.</>,
    ],
    whoH2: "Who is it for?",
    whoText: "MindBridge is designed for anyone navigating the complexities of modern life. Whether you are a student facing exam pressure, a working professional dealing with burnout, or simply someone going through a tough week, MindBridge provides a safe, anonymous outlet. We built this specifically keeping in mind the 150+ million people in India requiring mental health care interventions who currently lack access.",
    notH2: "What MindBridge is NOT",
    notCalloutTitle: "Important Limitations",
    notCaps: [
      <><strong>Not a therapist:</strong> MindBridge cannot build a long-term clinical treatment plan.</>,
      <><strong>Not for emergencies:</strong> The AI cannot dispatch emergency services to your location.</>,
      <><strong>Not a diagnostic tool:</strong> The PHQ-9 and GAD-7 screenings are indicative, not definitive medical diagnoses.</>,
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "MindBridge क्या है?",
    intro: "MindBridge एक बुद्धिमान, सुलभ मानसिक स्वास्थ्य साथी है जो संकट में लोगों और उन्हें आवश्यक मनोवैज्ञानिक सहायता के बीच की खाई को पाटने के लिए बनाया गया है। Google Gemini AI द्वारा संचालित, MindBridge आपकी भावनाएं व्यक्त करने, मूड ट्रैक करने और वैज्ञानिक रूप से सत्यापित मानसिक स्वास्थ्य स्क्रीनिंग लेने के लिए एक निजी, निर्णय-मुक्त स्थान प्रदान करता है।",
    calloutTitle: "पेशेवर देखभाल का विकल्प नहीं",
    calloutText: <>MindBridge तात्काल सहायता, भावनात्मक ट्रैकिंग और स्व-निर्देशित स्क्रीनिंग प्रदान करने के लिए डिज़ाइन किया गया है। यह किसी लाइसेंस प्राप्त थेरेपिस्ट, मनोचिकित्सक या चिकित्सा पेशेवर का <strong>विकल्प नहीं</strong> है। यदि आप गंभीर मानसिक स्वास्थ्य संकट का सामना कर रहे हैं, तो कृपया तुरंत आपातकालीन सेवाओं से संपर्क करें।</>,
    coreCapH2: "मुख्य क्षमताएं",
    coreCapIntro: "MindBridge को मानसिक स्वास्थ्य को बढ़ावा देने के लिए व्यापक टूलकिट के साथ बनाया गया है:",
    caps: [
      <><strong>AI चैट सपोर्ट:</strong> अपने दिन, तनाव या चिंताओं के बारे में स्वाभाविक रूप से बात करें। Gemini-संचालित सहायक सहानुभूति के साथ सुनने और आपकी समस्याओं को "हल" करने की जल्दी किए बिना ग्राउंडिंग तकनीकें प्रदान करने के लिए ट्यून किया गया है।</>,
      <><strong>क्लिनिकल स्क्रीनिंग:</strong> PHQ-9 (अवसाद) और GAD-7 (चिंता) मूल्यांकन सीधे ऐप में लें।</>,
      <><strong>AI स्कोर व्याख्या:</strong> आपको सिर्फ एक नंबर देने के बजाय, Gemini आपके मूल्यांकन स्कोर का विश्लेषण करके अनुकूलित कॉपिंग रणनीतियां प्रदान करता है।</>,
      <><strong>दैनिक मूड ट्रैकर:</strong> ट्रिगर और रुझानों की पहचान करने के लिए समय के साथ अपनी दैनिक भावनात्मक स्थिति का रिकॉर्ड रखें।</>,
      <><strong>संकट पहचान:</strong> अंतर्निहित सुरक्षा उपाय तुरंत आत्म-नुकसान से संबंधित वाक्यांशों का पता लगाते हैं और उपयोगकर्ता को पूर्व-कॉन्फ़िगर विश्वसनीय संपर्क और राष्ट्रीय संकट हॉटलाइन प्रस्तुत करते हैं।</>,
      <><strong>वॉइस इंटरैक्शन:</strong> Web Speech API का उपयोग करके अपने विचार ज़ोर से बोलें, और पूरी तरह हैंड्स-फ्री, बातचीत के अनुभव के लिए AI की प्रतिक्रियाएं सुनें।</>,
    ],
    whoH2: "यह किसके लिए है?",
    whoText: "MindBridge आधुनिक जीवन की जटिलताओं से गुज़र रहे किसी भी व्यक्ति के लिए डिज़ाइन किया गया है। चाहे आप परीक्षा के दबाव का सामना करने वाले छात्र हों, बर्नआउट से जूझते कामकाजी पेशेवर हों, या बस किसी कठिन हफ्ते से गुज़र रहे व्यक्ति हों, MindBridge एक सुरक्षित, गुमनाम आउटलेट प्रदान करता है। हमने इसे विशेष रूप से भारत के 15 करोड़ से अधिक लोगों को ध्यान में रखते हुए बनाया है जो मानसिक स्वास्थ्य देखभाल तक पहुंच से वंचित हैं।",
    notH2: "MindBridge क्या नहीं है",
    notCalloutTitle: "महत्वपूर्ण सीमाएं",
    notCaps: [
      <><strong>थेरेपिस्ट नहीं:</strong> MindBridge दीर्घकालिक नैदानिक उपचार योजना नहीं बना सकता।</>,
      <><strong>आपात स्थितियों के लिए नहीं:</strong> AI आपके स्थान पर आपातकालीन सेवाएं नहीं भेज सकता।</>,
      <><strong>निदान उपकरण नहीं:</strong> PHQ-9 और GAD-7 स्क्रीनिंग सांकेतिक हैं, निश्चित चिकित्सा निदान नहीं।</>,
    ],
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "MindBridge म्हणजे काय?",
    intro: "MindBridge हा एक बुद्धिमान, सुलभ मानसिक आरोग्य साथीदार आहे जो संकटात असलेल्या लोकांना आणि त्यांना आवश्यक असलेल्या मनोवैज्ञानिक सहाय्याला जोडण्यासाठी बनवला आहे. Google Gemini AI द्वारे चालवलेला, MindBridge तुमच्या भावना व्यक्त करण्यासाठी, मूड ट्रॅक करण्यासाठी आणि वैज्ञानिकदृष्ट्या प्रमाणित मानसिक आरोग्य स्क्रीनिंग घेण्यासाठी एक खाजगी, निर्णयमुक्त जागा देतो.",
    calloutTitle: "व्यावसायिक काळजीचा पर्याय नाही",
    calloutText: <>MindBridge तात्काळ सहाय्य, भावनिक ट्रॅकिंग आणि स्व-मार्गदर्शित स्क्रीनिंग प्रदान करण्यासाठी डिझाइन केला आहे. हे परवानाधारक थेरपिस्ट, मनोचिकित्सक किंवा वैद्यकीय व्यावसायिकाचा <strong>पर्याय नाही</strong>. तुम्हाला गंभीर मानसिक आरोग्य संकटाचा अनुभव येत असल्यास, कृपया त्वरित आपत्कालीन सेवांशी संपर्क करा.</>,
    coreCapH2: "मुख्य क्षमता",
    coreCapIntro: "MindBridge मानसिक कल्याण वाढवण्यासाठी सर्वसमावेशक टूलकिटसह बनवला गेला आहे:",
    caps: [
      <><strong>AI चॅट सपोर्ट:</strong> तुमचा दिवस, तणाव किंवा चिंता याबद्दल नैसर्गिकपणे बोला. Gemini-चालित सहाय्यक सहानुभूतीने ऐकण्यासाठी आणि तुमच्या समस्या "सोडवण्याची" घाई न करता ग्राउंडिंग तंत्रे ऑफर करण्यासाठी फाइन-ट्यून केलेले आहे.</>,
      <><strong>क्लिनिकल स्क्रीनिंग:</strong> PHQ-9 (नैराश्य) आणि GAD-7 (चिंता) मूल्यमापन थेट ॲपमध्ये घ्या.</>,
      <><strong>AI स्कोर स्पष्टीकरण:</strong> तुम्हाला फक्त एक नंबर देण्याऐवजी, Gemini तुमच्या मूल्यमापन स्कोरचे विश्लेषण करतो आणि अनुकूलित कोपिंग धोरणे प्रदान करतो.</>,
      <><strong>दैनंदिन मूड ट्रॅकर:</strong> ट्रिगर आणि ट्रेंड ओळखण्यासाठी कालांतराने तुमच्या दैनंदिन भावनिक स्थितीचा रेकॉर्ड ठेवा.</>,
      <><strong>संकट शोध:</strong> अंगभूत सुरक्षा उपाय स्वत:ला इजा करण्याशी संबंधित वाक्यांश त्वरित ओळखतात आणि वापरकर्त्याला पूर्व-कॉन्फिगर केलेला विश्वासू संपर्क आणि राष्ट्रीय संकट हॉटलाइन सादर करतात.</>,
      <><strong>व्हॉइस इंटरॲक्शन:</strong> Web Speech API वापरून तुमचे विचार मोठ्याने बोला आणि पूर्णपणे हँड्स-फ्री, संभाषणात्मक अनुभवासाठी AI च्या प्रतिसाद ऐका.</>,
    ],
    whoH2: "हे कोणासाठी आहे?",
    whoText: "MindBridge आधुनिक जीवनातील गुंतागुंतींमधून जाणाऱ्या कोणत्याही व्यक्तीसाठी डिझाइन केला आहे. तुम्ही परीक्षेच्या दबावाला सामोरे जाणारे विद्यार्थी असाल, बर्नआउटशी झुंजणारे कार्यरत व्यावसायिक असाल, किंवा फक्त कठीण आठवड्यातून जात असाल, MindBridge एक सुरक्षित, नामनिर्देशित आउटलेट प्रदान करतो. आम्ही हे विशेषतः भारतातील 15 कोटींहून अधिक लोकांना लक्षात ठेवून बनवले आहे ज्यांना मानसिक आरोग्य काळजीची आवश्यकता आहे पण सध्या त्यांना प्रवेश नाही.",
    notH2: "MindBridge काय नाही",
    notCalloutTitle: "महत्त्वाच्या मर्यादा",
    notCaps: [
      <><strong>थेरपिस्ट नाही:</strong> MindBridge दीर्घकालीन क्लिनिकल उपचार योजना बनवू शकत नाही.</>,
      <><strong>आपत्कालीन परिस्थितींसाठी नाही:</strong> AI तुमच्या स्थानावर आपत्कालीन सेवा पाठवू शकत नाही.</>,
      <><strong>निदान साधन नाही:</strong> PHQ-9 आणि GAD-7 स्क्रीनिंग सूचक आहेत, निश्चित वैद्यकीय निदान नाही.</>,
    ],
  },
};

export default function WhatIsMindBridge() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>

      <h2 id="core-capabilities">{c.coreCapH2}</h2>
      <p>{c.coreCapIntro}</p>

      <ul>
        {c.caps.map((cap, i) => <li key={i}>{cap}</li>)}
      </ul>

      <h2 id="who-is-it-for">{c.whoH2}</h2>
      <p>{c.whoText}</p>

      <h2 id="what-mindbridge-is-not">{c.notH2}</h2>
      <Callout type="danger" title={c.notCalloutTitle}>
        <ul className="mt-2 mb-0 border-none pl-4 space-y-1">
          {c.notCaps.map((cap, i) => <li key={i}>{cap}</li>)}
        </ul>
      </Callout>
    </>
  );
}
