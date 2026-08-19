    import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "नाशिक कुंभमेळा २०२७ प्राधिकरण व समित्या | NTKMA संपूर्ण माहिती",
  description:
    "नाशिक-त्र्यंबकेश्वर कुंभमेळा २०२७ चे आयोजन कोण करत आहे? NTKMA, महाराष्ट्र सिंहस्थ कुंभमेळा अधिनियम २०२५, शिखर समिती, मंत्री समिती, कार्यकारी समिती आणि विविध सरकारी विभागांविषयी संपूर्ण माहिती.",
  keywords: [
    "नाशिक कुंभमेळा प्राधिकरण",
    "NTKMA",
    "नाशिक त्र्यंबकेश्वर कुंभमेळा",
    "कुंभमेळा समिती",
    "शिखर समिती",
    "मंत्री समिती",
    "महाराष्ट्र सिंहस्थ कुंभमेळा अधिनियम २०२५",
    "कुंभमेळा प्रशासन",
    "नाशिक कुंभमेळा २०२७",
    "सिंहस्थ कुंभमेळा प्राधिकरण"
  ],

  alternates: {
    canonical:
      "https://kumbhnashikguide.com/blog/nashik-kumbh-mela-authorities-committees-mr",
  },

  openGraph: {
    title:
      "नाशिक कुंभमेळा २०२७ प्राधिकरण व समित्या",
    description:
      "नाशिक-त्र्यंबकेश्वर कुंभमेळा २०२७ चे अधिकृत प्रशासन, NTKMA, सरकारी समित्या आणि आयोजनाची माहिती.",
    url:
      "https://kumbhnashikguide.com/blog/nashik-kumbh-mela-authorities-committees-mr",
    siteName: "Kumbh Nashik Guide",
    locale: "mr_IN",
    type: "article",
    images: [
      {
        url: "https://kumbhnashikguide.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const members = [
  ["अध्यक्ष", "विभागीय आयुक्त, नाशिक विभाग"],
  ["उपाध्यक्ष", "जिल्हाधिकारी, नाशिक"],
  ["उपाध्यक्ष", "विशेष पोलीस महानिरीक्षक, नाशिक परिक्षेत्र"],
  ["सदस्य", "जिल्हाधिकारी, अहिल्यानगर"],
  ["सदस्य", "महानगर आयुक्त, नाशिक महानगर प्रदेश विकास प्राधिकरण"],
  ["सदस्य", "पोलीस आयुक्त, नाशिक शहर"],
  ["सदस्य", "पोलीस अधीक्षक, नाशिक ग्रामीण"],
  ["सदस्य", "महानगरपालिका आयुक्त, नाशिक महानगरपालिका"],
  ["सदस्य", "मुख्य कार्यकारी अधिकारी, जिल्हा परिषद, नाशिक"],
  ["सदस्य", "मुख्याधिकारी, त्र्यंबकेश्वर नगर परिषद"],
  ["सदस्य", "उपआयुक्त (नियोजन), नाशिक"],
  ["सदस्य", "विभागीय नियंत्रक, महाराष्ट्र राज्य मार्ग परिवहन महामंडळ"],
  ["सदस्य", "उपसंचालक, आरोग्य विभाग"],
  ["सदस्य", "अधीक्षक अभियंता, जलसंपदा विभाग"],
  ["सदस्य", "मुख्य अभियंता, सार्वजनिक बांधकाम विभाग"],
  ["सदस्य", "मुख्य अभियंता, महाराष्ट्र जीवन प्राधिकरण"],
  ["सदस्य", "अधीक्षक अभियंता, महावितरण"],
  ["सदस्य", "प्रादेशिक अधिकारी, महाराष्ट्र प्रदूषण नियंत्रण मंडळ"],
  ["सदस्य", "सहसंचालक, लेखा व कोषागार"],
  ["सदस्य", "सहसंचालक, नगररचना विभाग"],
  ["सदस्य", "रेल्वे मंडळ प्रतिनिधी"],
  ["सदस्य सचिव", "कुंभमेळा आयुक्त"],
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 leading-8">

      <p className="text-orange-600 font-semibold mb-3">
        अधिकृत प्रशासन व सरकारी समित्या
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        नाशिक कुंभमेळा २०२७ प्राधिकरण व समित्या
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        नाशिक-त्र्यंबकेश्वर सिंहस्थ कुंभमेळा २०२७ हा जगातील सर्वात मोठ्या धार्मिक
        मेळ्यांपैकी एक आहे. या भव्य आयोजनासाठी महाराष्ट्र शासनाने विशेष
        प्रशासनिक व्यवस्था, प्राधिकरणे आणि विविध समित्यांची स्थापना केली आहे.
        या लेखामध्ये NTKMA, शिखर समिती, मंत्री समिती, कार्यकारी समिती आणि
        संबंधित सरकारी विभागांची सविस्तर माहिती दिली आहे.
      </p>

      <img
        src="/images/kumbh-authority.jpg"
        alt="नाशिक कुंभमेळा प्राधिकरण आणि सरकारी समित्या"
        className="w-full h-[280px] md:h-[430px] object-cover rounded-2xl mb-12"
      />

      <section className="bg-orange-50 border border-orange-100 rounded-xl p-8 mb-12">

        <h2 className="text-3xl font-bold mb-4">
          NTKMA म्हणजे काय?
        </h2>

        <p className="mb-4">
          <strong>नाशिक-त्र्यंबकेश्वर कुंभमेळा प्राधिकरण (NTKMA)</strong>
          हे महाराष्ट्र शासनाने स्थापन केलेले विशेष प्राधिकरण आहे.
          सिंहस्थ कुंभमेळा २०२७ च्या नियोजनापासून ते अंमलबजावणीपर्यंत
          सर्व महत्त्वाच्या कामांचे समन्वय या प्राधिकरणामार्फत केला जातो.
        </p>

        <p className="mb-4">
          या प्राधिकरणामध्ये विविध शासकीय विभागांचे वरिष्ठ अधिकारी,
          पोलीस विभाग, महानगरपालिका, आरोग्य विभाग,
          सार्वजनिक बांधकाम विभाग, जलसंपदा विभाग,
          महाराष्ट्र जीवन प्राधिकरण, महावितरण,
          महाराष्ट्र राज्य मार्ग परिवहन महामंडळ,
          नगररचना विभाग आणि रेल्वे प्रतिनिधी यांचा सहभाग आहे.
        </p>

        <p>
          लाखो भाविकांसाठी आवश्यक पायाभूत सुविधा, वाहतूक,
          सुरक्षा, स्वच्छता, नदी व्यवस्थापन, आरोग्य सेवा,
          डिजिटल सेवा आणि आपत्कालीन नियोजन यांचा समन्वय NTKMA करते.
        </p>

      </section>

      <section className="mb-12">

        <h2 className="text-3xl font-bold mb-5">
          कायदेशीर आधार
        </h2>

        <p className="mb-4">
          नाशिक-त्र्यंबकेश्वर कुंभमेळा २०२७ चे संपूर्ण प्रशासन
          <strong> महाराष्ट्र सिंहस्थ कुंभमेळा अधिनियम, २०२५ </strong>
          आणि त्यानुसार वेळोवेळी प्रसिद्ध करण्यात आलेल्या
          शासन निर्णय (GR) आणि शासन परिपत्रकांवर आधारित आहे.
        </p>

        <p className="mb-4">
          या अधिनियमामुळे कुंभमेळ्याच्या आयोजनासाठी
          स्वतंत्र प्राधिकरण, आर्थिक नियोजन, प्रशासकीय अधिकार,
          विविध समित्या आणि विभागीय समन्वयाची अधिकृत व्यवस्था तयार करण्यात आली.
        </p>

        <div className="bg-gray-50 rounded-xl border p-6">

          <h3 className="text-xl font-semibold mb-3">
            या अधिनियमांतर्गत प्रमुख बाबी
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>कुंभमेळा प्राधिकरणाची स्थापना</li>
            <li>आर्थिक नियोजन व निधी व्यवस्थापन</li>
            <li>पायाभूत सुविधा विकास</li>
            <li>खरेदी प्रक्रिया</li>
            <li>विभागांमधील समन्वय</li>
            <li>वारसा (Legacy) व्यवस्थापन</li>
          </ul>

        </div>

      </section>

      <section className="mb-12">

        <h2 className="text-3xl font-bold mb-6">
          प्रमुख समित्या
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-bold mb-3">
              शिखर समिती
            </h3>

            <p>
              महाराष्ट्राचे माननीय मुख्यमंत्री यांच्या अध्यक्षतेखाली
              स्थापन करण्यात आलेली सर्वोच्च समिती.
              कुंभमेळ्याच्या धोरणात्मक निर्णयांवर अंतिम मार्गदर्शन करते.
            </p>

          </div>

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-bold mb-3">
              मंत्री समिती
            </h3>

            <p>
              कुंभमेळा मंत्री यांच्या अध्यक्षतेखाली स्थापन.
              विविध विभागांमधील प्रशासकीय समन्वय करते.
            </p>

          </div>

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-bold mb-3">
              कार्यकारी समिती
            </h3>

            <p>
              मुख्य सचिव यांच्या अध्यक्षतेखाली.
              सर्व कामांचा आढावा, अंमलबजावणी आणि विभागीय समन्वय पाहते.
            </p>

          </div>

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-bold mb-3">
              NTKMA
            </h3>

            <p>
              कुंभमेळ्याच्या प्रत्यक्ष नियोजन, अंमलबजावणी,
              विकासकामे, सुरक्षा, वाहतूक, आरोग्य,
              स्वच्छता आणि सुविधा यांचा समन्वय करणारे
              मुख्य प्राधिकरण.
            </p>

          </div>

        </div>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          NTKMA मधील प्रमुख सदस्य
        </h2>

        <p className="mb-6">
          प्राधिकरणामध्ये महाराष्ट्र शासनाच्या विविध विभागांचे
          वरिष्ठ अधिकारी सदस्य म्हणून कार्यरत आहेत.
        </p>

        <div className="overflow-x-auto rounded-xl border">

          <table className="w-full">

            <thead className="bg-orange-100">

              <tr>

                <th className="text-left p-4 border">
                  पद
                </th>

                <th className="text-left p-4 border">
                  अधिकारी
                </th>

              </tr>

            </thead>

            <tbody>

              {members.map((member, index) => (

                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >

                  <td className="p-4 border font-medium">
                    {member[0]}
                  </td>

                  <td className="p-4 border">
                    {member[1]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>
      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          कुंभमेळा आयोजनामध्ये सहभागी प्रमुख शासकीय विभाग
        </h2>

        <p className="mb-6">
          नाशिक-त्र्यंबकेश्वर सिंहस्थ कुंभमेळा हा केवळ धार्मिक कार्यक्रम नसून
          लाखो भाविकांच्या सुरक्षित आणि सुरळीत व्यवस्थापनासाठी अनेक
          शासकीय विभाग एकत्रितपणे कार्य करतात.
        </p>

        <div className="overflow-x-auto rounded-xl border">

          <table className="w-full">

            <thead className="bg-orange-100">

              <tr>

                <th className="border p-4 text-left">
                  विभाग
                </th>

                <th className="border p-4 text-left">
                  मुख्य जबाबदारी
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>
                <td className="border p-4 font-semibold">
                  पोलीस विभाग
                </td>
                <td className="border p-4">
                  सुरक्षा, गर्दी नियंत्रण, वाहतूक आणि कायदा सुव्यवस्था.
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">
                  नाशिक महानगरपालिका
                </td>
                <td className="border p-4">
                  स्वच्छता, रस्ते, घाट, सार्वजनिक सुविधा आणि शहरातील विकासकामे.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  त्र्यंबकेश्वर नगर परिषद
                </td>
                <td className="border p-4">
                  स्थानिक नागरी सुविधा आणि यात्रेकरू व्यवस्थापन.
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">
                  सार्वजनिक बांधकाम विभाग
                </td>
                <td className="border p-4">
                  रस्ते, पूल, महामार्ग आणि इतर पायाभूत सुविधा.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  जलसंपदा विभाग
                </td>
                <td className="border p-4">
                  गोदावरी नदी, जलव्यवस्थापन आणि घाट परिसरातील कामे.
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">
                  महाराष्ट्र जीवन प्राधिकरण
                </td>
                <td className="border p-4">
                  पिण्याचे पाणी आणि जलपुरवठा.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  महावितरण
                </td>
                <td className="border p-4">
                  वीज पुरवठा आणि विद्युत व्यवस्था.
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">
                  आरोग्य विभाग
                </td>
                <td className="border p-4">
                  रुग्णालये, वैद्यकीय सेवा, आपत्कालीन उपचार.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  MSRTC
                </td>
                <td className="border p-4">
                  बस सेवा आणि भाविकांसाठी वाहतूक व्यवस्था.
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">
                  रेल्वे विभाग
                </td>
                <td className="border p-4">
                  रेल्वे प्रवासी सुविधा आणि समन्वय.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          महामार्ग भूसंपादन समिती
        </h2>

        <p className="mb-4">
          महाराष्ट्र शासनाच्या ३ जुलै २०२५ च्या शासन परिपत्रकानुसार
          नाशिक व त्र्यंबकेश्वर येथे होणाऱ्या सिंहस्थ कुंभमेळ्यासाठी
          आवश्यक राष्ट्रीय महामार्गांच्या कामांसाठी
          स्वतंत्र भूसंपादन समिती स्थापन करण्यात आली.
        </p>

        <p className="mb-4">
          या समितीमध्ये सार्वजनिक बांधकाम विभाग,
          वन विभाग,
          मुख्यमंत्री कार्यालय,
          नाशिक विभागीय आयुक्त,
          राष्ट्रीय महामार्ग प्राधिकरण (NHAI),
          तसेच रस्ते वाहतूक आणि महामार्ग मंत्रालयाचे वरिष्ठ अधिकारी सहभागी आहेत.
        </p>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">

          <h3 className="text-xl font-semibold mb-3">
            समितीची मुख्य कार्ये
          </h3>

          <ul className="list-disc pl-6 space-y-2">

            <li>महामार्गांसाठी आवश्यक जमीन संपादन</li>

            <li>प्रकल्पांना वेळेत मंजुरी मिळवणे</li>

            <li>विभागांमधील समन्वय साधणे</li>

            <li>कुंभमेळ्यापूर्वी रस्ते विकास पूर्ण करणे</li>

          </ul>

        </div>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          NTKMA मध्ये मंजूर करण्यात आलेली पदे
        </h2>

        <p className="mb-4">
          महाराष्ट्र शासनाच्या १० ऑक्टोबर २०२५ च्या शासन निर्णयानुसार
          नाशिक-त्र्यंबकेश्वर कुंभमेळा प्राधिकरणासाठी
          एकूण <strong>७६ पदांना मंजुरी</strong> देण्यात आली आहे.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="bg-orange-50 rounded-xl p-6 border">

            <p className="text-5xl font-bold text-orange-600">
              ५२
            </p>

            <p className="font-semibold mt-3">
              नियमित पदे
            </p>

          </div>

          <div className="bg-orange-50 rounded-xl p-6 border">

            <p className="text-5xl font-bold text-orange-600">
              २४
            </p>

            <p className="font-semibold mt-3">
              बाह्य यंत्रणेमार्फत पदे
            </p>

          </div>

        </div>

        <p className="mb-5">
          या पदांमध्ये कुंभमेळा आयुक्त,
          प्रशासन,
          वित्त,
          सुरक्षा,
          अभियंते,
          सामाजिक माध्यम,
          जनसंपर्क,
          विषयतज्ज्ञ,
          गुणवत्ता नियंत्रण,
          नियोजन आणि सहाय्यक कर्मचारी यांचा समावेश आहे.
        </p>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          भाविकांसाठी याचा अर्थ काय?
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-2">
              सुरक्षित यात्रा
            </h3>

            <p>
              पोलीस, प्रशासन आणि विविध विभागांच्या समन्वयामुळे
              भाविकांची सुरक्षा सुनिश्चित केली जाते.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-2">
              उत्तम वाहतूक
            </h3>

            <p>
              महामार्ग, बस सेवा, रेल्वे आणि पार्किंग व्यवस्था
              सुधारण्यासाठी स्वतंत्र नियोजन केले जाते.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-2">
              स्वच्छ घाट
            </h3>

            <p>
              गोदावरी नदी परिसर, घाट आणि सार्वजनिक स्वच्छतेसाठी
              विशेष कामे केली जातात.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold mb-2">
              आरोग्य सुविधा
            </h3>

            <p>
              वैद्यकीय सेवा, रुग्णालये,
              आपत्कालीन उपचार आणि आरोग्य सुविधा उपलब्ध करून दिल्या जातात.
            </p>
          </div>

        </div>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          संबंधित मार्गदर्शक
        </h2>

        <div className="space-y-4">

          <Link
            href="/blog/nashik-kumbh-mela-2027-budget-guide"
            className="block text-orange-600 font-semibold hover:underline"
          >
            → नाशिक कुंभमेळा २०२७ सरकारी अर्थसंकल्प
          </Link>

          <Link
            href="/updates/nashik-pune-highway-widening-kumbh-2027"
            className="block text-orange-600 font-semibold hover:underline"
          >
            → महामार्ग आणि पायाभूत सुविधा अद्यतने
          </Link>

          <Link
            href="/blog/nashik-kumbhmela-2027-tarikh"
            className="block text-orange-600 font-semibold hover:underline"
          >
            → नाशिक कुंभमेळा २०२७ तारखा
          </Link>

        </div>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          वारंवार विचारले जाणारे प्रश्न (FAQ)
        </h2>

        <div className="space-y-8">

          <div>

            <h3 className="text-xl font-semibold mb-2">
              NTKMA म्हणजे काय?
            </h3>

            <p>
              नाशिक-त्र्यंबकेश्वर कुंभमेळा प्राधिकरण हे
              कुंभमेळ्याच्या नियोजन आणि समन्वयासाठी
              महाराष्ट्र शासनाने स्थापन केलेले अधिकृत प्राधिकरण आहे.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-2">
              शिखर समितीचे अध्यक्ष कोण असतात?
            </h3>

            <p>
              शिखर समितीचे अध्यक्ष महाराष्ट्राचे माननीय मुख्यमंत्री असतात.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-2">
              कुंभमेळ्याचे आयोजन फक्त नाशिक महानगरपालिका करते का?
            </h3>

            <p>
              नाही. NTKMA, महाराष्ट्र शासन,
              नाशिक महानगरपालिका,
              पोलीस विभाग,
              सार्वजनिक बांधकाम विभाग,
              आरोग्य विभाग,
              जलसंपदा विभाग,
              रेल्वे,
              MSRTC आणि अनेक विभाग संयुक्तपणे आयोजन करतात.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-2">
              NTKMA मध्ये किती पदांना मंजुरी देण्यात आली आहे?
            </h3>

            <p>
              शासन निर्णयानुसार एकूण ७६ पदांना मंजुरी देण्यात आली आहे.
            </p>

          </div>

        </div>

      </section>

      <section className="border-t pt-8">

        <p className="text-sm text-gray-500 leading-7">
          या लेखातील माहिती महाराष्ट्र शासन,
          महाराष्ट्र सिंहस्थ कुंभमेळा अधिनियम २०२५,
          नाशिक-त्र्यंबकेश्वर कुंभमेळा प्राधिकरण,
          विभागीय आयुक्त कार्यालय,
          तसेच शासन निर्णय आणि शासन परिपत्रकांच्या आधारे तयार करण्यात आली आहे.
          वेळोवेळी शासनाच्या नवीन आदेशांनुसार माहितीमध्ये बदल होऊ शकतात.
        </p>

        <p className="text-sm text-gray-500 mt-3">
          शेवटचे अद्यतन : ऑगस्ट २०२६
        </p>

      </section>

    </main>
  );
}