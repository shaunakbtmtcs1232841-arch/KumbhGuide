import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ramkund Nashik Guide | Kumbh Mela 2027, Snan & Travel",
  description:
    "Complete Ramkund Nashik guide for Kumbh Mela 2027 covering its religious significance, Godavari River, holy bathing, nearby temples, how to reach, and visitor tips.",
  keywords: [
    "Ramkund Nashik",
    "Ramkund Nashik Kumbh Mela 2027",
    "Ramkund Kumbh Mela",
    "Ramkund Nashik guide",
    "Ramkund bathing ghat",
    "Ramkund Godavari River",
    "Ramkund Snan",
    "Ramkund holy bath",
    "Nashik Kumbh Mela Ramkund",
    "Ramkund Panchavati",
    "Ramkund pilgrimage",
    "Ramkund religious significance",
    "Ramkund history",
    "places near Ramkund Nashik",
    "Nashik Kumbh Mela ghats",
    "Godavari ghats Nashik",
    "Nashik Kumbh Mela 2027",
    "Nashik Kumbh Mela travel guide",
    "Nashik Kumbh Mela bathing",
    "Nashik pilgrimage places",
    "Trimbakeshwar Kumbh Mela 2027",
    "Kalaram Temple Nashik",
    "Sita Gufa Nashik",
    "नाशिक रामकुंड",
    "रामकुंड नाशिक",
    "रामकुंड कुंभमेळा",
    "नाशिक कुंभमेळा रामकुंड",
    "रामकुंड स्नान",
  ],
  alternates: {
    canonical:
      "https://kumbhnashikguide.com/blog/ramkund-nashik-guide-kumbh-mela",
  },
  openGraph: {
    title: "Ramkund Nashik Guide | Kumbh Mela 2027",
    description:
      "Explore Ramkund Nashik, its spiritual significance, Godavari River, Kumbh Mela bathing traditions, nearby temples, travel information and visitor tips.",
    url: "https://kumbhnashikguide.com/blog/ramkund-nashik-guide-kumbh-mela",
    siteName: "Kumbh Nashik Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://kumbhnashikguide.com/images/ramkund.jpg",
        width: 1200,
        height: 630,
        alt: "Ramkund Nashik on the Godavari River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramkund Nashik Guide | Kumbh Mela 2027",
    description:
      "Ramkund Nashik guide covering Kumbh Mela 2027, holy bathing, spiritual significance, nearby temples and travel information.",
    images: ["https://kumbhnashikguide.com/images/ramkund.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Why is Ramkund important during Kumbh Mela?",
    answer:
      "Ramkund is one of the most important sacred locations on the Godavari River in Nashik. It is associated with religious bathing, prayers and traditional rituals and has special importance during Nashik Kumbh Mela.",
  },
  {
    question: "Where is Ramkund located in Nashik?",
    answer:
      "Ramkund is located in the Panchavati area of Nashik on the bank of the Godavari River.",
  },
  {
    question: "Can pilgrims take a holy bath at Ramkund?",
    answer:
      "Ramkund is traditionally used for ritual bathing in the Godavari River. During Kumbh Mela and other major religious occasions, visitors should follow the latest safety instructions and bathing arrangements issued by the authorities.",
  },
  {
    question: "What is Ramkund famous for?",
    answer:
      "Ramkund is famous for its association with Lord Rama, its location on the Godavari River, sacred bathing and rituals, and its importance as a pilgrimage site in Nashik.",
  },
  {
    question: "What places can I visit near Ramkund?",
    answer:
      "Important places near Ramkund include Panchavati, Kalaram Temple, Sita Gufa, Kapaleshwar Temple, Naroshankar Temple and other Godavari riverfront locations.",
  },
  {
    question: "How can I reach Ramkund Nashik?",
    answer:
      "Ramkund is located in central Nashik and can be reached by road and local transport. Nashik Road is the nearest major railway station. During Kumbh Mela, visitors should allow extra travel time and follow official traffic and access instructions.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ramkund Nashik Guide for Kumbh Mela 2027",
    description:
      "A complete guide to Ramkund Nashik covering its spiritual significance, Godavari River, Kumbh Mela bathing, nearby temples, travel information and visitor tips.",
    image: ["https://kumbhnashikguide.com/images/ramkund.jpg"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://kumbhnashikguide.com/blog/ramkund-nashik-guide-kumbh-mela",
    },
    publisher: {
      "@type": "Organization",
      name: "Kumbh Nashik Guide",
      url: "https://kumbhnashikguide.com",
    },
    inLanguage: "en-IN",
    articleSection: "Nashik Kumbh Mela 2027",
    keywords:
      "Ramkund Nashik, Ramkund Kumbh Mela, Nashik Kumbh Mela 2027, Ramkund Godavari River",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kumbhnashikguide.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://kumbhnashikguide.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ramkund Nashik Guide",
        item:
          "https://kumbhnashikguide.com/blog/ramkund-nashik-guide-kumbh-mela",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12 leading-7 text-gray-800">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>

        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>

        <span className="mx-2">/</span>

        <span className="text-gray-700">Ramkund Nashik</span>
      </nav>

      {/* Hero */}
      <header>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
          Ramkund Nashik Guide for Kumbh Mela 2027
        </h1>

        <p className="text-lg text-gray-600 mb-7">
          Ramkund is one of the most important sacred locations on the
          Godavari River in Nashik. This guide covers its religious
          significance, connection with Nashik Kumbh Mela 2027, holy bathing,
          nearby temples, accessibility and practical visitor information.
        </p>

        <Image
          src="/images/ramkund.jpg"
          alt="Ramkund Nashik on the Godavari River"
          width={1200}
          height={630}
          priority
          className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl mb-8"
        />
      </header>

      {/* Quick Facts */}
      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Ramkund Nashik at a Glance
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-gray-600">
              Panchavati, Nashik, on the Godavari River
            </p>
          </div>

          <div>
            <p className="font-semibold">Religious Importance</p>
            <p className="text-gray-600">
              Sacred bathing, prayers and traditional rituals
            </p>
          </div>

          <div>
            <p className="font-semibold">Kumbh Connection</p>
            <p className="text-gray-600">
              Important sacred location during Nashik Kumbh Mela
            </p>
          </div>

          <div>
            <p className="font-semibold">Nearby Area</p>
            <p className="text-gray-600">
              Panchavati and historic Godavari riverfront
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Why Is Ramkund Important in Nashik?
        </h2>

        <p className="mb-4">
          Ramkund is a sacred site located on the Godavari River in the
          Panchavati area of Nashik. It is traditionally associated with
          Lord Rama and is regarded as one of the most important religious
          locations in the city.
        </p>

        <p className="mb-8">
          The site attracts pilgrims for holy bathing, prayers and traditional
          religious ceremonies. Its location also makes Ramkund an important
          starting point for exploring the wider Panchavati pilgrimage area.
        </p>
      </section>

      {/* Spiritual Significance */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Spiritual Significance of Ramkund
        </h2>

        <p className="mb-4">
          According to Hindu tradition, Lord Rama is believed to have bathed
          at Ramkund during his period of exile. This traditional association
          contributes to the religious importance of the site.
        </p>

        <p className="mb-4">
          Ramkund is also associated with traditional ancestral rituals,
          including Pind Daan, Tarpan and Shraddha ceremonies.
        </p>

        <p className="mb-8">
          Because of these traditions, Ramkund is considered an important
          pilgrimage destination for devotees visiting Nashik throughout the
          year.
        </p>
      </section>

      {/* Ramkund and Kumbh */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ramkund During Nashik Kumbh Mela 2027
        </h2>

        <p className="mb-4">
          Ramkund forms part of Nashik's sacred Godavari riverfront and is
          closely connected with the city's Kumbh Mela pilgrimage traditions.
        </p>

        <p className="mb-5">
          During Nashik Kumbh Mela 2027, pilgrims can expect significant
          visitor activity around important religious locations. Crowd
          movement, road access, parking and local transportation may change
          during major bathing occasions.
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Important sacred location on the Godavari River</li>
          <li>Traditional bathing and religious activities</li>
          <li>Important pilgrimage destination in Panchavati</li>
          <li>Nearby access to several historic temples</li>
          <li>Expected increased visitor activity during Kumbh events</li>
        </ul>

        <Link
          href="/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027"
          className="text-blue-600 underline font-medium"
        >
          Learn about Shahi Snan and Amrit Snan →
        </Link>
      </section>

      {/* Rituals */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Rituals Performed at Ramkund
        </h2>

        <p className="mb-4">
          Ramkund is not only a bathing location but also an important site
          for traditional Hindu rituals and ceremonies.
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Holy bathing or Snan</li>
          <li>Pind Daan ceremonies</li>
          <li>Tarpan rituals</li>
          <li>Shraddha ceremonies</li>
          <li>Prayers and religious offerings</li>
          <li>Ritual activities during important festivals</li>
        </ul>

        <p className="mb-8">
          Visitors should respect ongoing religious ceremonies and follow
          instructions provided by local authorities and site management.
        </p>
      </section>

      {/* Godavari */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ramkund and the Godavari River
        </h2>

        <p className="mb-4">
          Ramkund is situated directly on the Godavari River and forms an
          important part of Nashik's historic riverfront. The Godavari has a
          central place in the religious identity of Nashik and its Kumbh
          Mela traditions.
        </p>

        <p className="mb-6">
          For many pilgrims, visiting Ramkund and the surrounding Godavari
          ghats is an important part of a Nashik pilgrimage.
        </p>

        <Link
          href="/blog/significance-of-godavari-river"
          className="text-blue-600 underline font-medium"
        >
          Read the complete Godavari River significance guide →
        </Link>
      </section>

      {/* Nearby Places */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Places to Visit Near Ramkund
        </h2>

        <p className="mb-6">
          Ramkund is located in Panchavati, putting several important
          religious and heritage attractions within the wider surrounding
          area.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/blog/panchavati-nashik-kumbh-mela-guide"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-1">Panchavati</h3>
            <p className="text-sm text-gray-600">
              Explore the historic pilgrimage area surrounding Ramkund.
            </p>
          </Link>

          <Link
            href="/blog/kalaram-temple-nashik-guide-kumbh-mela-2027"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-1">
              Kalaram Temple
            </h3>
            <p className="text-sm text-gray-600">
              Visit one of the prominent temples in the Panchavati area.
            </p>
          </Link>

          <Link
            href="/blog/sita-gufa-nashik-guide-kumbh-mela-2027"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-1">Sita Gufa</h3>
            <p className="text-sm text-gray-600">
              Explore an important religious site associated with Panchavati.
            </p>
          </Link>

          <Link
            href="/blog/kapaleshwar-temple-nashik-guide-kumbh-mela-2027"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-1">
              Kapaleshwar Temple
            </h3>
            <p className="text-sm text-gray-600">
              A significant temple located near the Godavari riverfront.
            </p>
          </Link>
        </div>
      </section>

      {/* How to Reach */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          How to Reach Ramkund Nashik
        </h2>

        <p className="mb-6">
          Ramkund is located in central Nashik and can be reached by road,
          local buses, taxis and auto-rickshaws. Nashik Road is the city's
          main railway station and provides access for visitors arriving by
          train.
        </p>

        <div className="space-y-5 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-1">By Train</h3>
            <p>
              Visitors arriving by train can use Nashik Road railway station
              and continue toward central Nashik and Panchavati.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">By Bus</h3>
            <p>
              Nashik has local and intercity bus services connecting
              different parts of the city and surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">By Road</h3>
            <p>
              Ramkund can be reached by taxi, auto-rickshaw and private
              vehicle. During Kumbh Mela, follow designated routes and
              parking instructions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">By Air</h3>
            <p>
              Visitors travelling by air can use Nashik Airport at Ozar and
              continue to Ramkund by road.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href="/blog/nashik-kumbh-mela-railway-guide"
            className="text-blue-600 underline font-medium"
          >
            Nashik Railway Travel Guide →
          </Link>

          <Link
            href="/blog/nashik-kumbh-mela-bus-travel-guide"
            className="text-blue-600 underline font-medium"
          >
            Nashik Bus Travel Guide →
          </Link>

          <Link
            href="/blog/nashik-kumbh-mela-air-travel-guide"
            className="text-blue-600 underline font-medium"
          >
            Nashik Air Travel Guide →
          </Link>
        </div>
      </section>

      {/* Best Time */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Best Time to Visit Ramkund
        </h2>

        <p className="mb-5">
          Ramkund can be visited throughout the year. The ideal time depends
          on whether your priority is pilgrimage, religious activity,
          sightseeing or a quieter visit.
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Kumbh Mela:</strong> Highly significant for pilgrims but
            expected to be much busier.
          </li>

          <li>
            <strong>Winter:</strong> Generally comfortable for sightseeing
            and exploring Nashik.
          </li>

          <li>
            <strong>Festival periods:</strong> Religious activities may
            increase around major Hindu festivals.
          </li>

          <li>
            <strong>Early morning:</strong> Often preferable for visitors
            looking for a quieter atmosphere, subject to local access
            arrangements.
          </li>
        </ul>
      </section>

      {/* Visitor Tips */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ramkund Visitor Tips for Kumbh Mela 2027
        </h2>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Check the latest official access and crowd instructions.</li>
          <li>
            Allow additional travel time during major Kumbh events.
          </li>
          <li>Use designated transport and parking facilities.</li>
          <li>Carry drinking water and essential personal items.</li>
          <li>Respect religious ceremonies and local customs.</li>
          <li>
            Follow safety instructions around the river and bathing areas.
          </li>
          <li>
            Check for temporary route or access changes before travelling.
          </li>
        </ul>

        <Link
          href="/blog/dos-and-donts-nashik-kumbh-mela-2027"
          className="text-blue-600 underline font-medium"
        >
          Read the complete Kumbh Mela Do's and Don'ts guide →
        </Link>
      </section>

      {/* Accommodation */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Where to Stay Near Ramkund
        </h2>

        <p className="mb-5">
          Pilgrims visiting Ramkund can choose accommodation in different
          parts of Nashik depending on their itinerary and transport needs.
          During Kumbh Mela, accommodation demand is expected to increase,
          so advance planning is recommended.
        </p>

        <Link
          href="/blog/where-to-stay-nashik-kumbh-mela"
          className="text-blue-600 underline font-medium"
        >
          Explore the Nashik Kumbh Mela stay guide →
        </Link>
      </section>

      {/* Kumbh Dates */}
      <section className="mt-10 bg-gray-50 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">
          Planning Your Nashik Kumbh Mela Visit?
        </h2>

        <p className="mb-5">
          If Ramkund is part of your Kumbh pilgrimage, check the latest
          information about dates, sacred bathing occasions, transportation
          and other important visitor details before travelling.
        </p>

        <div className="flex flex-wrap gap-5">
          <Link
            href="/blog/nashik-kumbh-mela-2027-dates"
            className="text-blue-600 underline font-medium"
          >
            Nashik Kumbh Mela 2027 Dates →
          </Link>

          <Link
            href="/travel"
            className="text-blue-600 underline font-medium"
          >
            Complete Nashik Kumbh Travel Guide →
          </Link>
        </div>
      </section>

      {/* Official Information */}
      <section className="mt-10 border-t pt-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Official Kumbh Mela Information
        </h2>

        <p className="mb-5">
          Nashik–Trimbakeshwar Kumbh Mela Authority is responsible for
          planning, coordinating and overseeing preparations for Simhastha
          Kumbh Mela 2027 in Nashik and Trimbakeshwar.
        </p>

        <p className="mb-6">
          For time-sensitive information such as crowd restrictions,
          transportation arrangements, access routes and event-day
          instructions, visitors should verify information through official
          government channels.
        </p>

        <a
          href="https://divcomnashik.maharashtra.gov.in/en/simhastha-kumbh-mela-2027/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-medium"
        >
          Visit the official Simhastha Kumbh Mela 2027 information page →
        </a>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Frequently Asked Questions About Ramkund
        </h2>

        <div className="space-y-7">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-lg mb-2">
                {faq.question}
              </h3>

              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="mt-10 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-5">
          More Nashik Kumbh Mela Guides
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/blog/top-ghats-nashik"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              Top Ghats in Nashik
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Explore important ghats and the Godavari riverfront.
            </p>
          </Link>

          <Link
            href="/blog/top-10-places-to-visit-nashik-kumbh-mela-2027"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              Places to Visit During Nashik Kumbh
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Discover important pilgrimage and sightseeing locations.
            </p>
          </Link>

          <Link
            href="/blog/nashik-kumbh-mela-2027-development-plan"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              Nashik Kumbh Development Plan
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Explore major infrastructure and development projects.
            </p>
          </Link>

          <Link
            href="/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027"
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold">
              First-Time Pilgrim Guide
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Practical information for your first Nashik Kumbh visit.
            </p>
          </Link>
        </div>
      </section>

      {/* Information Note */}
      <section className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p className="text-sm text-gray-600">
          <strong>Information note:</strong> Kumbh Mela routes, access
          restrictions, transportation arrangements, crowd-management
          measures and other event-day details may change as preparations
          progress. This website is an independent informational guide.
          Always follow the latest instructions issued by the relevant
          authorities.
        </p>
      </section>
    </main>
  );
}