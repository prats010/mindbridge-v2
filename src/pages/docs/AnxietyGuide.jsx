import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Understanding Anxiety",
    intro: "Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. However, if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder.",
    signsH2: "Signs you may be experiencing anxiety",
    signsIntro: "Common symptoms of generalized anxiety include:",
    signs: ["Feeling restless, wound-up, or on-edge", "Being easily fatigued", "Having difficulty concentrating", "Being irritable", "An increased heart rate or hyperventilation", "Having muscle tension", "Difficulty controlling feelings of worry", "Having sleep problems, such as difficulty falling or staying asleep"],
    calloutTitle: "When anxiety becomes clinical",
    calloutText: "Everyone feels anxious sometimes (e.g., before a public speech). It crosses into a clinical disorder when it becomes chronic and impairs your ability to function socially, at work, or at home.",
    mythsH2: "Common myths about anxiety",
    myths: [
      <><strong>Myth:</strong> "Anxiety isn't a real illness."<br /><strong>Fact:</strong> Brain imaging studies show that anxiety disorders fundamentally alter the brain's response to fear and emotion handling.</>,
      <><strong>Myth:</strong> "You should just avoid the things that make you anxious."<br /><strong>Fact:</strong> While avoidance provides short-term relief, it strongly reinforces the anxiety long-term. Gradual exposure is the preferred psychological treatment.</>,
    ],
    selfH2: "Self-help strategies",
    selfIntro: "Anxiety responds very well to physiological grounding techniques:",
    selfItems: [
      <><strong>Breathing Techniques:</strong> 4-7-8 breathing directly stimulates the Vagus nerve to physically force the heart rate down.</>,
      <><strong>Limit Caffeine:</strong> Caffeine mimics the physical symptoms of anxiety (jitters, fast heart rate) and can trick the brain into an anxiety state.</>,
      <><strong>Mindfulness:</strong> Staying present stops the brain from future-tripping about things that haven't happened yet.</>,
    ],
    professionalH2: "Professional resources in India",
    professionalP: "CBT (Cognitive Behavioral Therapy) is extremely effective for anxiety. Consider reaching out to verified clinical psychologists through platforms like Amaha or direct clinical reference.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "चिंता को समझना",
    intro: "चिंता तनाव के प्रति आपके शरीर की स्वाभाविक प्रतिक्रिया है। यह आने वाली चीज़ों के बारे में डर या आशंका की भावना है। हालांकि, यदि आपकी चिंता की भावनाएं अत्यधिक हैं, छह महीने से अधिक समय तक रहती हैं, और आपके जीवन में हस्तक्षेप कर रही है, तो आपको चिंता विकार हो सकता है।",
    signsH2: "संकेत जो बताते हैं कि आप चिंता का अनुभव कर रहे हैं",
    signsIntro: "सामान्यीकृत चिंता के सामान्य लक्षणों में शामिल हैं:",
    signs: ["बेचैन, तनावग्रस्त या किनारे पर महसूस करना", "आसानी से थकान महसूस करना", "ध्यान केंद्रित करने में कठिनाई", "चिड़चिड़ापन", "बढ़ी हुई हृदय गति या हाइपरवेंटिलेशन", "मांसपेशियों में तनाव", "चिंता की भावनाओं को नियंत्रित करने में कठिनाई", "नींद की समस्याएं, जैसे सोने में कठिनाई"],
    calloutTitle: "जब चिंता नैदानिक बन जाती है",
    calloutText: "हर कोई कभी-कभी चिंतित महसूस करता है (जैसे सार्वजनिक भाषण से पहले)। यह नैदानिक विकार में बदल जाती है जब यह दीर्घकालिक हो जाती है और सामाजिक, काम पर, या घर पर कार्य करने की आपकी क्षमता को खराब करती है।",
    mythsH2: "चिंता के बारे में सामान्य मिथक",
    myths: [
      <><strong>मिथक:</strong> "चिंता कोई वास्तविक बीमारी नहीं है।"<br /><strong>तथ्य:</strong> मस्तिष्क इमेजिंग अध्ययन दिखाते हैं कि चिंता विकार मस्तिष्क की भय और भावना प्रबंधन की प्रतिक्रिया को मौलिक रूप से बदल देते हैं।</>,
      <><strong>मिथक:</strong> "आपको बस उन चीज़ों से बचना चाहिए जो आपको चिंतित करती हैं।"<br /><strong>तथ्य:</strong> हालांकि परहेज़ अल्पकालिक राहत प्रदान करता है, यह दीर्घकालिक चिंता को मज़बूती से सुदृढ़ करता है। क्रमिक एक्सपोजर पसंदीदा मनोवैज्ञानिक उपचार है।</>,
    ],
    selfH2: "स्व-सहायता रणनीतियां",
    selfIntro: "चिंता शारीरिक ग्राउंडिंग तकनीकों के प्रति बहुत अच्छी तरह से प्रतिक्रिया करती है:",
    selfItems: [
      <><strong>श्वास तकनीकें:</strong> 4-7-8 श्वास सीधे वेगस नर्व को उत्तेजित करता है जिससे हृदय गति शारीरिक रूप से कम हो जाती है।</>,
      <><strong>कैफीन सीमित करें:</strong> कैफीन चिंता के शारीरिक लक्षणों (कंपकंपी, तेज हृदय गति) की नकल करता है और मस्तिष्क को चिंता की स्थिति में ट्रिक कर सकता है।</>,
      <><strong>माइंडफुलनेस:</strong> वर्तमान में रहना मस्तिष्क को उन चीज़ों के बारे में भविष्य में यात्रा करने से रोकता है जो अभी तक नहीं हुई हैं।</>,
    ],
    professionalH2: "भारत में पेशेवर संसाधन",
    professionalP: "CBT (Cognitive Behavioral Therapy) चिंता के लिए अत्यधिक प्रभावी है। Amaha जैसे प्लेटफॉर्म के माध्यम से सत्यापित नैदानिक मनोवैज्ञानिकों तक पहुंचने पर विचार करें।",
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "चिंता समजून घेणे",
    intro: "चिंता म्हणजे ताणाला तुमच्या शरीराचा नैसर्गिक प्रतिसाद. येणाऱ्या गोष्टींबद्दल भीती किंवा शंकेची भावना आहे. तथापि, तुमच्या चिंतेच्या भावना अत्यंत असल्यास, सहा महिन्यांपेक्षा जास्त काळ टिकल्यास, आणि तुमच्या जीवनात हस्तक्षेप करत असल्यास, तुम्हाला चिंता विकार असू शकतो.",
    signsH2: "तुम्हाला चिंतेचा अनुभव येत असल्याची चिन्हे",
    signsIntro: "सामान्यीकृत चिंतेच्या सामान्य लक्षणांमध्ये समाविष्ट आहे:",
    signs: ["अस्वस्थ, तणावग्रस्त किंवा किनाऱ्यावर वाटणे", "सहजपणे थकवा येणे", "लक्ष केंद्रित करण्यात अडचण", "चिडचिडेपणा", "वाढलेली हृदय गती किंवा हायपरव्हेंटिलेशन", "स्नायूंमध्ये ताण", "काळजीच्या भावना नियंत्रित करण्यात अडचण", "झोपेच्या समस्या, जसे झोप लागण्यात अडचण"],
    calloutTitle: "चिंता क्लिनिकल कधी होते",
    calloutText: "प्रत्येकाला कधीकधी चिंता वाटते (उदा. सार्वजनिक भाषणापूर्वी). हे क्लिनिकल विकारात बदलते जेव्हा ते दीर्घकालिक होते आणि सामाजिक, कामावर किंवा घरी कार्य करण्याची तुमची क्षमता बिघडवते.",
    mythsH2: "चिंतेबद्दल सामान्य गैरसमज",
    myths: [
      <><strong>गैरसमज:</strong> "चिंता हा खरा आजार नाही."<br /><strong>वस्तुस्थिती:</strong> मेंदू इमेजिंग अभ्यास दाखवतात की चिंता विकार मेंदूच्या भय आणि भावना हाताळण्याच्या प्रतिसादाला मूलतः बदलतात.</>,
      <><strong>गैरसमज:</strong> "तुम्ही फक्त तुम्हाला चिंता निर्माण करणाऱ्या गोष्टी टाळाव्यात."<br /><strong>वस्तुस्थिती:</strong> टाळणे अल्पकालीन आराम देत असले तरी, ते दीर्घकालीन चिंता दृढ करते. क्रमिक एक्सपोजर हे पसंतीचे मनोवैज्ञानिक उपचार आहे.</>,
    ],
    selfH2: "स्व-सहाय्य धोरणे",
    selfIntro: "चिंता शारीरिक ग्राउंडिंग तंत्रांना खूप चांगला प्रतिसाद देते:",
    selfItems: [
      <><strong>श्वसन तंत्रे:</strong> 4-7-8 श्वसन थेट व्हेगस मज्जातंतूला उत्तेजित करतो ज्यामुळे हृदय गती शारीरिकरित्या खाली येते.</>,
      <><strong>कॅफीन मर्यादित करा:</strong> कॅफीन चिंतेच्या शारीरिक लक्षणांची (कापरे, वेगवान हृदय गती) नक्कल करतो आणि मेंदूला चिंतेच्या अवस्थेत ट्रिक करू शकतो.</>,
      <><strong>माइंडफुलनेस:</strong> वर्तमानात राहिल्याने मेंदूला अजून घडल्या नसलेल्या गोष्टींबद्दल भविष्यात जाण्यापासून थांबवते.</>,
    ],
    professionalH2: "भारतातील व्यावसायिक संसाधने",
    professionalP: "CBT (Cognitive Behavioral Therapy) चिंतेसाठी अत्यंत प्रभावी आहे. Amaha सारख्या प्लॅटफॉर्मद्वारे सत्यापित क्लिनिकल मनोशास्त्रज्ञांपर्यंत पोहोचण्याचा विचार करा.",
  },
};

export default function AnxietyGuide() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="signs-you-may-be-experiencing-anxiety">{c.signsH2}</h2>
      <p>{c.signsIntro}</p>
      <ul>
        {c.signs.map((sign, i) => <li key={i}>{sign}</li>)}
      </ul>

      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>

      <h2 id="common-myths">{c.mythsH2}</h2>
      <ul>
        {c.myths.map((myth, i) => <li key={i}>{myth}</li>)}
      </ul>

      <h2 id="self-help-strategies">{c.selfH2}</h2>
      <p>{c.selfIntro}</p>
      <ul>
        {c.selfItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="professional-resources">{c.professionalH2}</h2>
      <p>{c.professionalP}</p>
    </>
  );
}
