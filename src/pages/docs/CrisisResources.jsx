import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Crisis Resources in India",
    intro: "If you are feeling overwhelmed, having thoughts of self-harm, or experiencing a mental health emergency, please reach out for professional help immediately. You do not have to go through this alone.",
    calloutTitle: "Immediate Hotlines",
    aboutH2: "About these services",
    icallH3: "iCall (TISS)",
    icallP: "Initiated by the Tata Institute of Social Sciences (TISS). They offer free telephone and email-based counseling services. Telephone lines run Monday to Saturday, 10 AM to 8 PM.",
    vandrevalaH3: "Vandrevala Foundation",
    vandrevalaP: "A 24x7 crisis intervention and mental health helpline operated by trained clinical psychologists and psychiatrists. They offer multilingual support and are always available for suicide prevention.",
    nimhansH3: "NIMHANS Toll-Free Helpline",
    nimhansP: "The National Institute of Mental Health and Neuro-Sciences provides psychosocial support and mental health care. Highly recommended for acute distress.",
    aasraH3: "AASRA",
    aasraP: "A 24x7 crisis intervention center specifically focused on suicide prevention. Confidential and non-judgmental support.",
    whatH2: "What to do right now",
    steps: [
      <><strong>Ensure your physical safety.</strong> Remove yourself from any immediately dangerous situations or implements.</>,
      <><strong>Call a hotline.</strong> The people on the other end are trained to listen without judgment.</>,
      <><strong>Reach out to your trusted contact.</strong> Call a friend, family member, or whoever you listed in the MindBridge onboarding flow. Tell them "I am not safe right now."</>,
      <><strong>Go to the hospital.</strong> If you cannot guarantee your own safety, go to the nearest hospital casualty (ER) ward.</>,
    ],
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "भारत में संकट संसाधन",
    intro: "यदि आप अभिभूत महसूस कर रहे हैं, आत्म-नुकसान के विचार आ रहे हैं, या मानसिक स्वास्थ्य आपातकाल का अनुभव कर रहे हैं, तो कृपया तुरंत पेशेवर मदद के लिए संपर्क करें। आपको यह अकेले नहीं झेलना है।",
    calloutTitle: "तुरंत हेल्पलाइन",
    aboutH2: "इन सेवाओं के बारे में",
    icallH3: "iCall (TISS)",
    icallP: "Tata Institute of Social Sciences (TISS) द्वारा शुरू किया गया। वे मुफ्त टेलीफोन और ईमेल-आधारित परामर्श सेवाएं प्रदान करते हैं। टेलीफोन लाइनें सोमवार से शनिवार, सुबह 10 बजे से शाम 8 बजे तक चलती हैं।",
    vandrevalaH3: "Vandrevala Foundation",
    vandrevalaP: "प्रशिक्षित नैदानिक मनोवैज्ञानिकों और मनोचिकित्सकों द्वारा संचालित 24×7 संकट हस्तक्षेप और मानसिक स्वास्थ्य हेल्पलाइन। वे बहुभाषी समर्थन प्रदान करते हैं और आत्महत्या रोकथाम के लिए हमेशा उपलब्ध हैं।",
    nimhansH3: "NIMHANS टोल-फ्री हेल्पलाइन",
    nimhansP: "National Institute of Mental Health and Neuro-Sciences मनोसामाजिक समर्थन और मानसिक स्वास्थ्य देखभाल प्रदान करता है। तीव्र संकट के लिए अत्यधिक अनुशंसित।",
    aasraH3: "AASRA",
    aasraP: "आत्महत्या रोकथाम पर विशेष रूप से ध्यान केंद्रित एक 24×7 संकट हस्तक्षेप केंद्र। गोपनीय और निर्णय-मुक्त समर्थन।",
    whatH2: "अभी क्या करें",
    steps: [
      <><strong>अपनी शारीरिक सुरक्षा सुनिश्चित करें।</strong> किसी भी तुरंत खतरनाक स्थिति या वस्तुओं से खुद को दूर करें।</>,
      <><strong>हेल्पलाइन पर कॉल करें।</strong> दूसरी तरफ के लोग बिना निर्णय के सुनने के लिए प्रशिक्षित हैं।</>,
      <><strong>अपने विश्वसनीय संपर्क से संपर्क करें।</strong> किसी मित्र, परिवार के सदस्य, या जो भी आपने MindBridge ऑनबोर्डिंग में सूचीबद्ध किया हो उसे कॉल करें। उन्हें बताएं "मैं अभी सुरक्षित नहीं हूं।"</>,
      <><strong>अस्पताल जाएं।</strong> यदि आप अपनी सुरक्षा की गारंटी नहीं दे सकते, तो निकटतम अस्पताल के इमरजेंसी वार्ड जाएं।</>,
    ],
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "भारतातील संकट संसाधने",
    intro: "तुम्हाला भारावून गेल्यासारखे वाटत असल्यास, स्वत:ला इजा करण्याचे विचार येत असल्यास, किंवा मानसिक आरोग्य आणीबाणीचा अनुभव येत असल्यास, कृपया त्वरित व्यावसायिक मदतीसाठी संपर्क करा. तुम्हाला हे एकट्याने सहन करावे लागणार नाही.",
    calloutTitle: "तात्काळ हेल्पलाइन",
    aboutH2: "या सेवांबद्दल",
    icallH3: "iCall (TISS)",
    icallP: "Tata Institute of Social Sciences (TISS) द्वारे सुरू केलेले. ते मोफत टेलीफोन आणि ईमेल-आधारित समुपदेशन सेवा देतात. टेलीफोन लाइन सोमवार ते शनिवार, सकाळी 10 ते सायंकाळी 8 वाजेपर्यंत चालतात.",
    vandrevalaH3: "Vandrevala Foundation",
    vandrevalaP: "प्रशिक्षित क्लिनिकल मनोशास्त्रज्ञ आणि मनोचिकित्सकांद्वारे चालवल्या जाणाऱ्या 24×7 संकट हस्तक्षेप आणि मानसिक आरोग्य हेल्पलाइन. ते बहुभाषी सहाय्य देतात आणि आत्महत्या प्रतिबंधासाठी नेहमी उपलब्ध असतात.",
    nimhansH3: "NIMHANS टोल-फ्री हेल्पलाइन",
    nimhansP: "National Institute of Mental Health and Neuro-Sciences मनोसामाजिक सहाय्य आणि मानसिक आरोग्य काळजी प्रदान करते. तीव्र त्रासासाठी अत्यंत शिफारसीय.",
    aasraH3: "AASRA",
    aasraP: "आत्महत्या प्रतिबंधावर विशेषतः लक्ष केंद्रित करणारे 24×7 संकट हस्तक्षेप केंद्र. गोपनीय आणि निर्णयमुक्त सहाय्य.",
    whatH2: "आत्ता काय करायचे",
    steps: [
      <><strong>तुमची शारीरिक सुरक्षा सुनिश्चित करा.</strong> कोणत्याही तात्काळ धोकादायक परिस्थिती किंवा वस्तूंपासून स्वत:ला दूर करा.</>,
      <><strong>हेल्पलाइनवर कॉल करा.</strong> दुसऱ्या बाजूचे लोक निर्णयाशिवाय ऐकण्यासाठी प्रशिक्षित आहेत.</>,
      <><strong>तुमच्या विश्वासू संपर्काशी संपर्क साधा.</strong> एखाद्या मित्राला, कुटुंबातील सदस्याला, किंवा तुम्ही MindBridge ऑनबोर्डिंगमध्ये सूचीबद्ध केलेल्या कोणाला कॉल करा. त्यांना सांगा "मी आत्ता सुरक्षित नाही."</>,
      <><strong>रुग्णालयात जा.</strong> तुम्ही स्वत:च्या सुरक्षिततेची हमी देऊ शकत नसल्यास, जवळच्या रुग्णालयाच्या आपत्कालीन विभागात जा.</>,
    ],
  },
};

