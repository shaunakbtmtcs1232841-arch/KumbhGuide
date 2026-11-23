
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://kumbhnashikguide.com";

const pageUrl =
  `${siteUrl}/updates/ancient-shiva-temple-discovered-ramkund-nashik-simhastha`;

const title =
  "Ancient Shiva Temple Remains Discovered at Ramkund, Nashik During Kumbh Work";

const description =
  "Ancient Shiva temple remains discovered near Dutondya Maruti at Ramkund, Nashik, during Simhastha Kumbh Mela 2027 preparation. Read about the discovery and heritage preservation concerns.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ancient Shiva temple discovered Ramkund Nashik",
    "Ramkund Nashik latest news",
    "Nashik Kumbh Mela 2027 latest updates",
    "ancient temple discovered in Nashik",
    "Ramkund excavation news",
    "Shiva temple remains Nashik",
    "Dutondya Maruti Nashik",
    "Simhastha Kumbh Mela development work",
    "Nashik ancient temples",
    "Nashik heritage conservation",
    "Ramkund Godavari Ghat",
    "Panchavati Nashik temples",
    "Nashik archaeological discovery",
    "Nashik Kumbh Mela preparation",
    "Godavari riverfront development",
    "historic temples in Nashik",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Kumbh Nashik Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/ramkund-ancient-shiva-temple.jpg`,
        width: 1200,
        height: 630,
        alt: "Ancient Shiva temple remains discovered during excavation near Ramkund in Nashik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      `${siteUrl}/images/ramkund-ancient-shiva-temple.jpg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question:
      "What was discovered during excavation at Ramkund in Nashik?",
    answer:
      "Reports published on 23 November 2026 state that remains of an old Shiva temple were found underground during excavation work near Dutondya Maruti in the Ramkund area of Nashik.",
  },
  {
    question:
      "Where were the ancient Shiva temple remains found?",
    answer:
      "The remains were reported in the Ramkund area, opposite Dutondya Maruti, near the Godavari riverfront in Panchavati, Nashik.",
  },
  {
    question:
      "How old is the Shiva temple discovered at Ramkund?",
    answer:
      "Initial media reports suggest that the structure may date to before 1700. Its exact age has not been established through a published archaeological assessment.",
  },
  {
    question:
      "Why was excavation taking place near Ramkund?",
    answer:
      "The excavation was being carried out as part of development and preparation work associated with the Nashik-Trimbakeshwar Simhastha Kumbh Mela.",
  },
  {
    question:
      "Could more ancient temples be present around Ramkund?",
    answer:
      "Media reports have mentioned the possibility of other buried temple remains in the area. This possibility requires further investigation and should not be treated as a confirmed discovery.",
  },
  {
    question:
      "Why is Ramkund important during Nashik Kumbh Mela?",
    answer:
      "Ramkund is a prominent pilgrimage location on the Godavari River in Panchavati. The wider Ramtirth area is one of the important bathing centres associated with Nashik Simhastha Kumbh Mela.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  image: [
    `${siteUrl}/images/ramkund-ancient-shiva-temple.jpg`,
  ],
  datePublished: "2026-11-23T19:00:00+05:30",
  dateModified: "2026-11-23T19:00:00+05:30",
  author: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide Editorial Team",
    url: `${siteUrl}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  inLanguage: "en-IN",
  about: [
    {
      "@type": "Place",
      name: "Ramkund, Nashik",
    },
    {
      "@type": "Place",
      name: "Panchavati, Nashik",
    },
    {
      "@type": "Event",
      name: "Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027",
    },
    {
      "@type": "Thing",
      name: "Ancient Shiva temple remains",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nashik Kumbh Updates",
      item: `${siteUrl}/updates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ancient Shiva Temple Discovery at Ramkund",
      item: pageUrl,
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

