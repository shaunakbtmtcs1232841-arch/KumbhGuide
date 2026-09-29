import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Nashik Ghats Guide | Ramkund, Godavari Ghats & Kumbh Mela 2027",
  description:
    "Explore the sacred ghats of Nashik along the Godavari River, including Ramkund, Panchavati, pilgrimage traditions, Kumbh Mela bathing sites and ghat development for 2027.",
  keywords: [
    "Nashik ghats",
    "ghats in Nashik",
    "Nashik ghat",
    "famous ghats in Nashik",
    "holy ghats in Nashik",
    "Nashik Godavari ghats",
    "Godavari ghats Nashik",
    "Ramkund Nashik",
    "Ramkund ghat",
    "Ramkund Nashik Kumbh",
    "Nashik Kumbh Mela ghats",
    "Nashik Kumbh Mela 2027",
    "Nashik Kumbh Mela bathing ghats",
    "Kumbh Mela Nashik Godavari",
    "Godavari River Nashik",
    "Nashik pilgrimage places",
    "Panchavati Nashik ghats",
    "Panchavati Nashik Kumbh",
    "Nashik riverfront",
    "Nashik holy places",
    "ghat near Ramkund Nashik",
    "Ramkund Godavari River",
    "Nashik Kumbh bathing",
    "Simhastha Kumbh Nashik",
    "Nashik Trimbakeshwar Kumbh",
    "नाशिक घाट",
    "नाशिक गोदावरी घाट",
    "रामकुंड नाशिक",
    "नाशिक कुंभमेळा 2027",
  ],
  alternates: {
    canonical: "https://kumbhnashikguide.com/ghats",
  },
  openGraph: {
    title:
      "Nashik Ghats Guide | Ramkund, Godavari Ghats & Kumbh Mela 2027",
    description:
      "A guide to Nashik's sacred Godavari ghats, Ramkund, Panchavati, pilgrimage traditions and Kumbh Mela 2027.",
    url: "https://kumbhnashikguide.com/ghats",
    siteName: "Kumbh Nashik Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://kumbhnashikguide.com/images/nashik-ghats-godavari.jpg",
        width: 1200,
        height: 630,
        alt: "Nashik Ghats along the Godavari River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nashik Ghats Guide | Ramkund, Godavari Ghats & Kumbh Mela 2027",
    description:
      "Explore Nashik's sacred ghats, Ramkund, the Godavari River and Kumbh Mela 2027 pilgrimage sites.",
    images: [
      "https://kumbhnashikguide.com/images/nashik-ghats-godavari.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Which is the most famous ghat in Nashik?",
    answer:
      "Ramkund is one of the best-known sacred riverfront sites in Nashik. It is located on the Godavari River in the Panchavati area and is an important pilgrimage destination.",
  },
  {
    question: "Where are the ghats in Nashik?",
    answer:
      "Several important pilgrimage and riverfront sites are located along the Godavari in Nashik, particularly around Ramkund and Panchavati. The riverfront forms an important part of Nashik's religious landscape.",
  },
  {
    question: "Why is Ramkund important?",
    answer:
      "Ramkund is an important religious site on the Godavari River. The Nashik District Government describes Ramkund as a highly sacred location and records its association with pilgrimage and ritual practices.",
  },
  {
    question: "Are Nashik ghats important during Kumbh Mela?",
    answer:
      "Yes. The Godavari riverfront and bathing traditions are an important part of Nashik-Trimbakeshwar Simhastha Kumbh Mela. Ramkund is one of the prominent pilgrimage locations in Nashik.",
  },
  {
    question: "Is Ramkund near Panchavati?",
    answer:
      "Yes. Ramkund is located in the Panchavati area of Nashik and is surrounded by several important temples and pilgrimage sites.",
  },
  {
    question: "Can visitors bathe at the Nashik ghats?",
    answer:
      "Bathing and ritual activities are traditionally associated with the Godavari riverfront. Visitors should follow local safety instructions, water conditions, crowd-management directions and any restrictions in force at the time of their visit.",
  },
];

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
      name: "Ghats",
      item: "https://kumbhnashikguide.com/ghats",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Nashik Ghats Guide | Ramkund, Godavari Ghats & Kumbh Mela 2027",
  description:
    "A guide to the sacred ghats and Godavari riverfront in Nashik, including Ramkund, Panchavati, pilgrimage traditions and Kumbh Mela 2027.",
  image: "https://kumbhnashikguide.com/images/nashik-ghats-godavari.jpg",
  datePublished: "2026-09-29",
  dateModified: "2026-09-29",
  author: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide",
    url: "https://kumbhnashikguide.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide",
    url: "https://kumbhnashikguide.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kumbhnashikguide.com/ghats",
  },
  inLanguage: "en-IN",
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

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function GuideCard({
  image,
  title,
  description,
  href,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-orange-700">
          {title}
        </h3>

        <p className="text-sm leading-7 text-gray-600">{description}</p>

        <span className="mt-4 inline-block text-sm font-semibold text-orange-700">
          Explore guide →
        </span>
      </div>
    </Link>
  );
}

