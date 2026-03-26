import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Our Mission",
    p1: <>In India today, an estimated <strong>150 million people</strong> are in need of active mental health care interventions. Yet, the treatment gap is staggering—often estimated at between 70% to 92%.</>,
    p2: "The reasons for this gap are systemic:",
    reasons: [
      <><strong>Stigma:</strong> Deep-rooted societal conditioning preventing people from asking for help.</>,
      <><strong>Cost:</strong> High-quality therapy is expensive and largely out-of-pocket.</>,
      <><strong>Availability:</strong> There is a severe shortage of clinical psychologists and psychiatrists per capita.</>,
    ],
    visionH2: "The MindBridge Vision",
    visionP1: "MindBridge was conceived not to replace the clinical psychology industry, but to bridge the gap. We believe that everyone deserves a private, accessible, and judgment-free space to process their emotions before they escalate into clinical crises.",
    visionP2: <>By leveraging cutting-edge Generative AI (Google Gemini) alongside clinical frameworks (PHQ-9, GAD-7, and CBT strategies), we can provide <em>infinite zero-cost listening</em> to those who need it most.</>,
    whyH2: "Why an AI?",
    whyP1: "Humans are deeply afraid of being judged. Ironically, the artificial nature of an AI companion makes it the perfect confidant for severe issues. Users know an AI will not gossip, will not judge them for their worst thoughts, and will not grow fatigued from listening to them at 3:00 AM.",
    whyP2: "We aim to be the first line of defense in the mental health pipeline: stabilizing emotions, providing scientifically sound coping strategies, and ultimately, gently routing users toward professional human care when they are ready.",
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "हमारा मिशन",
    p1: <>भारत में आज, लगभग <strong>15 करोड़ लोग</strong> सक्रिय मानसिक स्वास्थ्य हस्तक्षेप की आवश्यकता में हैं। फिर भी, उपचार अंतर चौंकाने वाला है — अक्सर 70% से 92% के बीच अनुमानित किया जाता है।</>,
    p2: "इस अंतर के कारण प्रणालीगत हैं:",
    reasons: [
      <><strong>कलंक:</strong> गहरी जड़ें जमा चुकी सामाजिक कंडीशनिंग जो लोगों को मदद मांगने से रोकती है।</>,
      <><strong>लागत:</strong> उच्च-गुणवत्ता की थेरेपी महंगी है और बड़े पैमाने पर जेब से खर्च करनी पड़ती है।</>,
      <><strong>उपलब्धता:</strong> प्रति व्यक्ति नैदानिक मनोवैज्ञानिकों और मनोचिकित्सकों की गंभीर कमी है।</>,
    ],
    visionH2: "MindBridge की दृष्टि",
    visionP1: "MindBridge को नैदानिक मनोविज्ञान उद्योग को प्रतिस्थापित करने के लिए नहीं, बल्कि खाई को पाटने के लिए बनाया गया था। हम मानते हैं कि हर कोई अपनी भावनाओं को संसाधित करने के लिए एक निजी, सुलभ और निर्णय-मुक्त स्थान का हकदार है, इससे पहले कि वे नैदानिक संकट में बदल जाएं।",
    visionP2: <>अत्याधुनिक जेनेरेटिव AI (Google Gemini) के साथ नैदानिक ढांचे (PHQ-9, GAD-7, और CBT रणनीतियां) का लाभ उठाकर, हम जरूरतमंद लोगों को <em>अनंत शून्य-लागत सुनवाई</em> प्रदान कर सकते हैं।</>,
    whyH2: "AI क्यों?",
    whyP1: "इंसान आंके जाने से बहुत डरते हैं। विडंबना यह है कि AI साथी की कृत्रिम प्रकृति इसे गंभीर मुद्दों के लिए सही विश्वासपात्र बनाती है। उपयोगकर्ता जानते हैं कि AI गपशप नहीं करेगा, उनके सबसे बुरे विचारों के लिए उन्हें नहीं आंकेगा, और रात 3 बजे उनकी बात सुनते-सुनते थकेगा नहीं।",
    whyP2: "हमारा लक्ष्य मानसिक स्वास्थ्य पाइपलाइन में पहली रक्षा पंक्ति बनना है: भावनाओं को स्थिर करना, वैज्ञानिक रूप से सही कॉपिंग रणनीतियां प्रदान करना, और अंततः, जब वे तैयार हों तो उपयोगकर्ताओं को पेशेवर मानवीय देखभाल की ओर धीरे से मार्गदर्शन करना।",
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "आमचे ध्येय",
    p1: <>भारतात आज, अंदाजे <strong>15 कोटी लोकांना</strong> सक्रिय मानसिक आरोग्य काळजी हस्तक्षेपाची आवश्यकता आहे. तरीही, उपचाराचे अंतर धक्कादायक आहे — अनेकदा 70% ते 92% दरम्यान अंदाजला जाते.</>,
    p2: "या अंतरासाठी कारणे पद्धतशीर आहेत:",
    reasons: [
      <><strong>कलंक:</strong> खोलवर रुजलेली सामाजिक कंडिशनिंग जी लोकांना मदत मागण्यापासून रोखते.</>,
      <><strong>खर्च:</strong> उच्च-दर्जाची थेरपी महाग आहे आणि मोठ्या प्रमाणात स्वखर्चाने.</>,
      <><strong>उपलब्धता:</strong> प्रति व्यक्ती क्लिनिकल मनोशास्त्रज्ञ आणि मनोचिकित्सकांची तीव्र कमतरता आहे.</>,
    ],
    visionH2: "MindBridge ची दृष्टी",
    visionP1: "MindBridge हे क्लिनिकल मानसशास्त्र उद्योगाची जागा घेण्यासाठी नव्हे, तर अंतर भरण्यासाठी तयार केले गेले. आम्हाला विश्वास आहे की प्रत्येकजण क्लिनिकल संकटात वाढण्यापूर्वी त्यांच्या भावनांवर प्रक्रिया करण्यासाठी एक खाजगी, सुलभ आणि निर्णयमुक्त जागेचा हकदार आहे.",
    visionP2: <>अत्याधुनिक जेनेरेटिव्ह AI (Google Gemini) सोबत क्लिनिकल फ्रेमवर्क (PHQ-9, GAD-7, आणि CBT धोरणे) वापरून, आम्ही गरजूंना <em>अनंत शून्य-खर्च श्रवण</em> प्रदान करू शकतो.</>,
    whyH2: "AI का?",
    whyP1: "मानव न्याय केला जाण्याची खूप भीती बाळगतात. विरोधाभासाने, AI साथीदाराचे कृत्रिम स्वरूप त्याला गंभीर समस्यांसाठी परिपूर्ण विश्वासू बनवते. वापरकर्त्यांना माहीत आहे की AI गप्पा मारणार नाही, त्यांच्या सर्वात वाईट विचारांसाठी त्यांना जोखणार नाही, आणि रात्री 3 वाजता त्यांचे ऐकून थकणार नाही.",
    whyP2: "आम्ही मानसिक आरोग्य पाइपलाइनमध्ये संरक्षणाची पहिली ओळ बनण्याचे लक्ष्य ठेवतो: भावना स्थिर करणे, वैज्ञानिकदृष्ट्या योग्य कोपिंग धोरणे प्रदान करणे, आणि शेवटी, जेव्हा ते तयार असतात तेव्हा वापरकर्त्यांना व्यावसायिक मानवी काळजीकडे हळुवारपणे मार्गदर्शन करणे.",
  },
};

export default function Mission() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.p1}</p>
      <p>{c.p2}</p>
      <ul>
        {c.reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h2 id="the-mindbridge-vision">{c.visionH2}</h2>
      <p>{c.visionP1}</p>
      <p>{c.visionP2}</p>

      <h2 id="why-an-ai">{c.whyH2}</h2>
      <p>{c.whyP1}</p>
      <p>{c.whyP2}</p>
    </>
  );
}