export default function AncientShivaTempleRamkundUpdate() {
  return (
    <main className="bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema,
            breadcrumbSchema,
            faqSchema,
          ]),
        }}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-gray-500"
        >
          <Link href="/" className="hover:text-orange-700">
            Home
          </Link>
          {" / "}
          <Link href="/updates" className="hover:text-orange-700">
            Nashik Kumbh Updates
          </Link>
          {" / "}
          <span>Ancient Shiva Temple Discovery</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-700">
            Nashik Kumbh Mela 2027 | Heritage &amp; Development News
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Ancient Shiva Temple Remains Discovered at
            Ramkund, Nashik During Simhastha Kumbh Work
          </h1>

          <p className="mb-4 text-sm text-gray-500">
            Reported: 23 November 2026 | Location: Ramkund,
            Panchavati, Nashik, Maharashtra
          </p>

          <p className="text-lg leading-8 text-gray-600">
            An important discovery has brought attention to
            Nashik&apos;s historical heritage during preparations
            for the upcoming Simhastha Kumbh Mela 2027.
            Remains of an old Shiva temple have reportedly
            been found underground during excavation work
            near Dutondya Maruti in the Ramkund area.
          </p>
        </header>

        {/* Main Image */}
        <figure className="mb-8">
          <div className="flex min-h-64 items-center justify-center rounded-xl bg-orange-50 p-8 text-center">
            <div>
              <p className="mb-2 text-5xl">🏛️</p>
              <p className="font-semibold text-gray-700">
                Ancient Shiva Temple Discovery
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Ramkund, Panchavati, Nashik
              </p>
            </div>
          </div>
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Reported discovery of old Shiva temple remains
            during excavation near Ramkund, Nashik.
          </figcaption>
        </figure>

        {/* Quick Facts */}
        <section className="mb-9 rounded-xl border border-orange-100 bg-orange-50 p-5">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Discovery: Key Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold">
                Ramkund area, Panchavati, Nashik
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Nearby landmark</p>
              <p className="font-semibold">
                Dutondya Maruti
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Reported date</p>
              <p className="font-semibold">
                23 November 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Discovery</p>
              <p className="font-semibold">
                Remains of an old Shiva temple
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Possible period
              </p>
              <p className="font-semibold">
                Believed to possibly predate 1700
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Context
              </p>
              <p className="font-semibold">
                Simhastha Kumbh preparation work
              </p>
            </div>
          </div>
        </section>

        {/* Main News */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            What Was Discovered During Excavation at Ramkund?
          </h2>

          <p className="mb-4 leading-8">
            During excavation work being carried out in the
            Ramkund area of Nashik for Simhastha Kumbh Mela
            preparations, remains of an old Shiva temple
            were reportedly discovered beneath the ground.
          </p>

          <p className="mb-4 leading-8">
            According to media reports, the remains were
            found opposite Dutondya Maruti, a well-known
            landmark near the Godavari riverfront in
            Panchavati.
          </p>

          <p className="leading-8">
            The discovery has generated interest because
            Ramkund is already an important part of
            Nashik&apos;s religious and historical landscape.
            The finding has also raised questions about
            whether other old structures may remain buried
            beneath parts of the surrounding area.
          </p>
        </section>

        {/* Age */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How Old Could the Shiva Temple Be?
          </h2>

          <p className="mb-4 leading-8">
            Initial news reports suggest that the
            discovered temple remains may belong to a
            structure dating to before 1700. This
            possibility has renewed interest in the
            architectural and religious history of
            old Nashik.
          </p>

          <p className="mb-4 leading-8">
            However, the exact construction period,
            architectural classification and historical
            background have not yet been established
            through a publicly available archaeological
            assessment.
          </p>

          <p className="leading-8">
            Further examination by qualified heritage
            and archaeological authorities would be
            necessary before assigning a definitive
            date or historical identity to the remains.
          </p>
        </section>

        {/* Other possible temples */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Could More Ancient Temples Be Hidden Around Ramkund?
          </h2>

          <p className="mb-4 leading-8">
            The reported discovery has also drawn attention
            to the possibility of additional historical
            structures beneath the Ramkund and Godavari
            riverfront area.
          </p>

          <p className="mb-4 leading-8">
            Media reports have mentioned the possibility
            of more ancient temples in the surrounding
            locality. This remains a possibility rather
            than a confirmed finding.
          </p>

          <p className="leading-8">
            Any further excavation or investigation
            would need to be carried out carefully,
            particularly in a historically and
            religiously significant area such as
            Panchavati.
          </p>
        </section>

        {/* Preservation */}
        <section className="mb-9 rounded-xl border border-gray-200 p-5 sm:p-7">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Preservation of the Discovered Heritage Matters
          </h2>

          <p className="mb-4 leading-8">
            The discovery has brought forward demands
            for the preservation of the historical
            remains found during excavation. This
            is particularly important because
            development work around a heritage
            location can involve changes to its
            surrounding structures and landscape.
          </p>

          <p className="mb-4 leading-8">
            The appropriate response to an archaeological
            discovery is to document the remains,
            assess their historical importance and
            involve the relevant heritage authorities
            before deciding how work should proceed.
          </p>

          <p className="mb-4 leading-8">
            Nashik has several historically important
            temples and religious structures. Protecting
            such heritage while improving public
            infrastructure can help retain the
            city&apos;s identity for future generations.
          </p>

          <p className="leading-8">
            The preservation request reported in the
            news is therefore an important part of
            the discussion surrounding development
            and heritage conservation ahead of
            Simhastha Kumbh Mela.
          </p>
        </section>

        {/* Kumbh connection */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Ramkund&apos;s Importance in Nashik Simhastha
            Kumbh Mela 2027
          </h2>

          <p className="mb-4 leading-8">
            Ramkund is one of the best-known pilgrimage
            landmarks on the banks of the Godavari River
            in Panchavati. The surrounding Ramtirth
            area has an important place in the Nashik
            bathing traditions associated with
            Simhastha Kumbh Mela.
          </p>

          <p className="mb-4 leading-8">
            Nashik and Trimbakeshwar together form
            the two major pilgrimage centres of
            the Nashik-Trimbakeshwar Simhastha Kumbh.
            The bathing traditions at Ramtirth in
            Nashik and Kushavarta Tirth in
            Trimbakeshwar are distinct parts
            of this religious event.
          </p>

          <p className="mb-4 leading-8">
            As preparations continue, development
            activity around Ramkund is important
            not only for visitor facilities and
            infrastructure but also for the
            protection of the historic character
            of the Godavari riverfront.
          </p>

          <p className="mb-5 leading-8">
            The discovery of the Shiva temple remains
            adds another heritage-related development
            to the ongoing preparations. Its
            significance will become clearer as
            further information and any official
            assessment become available.
          </p>

          <Link
            href="/blog/nashik-kumbh-mela-2027-development-plan"
            className="font-semibold text-orange-700 hover:underline"
          >
            Read the Nashik Kumbh Mela Development Plan →
          </Link>
        </section>

        {/* Ramkund */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Ramkund and the Historic Temples of Panchavati
          </h2>

          <p className="mb-4 leading-8">
            The Ramkund area is surrounded by important
            religious and cultural landmarks. Its
            association with the Godavari River,
            pilgrimage rituals and historic temples
            makes Panchavati a significant part
            of Nashik&apos;s heritage landscape.
          </p>

          <p className="mb-4 leading-8">
            Visitors exploring the area can also
            learn about the nearby Kapaleshwar
            Temple, Kalaram Temple, Sita Gufa
            and other places associated with
            Nashik&apos;s religious history.
          </p>

          <p className="leading-8">
            The newly reported discovery provides
            another reason to understand the
            historical context of this part
            of the city.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/ramkund-nashik-guide-kumbh-mela"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Ramkund Nashik Guide
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                History, religious significance and
                visitor information.
              </p>
            </Link>

            <Link
              href="/blog/kapaleshwar-temple-nashik-guide-kumbh-mela-2027"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Kapaleshwar Temple
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Explore one of the old Shiva temples
                near Ramkund.
              </p>
            </Link>

            <Link
              href="/blog/kalaram-temple-nashik-guide-kumbh-mela-2027"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Kalaram Temple
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Learn about the historic temple
                in Panchavati.
              </p>
            </Link>

            <Link
              href="/blog/panchavati-nashik-kumbh-mela-guide"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Panchavati Nashik Guide
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Explore the wider pilgrimage area
                and its landmarks.
              </p>
            </Link>
          </div>
        </section>

        {/* Official sources */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Sources and Further Information
          </h2>

          <p className="mb-4 leading-8">
            The discovery was reported by Marathi news
            organisations on 23 November 2026. The
            information about the possible age of
            the structure is presented as an initial
            estimate reported in the news, not as
            a confirmed archaeological date.
          </p>

          <ul className="list-inside list-disc space-y-3 text-orange-700">
            <li>
              <a
                href="https://www.tv9marathi.com/maharashtra/remains-of-a-shiva-temple-discovered-during-excavation-in-the-ramkund-area-of-nashik-1811563.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                TV9 Marathi – Shiva temple remains discovered
                during excavation at Ramkund
              </a>
            </li>

            <li>
              <a
                href="https://www.esakal.com/uttar-maharashtra/nashik/nashik-1700-years-old-history-ancient-shiva-temples-discovered-during-excavation-in-ramkund-dutondya-maruti-mvk02"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                eSakal – Report on the ancient temple discovery
                in Ramkund
              </a>
            </li>

            <li>
              <a
                href="https://nashik.gov.in/en/tourist-place/ramkund-nashik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Nashik District Administration – Ramkund
              </a>
            </li>

            <li>
              <a
                href="https://simhasthamahakumbh.maharashtra.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Maharashtra Government – Simhastha Kumbh Portal
              </a>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-9">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-gray-200 pb-4"
              >
                <h3 className="mb-2 font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <p className="leading-7 text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial note */}
        <section className="mb-8 border-t border-gray-200 pt-5">
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Editorial Note
          </h2>

          <p className="text-sm leading-7 text-gray-600">
            This article is based on published Marathi
            news reports dated 23 November 2026. The
            reported discovery and possible historical
            period have not been independently
            archaeologically verified by Kumbh Nashik
            Guide. Any confirmed assessment or
            official heritage-preservation decision
            will be reflected in a future update.
            Kumbh Nashik Guide is an independent
            informational platform and is not
            affiliated with the government or
            excavation contractors.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-orange-50 p-6 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Follow the Latest Nashik Kumbh Mela Developments
          </h2>

          <p className="mb-5 leading-7 text-gray-700">
            Explore infrastructure projects, heritage
            developments, important pilgrimage locations
            and visitor information for Nashik-Trimbakeshwar
            Simhastha Kumbh Mela 2027.
          </p>

          <Link
            href="/updates"
            className="mr-2 inline-block rounded-lg bg-orange-700 px-5 py-3 font-semibold text-white hover:bg-orange-800"
          >
            All Kumbh Updates
          </Link>

          <Link
            href="/ghats"
            className="inline-block rounded-lg border border-orange-700 px-5 py-3 font-semibold text-orange-800 hover:bg-orange-100"
          >
            Explore Nashik Ghats
          </Link>
        </section>

      </article>
    </main>
  );
}





















