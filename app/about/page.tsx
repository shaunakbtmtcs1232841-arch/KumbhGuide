import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Droplets,
  Sparkles,
  BookOpen,
  ArrowRight,
  Landmark,
  Route,
  Hotel,
  ShieldCheck,
  Info,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title:
    "About Nashik Kumbh Mela 2027 | History, Significance & Nashik Guide",
  description:
    "Learn about Nashik-Trimbakeshwar Kumbh Mela, its history, spiritual significance, Godavari River, Ramkund, Trimbakeshwar, Shahi Snan, Akharas and what to know before Nashik Kumbh Mela 2027.",
  keywords: [
    "about Nashik Kumbh Mela",
    "Nashik Kumbh Mela",
    "Nashik Kumbh Mela 2027",
    "Nashik Kumbh Mela history",
    "Nashik Kumbh Mela significance",
    "Nashik Trimbakeshwar Kumbh Mela",
    "what is Nashik Kumbh Mela",
    "Kumbh Mela significance",
    "Godavari River Kumbh",
    "Ramkund Nashik",
    "Trimbakeshwar Kumbh Mela",
    "Shahi Snan",
    "Amrit Snan",
    "Akharas",
    "Naga Sadhus",
  ],
  alternates: {
    canonical: "https://kumbhnashikguide.com/about",
  },
  openGraph: {
    title:
      "About Nashik Kumbh Mela 2027 | History, Significance & Nashik Guide",
    description:
      "Explore the history, traditions, spiritual significance and important places associated with Nashik-Trimbakeshwar Kumbh Mela 2027.",
    url: "https://kumbhnashikguide.com/about",
    siteName: "Nashik Kumbh Guide",
    type: "website",
    images: [
      {
        url: "https://kumbhnashikguide.com/images/kumbha.png",
        width: 1200,
        height: 630,
        alt: "Nashik Kumbh Mela 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nashik Kumbh Mela 2027 | History & Significance",
    description:
      "Learn about Nashik-Trimbakeshwar Kumbh Mela, its traditions, sacred places and significance.",
    images: ["https://kumbhnashikguide.com/images/kumbha.png"],
  },
};

const features = [
  {
    icon: Calendar,
    title: "Kumbh Mela in Nashik",
    description:
      "Nashik-Trimbakeshwar is one of the four traditional Kumbh Mela locations in India. The Nashik Kumbh is associated with an important cycle of pilgrimage and sacred bathing.",
    iconClass: "bg-orange-100 text-orange-600",
  },
  {
    icon: Droplets,
    title: "Sacred Godavari River",
    description:
      "The Godavari River is central to the spiritual identity of Nashik Kumbh Mela. Sacred bathing along the river is one of the major traditions associated with the festival.",
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Millions of Pilgrims",
    description:
      "The gathering brings together pilgrims, saints, sadhus and visitors from different parts of India and beyond for religious observances and spiritual activities.",
    iconClass: "bg-green-100 text-green-600",
  },
  {
    icon: MapPin,
    title: "Sacred Places",
    description:
      "Important pilgrimage locations include Ramkund and Panchavati in Nashik and Kushavarta Kund and Trimbakeshwar in the wider pilgrimage region.",
    iconClass: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Sparkles,
    title: "Sacred Bathing Days",
    description:
      "Important bathing days are among the major highlights of Kumbh Mela. Pilgrims gather at sacred river locations according to the religious calendar.",
    iconClass: "bg-red-100 text-red-600",
  },
  {
    icon: BookOpen,
    title: "Ancient Traditions",
    description:
      "Kumbh Mela brings together religious discourses, rituals, spiritual traditions, saints, Akharas and cultural practices that have developed over centuries.",
    iconClass: "bg-purple-100 text-purple-600",
  },
];

const guideCards = [
  {
    href: "/blog/what-is-kumbh-mela",
    image: "/images/kumbha.png",
    icon: BookOpen,
    title: "What Is Kumbh Mela?",
    description:
      "Understand the meaning, history, origin and significance of Kumbh Mela.",
  },
  {
    href: "/blog/nashik-kumbhmela-2027-tarikh",
    image: "/images/kumbhn.png",
    icon: Calendar,
    title: "Nashik Kumbh Mela 2027 Dates",
    description:
      "Check important bathing dates and the Nashik Kumbh Mela schedule.",
  },
  {
    href: "/blog/significance-of-godavari-river",
    image: "/images/godavari_fixed.png",
    icon: Droplets,
    title: "Godavari River",
    description:
      "Learn why the Godavari River is spiritually important to Nashik Kumbh.",
  },
  {
    href: "/blog/ramkund-nashik-guide-kumbh-mela",
    image: "/images/kumbhn.png",
    icon: Landmark,
    title: "Ramkund Nashik Guide",
    description:
      "Explore one of Nashik's most important sacred bathing locations.",
  },
  {
    href: "/blog/trimbakeshwar-temple-guide-kumbh-mela-2027",
    image: "/images/kumbha.png",
    icon: MapPin,
    title: "Trimbakeshwar Temple",
    description:
      "Discover the Jyotirlinga temple and its importance in the pilgrimage region.",
  },
  {
    href: "/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027",
    image: "/images/shahi-snan.jpg",
    icon: Sparkles,
    title: "Shahi Snan & Amrit Snan",
    description:
      "Understand the sacred bathing traditions associated with Kumbh Mela.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-black">

        <img
          src="/images/kumbha.png"
          alt="Nashik Kumbh Mela 2027 pilgrims and sacred gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">

          <div className="max-w-4xl text-white">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Nashik-Trimbakeshwar Kumbh Mela
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              About Nashik
              <span className="block text-orange-300">
                Kumbh Mela 2027
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-100 md:text-lg">
              Discover the history, spiritual significance, sacred places and
              traditions of Nashik-Trimbakeshwar Kumbh Mela and understand what
              makes Nashik one of India's important Kumbh pilgrimage
              destinations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/blog/what-is-kumbh-mela"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-700"
              >
                What Is Kumbh Mela?
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/blog/nashik-kumbhmela-2027-tarikh"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                2027 Dates
                <Calendar className="h-4 w-4" />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK FACTS
      ========================================================== */}
      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl md:grid-cols-4">

          <div className="border-b border-r border-orange-100 p-5 text-center md:border-b-0">
            <Calendar className="mx-auto mb-2 h-7 w-7 text-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Next Nashik Kumbh
            </p>
            <p className="mt-1 text-xl font-extrabold text-gray-900">
              2027
            </p>
          </div>

          <div className="border-b border-orange-100 p-5 text-center md:border-b-0 md:border-r">
            <MapPin className="mx-auto mb-2 h-7 w-7 text-orange-600" />
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Region
            </p>
            <p className="mt-1 text-lg font-extrabold text-gray-900">
              Nashik–Trimbakeshwar
            </p>
          </div>

          <div className="border-r border-orange-100 p-5 text-center">
            <Droplets className="mx-auto mb-2 h-7 w-7 text-blue-600" />
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Sacred River
            </p>
            <p className="mt-1 text-xl font-extrabold text-gray-900">
              Godavari
            </p>
          </div>

          <div className="p-5 text-center">
            <Users className="mx-auto mb-2 h-7 w-7 text-green-600" />
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Gathering
            </p>
            <p className="mt-1 text-lg font-extrabold text-gray-900">
              Pilgrims &amp; Saints
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT IS KUMBH - IMAGE + TEXT
      ========================================================== */}
      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src="/images/kumbhn.png"
                alt="Kumbh Mela pilgrimage and sacred gathering in Nashik"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-5 left-5 rounded-2xl bg-black/70 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
                Nashik Kumbh Mela
              </div>

            </div>

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Understanding Nashik Kumbh
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                What Is Nashik Kumbh Mela?
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">

                <p>
                  Kumbh Mela is a major Hindu pilgrimage and religious
                  gathering held at four traditional locations in India:
                  Prayagraj, Haridwar, Ujjain and Nashik-Trimbakeshwar.
                </p>

                <p>
                  The Nashik-Trimbakeshwar Kumbh Mela is closely associated
                  with the sacred Godavari River and important pilgrimage
                  locations including Nashik, Panchavati, Ramkund and
                  Trimbakeshwar.
                </p>

                <p>
                  During the festival, pilgrims participate in sacred bathing,
                  religious ceremonies, spiritual gatherings and traditional
                  activities.
                </p>

              </div>

              <Link
                href="/blog/what-is-kumbh-mela"
                className="mt-7 inline-flex items-center gap-2 font-bold text-orange-600 transition hover:gap-3 hover:text-orange-700"
              >
                Read the complete Kumbh Mela guide
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHY KUMBH CELEBRATED
      ========================================================== */}
      <section className="bg-orange-50 py-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Faith &amp; Tradition
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Why Is Kumbh Mela Celebrated?
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-gray-600">

                <p>
                  The religious tradition of Kumbh Mela is closely connected
                  with the ancient story of Samudra Manthan, the churning of
                  the cosmic ocean.
                </p>

                <p>
                  According to Hindu tradition, gods and demons sought Amrit,
                  the nectar of immortality. The sacred story is traditionally
                  associated with the four Kumbh pilgrimage locations.
                </p>

                <p>
                  Kumbh Mela represents faith, devotion, spiritual practice
                  and pilgrimage. Devotees gather for sacred bathing, prayers,
                  religious ceremonies and spiritual gatherings.
                </p>

              </div>

              <Link
                href="/blog/samudra-manthan-origin-kumbh"
                className="mt-6 inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
              >
                Explore the Samudra Manthan story
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src="/images/samudramanthan.jpg"
                alt="Samudra Manthan story associated with the origin of Kumbh Mela"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7">
                <p className="text-xl font-bold text-white">
                  The Legend of Amrit
                </p>
                <p className="mt-1 text-sm text-gray-200">
                  Samudra Manthan and the traditional Kumbh story
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          KEY FEATURES
      ========================================================== */}
      <section className="bg-gray-50 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              The Kumbh Experience
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Key Features of Nashik Kumbh Mela
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore the major spiritual, cultural and pilgrimage elements
              that make Nashik Kumbh Mela significant.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="group rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                >
                  <CardContent className="p-7">

                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconClass} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {feature.description}
                    </p>

                  </CardContent>
                </Card>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          GODAVARI IMAGE SECTION
      ========================================================== */}
      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-orange-50 shadow-xl">

            <div className="grid md:grid-cols-2">

              <div className="relative min-h-[400px]">

                <img
                  src="/images/godavari_fixed.png"
                  alt="Sacred Godavari River associated with Nashik Kumbh Mela"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <p className="text-2xl font-extrabold text-white">
                    The Sacred Godavari
                  </p>
                  <p className="mt-1 text-sm text-gray-200">
                    An important part of Nashik's pilgrimage landscape
                  </p>
                </div>

              </div>

              <div className="flex items-center p-8 md:p-10">

                <div>

                  <Droplets className="h-10 w-10 text-blue-600" />

                  <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
                    Why the Godavari Matters
                  </h2>

                  <p className="mt-5 leading-8 text-gray-600">
                    The Godavari River is deeply connected with the religious
                    identity of Nashik. Sacred bathing and pilgrimage around
                    the river are central parts of the Nashik Kumbh tradition.
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    Ramkund and other ghats along the river are important
                    pilgrimage locations, particularly during major bathing
                    occasions.
                  </p>

                  <Link
                    href="/blog/significance-of-godavari-river"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
                  >
                    Explore the Godavari guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          MYTHOLOGY + SACRED PLACES
      ========================================================== */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Sacred Heritage
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Nashik's Spiritual &amp; Mythological Significance
            </h2>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">

            {/* RAMA */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">

                <img
                  src="/images/kumbhn.png"
                  alt="Panchavati and Nashik pilgrimage connection with the Ramayana tradition"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-6">
                  <p className="text-2xl font-bold text-white">
                    Panchavati &amp; Ramkund
                  </p>
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-gray-900">
                  Connection with Lord Rama
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  Nashik is closely associated with the Ramayana tradition.
                  Panchavati is traditionally connected with the period of
                  Lord Rama's exile, while Ramkund is regarded as an important
                  sacred location in Nashik.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">

                  <Link
                    href="/blog/panchavati-nashik-kumbh-mela-guide"
                    className="font-bold text-orange-600 hover:text-orange-700"
                  >
                    Panchavati →
                  </Link>

                  <Link
                    href="/blog/ramkund-nashik-guide-kumbh-mela"
                    className="font-bold text-orange-600 hover:text-orange-700"
                  >
                    Ramkund →
                  </Link>

                </div>

              </div>

            </div>

            {/* TRIMBAKESHWAR */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">

                <img
                  src="/images/kumbha.png"
                  alt="Trimbakeshwar pilgrimage region near Nashik Kumbh Mela"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-6">
                  <p className="text-2xl font-bold text-white">
                    Trimbakeshwar
                  </p>
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-gray-900">
                  Trimbakeshwar Jyotirlinga
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  Trimbakeshwar is home to one of the twelve Jyotirlingas and
                  is an important pilgrimage destination in the Nashik region.
                  The area is also associated with the origin of the Godavari
                  River.
                </p>

                <Link
                  href="/blog/trimbakeshwar-temple-guide-kumbh-mela-2027"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
                >
                  Read the Trimbakeshwar guide
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SHAHI SNAN + AKHARAS
      ========================================================== */}
      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-700 to-red-700 shadow-2xl md:grid-cols-2">

            <div className="relative min-h-[400px]">

              <img
                src="/images/shahi-snan.jpg"
                alt="Shahi Snan and sacred bathing tradition at Kumbh Mela"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-7 left-7">
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                  Kumbh Tradition
                </span>

                <h3 className="mt-4 text-3xl font-extrabold text-white">
                  Shahi Snan &amp; Amrit Snan
                </h3>
              </div>

            </div>

            <div className="flex items-center p-8 text-white md:p-10">

              <div>

                <Sparkles className="h-10 w-10 text-orange-200" />

                <h2 className="mt-5 text-3xl font-extrabold">
                  Sacred Bathing &amp; Akharas
                </h2>

                <p className="mt-5 leading-8 text-orange-50">
                  Sacred bathing is one of the defining traditions of Kumbh
                  Mela. Shahi Snan and Amrit Snan are terms associated with
                  important ceremonial bathing traditions of the festival.
                </p>

                <p className="mt-4 leading-8 text-orange-50">
                  Akharas are traditional monastic organizations that play an
                  important role in Kumbh gatherings. Saints and Naga Sadhus
                  are among the most recognizable participants.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <Link
                    href="/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027"
                    className="rounded-full bg-white px-5 py-2.5 font-bold text-orange-700 transition hover:bg-orange-50"
                  >
                    Shahi Snan Guide
                  </Link>

                  <Link
                    href="/blog/akharas-in-kumbh-mela-guide-nashik-kumbh-mela-2027"
                    className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Explore Akharas
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          NASHIK KUMBH 2027
      ========================================================== */}
      <section className="bg-orange-50 py-20 md:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Looking Ahead
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Nashik Kumbh Mela 2027
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600">
              Nashik and Trimbakeshwar are preparing for the upcoming Kumbh
              gathering. Visitors should plan ahead and follow updated
              information about dates, transportation, accommodation and
              pilgrimage facilities.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/blog/nashik-kumbhmela-2027-tarikh"
              className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Calendar className="h-8 w-8 text-orange-600" />
              <h3 className="mt-5 text-xl font-bold">
                Kumbh Dates
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Check important bathing dates and the festival schedule.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-bold text-orange-600">
                View dates
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/travel"
              className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Route className="h-8 w-8 text-orange-600" />
              <h3 className="mt-5 text-xl font-bold">
                Travel Guide
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore railway, bus, air and other travel information.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-bold text-orange-600">
                Plan travel
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/blog/where-to-stay-nashik-kumbh-mela"
              className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Hotel className="h-8 w-8 text-orange-600" />
              <h3 className="mt-5 text-xl font-bold">
                Where to Stay
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore accommodation options and useful stay information.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-bold text-orange-600">
                Find stays
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/blog/dos-and-donts-nashik-kumbh-mela-2027"
              className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <ShieldCheck className="h-8 w-8 text-orange-600" />
              <h3 className="mt-5 text-xl font-bold">
                Pilgrim Guidance
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Read useful advice and important Dos and Don'ts.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-bold text-orange-600">
                Read guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          EXPLORE GUIDES WITH IMAGES
      ========================================================== */}
      <section className="py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Explore Nashik Kumbh Guide
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Helpful Kumbh Mela Guides
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore detailed guides covering Kumbh Mela history, dates,
              sacred places, bathing traditions and Nashik pilgrimage
              information.
            </p>

          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {guideCards.map((guide) => {
              const Icon = guide.icon;

              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="relative h-52 overflow-hidden">

                    <img
                      src={guide.image}
                      alt={guide.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-600 shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-orange-600">
                      {guide.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {guide.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600">
                      Explore guide
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          IMPORTANT INFORMATION
      ========================================================== */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-xl md:p-10">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Info className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
                  Before You Visit
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-gray-900 md:text-3xl">
                  Important Information
                </h2>
              </div>

            </div>

            <div className="mt-8 space-y-4">

              {[
                "Check Kumbh Mela dates and major bathing dates against official announcements and updated information.",
                "Plan transportation, accommodation, safety and daily movement in advance for major pilgrimage days.",
                "Follow instructions and guidelines issued by local authorities during major bathing and pilgrimage occasions.",
                "Peak bathing days can experience very high footfall, so advance planning is especially important.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl bg-orange-50 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-700 via-orange-600 to-red-700 py-20 text-white">

        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <Sparkles className="mx-auto h-10 w-10 text-orange-100" />

          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            Planning for Nashik Kumbh Mela 2027?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-orange-50">
            Explore our Kumbh dates, travel, temples, ghats, pilgrimage and
            practical guides to prepare for your visit to Nashik and
            Trimbakeshwar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/blog/nashik-kumbhmela-2027-tarikh"
              className="rounded-full bg-white px-6 py-3 font-bold text-orange-700 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
            >
              View Kumbh Dates
            </Link>

            <Link
              href="/travel"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/20"
            >
              Explore Travel Guide
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}