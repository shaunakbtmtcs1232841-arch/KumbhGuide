import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Samudra Manthan: Why Did It Happen & How It Connects to Kumbh Mela?",
  description:
    "Why did Samudra Manthan happen? Explore the Hindu mythological story of the churning of the ocean, Amrit Kumbh, and its connection with Kumbh Mela, Nashik and the Godavari.",
  keywords: [
    "Samudra Manthan",
    "why did Samudra Manthan happen",
    "Samudra Manthan story",
    "Samudra Manthan story in Hindu mythology",
    "Samudra Manthan and Kumbh Mela",
    "Samudra Manthan Kumbh Mela",
    "origin of Kumbh Mela",
    "Kumbh Mela origin story",
    "Kumbh Mela mythology",
    "Kumbh Mela history",
    "Kumbh Mela significance",
    "Amrit Kumbh",
    "Amrit nectar Samudra Manthan",
    "Dhanvantari Amrit Kumbh",
    "Mandara Mountain Samudra Manthan",
    "Vasuki Samudra Manthan",
    "Halahala poison Samudra Manthan",
    "Devas and Asuras Samudra Manthan",
    "Nashik Kumbh Mela",
    "Nashik Kumbh Mela 2027",
    "Nashik Kumbh Mela mythology",
    "Nashik Kumbh Mela origin",
    "Nashik Simhastha Kumbh Mela",
    "Kumbh Mela Nashik Godavari",
    "Godavari River Kumbh Mela",
    "Kumbh Mela four places",
    "four Kumbh Mela locations",
    "Nashik Trimbakeshwar Kumbh Mela",
    "कुंभमेळा माहिती",
    "समुद्रमंथन कथा",
    "समुद्रमंथन आणि कुंभमेळा",
    "नाशिक कुंभमेळा 2027",
  ],
  alternates: {
    canonical:
      "https://kumbhnashikguide.com/blog/samudra-manthan-origin-kumbh",
  },
  openGraph: {
    title:
      "Samudra Manthan: Why Did It Happen & How It Connects to Kumbh Mela?",
    description:
      "Understand the Samudra Manthan story, the Amrit Kumbh and its traditional connection with Kumbh Mela and Nashik.",
    url: "https://kumbhnashikguide.com/blog/samudra-manthan-origin-kumbh",
    siteName: "Kumbh Nashik Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://kumbhnashikguide.com/images/samudramanthan.jpg",
        width: 1200,
        height: 630,
        alt: "Samudra Manthan and the origin of Kumbh Mela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Samudra Manthan: Why Did It Happen & How It Connects to Kumbh Mela?",
    description:
      "The mythological story of Samudra Manthan, Amrit Kumbh and its connection with Kumbh Mela and Nashik.",
    images: ["https://kumbhnashikguide.com/images/samudramanthan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-static";

const articleUrl =
  "https://kumbhnashikguide.com/blog/samudra-manthan-origin-kumbh";

export default function SamudraManthan() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Samudra Manthan: Why Did It Happen and How Is It Connected to Kumbh Mela?",
    description:
      "A guide to the Hindu mythological story of Samudra Manthan, the search for Amrit and its traditional connection with Kumbh Mela and Nashik.",
    image: "https://kumbhnashikguide.com/images/samudramanthan.jpg",
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "Kumbh Nashik Guide",
    },
    publisher: {
      "@type": "Organization",
      name: "Kumbh Nashik Guide",
    },
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
        name: "Samudra Manthan and Kumbh Mela",
        item: articleUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why did Samudra Manthan happen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to Hindu mythology, the Devas sought Amrit, the nectar of immortality, after losing their strength. Lord Vishnu advised them to work with the Asuras to churn the cosmic ocean and obtain the nectar.",
        },
      },
      {
        "@type": "Question",
        name: "What is Samudra Manthan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Samudra Manthan is the Hindu mythological account of the churning of the cosmic ocean by the Devas and Asuras to obtain Amrit and other divine treasures.",
        },
      },
      {
        "@type": "Question",
        name: "How is Samudra Manthan connected to Kumbh Mela?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to Hindu tradition, the struggle over the Amrit Kumbh is associated with drops of the nectar falling at four sacred places: Prayagraj, Haridwar, Nashik-Trimbakeshwar and Ujjain. These places are traditionally associated with Kumbh Mela.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Nashik associated with Kumbh Mela?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nashik and Trimbakeshwar are traditionally associated with Kumbh Mela through the mythology of Amrit and the sacred Godavari. Nashik District's official tourism material describes the mythological connection between Samudra Manthan and Kumbh.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Amrit Kumbh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the Samudra Manthan story, Dhanvantari emerges carrying a Kumbh, or pitcher, containing Amrit, the nectar of immortality.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
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

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-100">
            Kumbh Mela Mythology
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
            Samudra Manthan: Why Did It Happen & How Is It Connected to Kumbh
            Mela?
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-orange-50">
            Discover the Hindu mythological story of Samudra Manthan, the
            search for Amrit and the traditional connection between the Amrit
            Kumbh and Kumbh Mela, including Nashik-Trimbakeshwar.
          </p>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-4xl px-6 pt-6 text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-orange-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span>Samudra Manthan</span>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* HERO IMAGE */}
        <div className="relative mb-10 h-[260px] w-full overflow-hidden rounded-2xl shadow-md md:h-[430px]">
          <Image
            src="/images/samudramanthan.jpg"
            alt="Samudra Manthan mythological story and Amrit Kumbh"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>

        {/* DIRECT ANSWER */}
        <section className="mb-10 rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Did Samudra Manthan Happen?
          </h2>

          <p className="text-lg leading-8">
            According to Hindu mythology, <strong>Samudra Manthan</strong>{" "}
            happened because the Devas needed <strong>Amrit</strong>, the
            nectar of immortality, after losing their strength. Lord Vishnu
            advised the Devas to work with the Asuras and churn the cosmic
            ocean to obtain the nectar and other divine treasures.
          </p>

          <p className="mt-4 leading-7">
            The story is traditionally regarded as an important mythological
            foundation of the <strong>Kumbh Mela</strong>. The Amrit Kumbh, or
            pitcher containing the nectar, became central to the traditional
            explanation of why Kumbh is associated with four sacred locations,
            including Nashik-Trimbakeshwar.
          </p>
        </section>

        {/* INTRODUCTION */}
        <section>
          <h2 className="mb-4 mt-10 text-3xl font-bold text-gray-900">
            What Is Samudra Manthan?
          </h2>

          <p className="mb-6 leading-8">
            <strong>Samudra Manthan</strong>, also called the{" "}
            <strong>Churning of the Ocean</strong>, is a major story in Hindu
            mythology. It describes the Devas and Asuras working together to
            churn the cosmic ocean in search of Amrit and other extraordinary
            treasures.
          </p>

          <p className="mb-8 leading-8">
            The story explains a struggle between opposing forces, the
            emergence of divine treasures and the eventual appearance of
            Dhanvantari carrying the Amrit Kumbh.
          </p>
        </section>

        {/* WHY */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            Why Did the Devas and Asuras Perform Samudra Manthan?
          </h2>

          <p className="mb-6 leading-8">
            According to the traditional story, the Devas had become weakened
            after a curse associated with Sage Durvasa. Seeking to restore
            their strength, they approached Lord Vishnu for guidance.
          </p>

          <p className="mb-6 leading-8">
            Vishnu advised them to churn the ocean of milk and obtain Amrit.
            Because the task was too difficult for the Devas alone, they made
            an agreement with the Asuras to participate in the churning.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-orange-500 bg-gray-50 p-6">
            <p className="font-semibold text-gray-900">
              In simple terms:
            </p>
            <p className="mt-2 leading-7">
              The main purpose of Samudra Manthan was to obtain{" "}
              <strong>Amrit, the nectar of immortality</strong>, along with
              other divine treasures that emerged during the churning.
            </p>
          </div>
        </section>

        {/* IMAGE 2 */}
        <div className="relative my-10 h-[250px] w-full overflow-hidden rounded-2xl shadow-md md:h-[360px]">
          <Image
            src="/images/samudramanthan.jpg"
            alt="Samudra Manthan churning of the cosmic ocean"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>

        {/* CHURNING PROCESS */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            How Was the Cosmic Ocean Churned?
          </h2>

          <p className="mb-6 leading-8">
            The mythological account describes a carefully arranged process
            involving a mountain, a divine serpent and the intervention of
            Lord Vishnu.
          </p>

          <div className="mb-8 overflow-hidden rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-3">
              <div className="border-b p-5 md:border-b-0 md:border-r">
                <h3 className="font-bold text-orange-700">
                  Mount Mandara
                </h3>
                <p className="mt-2 text-sm leading-6">
                  Used as the churning rod.
                </p>
              </div>

              <div className="border-b p-5 md:border-b-0 md:border-r">
                <h3 className="font-bold text-orange-700">Vasuki</h3>
                <p className="mt-2 text-sm leading-6">
                  Used as the serpent rope around the mountain.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-orange-700">
                  Lord Vishnu
                </h3>
                <p className="mt-2 text-sm leading-6">
                  Traditionally described as taking the Kurma, or tortoise,
                  form to support the mountain.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-8 leading-8">
            The Devas and Asuras pulled Vasuki from opposite sides, causing
            Mount Mandara to rotate and churn the cosmic ocean. Hindu
            tradition describes several divine objects and beings emerging
            during this process.
          </p>
        </section>

        {/* HALAHALA */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            Halahala Poison and Lord Shiva
          </h2>

          <p className="mb-6 leading-8">
            One of the first major dangers to emerge from the churning was the
            deadly poison known as <strong>Halahala</strong>.
          </p>

          <p className="mb-8 leading-8">
            According to Hindu mythology, the poison threatened the worlds.
            Lord Shiva consumed it to protect creation, and the story
            associates the blue colour of his throat with this act.
          </p>
        </section>

        {/* DIVINE TREASURES */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            What Came Out of Samudra Manthan?
          </h2>

          <p className="mb-6 leading-8">
            Hindu traditions describe numerous divine treasures and beings
            emerging from the cosmic ocean. Different textual traditions
            describe the list somewhat differently.
          </p>

          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg bg-orange-50 p-4">
              Goddess Lakshmi
            </li>
            <li className="rounded-lg bg-orange-50 p-4">
              Dhanvantari
            </li>
            <li className="rounded-lg bg-orange-50 p-4">
              Amrit
            </li>
            <li className="rounded-lg bg-orange-50 p-4">
              Halahala poison
            </li>
            <li className="rounded-lg bg-orange-50 p-4">
              The Moon
            </li>
            <li className="rounded-lg bg-orange-50 p-4">
              Other divine treasures
            </li>
          </ul>
        </section>

        {/* AMRIT */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            Dhanvantari and the Amrit Kumbh
          </h2>

          <p className="mb-6 leading-8">
            The most important moment for the later Kumbh tradition occurs
            when <strong>Dhanvantari</strong> emerges carrying a{" "}
            <strong>Kumbh</strong>, or pitcher, containing Amrit.
          </p>

          <p className="mb-8 leading-8">
            The nectar becomes the focus of a struggle between the Devas and
            Asuras. The traditional Kumbh Mela story connects this struggle
            over the Amrit Kumbh with the sacred geography of the four Kumbh
            locations.
          </p>
        </section>

        {/* IMAGE 3 */}
        <div className="my-10 rounded-2xl bg-orange-50 p-6 text-center">
          <div className="relative mx-auto h-[260px] max-w-3xl overflow-hidden rounded-xl shadow-md md:h-[380px]">
            <Image
              src="/images/samudramanthan.jpg"
              alt="Traditional depiction of Amrit Kumbh from Samudra Manthan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The Amrit Kumbh is central to the traditional mythological
            explanation of Kumbh Mela.
          </p>
        </div>

        {/* KUMBH CONNECTION */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            How Is Samudra Manthan Connected to Kumbh Mela?
          </h2>

          <p className="mb-6 leading-8">
            According to Hindu tradition, during the struggle over the Amrit
            Kumbh, drops of the nectar are associated with four sacred places:
            <strong> Prayagraj, Haridwar, Nashik-Trimbakeshwar and Ujjain</strong>.
          </p>

          <p className="mb-6 leading-8">
            This mythology forms an important part of the traditional
            explanation of the <strong>origin of Kumbh Mela</strong>. Official
            Nashik District material also describes the mythological
            significance of Kumbh through the story of Samudra Manthan.{" "}
            <a
              href="https://nashik.gov.in/en/tourism/culture-heritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 hover:underline"
            >
              Nashik District Government — Culture & Heritage
            </a>
          </p>

          <p className="mb-8 leading-8">
            For Nashik, this tradition is closely associated with the{" "}
            <Link
              href="/blog/significance-of-godavari-river"
              className="font-semibold text-orange-600 hover:underline"
            >
              Godavari River
            </Link>{" "}
            and the sacred sites of Nashik and Trimbakeshwar.
          </p>
        </section>

        {/* FOUR PLACES */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            The Four Traditional Kumbh Mela Locations
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-5">
              <h3 className="text-lg font-bold text-orange-700">
                Prayagraj
              </h3>
              <p className="mt-2 text-sm leading-6">
                Associated with the sacred confluence of the Ganga, Yamuna and
                Saraswati traditions.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-lg font-bold text-orange-700">
                Haridwar
              </h3>
              <p className="mt-2 text-sm leading-6">
                Associated with the Ganga and one of the four traditional
                Kumbh locations.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-lg font-bold text-orange-700">
                Nashik-Trimbakeshwar
              </h3>
              <p className="mt-2 text-sm leading-6">
                Associated with the Godavari and the Simhastha Kumbh tradition.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="text-lg font-bold text-orange-700">
                Ujjain
              </h3>
              <p className="mt-2 text-sm leading-6">
                Associated with the Shipra River and Simhastha tradition.
              </p>
            </div>
          </div>
        </section>

        {/* NASHIK */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            Why Is Nashik Important in the Kumbh Mela Tradition?
          </h2>

          <p className="mb-6 leading-8">
            Nashik and Trimbakeshwar form one of the four traditional Kumbh
            locations. The Nashik-Trimbakeshwar event is commonly known as
            <strong> Simhastha Kumbh</strong>.
          </p>

          <p className="mb-6 leading-8">
            Nashik District's official tourism information connects the Kumbh
            tradition with the Samudra Manthan mythology and describes the
            importance of the Godavari in the Nashik Kumbh tradition.{" "}
            <a
              href="https://nashik.gov.in/en/tourism/culture-heritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 hover:underline"
            >
              Official Nashik District information
            </a>
          </p>

          <p className="mb-8 leading-8">
            The upcoming <strong>Nashik Kumbh Mela 2027</strong> is being
            planned and coordinated by the Nashik-Trimbakeshwar Kumbh Mela
            Authority. The Government of Maharashtra has approved a
            comprehensive ₹22,425.39 crore development plan for the
            Nashik-Trimbakeshwar Simhastha Kumbh Mela.{" "}
            <a
              href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289872&lang=1&reg=1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 hover:underline"
            >
              PIB — Government of India
            </a>
          </p>
        </section>

        {/* INTERNAL LINK CARDS */}
        <section className="my-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Explore Kumbh Mela
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/what-is-kumbh-mela"
              className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-orange-700">
                What Is Kumbh Mela?
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Understand the meaning, tradition and significance of Kumbh
                Mela.
              </p>
            </Link>

            <Link
              href="/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027"
              className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-orange-700">
                Shahi Snan & Amrit Snan
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Learn about the important bathing traditions associated with
                Kumbh Mela.
              </p>
            </Link>

            <Link
              href="/blog/significance-of-godavari-river"
              className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-orange-700">
                Significance of Godavari River
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Explore why the Godavari is central to Nashik's pilgrimage
                tradition.
              </p>
            </Link>

            <Link
              href="/blog/nashik-kumbh-mela-2027-dates"
              className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-orange-700">
                Nashik Kumbh Mela 2027 Dates
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Check the latest information about the Nashik-Trimbakeshwar
                Kumbh schedule.
              </p>
            </Link>

            <Link
              href="/blog/akharas-in-kumbh-mela-guide-nashik-kumbh-mela-2027"
              className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-orange-700">
                Akharas in Kumbh Mela
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Learn about Akharas and their role during Kumbh Mela.
              </p>
            </Link>

            <Link
              href="/blog/nashik-kumbh-mela-2027-development-plan"
              className="rounded-xl border border-orange-200 bg-orange-50 p-5 transition hover:shadow-md"
            >
              <h3 className="font-bold text-orange-700">
                Nashik Kumbh 2027 Development Plan
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Explore the infrastructure and development planning for the
                upcoming Kumbh.
              </p>
            </Link>
          </div>
        </section>

        {/* SPIRITUAL SIGNIFICANCE */}
        <section>
          <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-900">
            Spiritual Significance of Samudra Manthan
          </h2>

          <p className="mb-6 leading-8">
            Beyond the narrative of the Devas, Asuras and Amrit, Samudra
            Manthan is interpreted within Hindu thought as a story involving
            struggle, transformation and the emergence of both danger and
            divine treasures.
          </p>

          <p className="mb-8 leading-8">
            Its connection with Kumbh Mela gives the pilgrimage a deeper
            mythological context. The Kumbh tradition brings together sacred
            bathing, religious discourse, ascetic traditions and pilgrimage at
            specific sacred locations.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold">
                Why did Samudra Manthan happen?
              </h3>
              <p className="mt-2 leading-7">
                According to Hindu mythology, the Devas sought Amrit, the
                nectar of immortality, after losing their strength. They worked
                with the Asuras to churn the cosmic ocean and obtain it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                What is the connection between Samudra Manthan and Kumbh Mela?
              </h3>
              <p className="mt-2 leading-7">
                Hindu tradition connects the Amrit Kumbh from the Samudra
                Manthan story with four sacred locations associated with Kumbh
                Mela: Prayagraj, Haridwar, Nashik-Trimbakeshwar and Ujjain.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Why is Nashik associated with Kumbh Mela?
              </h3>
              <p className="mt-2 leading-7">
                Nashik-Trimbakeshwar is one of the four traditional Kumbh
                locations. The Nashik tradition is closely connected with the
                sacred Godavari and the mythology surrounding Kumbh.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                What is the Amrit Kumbh?
              </h3>
              <p className="mt-2 leading-7">
                Amrit Kumbh means the pitcher containing Amrit, the nectar of
                immortality, in the Samudra Manthan story.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Is Samudra Manthan the historical origin of Kumbh Mela?
              </h3>
              <p className="mt-2 leading-7">
                Samudra Manthan is the traditional mythological explanation
                associated with Kumbh Mela. It should be understood as part of
                Hindu religious tradition rather than presented as a verified
                historical event.
              </p>
            </div>
          </div>
        </section>

        {/* INFORMATION NOTE */}
        <section className="mt-14 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Information Note
          </h2>

          <p className="text-sm leading-7 text-gray-600">
            This article presents Samudra Manthan and the origin of Kumbh Mela
            from the perspective of Hindu mythology and traditional religious
            accounts. Mythological narratives can vary across Hindu texts and
            traditions. Information about the contemporary Nashik Kumbh Mela
            is presented separately using government and other public sources.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">
            Planning for Nashik Kumbh Mela 2027?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-orange-50">
            Explore dates, pilgrimage places, temples, ghats, travel
            information and the latest development updates for
            Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/blog/nashik-kumbh-mela-2027-dates"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-orange-700 hover:bg-orange-50"
            >
              Kumbh 2027 Dates
            </Link>

            <Link
              href="/travel"
              className="rounded-lg border border-white px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Travel Guide
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}