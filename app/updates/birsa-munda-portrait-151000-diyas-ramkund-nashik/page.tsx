
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://kumbhnashikguide.com";

const pageUrl =
  `${siteUrl}/updates/birsa-munda-portrait-151000-diyas-ramkund-nashik`;

const title =
  "Ramkund Nashik News: Birsa Munda Portrait Made with 1.51 Lakh Diyas";

const description =
  "Discover the Birsa Munda portrait made with 1.51 lakh diyas at Ramkund, Nashik, on 15 November 2026, and explore the cultural and pilgrimage importance of this Godavari ghat ahead of Nashik Kumbh Mela 2027.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Ramkund Nashik",
    "Ramkund Nashik news",
    "Ramkund Nashik latest news",
    "Birsa Munda portrait Ramkund Nashik",
    "Birsa Munda Jayanti Nashik 2026",
    "1.51 lakh diyas Nashik",
    "Janjatiya Gaurav Diwas Nashik",
    "Godavari Ghat Nashik",
    "Ramkund Godavari River",
    "Nashik Kumbh Mela 2027",
    "Nashik Simhastha Kumbh Mela",
    "Nashik Kumbh Mela updates",
    "Nashik pilgrimage places",
    "Panchavati Nashik",
    "Nashik sacred ghats",
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
        url: `${siteUrl}/images/birsa-munda-ramkund.jpg`,
        width: 1200,
        height: 900,
        alt: "Bhagwan Birsa Munda portrait created using diyas at Ramkund in Nashik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/images/birsa-munda-ramkund.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question:
      "What happened at Ramkund in Nashik on 15 November 2026?",
    answer:
      "A large portrait of Bhagwan Birsa Munda was created using earthen lamps at Ramkund Ground near Goda Ghat in Nashik to mark his 151st birth anniversary and Janjatiya Gaurav Diwas.",
  },
  {
    question:
      "How many diyas were used for the Birsa Munda portrait?",
    answer:
      "The event coverage cited for this article reports approximately 1.51 lakh earthen lamps.",
  },
  {
    question:
      "Who created the Birsa Munda portrait at Ramkund?",
    answer:
      "Artist Chetan Raut and his team were reported as the creators of the diya artwork.",
  },
  {
    question:
      "Why is Ramkund important during Nashik Kumbh Mela?",
    answer:
      "Ramkund is a prominent pilgrimage location on the Godavari in Panchavati. The Nashik Simhastha Kumbh bathing tradition is associated with Ramtirth in Nashik, alongside Kushavarta Tirth in Trimbakeshwar.",
  },
  {
    question:
      "When will Nashik Kumbh Mela 2027 take place?",
    answer:
      "The major Mela period is scheduled from 15 June to 30 September 2027. The Simhastha ceremonies begin with Dhwajarohan on 31 October 2026 and conclude with Dhwajavatarana on 24 July 2028. Visitors should check the latest authority announcements for updates.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [
    `${siteUrl}/images/birsa-munda-ramkund.jpg`,
  ],
  datePublished: "2026-11-22T00:00:00+05:30",
  dateModified: "2026-11-22T00:00:00+05:30",
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
      name: "Godavari River, Nashik",
    },
    {
      "@type": "Person",
      name: "Bhagwan Birsa Munda",
    },
    {
      "@type": "Event",
      name: "Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027",
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
      name: "Latest Updates",
      item: `${siteUrl}/updates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Birsa Munda Tribute at Ramkund",
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

export default function BirsaMundaRamkundUpdate() {
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
          <span>Ramkund Birsa Munda Tribute</span>
        </nav>

        {/* Article heading */}
        <header className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-700">
            Nashik News &amp; Cultural Updates | 22 November 2026
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Ramkund Nashik: Birsa Munda Portrait Created with
            1.51 Lakh Diyas
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            A spectacular diya artwork at Ramkund Ground near
            Goda Ghat in Nashik paid tribute to Bhagwan Birsa
            Munda on his 151st birth anniversary. The celebration
            brought attention to the cultural importance of
            Nashik&apos;s historic Godavari riverfront.
          </p>
        </header>

        {/* Main image */}
        <figure className="mb-8">
          <Image
            src="/images/birsa-munda-ramkund.jpg"
            alt="Portrait of Bhagwan Birsa Munda made using diyas at Ramkund Ground near Goda Ghat in Nashik"
            width={1200}
            height={900}
            priority
            className="h-auto w-full rounded-xl object-cover"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Diya artwork depicting Bhagwan Birsa Munda at
            Ramkund, Nashik.
          </figcaption>
        </figure>

        {/* Key information */}
        <section className="mb-9 rounded-xl border border-orange-100 bg-orange-50 p-5">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Ramkund Event: Key Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold">
                Ramkund Ground, Goda Ghat, Nashik
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Event date</p>
              <p className="font-semibold">15 November 2026</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Occasion</p>
              <p className="font-semibold">
                Birsa Munda Jayanti and Janjatiya Gaurav Diwas
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Reported artwork</p>
              <p className="font-semibold">
                Approximately 1.51 lakh earthen lamps
              </p>
            </div>
          </div>
        </section>

        {/* Main news */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            A Spectacular Birsa Munda Tribute at Ramkund, Nashik
          </h2>

          <p className="mb-4 leading-8">
            Ramkund, one of the most recognised religious
            landmarks along the Godavari River in Nashik,
            witnessed a distinctive artistic tribute on
            15 November 2026. A large portrait of Bhagwan
            Birsa Munda was created by arranging thousands
            of traditional earthen lamps into a detailed
            visual composition.
          </p>

          <p className="mb-4 leading-8">
            Published coverage of the event reported that
            approximately 1.51 lakh diyas were used. Artist
            Chetan Raut and his team were credited with
            creating the artwork.
          </p>

          <p className="leading-8">
            The illuminated portrait transformed the
            riverside setting into a memorable cultural
            tribute, bringing together traditional art,
            public participation and remembrance of an
            important figure in Indian history.
          </p>
        </section>

        {/* Historical context */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Who Was Bhagwan Birsa Munda?
          </h2>

          <p className="mb-4 leading-8">
            Bhagwan Birsa Munda was a prominent tribal
            freedom fighter and leader who challenged
            British colonial rule during the nineteenth
            century. He is remembered for his leadership
            in the Munda Ulgulan movement and his efforts
            to protect the rights, land and cultural
            identity of tribal communities.
          </p>

          <p className="mb-4 leading-8">
            His legacy is closely associated with the
            protection of Jal, Jangal and Zameen —
            water, forests and land — and the struggle
            for dignity and self-governance.
          </p>

          <p className="leading-8">
            The Government of India observes 15 November
            as Janjatiya Gaurav Diwas in recognition of
            Bhagwan Birsa Munda and the contributions of
            tribal freedom fighters.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Reference:{" "}
            <a
              href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2198871"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 underline"
            >
              Ministry of Tribal Affairs – Janjatiya Gaurav Diwas
            </a>
          </p>
        </section>

        {/* Ramkund significance */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Ramkund Is Important in Nashik&apos;s
            Pilgrimage Landscape
          </h2>

          <p className="mb-4 leading-8">
            Ramkund is situated along the Godavari River in
            Panchavati, Nashik. It is an important religious
            and cultural landmark associated with pilgrimage,
            sacred bathing traditions and public ceremonies.
          </p>

          <p className="mb-4 leading-8">
            The wider Panchavati riverfront has a special
            place in the Nashik-Trimbakeshwar Simhastha
            Kumbh Mela. The official Kumbh information
            identifies Ramtirth in Panchavati as the
            Nashik bathing site for the Vaishnava
            akhadas, while Kushavarta Tirth serves the
            Trimbakeshwar bathing tradition.
          </p>

          <p className="mb-4 leading-8">
            These locations form two important parts of
            the Simhastha pilgrimage geography. Visitors
            exploring Nashik during the Kumbh period
            should understand the distinction between
            the Panchavati riverfront and the separate
            Trimbakeshwar pilgrimage centre.
          </p>

          <p className="leading-8">
            Explore our detailed{" "}
            <Link
              href="/blog/ramkund-nashik-guide-kumbh-mela"
              className="font-semibold text-orange-700 hover:underline"
            >
              Ramkund Nashik Guide
            </Link>{" "}
            for its history, religious significance and
            nearby places.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Reference:{" "}
            <a
              href="https://simhasthamahakumbh.maharashtra.gov.in/why-nashik-and-trimbakeshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 underline"
            >
              Maharashtra Government – Why Nashik and Trimbakeshwar
            </a>
          </p>
        </section>

        {/* Kumbh connection */}
        <section className="mb-9 rounded-xl border border-gray-200 p-5 sm:p-7">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Ramkund and Nashik-Trimbakeshwar Simhastha
            Kumbh Mela 2027
          </h2>

          <p className="mb-4 leading-8">
            The cultural importance of Ramkund extends
            beyond individual celebrations. It forms
            part of the wider Godavari riverfront that
            gives Nashik its distinctive identity as
            one of India&apos;s four traditional Kumbh
            Mela locations.
          </p>

          <p className="mb-4 leading-8">
            The Nashik-Trimbakeshwar Simhastha Kumbh
            Mela is organised across two pilgrimage
            centres: Nashik and Trimbakeshwar. The
            official major Mela period is scheduled
            from 15 June to 30 September 2027.
          </p>

          <p className="mb-4 leading-8">
            The major Amrut Snan dates include
            2 August, 31 August and 11 September 2027
            at Ramtirth in Nashik, followed by
            12 September 2027 at Kushavarta Tirth
            in Trimbakeshwar. Timings and operational
            arrangements should be checked through
            the Kumbh Authority&apos;s latest notices.
          </p>

          <p className="mb-5 leading-8">
            For pilgrims, understanding Ramkund,
            Ramtirth, Panchavati and the surrounding
            Godavari ghats can help make a visit to
            Nashik more meaningful and better planned.
          </p>

          <Link
            href="/blog/nashik-kumbh-mela-2027-dates"
            className="font-semibold text-orange-700 hover:underline"
          >
            View Nashik Kumbh Mela 2027 dates →
          </Link>

          <p className="mt-3 text-sm text-gray-500">
            Check the{" "}
            <a
              href="https://simhasthamahakumbh.maharashtra.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 underline"
            >
              official Nashik-Trimbakeshwar Simhastha portal
            </a>{" "}
            for current announcements and changes.
          </p>
        </section>

        {/* Related places */}
        <section className="mb-9">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Places to Explore Around Ramkund, Nashik
          </h2>

          <p className="mb-5 leading-8">
            Visitors coming to Ramkund can also explore
            other pilgrimage landmarks in Panchavati
            and the wider Nashik region.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/panchavati-nashik-kumbh-mela-guide"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Panchavati
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Explore the religious and historical
                significance of Panchavati.
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
                Discover one of Panchavati&apos;s
                important temples.
              </p>
            </Link>

            <Link
              href="/blog/significance-of-godavari-river"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Godavari River
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Understand the river&apos;s spiritual
                significance in Nashik.
              </p>
            </Link>

            <Link
              href="/ghats"
              className="rounded-lg border border-gray-200 p-4 hover:border-orange-300"
            >
              <h3 className="mb-2 font-bold text-gray-900">
                Nashik Kumbh Ghats
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Explore the sacred bathing locations
                connected with Simhastha.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
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
            This article covers the event held on
            15 November 2026. The reported lamp count
            and event details should be read in the
            context of published event coverage.
            Kumbh Nashik Guide is an independent
            informational platform and is not
            affiliated with the government or event
            organisers.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-orange-50 p-6 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Planning Your Nashik Kumbh Mela Visit?
          </h2>

          <p className="mb-5 leading-7 text-gray-700">
            Explore Nashik&apos;s pilgrimage places,
            Godavari ghats, important bathing dates
            and travel information before planning
            your visit to Simhastha Kumbh Mela 2027.
          </p>

          <Link
            href="/travel"
            className="mr-2 inline-block rounded-lg bg-orange-700 px-5 py-3 font-semibold text-white hover:bg-orange-800"
          >
            Travel Guide
          </Link>

          <Link
            href="/updates"
            className="inline-block rounded-lg border border-orange-700 px-5 py-3 font-semibold text-orange-800 hover:bg-orange-100"
          >
            Latest Updates
          </Link>
        </section>
      </article>
    </main>
  );
}
