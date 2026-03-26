import { Steps, Step } from "../../components/docs/Steps";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    lastUpdated: "Last updated: Oct 24, 2024",
    h1: "Evidence-Based Coping Strategies",
    intro: "When you are experiencing an acute mental health episode (like a panic attack or severe depressive spiral), attempting to \"think your way out of it\" rarely works. The strategies below are physiological and cognitive interventions designed to short-circuit the stress response.",
    breathH2: "Breathing Techniques",
    breathP: "Deep breathing stimulates the parasympathetic nervous system, which acts as a brake on your body's stress response.",
    breathSteps: [
      { title: "Box Breathing", desc: "Inhale for 4 seconds. Hold for 4 seconds. Exhale for 4 seconds. Hold empty for 4 seconds. Repeat 4 times. This is used by military personnel to maintain calm in high-stress situations." },
      { title: "4-7-8 Breathing", desc: "Inhale through your nose for 4 seconds. Hold your breath for 7 seconds. Exhale completely through your mouth with a whoosh sound for 8 seconds. This acts as a natural tranquilizer." },
    ],
    groundH2: "Grounding Techniques",
    groundP: <>Grounding pulls you out of your head and forcefully anchors your attention in the physical world. The most famous is the <strong>5-4-3-2-1</strong> method. Look around you and identify:</>,
    groundItems: [
      <><strong>5</strong> things you can <em>see</em></>,
      <><strong>4</strong> things you can <em>touch</em> (and feel their texture)</>,
      <><strong>3</strong> things you can <em>hear</em></>,
      <><strong>2</strong> things you can <em>smell</em></>,
      <><strong>1</strong> thing you can <em>taste</em></>,
    ],
    reframeH2: "Cognitive Reframing",
    reframeP: "Cognitive reframing is a core CBT technique. It involves noticing a negative thought, challenging its factual accuracy, and replacing it.",
    reframeQuote: <>
      <strong>Instead of:</strong> "I failed this test, I'm going to ruin my entire career."<br />
      <strong>Reframe to:</strong> "I didn't do well on this test, which is disappointing. But one test does not dictate my entire future, and I can study differently next time."
    </>,
    physH2: "Physical Strategies",
    physIntro: "Sometimes you need to physically change your body chemistry:",
    physItems: [
      <><strong>The Mammalian Dive Reflex:</strong> Submerging your face in ice-cold water for 15-30 seconds instantly slows your heart rate.</>,
      <><strong>Intense Exercise:</strong> Doing jumping jacks or sprinting for 60 seconds burns off excess adrenaline during a panic attack.</>,
    ],
    supportH2: "Building Support Systems",
    supportP: <>Isolation feeds mental illness. Simply stating, "I am having a really hard time right now" to a trusted friend or family member breaks the illusion that you have to suffer alone. This is why MindBridge requires a <strong>Trusted Contact</strong> inside the app.</>,
  },
  hi: {
    lastUpdated: "अंतिम अपडेट: अक्टू. 24, 2024",
    h1: "साक्ष्य-आधारित कॉपिंग रणनीतियां",
    intro: "जब आप एक तीव्र मानसिक स्वास्थ्य प्रकरण (जैसे पैनिक अटैक या गंभीर अवसादग्रस्त सर्पिल) का अनुभव कर रहे हों, तो \"इससे सोच कर निकलने\" की कोशिश शायद ही काम करती है। नीचे दी गई रणनीतियां शारीरिक और संज्ञानात्मक हस्तक्षेप हैं जो तनाव प्रतिक्रिया को शॉर्ट-सर्किट करने के लिए डिज़ाइन की गई हैं।",
    breathH2: "श्वास लेने की तकनीकें",
    breathP: "गहरी सांस लेना पैरासिम्पेथेटिक तंत्रिका तंत्र को उत्तेजित करता है, जो आपके शरीर की तनाव प्रतिक्रिया पर ब्रेक की तरह काम करता है।",
    breathSteps: [
      { title: "बॉक्स ब्रीदिंग", desc: "4 सेकंड के लिए सांस लें। 4 सेकंड के लिए रोकें। 4 सेकंड के लिए छोड़ें। 4 सेकंड के लिए खाली रोकें। 4 बार दोहराएं। इसका उपयोग सैन्य कर्मियों द्वारा उच्च-तनाव स्थितियों में शांत रहने के लिए किया जाता है।" },
      { title: "4-7-8 ब्रीदिंग", desc: "अपनी नाक से 4 सेकंड के लिए सांस लें। 7 सेकंड के लिए अपनी सांस रोकें। अपने मुंह से 8 सेकंड के लिए पूरी तरह से छोड़ें। यह एक प्राकृतिक शामक के रूप में काम करता है।" },
    ],
    groundH2: "ग्राउंडिंग तकनीकें",
    groundP: <>ग्राउंडिंग आपको अपने दिमाग से बाहर खींचती है और जबरदस्ती आपका ध्यान भौतिक दुनिया में लंगर डालती है। सबसे प्रसिद्ध है <strong>5-4-3-2-1</strong> पद्धति। अपने आसपास देखें और पहचानें:</>,
    groundItems: [
      <><strong>5</strong> चीजें जो आप <em>देख</em> सकते हैं</>,
      <><strong>4</strong> चीजें जो आप <em>छू</em> सकते हैं (और उनकी बनावट महसूस कर सकते हैं)</>,
      <><strong>3</strong> चीजें जो आप <em>सुन</em> सकते हैं</>,
      <><strong>2</strong> चीजें जो आप <em>सूंघ</em> सकते हैं</>,
      <><strong>1</strong> चीज़ जो आप <em>चख</em> सकते हैं</>,
    ],
    reframeH2: "संज्ञानात्मक पुनर्रचना",
    reframeP: "संज्ञानात्मक पुनर्रचना एक मूल CBT तकनीक है। इसमें एक नकारात्मक विचार देखना, उसकी तथ्यात्मक सटीकता को चुनौती देना और उसे बदलना शामिल है।",
    reframeQuote: <>
      <strong>इसके बजाय:</strong> "मैं यह परीक्षा में फेल हो गया, मैं अपना पूरा करियर बर्बाद करने वाला हूं।"<br />
      <strong>पुनर्रचना करें:</strong> "मैंने इस परीक्षा में अच्छा नहीं किया, जो निराशाजनक है। लेकिन एक परीक्षा मेरे पूरे भविष्य को तय नहीं करती, और मैं अगली बार अलग तरह से पढ़ सकता हूं।"
    </>,
    physH2: "शारीरिक रणनीतियां",
    physIntro: "कभी-कभी आपको शारीरिक रूप से अपनी शारीरिक रसायन बदलने की जरूरत होती है:",
    physItems: [
      <><strong>मैमेलियन डाइव रिफ्लेक्स:</strong> 15-30 सेकंड के लिए अपना चेहरा बर्फ-ठंडे पानी में डुबोना तुरंत आपकी हृदय गति धीमी कर देता है।</>,
      <><strong>तीव्र व्यायाम:</strong> पैनिक अटैक के दौरान 60 सेकंड तक जंपिंग जैक या स्प्रिंटिंग करने से अतिरिक्त एड्रेनालाईन जलता है।</>,
    ],
    supportH2: "समर्थन प्रणालियां बनाना",
    supportP: <>अलगाव मानसिक बीमारी को खिलाता है। किसी विश्वसनीय मित्र या परिवार के सदस्य से बस "मुझे अभी वास्तव में कठिन समय हो रहा है" कहना यह भ्रम तोड़ता है कि आपको अकेले पीड़ित होना है। इसीलिए MindBridge ऐप के अंदर <strong>विश्वसनीय संपर्क</strong> की आवश्यकता रखता है।</>,
  },
  mr: {
    lastUpdated: "शेवटचे अपडेट: ऑक्टो. 24, 2024",
    h1: "पुरावा-आधारित कोपिंग धोरणे",
    intro: "जेव्हा तुम्ही एक तीव्र मानसिक आरोग्य प्रकरणाचा (जसे पॅनिक अटॅक किंवा तीव्र नैराश्याचा सर्पिल) अनुभव घेत असता, तेव्हा \"विचार करून बाहेर पडण्याचा\" प्रयत्न क्वचितच काम करतो. खालील धोरणे शारीरिक आणि संज्ञानात्मक हस्तक्षेप आहेत जे ताण प्रतिसादाला शॉर्ट-सर्किट करण्यासाठी डिझाइन केल्या आहेत.",
    breathH2: "श्वसन तंत्रे",
    breathP: "खोल श्वास घेणे पॅरासिम्पेथेटिक मज्जातंतू प्रणालीला उत्तेजित करते, जे तुमच्या शरीराच्या ताण प्रतिसादावर ब्रेक म्हणून कार्य करते.",
    breathSteps: [
      { title: "बॉक्स ब्रेदिंग", desc: "4 सेकंद श्वास घ्या. 4 सेकंद धरा. 4 सेकंद सोडा. 4 सेकंद रिकामे धरा. 4 वेळा पुनरावृत्ती करा. हे उच्च-ताण परिस्थितींमध्ये शांत राहण्यासाठी लष्करी कर्मचारी वापरतात." },
      { title: "4-7-8 ब्रेदिंग", desc: "4 सेकंद नाकातून श्वास घ्या. 7 सेकंद श्वास रोखा. 8 सेकंद तोंडातून पूर्णपणे सोडा. हे नैसर्गिक शामक म्हणून कार्य करते." },
    ],
    groundH2: "ग्राउंडिंग तंत्रे",
    groundP: <>ग्राउंडिंग तुम्हाला तुमच्या डोक्यातून बाहेर काढते आणि जबरदस्तीने तुमचे लक्ष भौतिक जगात नांगरते. सर्वात प्रसिद्ध आहे <strong>5-4-3-2-1</strong> पद्धत. तुमच्या आसपास पाहा आणि ओळखा:</>,
    groundItems: [
      <><strong>5</strong> गोष्टी ज्या तुम्ही <em>पाहू</em> शकता</>,
      <><strong>4</strong> गोष्टी ज्या तुम्ही <em>स्पर्श</em> करू शकता (आणि त्यांची पोत जाणवा)</>,
      <><strong>3</strong> गोष्टी ज्या तुम्ही <em>ऐकू</em> शकता</>,
      <><strong>2</strong> गोष्टी ज्या तुम्ही <em>वास</em> घेऊ शकता</>,
      <><strong>1</strong> गोष्ट जी तुम्ही <em>चाखू</em> शकता</>,
    ],
    reframeH2: "संज्ञानात्मक पुनर्रचना",
    reframeP: "संज्ञानात्मक पुनर्रचना हे एक मूळ CBT तंत्र आहे. यात नकारात्मक विचार लक्षात घेणे, त्याच्या तथ्यात्मक अचूकतेला आव्हान देणे आणि त्याची जागा घेणे समाविष्ट आहे.",
    reframeQuote: <>
      <strong>याऐवजी:</strong> "मी ही परीक्षा नापास झालो, मी माझी संपूर्ण कारकीर्द बर्बाद करणार आहे."<br />
      <strong>पुनर्रचना करा:</strong> "मी या परीक्षेत चांगले केले नाही, जे निराशाजनक आहे. पण एक परीक्षा माझे संपूर्ण भविष्य ठरवत नाही, आणि मी पुढच्या वेळी वेगळ्या प्रकारे अभ्यास करू शकतो."
    </>,
    physH2: "शारीरिक धोरणे",
    physIntro: "काहीवेळा तुम्हाला शारीरिकरित्या तुमची शरीर रसायने बदलावी लागतात:",
    physItems: [
      <><strong>मॅमेलियन डाईव्ह रिफ्लेक्स:</strong> 15-30 सेकंद बर्फ-थंड पाण्यात चेहरा बुडवल्याने तात्काळ हृदय गती कमी होते.</>,
      <><strong>तीव्र व्यायाम:</strong> पॅनिक अटॅक दरम्यान 60 सेकंद जंपिंग जॅक किंवा स्प्रिंटिंग केल्याने अतिरिक्त अॅड्रेनालिन जाळला जातो.</>,
    ],
    supportH2: "समर्थन प्रणाली तयार करणे",
    supportP: <>एकटेपणा मानसिक आजाराला खाद्य देतो. विश्वासू मित्र किंवा कुटुंबातील सदस्याला फक्त "मला आत्ता खरोखर कठीण वेळ आहे" सांगणे हा भ्रम तोडतो की तुम्हाला एकट्याने सहन करावे लागेल. म्हणूनच MindBridge ॲपमध्ये <strong>विश्वासू संपर्क</strong> आवश्यक आहे.</>,
  },
};

export default function CopingStrategies() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{c.lastUpdated}</p>
      <h1>{c.h1}</h1>

      <p>{c.intro}</p>

      <h2 id="breathing-techniques">{c.breathH2}</h2>
      <p>{c.breathP}</p>

      <Steps>
        {c.breathSteps.map((step, i) => (
          <Step key={i} number={String(i + 1)} title={step.title}>
            {step.desc}
          </Step>
        ))}
      </Steps>

      <h2 id="grounding-techniques">{c.groundH2}</h2>
      <p>{c.groundP}</p>
      <ul>
        {c.groundItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="cognitive-reframing">{c.reframeH2}</h2>
      <p>{c.reframeP}</p>
      <blockquote>
        <p className="not-italic text-slate-300 border-l-4 border-teal-500 pl-4 py-1 my-4 bg-[#1E293B] rounded-r-lg">
          {c.reframeQuote}
        </p>
      </blockquote>

      <h2 id="physical-strategies">{c.physH2}</h2>
      <p>{c.physIntro}</p>
      <ul>
        {c.physItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 id="building-support-systems">{c.supportH2}</h2>
      <p>{c.supportP}</p>
    </>
  );
}
