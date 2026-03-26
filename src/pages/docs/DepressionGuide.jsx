import { Callout } from "../../components/docs/Callout";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Understanding Depression",
    intro: "Depression (Major Depressive Disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It is also highly treatable. It causes feelings of sadness and/or a loss of interest in activities you once enjoyed.",
    signsH2: "Signs you may be experiencing depression",
    signsIntro: "Symptoms can vary from mild to severe and can include:",
    signs: ["Feeling sad or having a depressed mood", "Loss of interest or pleasure in activities once enjoyed", "Changes in appetite — weight loss or gain unrelated to dieting", "Trouble sleeping or sleeping too much", "Loss of energy or increased fatigue", "Increase in purposeless physical activity (e.g., inability to sit still, pacing) or slowed movements/speech", "Feeling worthless or guilty", "Difficulty thinking, concentrating, or making decisions", "Thoughts of death or suicide"],
    calloutTitle: "Note on clinical diagnosis",
    calloutText: "Symptoms must last at least two weeks and must represent a change in your previous level of functioning for a diagnosis of depression.",
    mythsH2: "Common myths about depression",
    myths: [
      <><strong>Myth:</strong> "It's just sadness, you can snap out of it."<br /><strong>Fact:</strong> Depression is a complex medical condition, not a weakness of character.</>,
      <><strong>Myth:</strong> "You need a reason to be depressed."<br /><strong>Fact:</strong> While trauma or grief can trigger depression, it can also manifest due to biological chemistry without a precise "event" triggering it.</>,
    ],
    selfH2: "Self-help strategies",
    selfIntro: "While professional help is critical, certain lifestyle changes can assist in recovery:",
    selfItems: [
      <><strong>Physical Activity:</strong> Exercise releases endorphins which act as natural mood lifters.</>,
      <><strong>Sleep Hygiene:</strong> Regulate your circadian rhythm by sleeping strictly at the same times every day.</>,
      <><strong>Set limits:</strong> Reduce stress by unburdening your daily schedule where possible.</>,
    ],
    professionalH2: "Professional resources in India",
    professionalP: "If you are struggling heavily with depression to the point it interferes with your daily functioning, we recommend reaching out to clinical professionals in India through resources like Practo, or directly visiting your nearest government hospital's Psychiatric ward.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "अवसाद को समझना",
    intro: "अवसाद (Major Depressive Disorder) एक आम और गंभीर चिकित्सा बीमारी है जो आपकी भावनाओं, सोच और कार्यों को नकारात्मक रूप से प्रभावित करती है। यह अत्यधिक उपचार योग्य भी है। यह उदासी की भावनाएं और/या उन गतिविधियों में रुचि का नुकसान उत्पन्न करती है जो आप कभी आनंद लेते थे।",
    signsH2: "संकेत जो बताते हैं कि आप अवसाद का अनुभव कर रहे हैं",
    signsIntro: "लक्षण हल्के से गंभीर तक भिन्न हो सकते हैं और इनमें शामिल हो सकते हैं:",
    signs: ["उदास महसूस करना या अवसादग्रस्त मूड होना", "पहले की पसंदीदा गतिविधियों में रुचि या आनंद का नुकसान", "भूख में परिवर्तन — डाइटिंग से असंबंधित वजन कम या बढ़ना", "सोने में परेशानी या बहुत ज़्यादा सोना", "ऊर्जा का नुकसान या थकान बढ़ना", "उद्देश्यहीन शारीरिक गतिविधि में वृद्धि (जैसे स्थिर न बैठ पाना) या धीमी गति/वाणी", "खुद को बेकार या दोषी महसूस करना", "सोचने, ध्यान केंद्रित करने, या निर्णय लेने में कठिनाई", "मृत्यु या आत्महत्या के विचार"],
    calloutTitle: "नैदानिक निदान पर नोट",
    calloutText: "अवसाद के निदान के लिए लक्षणों को कम से कम दो सप्ताह तक रहना होगा और आपके पिछले कार्य स्तर में बदलाव होना चाहिए।",
    mythsH2: "अवसाद के बारे में सामान्य मिथक",
    myths: [
      <><strong>मिथक:</strong> "यह सिर्फ उदासी है, आप इससे बाहर निकल सकते हैं।"<br /><strong>तथ्य:</strong> अवसाद एक जटिल चिकित्सा स्थिति है, चरित्र की कमज़ोरी नहीं।</>,
      <><strong>मिथक:</strong> "अवसाद के लिए कारण की ज़रूरत होती है।"<br /><strong>तथ्य:</strong> हालांकि आघात या दुःख अवसाद को ट्रिगर कर सकता है, यह जैविक रसायन के कारण बिना किसी सटीक "घटना" के भी प्रकट हो सकता है।</>,
    ],
    selfH2: "स्व-सहायता रणनीतियां",
    selfIntro: "हालांकि पेशेवर मदद महत्वपूर्ण है, कुछ जीवनशैली परिवर्तन ठीक होने में सहायता कर सकते हैं:",
    selfItems: [
      <><strong>शारीरिक गतिविधि:</strong> व्यायाम एंडोर्फिन रिलीज़ करता है जो प्राकृतिक मूड उठाने वाले के रूप में काम करते हैं।</>,
      <><strong>नींद की स्वच्छता:</strong> हर दिन सख्ती से एक ही समय पर सोकर अपनी सर्कडियन लय को नियंत्रित करें।</>,
      <><strong>सीमाएं निर्धारित करें:</strong> जहाँ संभव हो अपने दैनिक कार्यक्रम का बोझ कम करके तनाव घटाएं।</>,
    ],
    professionalH2: "भारत में पेशेवर संसाधन",
    professionalP: "यदि आप इतने भारी रूप से अवसाद से जूझ रहे हैं कि यह आपके दैनिक कार्य में हस्तक्षेप करता है, हम Practo जैसे संसाधनों के माध्यम से भारत में नैदानिक पेशेवरों से संपर्क करने, या सीधे अपने निकटतम सरकारी अस्पताल के मनोरोग वार्ड का दौरा करने की सलाह देते हैं।",
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "नैराश्य समजून घेणे",
    intro: "नैराश्य (Major Depressive Disorder) एक सामान्य आणि गंभीर वैद्यकीय आजार आहे जो तुम्हाला कसे वाटते, तुम्ही कसा विचार करता आणि कसे वागता यावर नकारात्मक परिणाम करतो. हे अत्यंत उपचारयोग्य देखील आहे. हे दुःखाच्या भावना आणि/किंवा पूर्वी आवडत्या क्रियाकलापांमध्ये रूची गमावण्यास कारणीभूत ठरते.",
    signsH2: "तुम्हाला नैराश्याचा अनुभव येत असल्याची चिन्हे",
    signsIntro: "लक्षणे सौम्य ते गंभीर पर्यंत भिन्न असू शकतात आणि यात समाविष्ट असू शकतात:",
    signs: ["उदास वाटणे किंवा नैराश्याचा मूड असणे", "पूर्वी आवडलेल्या क्रियाकलापांमध्ये रूची किंवा आनंद गमावणे", "भूकेत बदल — आहाराशी असंबंधित वजन कमी किंवा वाढ", "झोपण्यात अडचण किंवा जास्त झोपणे", "ऊर्जा गमावणे किंवा थकवा वाढणे", "उद्देशहीन शारीरिक क्रियाकलाप वाढणे (जसे स्थिर न बसणे) किंवा मंद हालचाल/बोलणे", "निरुपयोगी किंवा दोषी वाटणे", "विचार करणे, लक्ष केंद्रित करणे किंवा निर्णय घेण्यात अडचण", "मृत्यू किंवा आत्महत्येचे विचार"],
    calloutTitle: "क्लिनिकल निदानाबद्दल नोंद",
    calloutText: "नैराश्याचे निदान होण्यासाठी लक्षणे किमान दोन आठवडे टिकायला हवीत आणि तुमच्या मागील कार्य पातळीत बदल दर्शवायला हवा.",
    mythsH2: "नैराश्याबद्दल सामान्य गैरसमज",
    myths: [
      <><strong>गैरसमज:</strong> "हे फक्त दुःख आहे, तुम्ही यातून बाहेर पडू शकता."<br /><strong>वस्तुस्थिती:</strong> नैराश्य एक जटिल वैद्यकीय स्थिती आहे, चारित्र्याची कमकुवतपणा नव्हे.</>,
      <><strong>गैरसमज:</strong> "नैराश्यासाठी कारण आवश्यक आहे."<br /><strong>वस्तुस्थिती:</strong> आघात किंवा दुःख नैराश्य ट्रिगर करू शकत असले तरी, ते अचूक "घटना" शिवाय जैविक रसायनामुळे देखील प्रकट होऊ शकते.</>,
    ],
    selfH2: "स्व-सहाय्य धोरणे",
    selfIntro: "व्यावसायिक मदत महत्त्वाची असली तरी, काही जीवनशैली बदल बरे होण्यास मदत करू शकतात:",
    selfItems: [
      <><strong>शारीरिक क्रियाकलाप:</strong> व्यायाम एंडोर्फिन सोडतो जे नैसर्गिक मूड उचलणारे म्हणून काम करतात.</>,
      <><strong>झोपेची स्वच्छता:</strong> दररोज कठोरपणे एकाच वेळी झोपून तुमची सर्कडियन ताल नियंत्रित करा.</>,
      <><strong>मर्यादा सेट करा:</strong> शक्य असेल तिथे दैनंदिन वेळापत्रकाचा बोजा कमी करून ताण कमी करा.</>,
    ],
    professionalH2: "भारतातील व्यावसायिक संसाधने",
    professionalP: "तुम्ही इतक्या जड नैराश्याशी झुंजत असाल की ते तुमच्या दैनंदिन कार्यात व्यत्यय आणते, तर आम्ही Practo सारख्या संसाधनांद्वारे भारतातील क्लिनिकल व्यावसायिकांशी संपर्क साधण्याची किंवा थेट जवळच्या सरकारी रुग्णालयाच्या मनोरोग विभागाला भेट देण्याची शिफारस करतो.",
  },
};

export default function DepressionGuide() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="signs-you-may-be-experiencing-depression">{c.signsH2}</h2>
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
