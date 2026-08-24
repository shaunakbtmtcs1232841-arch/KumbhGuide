import Link from "next/link";

const articles = [
  {
    href: "/blog/nashik-kumbh-mela-2027-dates",
    image: "/images/kumbh-dates.jpg",
    title: "Nashik Kumbh Mela 2027 Important Dates",
    description:
      "Complete list of Shahi Snan dates and major spiritual events of Nashik Kumbh Mela.",
  },
  {
    href: "/blog/what-is-kumbh-mela",
    image: "/images/kumbha.png",
    title: "What is Kumbh Mela and Why it is Celebrated?",
    description:
      "History, mythology and spiritual importance of the world's largest religious gathering.",
  },
  {
    href: "/blog/nashik-kumbh-mela-railway-travel-guide",
    image: "/images/travel.jpg",
    title: "Planning to travel to Nashik Kumbh Mela 2027 by train?",
    description:
      "This complete railway guide explains the nearest railway stations and important travel tips for pilgrims and visitors.",
  },
  {
    href: "/blog/nashik-kumbh-mela-2027-tithi",
    image: "/images/kumbh-tithi-hindi.jpg",
    title:
      "नाशिक कुंभ मेला 2027 तिथि, शाही स्नान तारीख और महत्वपूर्ण कार्यक्रम",
    description:
      "नाशिक कुंभ मेला 2027 की प्रमुख तिथियां, शाही स्नान कार्यक्रम, धार्मिक आयोजन, यात्रा मार्गदर्शन, भीड़ प्रबंधन जानकारी और श्रद्धालुओं के लिए महत्वपूर्ण अपडेट।",
  },
  {
    href: "/blog/nashik-kumbhmela-2027-tarikh",
    image: "/images/kumbh-tarikh-marathi.jpg",
    title: "नाशिक कुंभमेळा 2027 तारखा आणि संपूर्ण वेळापत्रक",
    description:
      "नाशिक कुंभमेळा 2027 मधील प्रमुख शाही स्नान तारखा, धार्मिक कार्यक्रम, यात्रेचे वेळापत्रक, गर्दी व्यवस्थापन माहिती आणि यात्रेकरूंकरिता महत्त्वपूर्ण मार्गदर्शन.",
  },
  {
    href: "/blog/top-10-places-to-visit-nashik-kumbh-mela-2027",
    image: "/images/pandavleni.jpg",
    title: "10 Best Places to Visit in Nashik During Kumbh Mela",
    description:
      "Explore Ramkund, Trimbakeshwar, Panchavati and other sacred places every pilgrim must visit.",
  },
  {
    href: "/blog/significance-of-godavari-river",
    image: "/images/godavari.jpg",
    title: "Significance of Godavari River",
    description:
      'Understanding why the Godavari is called the "Ganga of the South" and its sacred connection to Nashik Kumbh Mela.',
  },
  {
    href: "/blog/trimbakeshwar-temple-guide-kumbh-mela-2027",
    image: "/images/trimbak.jpg",
    title: "Trimbakeshwar Temple Guide for Nashik Kumbh Mela 2027",
    description:
      "Complete guide to Trimbakeshwar Jyotirlinga including temple history, darshan timings, Kushavarta Kund, Godavari River origin, travel guidance, spiritual significance, and pilgrimage information for Nashik Kumbh Mela 2027.",
  },
  {
    href: "/blog/panchavati-nashik-kumbh-mela-guide",
    image: "/images/panchavati.jpg",
    title: "Panchavati Nashik Guide for Kumbh Mela 2027",
    description:
      "Explore Ramkund, Kalaram Temple, Sita Gufa, Godavari Ghats, spiritual significance, travel tips, and pilgrimage guidance for Panchavati during Nashik Kumbh Mela 2027.",
  },
  {
    href: "/blog/ramkund-nashik-guide-kumbh-mela",
    image: "/images/ramkund.jpg",
    title: "Ramkund Nashik Guide for Kumbh Mela 2027",
    description:
      "Explore the spiritual significance of Ramkund, important bathing rituals, nearby temples, travel tips, and pilgrimage information for Nashik Kumbh Mela 2027.",
  },
  {
    href: "/blog/top-ghats-nashik",
    image: "/images/godavari.png",
    title: "Top Ghats of Nashik",
    description:
      "Explore the most sacred bathing ghats of Nashik where millions of pilgrims take holy dips during the Kumbh Mela.",
  },
  {
    href: "/blog/top-10-places-to-visit-nashik-kumbh-mela-2027",
    image: "/images/kushavarta.jpg",
    title: "Top 10 Places to Visit During Nashik Kumbh Mela 2027",
    description:
      "Explore the most sacred bathing ghats of Nashik where millions of pilgrims take holy dips during the Kumbh Mela.Nashik Kumbh Mela 2027 is expected to attract millions of pilgrims and tourists from across India and around the world.",
  },
  {
    href: "/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027",
    image: "/images/family-kumbh-guide.jpg",
    title: "First-Time Pilgrim Guide to Nashik Kumbh Mela 2027",
    description:
      "A complete beginner's guide to Nashik Kumbh Mela 2027 covering Amrit Snan dates, travel planning, accommodation, sacred temples, Godavari River ghats, pilgrimage tips, and everything first-time visitors need to know.",
  },
  {
    href: "/blog/samudra-manthan-origin-kumbh",
    image: "/images/samudramanthan.jpg",
    title: "Story of Samudra Manthan",
    description:
      "Learn the mythological story of Samudra Manthan and how it led to the origin of the Kumbh Mela.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 px-6 py-16 text-center text-white">
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-100">
            Nashik Kumbh Mela 2027
          </p>

          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            Nashik Kumbh Mela Blog &amp; Updates
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-orange-50 md:text-base">
            Important dates, travel tips, temples, sacred places, spiritual
            traditions, and complete Kumbh guidance.
          </p>
        </div>

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10" />
      </section>

      {/* BLOG GRID */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Explore Our Kumbh Guides
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Explore detailed guides about Nashik Kumbh Mela 2027, including
            dates, temples, ghats, travel, pilgrimage and spiritual traditions.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={`${article.href}-${index}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <Link href={article.href} className="block overflow-hidden">
                <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-orange-600 shadow-sm">
                    Kumbh Guide
                  </span>
                </div>
              </Link>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5">
                <Link href={article.href}>
                  <h2 className="text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-orange-600">
                    {article.title}
                  </h2>
                </Link>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-orange-600 transition-all hover:text-orange-700"
                >
                  Read Guide
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}