export default function GhatsPage() {
  return (
    <>
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

      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-5 inline-flex rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
                  Godavari River • Nashik • Kumbh Mela 2027
                </div>

                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                  Nashik Ghats: Sacred Godavari River Ghats
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  Explore Nashik&apos;s sacred riverfront, Ramkund, Panchavati
                  and the pilgrimage traditions connected with the Godavari
                  River. This guide also explains the importance of the ghats
                  during Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/blog/ramkund-nashik-guide-kumbh-mela"
                    className="rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
                  >
                    Explore Ramkund
                  </Link>

                  <Link
                    href="/blog/nashik-kumbh-mela-2027-dates"
                    className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 transition hover:border-orange-400 hover:text-orange-700"
                  >
                    Kumbh 2027 Dates
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/nashik-ghats-godavari.jpg"
                    alt="Nashik ghats along the Godavari River"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute -bottom-5 -left-4 rounded-2xl border border-orange-100 bg-white p-4 shadow-xl sm:-left-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Riverfront
                  </p>
                  <p className="mt-1 font-bold text-gray-900">
                    Godavari • Nashik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8">
            <p className="text-lg leading-8 text-gray-700">
              Nashik&apos;s ghats are closely associated with the Godavari
              River and the city&apos;s long-standing pilgrimage traditions.
              Ramkund, located in the Panchavati area, is one of the most
              important religious sites on the riverfront. The Nashik District
              Government identifies Ramkund as a highly sacred location, while
              Maharashtra Tourism describes the Godavari riverfront, including
              Ram Kund, as an important setting for religious bathing during
              the Nashik-Trimbakeshwar Kumbh Mela.
            </p>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nashik riverfront"
            title="Nashik Ghats at a Glance"
          />

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold text-gray-900">
                      Site / Area
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-gray-900">
                      River / Location
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-gray-900">
                      Importance
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-5 font-semibold">Ramkund</td>
                    <td className="px-5 py-5 text-gray-600">
                      Godavari River, Panchavati
                    </td>
                    <td className="px-5 py-5 text-gray-600">
                      Major pilgrimage and bathing site
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-5 font-semibold">
                      Godavari Riverfront
                    </td>
                    <td className="px-5 py-5 text-gray-600">
                      Central Nashik
                    </td>
                    <td className="px-5 py-5 text-gray-600">
                      Religious rituals, pilgrimage and river bathing
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-5 font-semibold">
                      Panchavati riverfront
                    </td>
                    <td className="px-5 py-5 text-gray-600">
                      Panchavati
                    </td>
                    <td className="px-5 py-5 text-gray-600">
                      Important pilgrimage landscape around Ramkund
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Note: This page focuses on major pilgrimage and riverfront areas
            that can be supported by reliable sources. It does not present an
            unverified ranking of every ghat in Nashik.
          </p>
        </section>

        {/* RAMKUND */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/ramkund-ghat.jpg"
                  alt="Ramkund Ghat on the Godavari River in Nashik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <SectionTitle
                  eyebrow="Featured ghat"
                  title="Ramkund Ghat"
                />

                <p className="leading-8 text-gray-600">
                  Ramkund is one of Nashik&apos;s most important sacred
                  riverfront sites. It stands on the Godavari River in
                  Panchavati and is closely associated with pilgrimage,
                  religious bathing and ritual practices.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  The Nashik District Government records Ramkund as a major
                  religious site and notes its historical development and
                  association with Asthivilaya Tirth. Its location also places
                  visitors close to several important temples and pilgrimage
                  attractions in Panchavati.
                </p>

                <Link
                  href="/blog/ramkund-nashik-guide-kumbh-mela"
                  className="mt-6 inline-flex rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
                >
                  Read the Complete Ramkund Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GODAVARI */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Sacred river"
                title="The Godavari River and Nashik Ghats"
              />

              <p className="leading-8 text-gray-600">
                The Godavari is central to Nashik&apos;s religious identity.
                The river originates in the Trimbakeshwar area and flows
                through Nashik, where its riverfront includes important
                pilgrimage locations.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Religious bathing at the Godavari is an important part of the
                pilgrimage tradition associated with Nashik. During
                Simhastha Kumbh, the riverfront becomes especially significant
                because ceremonial bathing is one of the central traditions of
                the festival.
              </p>

              <Link
                href="/blog/significance-of-godavari-river"
                className="mt-6 inline-flex font-semibold text-orange-700 hover:text-orange-900"
              >
                Learn About the Significance of the Godavari →
              </Link>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/godavari-river-nashik-ghats.jpg"
                alt="Godavari River and ghats in Nashik"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* KUMBH */}
        <section className="bg-orange-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionTitle
                eyebrow="Kumbh Mela 2027"
                title="Nashik Ghats and Kumbh Mela"
              />

              <p className="text-lg leading-8 text-gray-700">
                Nashik-Trimbakeshwar Simhastha Kumbh Mela is closely connected
                with the Godavari River and the religious tradition of sacred
                bathing. Ramkund and the surrounding riverfront are therefore
                important places for pilgrims visiting Nashik.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                The exact arrangements, access rules, crowd-management
                measures and operational instructions for the 2027 event may
                change as authorities publish further information. Visitors
                should check current official announcements before travelling.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <GuideCard
                image="/images/nashik-kumbh-ghats.jpg"
                title="Kumbh Mela 2027"
                description="Understand the Nashik-Trimbakeshwar Kumbh, pilgrimage areas and important visitor information."
                href="/blog/nashik-kumbh-mela-2027-dates"
              />

              <GuideCard
                image="/images/development-plan.jpg"
                title="Kumbh Development Plan"
                description="Explore the infrastructure and development planning connected with Nashik-Trimbakeshwar Simhastha Kumbh."
                href="/blog/nashik-kumbh-mela-2027-development-plan"
              />

              <GuideCard
                image="/images/crowd-security.jpg"
                title="Crowd & Security Updates"
                description="Follow important preparations and public updates relevant to pilgrims and visitors."
                href="/updates/crowd-management-security-preparations-kumbh-2027"
              />
            </div>
          </div>
        </section>

        {/* PANCHAVATI */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/panchavati-ghats.jpg"
                alt="Panchavati riverfront and pilgrimage area in Nashik"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionTitle
                eyebrow="Pilgrimage area"
                title="Panchavati and the Ghats"
              />

              <p className="leading-8 text-gray-600">
                Panchavati is one of Nashik&apos;s most significant
                pilgrimage areas and is closely connected with Ramkund and
                the Godavari riverfront. The area contains several temples,
                caves and religious sites that can be visited as part of a
                Nashik pilgrimage.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                For visitors exploring the ghats, combining Ramkund with
                nearby Panchavati attractions can provide a more complete
                understanding of the religious landscape.
              </p>

              <Link
                href="/blog/panchavati-nashik-kumbh-mela-guide"
                className="mt-6 inline-flex font-semibold text-orange-700 hover:text-orange-900"
              >
                Explore the Panchavati Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* NEARBY TEMPLES */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Nearby pilgrimage sites"
              title="Temples and Places Near Nashik Ghats"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <GuideCard
                image="/images/kalaram-temple.jpg"
                title="Kalaram Temple"
                description="A historic temple in Panchavati that can be combined with a visit to the Ramkund riverfront."
                href="/blog/kalaram-temple-nashik-guide-kumbh-mela-2027"
              />

              <GuideCard
                image="/images/kapaleshwar-temple.jpg"
                title="Kapaleshwar Temple"
                description="An important Shiva temple located close to the Ramkund area."
                href="/blog/kapaleshwar-temple-nashik-guide-kumbh-mela-2027"
              />

              <GuideCard
                image="/images/sita-gufa.jpg"
                title="Sita Gufa"
                description="A well-known pilgrimage attraction in Panchavati."
                href="/blog/sita-gufa-nashik-guide-kumbh-mela-2027"
              />

              <GuideCard
                image="/images/kushavarta-kund.jpg"
                title="Kushavarta Kund"
                description="A significant pilgrimage site at Trimbakeshwar associated with the Godavari tradition."
                href="/blog/kushavarta-kund-guide-kumbh-mela-2027"
              />
            </div>
          </div>
        </section>

        {/* GHAT DEVELOPMENT */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/nashik-ghat-development.jpg"
              alt="Nashik ghat development and infrastructure planning"
              fill
              className="object-cover"
              sizes="100vw"
            />

            <div className="relative bg-black/65 p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                Infrastructure
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Ghat Development Ahead of Kumbh Mela 2027
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-gray-200">
                Infrastructure planning for Simhastha Kumbh includes work
                connected with riverfront and ghat facilities. Official
                administrative approvals published by the Nashik Divisional
                Commissioner include projects involving ghat-related
                infrastructure and other facilities intended for the wider
                Kumbh preparations.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300">
                Project scope, locations, timelines and implementation status
                can change. Check the latest government approvals and updates
                before relying on a project as completed.
              </p>

              <Link
                href="/blog/nashik-kumbh-mela-2027-development-plan"
                className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-orange-50"
              >
                View the Kumbh Development Plan →
              </Link>
            </div>
          </div>
        </section>

        {/* VISITOR TIPS */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Before you visit"
              title="Visiting Nashik Ghats Safely"
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Check river conditions",
                  "Water depth, flow and local conditions can change. Follow safety instructions at the riverfront.",
                ],
                [
                  "Follow local directions",
                  "During major religious events, follow instructions issued by local authorities and event-management teams.",
                ],
                [
                  "Protect valuables",
                  "Avoid carrying unnecessary valuables when visiting crowded pilgrimage areas.",
                ],
                [
                  "Respect religious practices",
                  "Dress and behave respectfully around temples, bathing areas and religious ceremonies.",
                ],
                [
                  "Keep the riverfront clean",
                  "Use designated waste facilities and avoid disposing of waste in or near the Godavari.",
                ],
                [
                  "Check current updates",
                  "Crowd arrangements, access routes and restrictions can change during major events.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO REACH */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Plan your visit"
            title="How to Reach the Nashik Ghats"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <GuideCard
              image="/images/train.jpg"
              title="By Train"
              description="Find railway options and practical information for reaching Nashik."
              href="/blog/nashik-kumbh-mela-railway-guide"
            />

            <GuideCard
              image="/images/bus.jpg"
              title="By Bus"
              description="Explore bus and road travel options for reaching Nashik and its pilgrimage areas."
              href="/blog/nashik-kumbh-mela-bus-travel-guide"
            />

            <GuideCard
              image="/images/airport.jpg"
              title="By Air"
              description="Check airport information and onward travel options for Nashik."
              href="/blog/nashik-kumbh-mela-air-travel-guide"
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/travel"
              className="font-semibold text-orange-700 hover:text-orange-900"
            >
              Open the Complete Nashik Travel Hub →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-orange-50">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Frequently asked questions"
              title="Nashik Ghats FAQ"
            />

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-orange-100 bg-white p-5"
                >
                  <summary className="cursor-pointer list-none pr-6 font-semibold text-gray-900">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OFFICIAL SOURCES */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Official Information Sources
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              For current information about pilgrimage sites, tourism,
              infrastructure and Kumbh-related arrangements, consult
              government and tourism authorities in addition to this guide.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://nashik.gov.in/en/tourist-place/ramkund-nashik/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 p-4 font-semibold text-orange-700 hover:bg-orange-50"
              >
                Nashik District Government — Ramkund
              </a>

              <a
                href="https://nashik.gov.in/en/tourism/culture-heritage/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 p-4 font-semibold text-orange-700 hover:bg-orange-50"
              >
                Nashik District Government — Culture & Heritage
              </a>

              <a
                href="https://maharashtratourism.gov.in/districts/nashik/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 p-4 font-semibold text-orange-700 hover:bg-orange-50"
              >
                Maharashtra Tourism — Nashik
              </a>

              <a
                href="https://divcomnashik.maharashtra.gov.in/en/administrative-approvals/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 p-4 font-semibold text-orange-700 hover:bg-orange-50"
              >
                Divisional Commissioner Nashik — Administrative Approvals
              </a>
            </div>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionTitle title="Continue Exploring Nashik Kumbh Guide" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/blog/nashik-kumbh-mela-2027-dates"
                className="rounded-xl border border-gray-200 p-5 font-semibold hover:border-orange-300 hover:bg-orange-50"
              >
                Kumbh Mela 2027 Dates →
              </Link>

              <Link
                href="/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027"
                className="rounded-xl border border-gray-200 p-5 font-semibold hover:border-orange-300 hover:bg-orange-50"
              >
                Amrit Snan Guide →
              </Link>

              <Link
                href="/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027"
                className="rounded-xl border border-gray-200 p-5 font-semibold hover:border-orange-300 hover:bg-orange-50"
              >
                First-Time Pilgrim Guide →
              </Link>

              <Link
                href="/blog/top-10-places-to-visit-nashik-kumbh-mela-2027"
                className="rounded-xl border border-gray-200 p-5 font-semibold hover:border-orange-300 hover:bg-orange-50"
              >
                Places to Visit in Nashik →
              </Link>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-50 p-6 text-sm leading-7 text-gray-500">
            <strong className="text-gray-700">Information note:</strong>{" "}
            Kumbh Nashik Guide is an independent informational website. It is
            not a government website and does not represent the Nashik
            Divisional Commissioner, Nashik Municipal Corporation, Maharashtra
            Tourism or any other government authority. Information about
            projects, access arrangements, event management and visitor
            facilities can change as official agencies publish updates.
          </div>
        </section>
      </main>
    </>
  );
}