
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://kumbhnashikguide.com";
const PAGE_URL =
  `${SITE_URL}/updates/ancient-shiva-temple-discovered-ramkund-nashik-simhastha`;

const title =
  "Ancient Shiva Temple Remains Discovered Near Ramkund, Nashik During Kumbh Work";

const description =
  "Ancient Shiva temple remains have reportedly been discovered near Dutondya Maruti opposite Ramkund, Nashik, during excavation work for Simhastha Kumbh Mela 2027. Read about the discovery, heritage concerns and Ramkund's historical importance.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "ancient Shiva temple discovered Nashik",
    "Ramkund temple discovery",
    "Dutondya Maruti Nashik",
    "ancient temple remains Nashik",
    "Nashik Kumbh Mela 2027 updates",
    "Simhastha Kumbh Mela excavation",
    "Ramkund heritage conservation",
    "ancient temples in Panchavati",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
    siteName: "Kumbh Nashik Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/ramkund-ancient-shiva-temple.jpg`,
        width: 1200,
        height: 675,
        alt: "Ancient Shiva temple remains reportedly discovered near Ramkund in Nashik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      `${SITE_URL}/images/ramkund-ancient-shiva-temple.jpg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  image: [
    `${SITE_URL}/images/ramkund-ancient-shiva-temple.jpg`,
  ],
  datePublished: "2026-11-23T18:41:00+05:30",
  dateModified: "2026-11-23T18:41:00+05:30",
  author: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide Editorial Team",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  articleSection: "Nashik Kumbh Mela Updates",
  inLanguage: "en-IN",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Updates",
      item: `${SITE_URL}/updates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ancient Shiva Temple Discovery Near Ramkund",
      item: PAGE_URL,
    },
  ],
};

const faqs = [
  {
    question: "Where were the ancient Shiva temple remains discovered?",
    answer:
      "The reported discovery was made during excavation work in the Ramkund area of Nashik, opposite Dutondya Maruti in the Panchavati area.",
  },
  {
    question: "When were the temple remains discovered?",
    answer:
      "The discovery was reported on 23 November 2026, during excavation work connected with preparations for the Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027.",
  },
  {
    question: "How old is the discovered Shiva temple?",
    answer:
      "Media reports have suggested that the remains may date to a period before 1700. This should be treated as a preliminary reported estimate, not a confirmed archaeological dating.",
  },
  {
    question: "Will the discovered temple remains be preserved?",
    answer:
      "There have been calls for the discovered structures to be protected. Their conservation status and any formal archaeological assessment should be checked through relevant government and heritage authorities.",
  },
  {
    question: "Why is Ramkund important during Nashik Kumbh Mela?",
    answer:
      "Ramkund is a major sacred site on the Godavari River in Nashik. It is an important pilgrimage location and part of the city's religious and cultural landscape.",
  },
];

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

export default function AncientShivaTempleDiscoveryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Structured data */}
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

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-gray-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-orange-700">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/updates" className="hover:text-orange-700">
                Updates
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-700">
              Temple Discovery
            </li>
          </ol>
        </nav>

        {/* Article heading */}
        <header className="mb-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-700">
            Nashik Kumbh Mela 2027 · Heritage Update
          </p>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Ancient Shiva Temple Remains Discovered Near Ramkund, Nashik
            During Kumbh Preparations
          </h1>

          <p className="mb-5 text-lg leading-relaxed text-gray-600">
            Excavation work in the Ramkund area has reportedly uncovered
            remains of an old Shiva temple opposite Dutondya Maruti.
            The discovery has drawn attention to the historical heritage
            beneath one of Nashik&apos;s most significant pilgrimage areas.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-gray-200 py-3 text-sm text-gray-500">
            <span>
              <strong className="text-gray-700">Published:</strong>{" "}
              23 November 2026
            </span>
            <span>
              <strong className="text-gray-700">Category:</strong>{" "}
              Nashik Kumbh Updates
            </span>
            <span>
              <strong className="text-gray-700">Reading time:</strong>{" "}
              5 minutes
            </span>
          </div>
        </header>

        {/* Main article image */}
        <figure className="mb-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/images/ramkund-ancient-shiva-temple.jpg"
              alt="Ancient Shiva temple remains reportedly discovered during excavation near Ramkund and Dutondya Maruti in Nashik"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">
            Reported discovery of ancient Shiva temple remains near
            Ramkund, Nashik. Use a photograph that genuinely depicts
            the discovered remains and verify its usage rights.
          </figcaption>
        </figure>

        {/* Article body */}
        <div className="space-y-7 text-base leading-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              What Was Discovered Near Ramkund?
            </h2>

            <p>
              Ancient Shiva temple remains have reportedly been uncovered
              during excavation work in the Ramkund area of Nashik. The
              discovery was reported on 23 November 2026, while work was
              being carried out in connection with preparations for the
              upcoming Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027.
            </p>

            <p className="mt-3">
              According to media reports, the remains were found opposite
              Dutondya Maruti, near the historic Ramkund area. The discovery
              has brought renewed attention to the archaeological and
              cultural significance of Panchavati and the surrounding
              Godavari riverfront.
            </p>
          </section>

          <section className="rounded-xl border border-orange-100 bg-orange-50 p-5">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Key Details at a Glance
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Location:</strong> Ramkund area, Panchavati, Nashik
              </li>
              <li>
                <strong>Nearby landmark:</strong> Opposite Dutondya Maruti
              </li>
              <li>
                <strong>Discovery reported:</strong> 23 November 2026
              </li>
              <li>
                <strong>Structure:</strong> Reported remains of an old
                Shiva temple
              </li>
              <li>
                <strong>Context:</strong> Excavation work connected with
                Simhastha Kumbh Mela 2027 preparations
              </li>
              <li>
                <strong>Historical period:</strong> Media reports suggest
                a possible date before 1700; archaeological confirmation
                is not yet established
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Could the Temple Date Back to Before 1700?
            </h2>

            <p>
              Initial media reports have suggested that the discovered
              remains may belong to a period before 1700. However, the
              precise age, architectural period and historical identity
              of the structure have not been independently established
              through a published archaeological assessment.
            </p>

            <p className="mt-3">
              The distinction is important: a preliminary historical
              estimate is not the same as a confirmed archaeological
              date. Further examination by qualified heritage and
              archaeology experts would be needed to establish the
              structure&apos;s age and significance.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Possibility of More Historical Structures
            </h2>

            <p>
              The discovery has also raised questions about whether
              additional historical structures may be present beneath
              or around the excavation area. The Ramkund and Panchavati
              region contains several old temples, religious structures
              and heritage sites associated with Nashik&apos;s long
              pilgrimage history.
            </p>

            <p className="mt-3">
              Further discoveries should not be assumed until excavation
              and expert assessment establish what is present. Any
              additional findings would need to be documented and
              evaluated by the relevant authorities.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Why Heritage Preservation Matters During Kumbh Preparations
            </h2>

            <p>
              Large-scale preparations for Simhastha Kumbh Mela involve
              infrastructure, public facilities, access routes, sanitation
              and improvements around important pilgrimage locations.
              These projects take place in a city with a substantial
              religious and historical heritage.
            </p>

            <p className="mt-3">
              The discovery near Ramkund highlights the importance of
              identifying and documenting heritage structures before
              construction or excavation work proceeds. Where historically
              significant remains are found, appropriate expert assessment
              and conservation measures can help protect them while
              development work continues.
            </p>

            <p className="mt-3">
              Media reports have also highlighted calls for the discovered
              remains to be preserved. The final conservation approach,
              however, should be confirmed through official decisions
              and statements from the competent authorities.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Ramkund: An Important Heritage and Pilgrimage Site in Nashik
            </h2>

            <p>
              Ramkund is one of the best-known sacred locations along
              the Godavari River in Nashik. It is closely associated
              with the city&apos;s religious traditions and attracts
              pilgrims throughout the year.
            </p>

            <p className="mt-3">
              Its importance becomes especially visible during major
              religious gatherings. Ramkund is part of the wider
              pilgrimage landscape of Panchavati, which includes
              temples, traditional riverfront spaces and places
              connected with local religious narratives.
            </p>

            <p className="mt-3">
              Read our detailed{" "}
              <Link
                href="/blog/ramkund-nashik-guide-kumbh-mela"
                className="font-semibold text-orange-700 underline underline-offset-4 hover:text-orange-900"
              >
                Ramkund Nashik guide
              </Link>{" "}
              to understand its history, religious significance and
              visitor information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Other Important Temples Around Panchavati
            </h2>

            <p>
              The reported discovery has renewed interest in the
              heritage of the wider Panchavati area. Visitors exploring
              Nashik can also learn about several established temples
              and religious sites in the region.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                <Link
                  href="/blog/kalaram-temple-nashik-guide-kumbh-mela-2027"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  Kalaram Temple
                </Link>{" "}
                – One of Panchavati&apos;s prominent temples, known
                for its distinctive black-stone idol of Lord Rama.
              </li>

              <li>
                <Link
                  href="/blog/kapaleshwar-temple-nashik-guide-kumbh-mela-2027"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  Kapaleshwar Temple
                </Link>{" "}
                – A well-known Shiva temple located near the Ramkund
                area.
              </li>

              <li>
                <Link
                  href="/blog/naroshankar-temple-nashik-guide-kumbh-mela-2027"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  Naroshankar Temple
                </Link>{" "}
                – A historic temple near the Godavari riverfront.
              </li>

              <li>
                <Link
                  href="/blog/sita-gufa-nashik-guide-kumbh-mela-2027"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  Sita Gufa
                </Link>{" "}
                – A religious site associated with the Ramayana
                traditions of Panchavati.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              What This Discovery Means for Nashik Kumbh Mela 2027
            </h2>

            <p>
              Nashik and Trimbakeshwar are preparing for Simhastha
              Kumbh Mela 2027, a major religious gathering that will
              bring pilgrims to important temples, riverfront locations
              and bathing centres across the region.
            </p>

            <p className="mt-3">
              The reported discovery near Ramkund adds a heritage
              conservation dimension to these preparations. Alongside
              infrastructure and visitor facilities, careful attention
              to the city&apos;s historic structures will be important
              for preserving the character of its pilgrimage areas.
            </p>

            <p className="mt-3">
              For broader information about the event, explore our{" "}
              <Link
                href="/blog/nashik-kumbh-mela-2027-development-plan"
                className="font-semibold text-orange-700 underline underline-offset-4"
              >
                Nashik Kumbh Mela 2027 development plan guide
              </Link>{" "}
              and the latest{" "}
              <Link
                href="/updates"
                className="font-semibold text-orange-700 underline underline-offset-4"
              >
                Nashik Kumbh Mela updates
              </Link>.
            </p>
          </section>

          {/* Sources */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Sources and Further Reading
            </h2>

            <p className="mb-4">
              The discovery details in this article are based on media
              reporting. The reported historical period should be
              treated as preliminary until supported by an official
              archaeological assessment.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <a
                  href="https://www.tv9marathi.com/maharashtra/remains-of-a-shiva-temple-discovered-during-excavation-in-the-ramkund-area-of-nashik-1811563.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  TV9 Marathi – Report on Shiva temple remains discovered
                  near Ramkund
                </a>
              </li>

              <li>
                <a
                  href="https://www.esakal.com/uttar-maharashtra/nashik/nashik-1700-years-old-history-ancient-shiva-temples-discovered-during-excavation-in-ramkund-dutondya-maruti-mvk02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  eSakal – Report on the ancient temple discovery in
                  the Ramkund-Dutondya Maruti area
                </a>
              </li>

              <li>
                <a
                  href="https://nashik.gov.in/en/tourist-place/ramkund-nashik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  Nashik District Administration – Ramkund
                </a>
              </li>

              <li>
                <a
                  href="https://simhasthamahakumbh.maharashtra.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-700 underline underline-offset-4"
                >
                  Maharashtra Government – Simhastha Mahakumbh portal
                </a>
              </li>
            </ul>
          </section>

          {/* Editorial note */}
          <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-2 text-lg font-bold text-gray-900">
              Editorial Note
            </h2>

            <p className="text-sm leading-7 text-gray-600">
              Kumbh Nashik Guide is an independent informational
              website and is not a government authority. This article
              reports a discovery covered by media outlets. The exact
              age, archaeological classification and conservation
              status of the remains have not been independently
              verified by our editorial team. Updates will be made
              if relevant authorities publish further information.
            </p>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Explore More Nashik Kumbh Guides
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/blog/ramkund-nashik-guide-kumbh-mela"
                className="rounded-xl border border-gray-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <h3 className="font-semibold text-gray-900">
                  Ramkund Nashik: History and Visitor Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Explore the religious and historical importance
                  of Ramkund.
                </p>
              </Link>

              <Link
                href="/blog/trimbakeshwar-temple-guide-kumbh-mela-2027"
                className="rounded-xl border border-gray-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <h3 className="font-semibold text-gray-900">
                  Trimbakeshwar Temple Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Learn about one of the major pilgrimage centres
                  associated with Nashik Kumbh.
                </p>
              </Link>

              <Link
                href="/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027"
                className="rounded-xl border border-gray-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <h3 className="font-semibold text-gray-900">
                  Amrit Snan and Shahi Snan Guide
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Understand the significance of the sacred bathing
                  traditions.
                </p>
              </Link>

              <Link
                href="/blog/nashik-kumbh-mela-2027-dates"
                className="rounded-xl border border-gray-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <h3 className="font-semibold text-gray-900">
                  Nashik Kumbh Mela 2027 Dates
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Check the currently published event dates and
                  planning information.
                </p>
              </Link>
            </div>
          </section>
        </div>

        {/* Back to updates */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <Link
            href="/updates"
            className="inline-flex items-center font-semibold text-orange-700 hover:text-orange-900"
          >
            ← Back to all Nashik Kumbh Mela updates
          </Link>
        </div>
      </article>
    </main>
  );
}
