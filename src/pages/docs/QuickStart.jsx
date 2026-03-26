import { Callout } from "../../components/docs/Callout";
import { Steps, Step } from "../../components/docs/Steps";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Quick Start Guide",
    intro: "Ready to get started with MindBridge? Follow these simple steps to set up your account and begin your wellness journey.",
    steps: [
      {
        title: "Open the App",
        desc: <>Navigate to the main application by clicking the "Try MindBridge" button in the top right, or going directly to the root domain.</>,
      },
      {
        title: "Sign in Securely",
        desc: <>Click the "Continue with Google" button. You will be redirected to Google's secure authentication flow.</>,
      },
      {
        title: "Configure Emergency Safety",
        desc: <>Upon your first login, a modal will appear requesting a Trusted Contact. This cannot be skipped.
          <CodeBlock language="text" code={`Name: Jane Doe\nPhone: +91 98765 43210\nRelationship: Sister`} />
          This information is encrypted and only shown back to you if the AI detects a crisis.</>,
      },
      {
        title: "Start Your First Chat",
        desc: <>You'll be dropped immediately into the chat interface. Try saying something natural:
          <CodeBlock language="text" code={`"I have a massive presentation tomorrow and my chest feels tight."`} />
          Notice how the AI responds with validating statements rather than just generic advice.</>,
      },
      {
        title: "Establish a Baseline",
        desc: <>Head over to the <strong>Assessments</strong> tab on the left sidebar and take the PHQ-9. This establishes a baseline for your psychological profile, allowing your AI Insights dashboard to track your progress accurately over the coming weeks.</>,
      },
    ],
    readyH3: "Ready to explore?",
    readySub: "Read about our specific features in the next section.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "त्वरित शुरुआत गाइड",
    intro: "MindBridge के साथ शुरू करने के लिए तैयार हैं? अपना खाता सेट करने और अपनी वेलनेस यात्रा शुरू करने के लिए इन सरल चरणों का पालन करें।",
    steps: [
      {
        title: "ऐप खोलें",
        desc: <>ऊपर दाईं ओर "MindBridge आज़माएं" बटन पर क्लिक करके या सीधे रूट डोमेन पर जाकर मुख्य एप्लिकेशन पर नेविगेट करें।</>,
      },
      {
        title: "सुरक्षित रूप से साइन इन करें",
        desc: <>"Google से जारी रखें" बटन पर क्लिक करें। आपको Google के सुरक्षित प्रमाणीकरण प्रवाह पर पुनर्निर्देशित किया जाएगा।</>,
      },
      {
        title: "आपातकालीन सुरक्षा कॉन्फ़िगर करें",
        desc: <>पहली बार लॉगिन पर, एक मॉडल विश्वसनीय संपर्क मांगेगा। इसे छोड़ा नहीं जा सकता।
          <CodeBlock language="text" code={`नाम: रिया शर्मा\nफ़ोन: +91 98765 43210\nसंबंध: बहन`} />
          यह जानकारी एन्क्रिप्ट की गई है और केवल तभी दिखाई जाती है जब AI संकट का पता लगाए।</>,
      },
      {
        title: "पहली चैट शुरू करें",
        desc: <>आप तुरंत चैट इंटरफ़ेस में आ जाएंगे। कुछ स्वाभाविक कहने की कोशिश करें:
          <CodeBlock language="text" code={`"कल मेरी बड़ी प्रेजेंटेशन है और मेरा सीना तंग महसूस हो रहा है।"`} />
          ध्यान दें कि AI केवल जेनेरिक सलाह के बजाय सहानुभूतिपूर्ण कथनों के साथ कैसे प्रतिक्रिया देता है।</>,
      },
      {
        title: "बेसलाइन स्थापित करें",
        desc: <>बाईं साइडबार पर <strong>मूल्यांकन</strong> टैब पर जाएं और PHQ-9 लें। यह आपके मनोवैज्ञानिक प्रोफ़ाइल के लिए एक बेसलाइन स्थापित करता है, जिससे आपका AI इनसाइट्स डैशबोर्ड आने वाले हफ्तों में आपकी प्रगति को सटीक रूप से ट्रैक कर सकता है।</>,
      },
    ],
    readyH3: "एक्सप्लोर करने के लिए तैयार?",
    readySub: "अगले भाग में हमारी विशिष्ट सुविधाओं के बारे में पढ़ें।",
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "द्रुत प्रारंभ मार्गदर्शिका",
    intro: "MindBridge सह सुरुवात करण्यास तयार आहात? तुमचे खाते सेट करण्यासाठी आणि तुमची वेलनेस यात्रा सुरू करण्यासाठी या सोप्या चरणांचे अनुसरण करा.",
    steps: [
      {
        title: "ॲप उघडा",
        desc: <>वरच्या उजव्या बाजूला "MindBridge वापरून पाहा" बटणावर क्लिक करून किंवा थेट रूट डोमेनवर जाऊन मुख्य ॲप्लिकेशनवर नेव्हिगेट करा.</>,
      },
      {
        title: "सुरक्षितपणे साइन इन करा",
        desc: <>"Google सह सुरू ठेवा" बटणावर क्लिक करा. तुम्हाला Google च्या सुरक्षित प्रमाणीकरण प्रवाहावर पुनर्निर्देशित केले जाईल.</>,
      },
      {
        title: "आपत्कालीन सुरक्षा कॉन्फिगर करा",
        desc: <>पहिल्या लॉगिनवर, विश्वासू संपर्क मागणारी एक मॉडल दिसेल. हे वगळता येत नाही.
          <CodeBlock language="text" code={`नाव: प्रिया देशपांडे\nफोन: +91 98765 43210\nनाते: बहीण`} />
          ही माहिती एन्क्रिप्ट केलेली आहे आणि AI संकट ओळखल्यास मात्र दाखवली जाते.</>,
      },
      {
        title: "पहिली चॅट सुरू करा",
        desc: <>तुम्ही तत्काळ चॅट इंटरफेसमध्ये येाल. काही नैसर्गिक सांगण्याचा प्रयत्न करा:
          <CodeBlock language="text" code={`"उद्या माझी मोठी प्रेझेंटेशन आहे आणि माझी छाती घट्ट वाटत आहे."`} />
          AI फक्त सामान्य सल्ल्याऐवजी सहानुभूतीपूर्ण विधानांसह कसा प्रतिसाद देतो ते लक्षात ठेवा.</>,
      },
      {
        title: "बेसलाइन स्थापित करा",
        desc: <>डाव्या साइडबारवर <strong>मूल्यमापन</strong> टॅबवर जा आणि PHQ-9 घ्या. हे तुमच्या मनोवैज्ञानिक प्रोफाइलसाठी बेसलाइन स्थापित करते, तुमचा AI इनसाइट्स डॅशबोर्ड येणाऱ्या आठवड्यांमध्ये तुमची प्रगती अचूकपणे ट्रॅक करू शकतो.</>,
      },
    ],
    readyH3: "एक्सप्लोर करण्यास तयार?",
    readySub: "पुढील विभागात आमच्या विशिष्ट वैशिष्ट्यांबद्दल वाचा.",
  },
};

export default function QuickStart() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <Steps>
        {c.steps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <div className="mt-8 p-6 bg-[#1E293B] rounded-xl border border-[#1F2937] text-center">
        <h3 className="text-white font-semibold text-lg mb-2">{c.readyH3}</h3>
        <p className="text-slate-400 text-sm mb-4">{c.readySub}</p>
      </div>
    </>
  );
}