export default function CrisisResources() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <Callout type="danger" title={c.calloutTitle}>
        <ul className="mt-2 text-rose-100 space-y-2 border-none pl-4">
          <li><strong>iCall:</strong> <a href="tel:9152987821" className="text-rose-300 font-bold hover:underline">9152987821</a></li>
          <li><strong>Vandrevala Foundation:</strong> <a href="tel:18602662345" className="text-rose-300 font-bold hover:underline">1860-2662-345</a></li>
          <li><strong>NIMHANS:</strong> <a href="tel:08046110007" className="text-rose-300 font-bold hover:underline">080-46110007</a></li>
          <li><strong>AASRA:</strong> <a href="tel:9820466627" className="text-rose-300 font-bold hover:underline">9820466627</a></li>
        </ul>
      </Callout>

      <h2 id="about-these-services">{c.aboutH2}</h2>

      <h3 id="icall">{c.icallH3}</h3>
      <p>{c.icallP}</p>

      <h3 id="vandrevala-foundation">{c.vandrevalaH3}</h3>
      <p>{c.vandrevalaP}</p>

      <h3 id="nimhans">{c.nimhansH3}</h3>
      <p>{c.nimhansP}</p>

      <h3 id="aasra">{c.aasraH3}</h3>
      <p>{c.aasraP}</p>

      <hr className="my-8 border-[#1F2937]" />

      <h2 id="what-to-do-right-now">{c.whatH2}</h2>
      <ol>
        {c.steps.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </>
  );
}
