import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "PHQ-9 Depression Screening",
    intro: "MindBridge includes a built-in Patient Health Questionnaire (PHQ-9), the gold-standard diagnostic tool used by healthcare professionals worldwide for screening, diagnosing, monitoring and measuring the severity of depression.",
    whatH2: "What is the PHQ-9?",
    whatP: "The PHQ-9 is a 9-question instrument given to patients in a primary care setting to screen for the presence and severity of depression. It asks you to reflect on the last two weeks and rate how often you've been bothered by specific problems, such as:",
    whatItems: ["Little interest or pleasure in doing things", "Feeling down, depressed, or hopeless", "Trouble falling or staying asleep, or sleeping too much", "Feeling tired or having little energy"],
    interpretH2: "How to interpret your score",
    interpretP: "Each of the 9 questions is scored from 0 (Not at all) to 3 (Nearly every day). The total score ranges from 0 to 27. Here is how medical professionals generally interpret the score:",
    tableHeaders: ["Score Range", "Depression Severity", "Recommended Action"],
    tableRows: [
      { range: "0 - 4", sev: "Minimal", sevClass: "text-emerald-400", action: "None to minimal action required. Monitor weekly." },
      { range: "5 - 9", sev: "Mild", sevClass: "text-yellow-400", action: "Watchful waiting; consider supportive counseling." },
      { range: "10 - 14", sev: "Moderate", sevClass: "text-orange-400", action: "Evaluate for active treatment (therapy/counseling)." },
      { range: "15 - 19", sev: "Moderately Severe", sevClass: "text-rose-400", action: "Active treatment required (therapy and/or medication)." },
      { range: "20 - 27", sev: "Severe", sevClass: "text-red-500", action: "Immediate active treatment necessary by a psychiatrist." },
    ],
    howH2: "How MindBridge uses the PHQ-9",
    howP: "When you complete the test in MindBridge:",
    howItems: [
      "The score is beautifully visualized in the UI.",
      "The result is saved to your medical history in your Dashboard.",
      <><strong>Question 9 Check:</strong> If you score &gt; 0 on question 9 (thoughts of self-harm), MindBridge immediately triggers a safety warning with crisis hotline numbers.</>,
      "Gemini analyzes your score bracket and generates 3 personalized coping strategies right on the results page.",
    ],
    limitH2: "Important Limitations",
    calloutTitle: "Screening ≠ Diagnosis",
    calloutText: <>Questionnaires like the PHQ-9 are screening tools, which means they highlight people who <em>might</em> be depressed. Only a qualified doctor or mental health professional can make an actual clinical diagnosis of Major Depressive Disorder.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "PHQ-9 अवसाद स्क्रीनिंग",
    intro: "MindBridge में एक अंतर्निहित Patient Health Questionnaire (PHQ-9) शामिल है, जो दुनिया भर में स्वास्थ्य देखभाल पेशेवरों द्वारा अवसाद की गंभीरता की जांच, निदान, निगरानी और मापने के लिए उपयोग किया जाने वाला स्वर्ण-मानक निदान उपकरण है।",
    whatH2: "PHQ-9 क्या है?",
    whatP: "PHQ-9 एक 9-प्रश्न उपकरण है जो प्राथमिक देखभाल सेटिंग में रोगियों को अवसाद की उपस्थिति और गंभीरता की जांच के लिए दिया जाता है। यह आपसे पिछले दो हफ्तों पर विचार करने और विशिष्ट समस्याओं से कितनी बार परेशान हुए यह रेट करने के लिए कहता है, जैसे:",
    whatItems: ["कामों में कम रुचि या आनंद", "उदास, निराश या निराशावादी महसूस करना", "नींद न आना या बहुत ज़्यादा सोना", "थकान महसूस करना या कम ऊर्जा होना"],
    interpretH2: "अपना स्कोर कैसे समझें",
    interpretP: "9 प्रश्नों में से प्रत्येक को 0 (बिल्कुल नहीं) से 3 (लगभग हर दिन) तक स्कोर किया जाता है। कुल स्कोर 0 से 27 तक होता है। चिकित्सा पेशेवर आमतौर पर स्कोर की व्याख्या इस प्रकार करते हैं:",
    tableHeaders: ["स्कोर सीमा", "अवसाद की गंभीरता", "अनुशंसित कार्रवाई"],
    tableRows: [
      { range: "0 - 4", sev: "न्यूनतम", sevClass: "text-emerald-400", action: "कोई से न्यूनतम कार्रवाई आवश्यक। साप्ताहिक निगरानी करें।" },
      { range: "5 - 9", sev: "हल्का", sevClass: "text-yellow-400", action: "सतर्क प्रतीक्षा; सहायक परामर्श पर विचार करें।" },
      { range: "10 - 14", sev: "मध्यम", sevClass: "text-orange-400", action: "सक्रिय उपचार (थेरेपी/परामर्श) के लिए मूल्यांकन करें।" },
      { range: "15 - 19", sev: "मध्यम गंभीर", sevClass: "text-rose-400", action: "सक्रिय उपचार आवश्यक (थेरेपी और/या दवा)।" },
      { range: "20 - 27", sev: "गंभीर", sevClass: "text-red-500", action: "मनोचिकित्सक द्वारा तत्काल सक्रिय उपचार आवश्यक।" },
    ],
    howH2: "MindBridge PHQ-9 का उपयोग कैसे करता है",
    howP: "जब आप MindBridge में परीक्षण पूरा करते हैं:",
    howItems: [
      "स्कोर UI में खूबसूरती से दिखाया जाता है।",
      "परिणाम आपके डैशबोर्ड में आपके चिकित्सा इतिहास में सहेजा जाता है।",
      <><strong>प्रश्न 9 जाँच:</strong> यदि आप प्रश्न 9 (आत्म-नुकसान के विचार) पर &gt; 0 स्कोर करते हैं, MindBridge तुरंत संकट हॉटलाइन नंबरों के साथ सुरक्षा चेतावनी ट्रिगर करता है।</>,
      "Gemini आपके स्कोर ब्रैकेट का विश्लेषण करके परिणाम पेज पर ही 3 व्यक्तिगत कॉपिंग रणनीतियां उत्पन्न करता है।",
    ],
    limitH2: "महत्वपूर्ण सीमाएं",
    calloutTitle: "स्क्रीनिंग ≠ निदान",
    calloutText: <>PHQ-9 जैसी प्रश्नावलियां स्क्रीनिंग उपकरण हैं, जिसका मतलब है कि वे उन लोगों को उजागर करती हैं जो <em>शायद</em> उदास हों। केवल एक योग्य डॉक्टर या मानसिक स्वास्थ्य पेशेवर ही Major Depressive Disorder का वास्तविक नैदानिक निदान कर सकते हैं।</>,
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "PHQ-9 नैराश्य स्क्रीनिंग",
    intro: "MindBridge मध्ये एक अंगभूत Patient Health Questionnaire (PHQ-9) समाविष्ट आहे, जो जगभरातील आरोग्यसेवा व्यावसायिकांद्वारे नैराश्याची तपासणी, निदान, देखरेख आणि मोजमाप करण्यासाठी वापरला जाणारा सुवर्ण-मानक निदान साधन आहे.",
    whatH2: "PHQ-9 म्हणजे काय?",
    whatP: "PHQ-9 हे 9-प्रश्न साधन आहे जे प्राथमिक काळजी सेटिंगमध्ये रुग्णांना नैराश्याची उपस्थिती आणि तीव्रता तपासण्यासाठी दिले जाते. हे तुम्हाला मागील दोन आठवड्यांवर विचार करण्यास आणि विशिष्ट समस्यांमुळे किती वेळा त्रास झाला हे रेट करण्यास सांगते, जसे:",
    whatItems: ["गोष्टींमध्ये कमी रूची किंवा आनंद", "उदास, निराश किंवा निराशावादी वाटणे", "झोप न लागणे किंवा जास्त झोपणे", "थकवा वाटणे किंवा कमी शक्ती वाटणे"],
    interpretH2: "तुमचा स्कोर कसा समजून घ्याल",
    interpretP: "9 प्रश्नांपैकी प्रत्येक 0 (अजिबात नाही) ते 3 (जवळजवळ दररोज) स्कोर केला जातो. एकूण स्कोर 0 ते 27 च्या श्रेणीत असतो. वैद्यकीय व्यावसायिक साधारणत: स्कोरचा अर्थ असा लावतात:",
    tableHeaders: ["स्कोर श्रेणी", "नैराश्याची तीव्रता", "शिफारस केलेली कृती"],
    tableRows: [
      { range: "0 - 4", sev: "न्यूनतम", sevClass: "text-emerald-400", action: "काहीही ते किमान कृती आवश्यक. साप्ताहिक देखरेख करा." },
      { range: "5 - 9", sev: "सौम्य", sevClass: "text-yellow-400", action: "सतर्क प्रतीक्षा; सहाय्यक समुपदेशनाचा विचार करा." },
      { range: "10 - 14", sev: "मध्यम", sevClass: "text-orange-400", action: "सक्रिय उपचाराचे (थेरपी/समुपदेशन) मूल्यांकन करा." },
      { range: "15 - 19", sev: "मध्यम तीव्र", sevClass: "text-rose-400", action: "सक्रिय उपचार आवश्यक (थेरपी आणि/किंवा औषध)." },
      { range: "20 - 27", sev: "तीव्र", sevClass: "text-red-500", action: "मनोचिकित्सकाद्वारे तात्काळ सक्रिय उपचार आवश्यक." },
    ],
    howH2: "MindBridge PHQ-9 कसा वापरतो",
    howP: "जेव्हा तुम्ही MindBridge मध्ये चाचणी पूर्ण करता:",
    howItems: [
      "स्कोर UI मध्ये सुंदरपणे दाखवला जातो.",
      "परिणाम तुमच्या डॅशबोर्डमधील तुमच्या वैद्यकीय इतिहासात जतन केला जातो.",
      <><strong>प्रश्न 9 तपासणी:</strong> तुम्ही प्रश्न 9 (स्वत:ला इजा करण्याचे विचार) वर &gt; 0 स्कोर केल्यास, MindBridge तत्काळ संकट हॉटलाइन नंबरांसह सुरक्षा चेतावणी ट्रिगर करतो.</>,
      "Gemini तुमच्या स्कोर ब्रॅकेटचे विश्लेषण करतो आणि परिणाम पेजवरच 3 वैयक्तिकृत कोपिंग धोरणे तयार करतो.",
    ],
    limitH2: "महत्त्वाच्या मर्यादा",
    calloutTitle: "स्क्रीनिंग ≠ निदान",
    calloutText: <>PHQ-9 सारख्या प्रश्नावली स्क्रीनिंग साधने आहेत, म्हणजे ते अशा लोकांना उजाळतात जे <em>कदाचित</em> नैराश्यात असतील. फक्त एक पात्र डॉक्टर किंवा मानसिक आरोग्य व्यावसायिकच Major Depressive Disorder चे वास्तविक क्लिनिकल निदान करू शकतात.</>,
  },
};

export default function PHQ9Screening() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="what-is-phq-9">{c.whatH2}</h2>
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

      <h2 id="how-mindbridge-uses-phq9">{c.howH2}</h2>
      <p>{c.howP}</p>
      <ol>
        {c.howItems.map((item, i) => <li key={i}>{item}</li>)}
      </ol>

      <h2 id="limitations">{c.limitH2}</h2>
      <Callout type="warning" title={c.calloutTitle}>
        {c.calloutText}
      </Callout>
    </>
  );
}
