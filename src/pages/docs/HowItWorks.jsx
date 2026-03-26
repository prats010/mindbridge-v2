import { Callout } from "../../components/docs/Callout";
import { Steps, Step } from "../../components/docs/Steps";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "How MindBridge Works",
    intro: "MindBridge operates at the intersection of modern web technology, generative AI, and clinical psychology frameworks to deliver a seamless support experience.",
    techH2: "The Technology",
    techP1: <>At its core, MindBridge leverages <strong>Google Gemini 2.5 Flash</strong> to drive the conversational interface. We utilize a highly specialized system prompt that restricts Gemini from offering medical advice, forcing it instead into a supportive, empathetic listening mode.</>,
    techP2: <>We also employ real-time <strong>JavaScript-based Sentiment Analysis</strong> on the client side. Every message you send is scored (from highly negative to highly positive). This data is silently fed into your historical profile, allowing the AI to generate long-term insights without requiring manual mood logging.</>,
    flowH2: "Conversation Flow",
    flowIntro: "The standard user journey designed to keep you safe and supported is simple:",
    steps: [
      { title: "Sign in with Google", desc: "Authentication is handled securely via Firebase. We only store your basic profile information (Name and Email) to personalize your experience." },
      { title: "Add a Trusted Contact", desc: "Before you can chat, MindBridge requires you to input a Trusted Contact. This is a crucial safety mechanism; if you ever express thoughts of self-harm, this contact is immediately presented to you." },
      { title: "Chat with MindBridge AI", desc: "Talk freely. The AI remembers the context of your current conversation and uses your past sentiment scores to understand your baseline mood." },
      { title: "Take Clinical Assessments", desc: "Periodically navigate to the Assessments tab to take the PHQ-9 or GAD-7. The results are saved to your profile and interpreted by Gemini." },
      { title: "Review Insights on Dashboard", desc: "Visit the Dashboard to see your 14-day mood trend, your assessment history, and tap the \"Generate AI Insights\" button for a comprehensive weekly psychological review." },
    ],
    privacyH2: "Data & Privacy",
    privacyP: "We understand that mental health data is highly sensitive. MindBridge is built with zero-trust architecture using Firebase Firestore Security Rules.",
    privacyCalloutTitle: "Your Data is Yours",
    privacyCalloutText: <>Your chat logs, assessment scores, and mood entries are tied strictly to your authenticated UID. Not even database administrators can query your data without your explicit permission. We <strong>never</strong> sell or share your conversational data with third-party advertisers.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "MindBridge कैसे काम करता है",
    intro: "MindBridge एक निर्बाध सहायता अनुभव प्रदान करने के लिए आधुनिक वेब प्रौद्योगिकी, जेनेरेटिव AI और नैदानिक मनोविज्ञान ढांचों के संगम पर काम करता है।",
    techH2: "प्रौद्योगिकी",
    techP1: <>मूल रूप से, MindBridge संवादी इंटरफेस चलाने के लिए <strong>Google Gemini 2.5 Flash</strong> का उपयोग करता है। हम एक अत्यधिक विशेष सिस्टम प्रॉम्प्ट का उपयोग करते हैं जो Gemini को चिकित्सा सलाह देने से रोकता है और इसे एक सहायक, सहानुभूतिपूर्ण सुनने के मोड में रखता है।</>,
    techP2: <>हम क्लाइंट साइड पर रियल-टाइम <strong>JavaScript-आधारित सेंटिमेंट विश्लेषण</strong> भी करते हैं। आपके द्वारा भेजा गया प्रत्येक संदेश स्कोर किया जाता है (अत्यधिक नकारात्मक से अत्यधिक सकारात्मक तक)। यह डेटा चुपचाप आपकी ऐतिहासिक प्रोफ़ाइल में फीड होता है, जिससे AI मैन्युअल मूड लॉगिंग की आवश्यकता के बिना दीर्घकालिक इनसाइट्स उत्पन्न कर सकता है।</>,
    flowH2: "बातचीत प्रवाह",
    flowIntro: "आपको सुरक्षित और समर्थित रखने के लिए डिज़ाइन की गई मानक उपयोगकर्ता यात्रा सरल है:",
    steps: [
      { title: "Google से साइन इन करें", desc: "प्रमाणीकरण Firebase के माध्यम से सुरक्षित रूप से संभाला जाता है। हम आपके अनुभव को वैयक्तिकृत करने के लिए केवल आपकी मूल प्रोफ़ाइल जानकारी (नाम और ईमेल) संग्रहीत करते हैं।" },
      { title: "विश्वसनीय संपर्क जोड़ें", desc: "चैट करने से पहले, MindBridge को आपको एक विश्वसनीय संपर्क दर्ज करना होगा। यह एक महत्वपूर्ण सुरक्षा तंत्र है; यदि आप कभी आत्म-नुकसान के विचार व्यक्त करते हैं, तो यह संपर्क आपको तुरंत प्रस्तुत किया जाता है।" },
      { title: "MindBridge AI से चैट करें", desc: "स्वतंत्र रूप से बात करें। AI आपकी वर्तमान बातचीत का संदर्भ याद रखता है और आपके बेसलाइन मूड को समझने के लिए आपके पिछले सेंटिमेंट स्कोर का उपयोग करता है।" },
      { title: "नैदानिक मूल्यांकन लें", desc: "PHQ-9 या GAD-7 लेने के लिए समय-समय पर Assessments टैब पर जाएं। परिणाम आपकी प्रोफ़ाइल में सहेजे जाते हैं और Gemini द्वारा व्याख्या की जाती है।" },
      { title: "डैशबोर्ड पर इनसाइट्स की समीक्षा करें", desc: "अपना 14-दिन का मूड ट्रेंड, मूल्यांकन इतिहास देखने के लिए डैशबोर्ड पर जाएं, और व्यापक साप्ताहिक मनोवैज्ञानिक समीक्षा के लिए \"AI इनसाइट्स जनरेट करें\" बटन टैप करें।" },
    ],
    privacyH2: "डेटा और गोपनीयता",
    privacyP: "हम समझते हैं कि मानसिक स्वास्थ्य डेटा अत्यधिक संवेदनशील है। MindBridge Firebase Firestore Security Rules का उपयोग करके जीरो-ट्रस्ट आर्किटेक्चर के साथ बनाया गया है।",
    privacyCalloutTitle: "आपका डेटा आपका है",
    privacyCalloutText: <>आपके चैट लॉग, मूल्यांकन स्कोर और मूड प्रविष्टियां आपके प्रमाणिकृत UID से सख्ती से बंधी हैं। डेटाबेस प्रशासक भी आपकी स्पष्ट अनुमति के बिना आपके डेटा को क्वेरी नहीं कर सकते। हम <strong>कभी नहीं</strong> आपका संवादी डेटा तृतीय-पक्ष विज्ञापनदाताओं को बेचते या साझा करते हैं।</>,
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "MindBridge कसे काम करते",
    intro: "MindBridge एक निर्बाध सहाय्य अनुभव देण्यासाठी आधुनिक वेब तंत्रज्ञान, जेनेरेटिव्ह AI आणि क्लिनिकल मानसशास्त्र फ्रेमवर्कच्या छेदनबिंदूवर कार्य करते.",
    techH2: "तंत्रज्ञान",
    techP1: <>मूळतः, MindBridge संभाषणात्मक इंटरफेस चालवण्यासाठी <strong>Google Gemini 2.5 Flash</strong> वापरतो. आम्ही एक अत्यंत विशेष सिस्टम प्रॉम्प्ट वापरतो जे Gemini ला वैद्यकीय सल्ला देण्यापासून रोखते आणि त्याला सहाय्यक, सहानुभूतीपूर्ण ऐकण्याच्या मोडमध्ये ठेवते.</>,
    techP2: <>आम्ही क्लायंट बाजूस रिअल-टाइम <strong>JavaScript-आधारित सेंटिमेंट विश्लेषण</strong> देखील करतो. तुम्ही पाठवलेला प्रत्येक संदेश स्कोर केला जातो (अत्यंत नकारात्मक ते अत्यंत सकारात्मक). हा डेटा शांतपणे तुमच्या ऐतिहासिक प्रोफाइलमध्ये दिला जातो, AI ला मॅन्युअल मूड लॉगिंगशिवाय दीर्घकालीन इनसाइट्स निर्माण करण्यास अनुमती देतो.</>,
    flowH2: "संभाषण प्रवाह",
    flowIntro: "तुम्हाला सुरक्षित आणि सहाय्यित ठेवण्यासाठी डिझाइन केलेली मानक वापरकर्ता यात्रा सोपी आहे:",
    steps: [
      { title: "Google सह साइन इन करा", desc: "प्रमाणीकरण Firebase द्वारे सुरक्षितपणे हाताळले जाते. आम्ही तुमचा अनुभव वैयक्तिकृत करण्यासाठी फक्त तुमची मूळ प्रोफाइल माहिती (नाव आणि ईमेल) संग्रहित करतो." },
      { title: "विश्वासू संपर्क जोडा", desc: "चॅट करण्यापूर्वी, MindBridge तुम्हाला विश्वासू संपर्क प्रविष्ट करणे आवश्यक आहे. हे एक महत्त्वाचे सुरक्षा यंत्रण आहे; तुम्ही कधीही स्वत:ला इजा करण्याचे विचार व्यक्त केल्यास, हा संपर्क तत्काळ सादर केला जातो." },
      { title: "MindBridge AI शी चॅट करा", desc: "मुक्तपणे बोला. AI तुमच्या सध्याच्या संभाषणाचा संदर्भ लक्षात ठेवतो आणि तुमचा बेसलाइन मूड समजण्यासाठी तुमचे मागील सेंटिमेंट स्कोर वापरतो." },
      { title: "क्लिनिकल मूल्यमापन घ्या", desc: "PHQ-9 किंवा GAD-7 घेण्यासाठी वेळोवेळी Assessments टॅबवर जा. परिणाम तुमच्या प्रोफाइलमध्ये जतन केले जातात आणि Gemini द्वारे अर्थ लावला जातो." },
      { title: "डॅशबोर्डवर इनसाइट्स समीक्षित करा", desc: "तुमचा 14-दिवसांचा मूड ट्रेंड, मूल्यमापन इतिहास पाहण्यासाठी आणि सर्वसमावेशक साप्ताहिक मनोवैज्ञानिक आढाव्यासाठी \"AI इनसाइट्स तयार करा\" बटण टॅप करण्यासाठी डॅशबोर्डला भेट द्या." },
    ],
    privacyH2: "डेटा आणि गोपनीयता",
    privacyP: "आम्हाला माहीत आहे की मानसिक आरोग्य डेटा अत्यंत संवेदनशील आहे. MindBridge Firebase Firestore Security Rules वापरून जीरो-ट्रस्ट आर्किटेक्चरसह बनवला आहे.",
    privacyCalloutTitle: "तुमचा डेटा तुमचा आहे",
    privacyCalloutText: <>तुमचे चॅट लॉग, मूल्यमापन स्कोर आणि मूड नोंदी तुमच्या प्रमाणित UID शी काटेकोरपणे बांधल्या आहेत. डेटाबेस प्रशासक देखील तुमच्या स्पष्ट परवानगीशिवाय तुमचा डेटा क्वेरी करू शकत नाहीत. आम्ही तुमचा संभाषण डेटा तृतीय-पक्ष जाहिरातदारांसह <strong>कधीही</strong> विकत किंवा सामायिक करत नाही.</>,
  },
};

export default function HowItWorks() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="the-technology">{c.techH2}</h2>
      <p>{c.techP1}</p>
      <p>{c.techP2}</p>

      <h2 id="conversation-flow">{c.flowH2}</h2>
      <p>{c.flowIntro}</p>

      <Steps>
        {c.steps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <h2 id="data-and-privacy">{c.privacyH2}</h2>
      <p>{c.privacyP}</p>
      <Callout type="success" title={c.privacyCalloutTitle}>
        {c.privacyCalloutText}
      </Callout>
    </>
  );
}
