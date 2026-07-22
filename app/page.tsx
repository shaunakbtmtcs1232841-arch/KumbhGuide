'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import { ArrowRight, MapPin, Mountain, Waves, Bus, Bell, Calendar, Star, Droplet, Sun, Moon, Flag, Sparkles, Info, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


export default function Home() {

  const [active, setActive] = useState({
  name: "Ramkund",
  img: "/images/ramkund.jpg"
});

const faqData = [
{
question: "What is Kumbh Mela?",
answer:
"Kumbh Mela is one of the largest religious gatherings in the world where millions of devotees, saints, and pilgrims gather to take a sacred bath in holy rivers. It is celebrated at Prayagraj, Haridwar, Ujjain, and Nashik."
},
{
question: "Why is Kumbh Mela celebrated?",
answer:
"Kumbh Mela is celebrated based on the Hindu legend of Samudra Manthan, where drops of Amrit (nectar of immortality) are believed to have fallen at four sacred locations, including Nashik."
},
{
question: "What is the significance of Kumbh Mela?",
answer:
"Kumbh Mela symbolizes spiritual purification, devotion, faith, and the preservation of ancient Hindu traditions. Pilgrims believe that bathing in the sacred river during Kumbh Mela helps cleanse sins and bring spiritual blessings."
},
{
question: "Why is Kumbh Mela important in Hinduism?",
answer:
"Kumbh Mela is considered one of the holiest events in Hinduism because it brings together saints, Akharas, Naga Sadhus, and devotees for sacred rituals, spiritual learning, and holy bathing ceremonies."
},
{
question: "What is the meaning of Kumbh Mela?",
answer:
"The word 'Kumbh' means pot or pitcher, referring to the Amrit Kalash from Hindu mythology, while 'Mela' means gathering or fair. Together, Kumbh Mela means the festival associated with the nectar of immortality."
},
{
question: "When is Nashik Kumbh Mela 2027?",
answer:
"Nashik Kumbh Mela 2027 is expected to be held according to the traditional astrological calculations associated with Jupiter's position. Pilgrims should check the official schedule for confirmed bathing dates and events."
},
{
question: "Which river is associated with Nashik Kumbh Mela?",
answer:
"Nashik Kumbh Mela is associated with the sacred Godavari River, often referred to as the Ganga of the South. Major bathing rituals take place along the river's ghats."
},
{
question: "Where does Nashik Kumbh Mela take place?",
answer:
"The Nashik Kumbh Mela takes place mainly at Ramkund in Nashik city and Kushavarta Kund in Trimbakeshwar, both of which are important pilgrimage sites connected to the Godavari River."
},
{
question: "Why is Nashik important for Kumbh Mela?",
answer:
"Nashik is one of the four sacred locations where Kumbh Mela is celebrated. According to tradition, a drop of Amrit fell here during Samudra Manthan, making it one of Hinduism's most important pilgrimage destinations."
},
{
question: "What is Ramkund and why is it important?",
answer:
"Ramkund is a sacred bathing ghat on the Godavari River in Nashik. It is closely associated with Lord Rama and serves as one of the most important pilgrimage sites during Nashik Kumbh Mela."
},
{
question: "How can I reach Nashik Kumbh Mela?",
answer:
"Pilgrims can reach Nashik by air, rail, and road. Nashik Road Railway Station, Nashik Airport, and major highways provide convenient access to the city during the Kumbh Mela."
},
{
question: "What is Shahi Snan?",
answer:
"Shahi Snan, also known as the Royal Bath, is one of the most significant rituals of Kumbh Mela where Akharas, saints, and Naga Sadhus participate in grand processions before taking a ceremonial holy dip."
},
{
question: "What is Amrit Snan?",
answer:
"Amrit Snan refers to the sacred bathing ritual performed on highly auspicious dates during Kumbh Mela. It is believed to provide immense spiritual benefits and blessings to devotees."
},
{
question: "Who are Naga Sadhus?",
answer:
"Naga Sadhus are ascetic Hindu monks known for their intense spiritual discipline and renunciation. They are among the most recognized participants in Kumbh Mela processions and bathing rituals."
},
{
question: "Which places should pilgrims visit during Nashik Kumbh Mela?",
answer:
"Important places to visit during Nashik Kumbh Mela include Ramkund, Panchavati, Trimbakeshwar Temple, Kushavarta Kund, Godavari Ghats, Naroshankar Temple, Kalaram Temple, and Sita Gufa."
}
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Kumbh Nashik Guide",

  url: "https://kumbhnashikguide.com",

  logo: "https://kumbhnashikguide.com/logo.png",

  email: "kumbhnashikguide@gmail.com",

  description:
    "Kumbh Nashik Guide is an independent informational website dedicated to providing accurate and comprehensive information about Nashik Kumbh Mela 2027, Trimbakeshwar, Ramkund, Panchavati, temples, ghats, travel, accommodation, pilgrimage, and visitor planning.",

  areaServed: "India",

  knowsAbout: [
    "Nashik Kumbh Mela",
    "Trimbakeshwar Temple",
    "Ramkund",
    "Godavari River",
    "Panchavati",
    "Kumbh Mela",
    "Pilgrimage",
    "Religious Tourism",
    "Maharashtra Tourism"
  ],
};


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: "Kumbh Nashik Guide",

  alternateName: "Nashik Kumbh Guide",

  url: "https://kumbhnashikguide.com",

  description:
    "Complete guide to Nashik Kumbh Mela 2027 including temples, ghats, Ramkund, Trimbakeshwar, Panchavati, Godavari River, travel guides, accommodation, pilgrimage planning, rituals, safety tips, and official updates.",

  inLanguage: "en-IN",

  publisher: {
    "@type": "Organization",
    name: "Kumbh Nashik Guide",
  },
};
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
/>
  return (
    <div className="relative bg-gradient-to-b from-orange-50 via-white to-red-50">
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>
      <section className="relative overflow-hidden">
  <div className="relative h-[70vh] lg:h-[85vh] flex items-center justify-center">

    <Image
      src="/images/kumbha.png"
      alt="Devotees gathered at Nashik Kumbh Mela on the banks of the sacred Godavari River"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

      <div className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 mb-6 shadow-lg">
        <Sparkles className="w-5 h-5 text-orange-600 mr-2" />
        <span className="font-semibold text-orange-700">
          Complete Pilgrimage Guide • Updated for Nashik Kumbh Mela 2027
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
        Nashik Kumbh Mela 2027 Guide
      </h1>

      <p className="text-xl md:text-2xl text-orange-100 font-medium mb-4">
        नाशिक कुंभमेळा २०२७
      </p>

      <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-100 leading-9 mb-10">
        Discover everything you need to know about <strong>Nashik Kumbh Mela 2027</strong>,
        including <strong>Ramkund</strong>,
        <strong> Trimbakeshwar Jyotirlinga</strong>,
        <strong> Panchavati</strong>,
        <strong> Godavari River</strong>,
        Shahi Snan dates, Amrit Snan, temples, sacred ghats,
        pilgrimage rituals, accommodation, transportation,
        travel planning, safety tips, and the latest official updates.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        <Button
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
          onClick={() =>
            document
              .getElementById("important-dates")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Calendar className="mr-2 h-5 w-5" />
          Kumbh Dates 2027
        </Button>

        <Link href="/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027">
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white/10 text-white hover:bg-white hover:text-orange-700 px-8 py-6 text-lg"
          >
            Plan Your Visit
          </Button>
        </Link>

      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">
          <p className="text-3xl font-bold text-white">50+</p>
          <p className="text-orange-100 text-sm">
            Detailed Guides
          </p>
        </div>

        <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">
          <p className="text-3xl font-bold text-white">2027</p>
          <p className="text-orange-100 text-sm">
            Latest Updates
          </p>
        </div>

        <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">
          <p className="text-3xl font-bold text-white">
            Ramkund
          </p>
          <p className="text-orange-100 text-sm">
            Sacred Bathing Ghat
          </p>
        </div>

        <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">
          <p className="text-3xl font-bold text-white">
            Trimbakeshwar
          </p>
          <p className="text-orange-100 text-sm">
            Jyotirlinga Temple
          </p>
        </div>

      </div>

      <p className="mt-8 text-sm text-gray-200">
        Information is regularly updated using official announcements from the
        Maharashtra Government and Nashik District Administration.
      </p>

    </div>
  </div>
</section>

      <section id="important-dates" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

<section className="py-10 bg-orange-50 border-y border-orange-200">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-3">
      Popular Nashik Kumbh Mela Guides
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
      Start planning your pilgrimage with our most visited guides covering
      Kumbh Mela dates, Ramkund, Trimbakeshwar Temple, Panchavati,
      travel planning, accommodation, safety, and visitor tips.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <Link href="/blog/nashik-kumbh-mela-2027-dates" className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
        <h3 className="font-bold text-lg mb-2">📅 Nashik Kumbh Mela 2027 Dates</h3>
        <p className="text-gray-600">
          Check important bathing dates, Shahi Snan schedule and festival timeline.
        </p>
      </Link>

      <Link href="/blog/what-is-kumbh-mela" className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
        <h3 className="font-bold text-lg mb-2">🕉️ What is Kumbh Mela?</h3>
        <p className="text-gray-600">
          Learn the history, mythology, significance and traditions of Kumbh Mela.
        </p>
      </Link>

      <Link href="/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027" className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
        <h3 className="font-bold text-lg mb-2">🙏 First-Time Pilgrim Guide</h3>
        <p className="text-gray-600">
          Everything first-time visitors should know before arriving in Nashik.
        </p>
      </Link>

    </div>

  </div>
</section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Star className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold text-white">Essential Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Important Dates 2026-2028
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto">
              Mark your calendar for these sacred occasions
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            {/* Amrit Snan - Most Important */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Amrit Snan - Holy Baths</h3>
              </div>
              <p className="text-center text-orange-100 text-sm sm:text-base">Most auspicious bathing days for spiritual purification</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8">
              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 rounded-full p-3 mr-3">
                      <Sun className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-600 font-semibold">First Amrit Snan</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">August 2, 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Ashadh Somvati Amavasya (Monday)</p>
                  <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Location: Godavari River</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 rounded-full p-3 mr-3">
                      <Moon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-600 font-semibold">Second Amrit Snan</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">August 31, 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Shravan Amavasya</p>
                  <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Location: Godavari River</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 rounded-full p-3 mr-3">
                      <Waves className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-600 font-semibold">Third Amrit Snan</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">September 11, 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Bhadrapada Shuddha Ekadashi</p>
                  <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Location: Panchvati</p>
                </CardContent>
              </Card>

            </div>

            <div className="px-4 sm:px-8 pb-6 sm:pb-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center flex items-center justify-center">
                  <Calendar className="h-6 w-6 mr-2 text-orange-600" />
                  Complete Event Calendar
                </h4>

                <div className="space-y-3 sm:space-y-4">
                  {/* Key Events */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">October 31, 2026</p>
                          <p className="text-xs sm:text-sm text-gray-600">Flag Hoisting - Kumbh Parva Begins</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">July 24, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Akhara Flag Hoisting (Ashadha Krishna Panchami)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">July 29, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Nagar Pradakshina</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <div className="flex items-start">
                        <Star className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">September 5, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Rishi Panchami</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                      <div className="flex items-start">
                        <Sparkles className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">November 10 & 14, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Kartik Shudh Ekadashi & Purnima</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                      <div className="flex items-start">
                        <Moon className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">January 26, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Mouni Amavasya</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                      <div className="flex items-start">
                        <Star className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">February 1, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Vasant Panchami</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                      <div className="flex items-start">
                        <Waves className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">February 8, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Ganga Godavari Mahotsav</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-600">
                      <div className="flex items-start">
                        <Mountain className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">February 27, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Maha Shivratri</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                      <div className="flex items-start">
                        <Waves className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">May 25 - June 2, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Ganga Dussehra Utsav</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-600">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">July 24, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Official Conclusion - Flag Lowering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Nashik Kumbh Mela
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the world&apos;s largest peaceful gathering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
  <Card className="overflow-hidden shadow-xl">
    <div className="relative h-64 sm:h-80 bg-red-200">
      <Image
  src="/images/trimbakeshwar_fixed.jpg"
alt="Trimbakeshwar Jyotirlinga Temple near Nashik, one of the twelve Jyotirlingas of Lord Shiva"
  fill
  className="object-cover"
/>

      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="p-4 text-white">
          <p className="text-lg font-semibold">Trimbakeshwar Jyotirlinga</p>
          <p className="text-sm opacity-90 mt-1">
            One of the 12 Jyotirlingas
          </p>
        </div>
      </div>
    </div>
  </Card>

  <Card className="overflow-hidden shadow-xl">
    <div className="relative h-64 sm:h-80">
      <Image
  src="/images/godavari_fixed.png"
alt="Sacred Godavari River flowing through Nashik during the Kumbh Mela pilgrimage"
  fill
  className="object-cover"
/>
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="p-4 text-white">
          <p className="text-lg font-semibold">Godavari River</p>
          <p className="text-sm opacity-90 mt-1">
            Sacred river of Nashik
          </p>
        </div>
      </div>
    </div>
  </Card>
</div>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Held Every 12 Years</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kumbh Mela at Nashik occurs once every twelve years, with Ardh Kumbh (half Kumbh) held every six years. The timing is determined by astrological positions of Jupiter and the Sun.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Droplet className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Holy Godavari River</h3>
                <p className="text-gray-600 leading-relaxed">
                  The sacred Godavari River, originating from Trimbakeshwar, is considered one of the holiest rivers in India. Bathing in its waters during Kumbh is believed to wash away sins.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Millions of Pilgrims</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Nashik Kumbh Mela attracts millions of devotees from across India and the world. The gathering includes saints, sadhus, and pilgrims seeking spiritual blessings.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 sm:mt-12 shadow-xl">
            <CardContent className="p-6 sm:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 rounded-full p-4 mr-4">
                  <Sparkles className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">The Legend of Amrit</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                According to Hindu mythology, during the churning of the ocean (Samudra Manthan) by gods and demons to obtain the nectar of immortality (amrit), drops of the nectar fell at four places: Prayagraj, Haridwar, Ujjain, and Nashik (Trimbakeshwar). These four places are where Kumbh Mela is celebrated. The sacred gathering offers devotees a chance to cleanse their sins and attain spiritual merit by bathing in the holy waters during auspicious times.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

<section className="py-12 sm:py-16">
  <div className="max-w-6xl mx-auto">


<div className="text-center mb-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
    Understanding Kumbh Mela
  </h2>

  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Learn about the history, significance, spiritual importance, and traditions of Kumbh Mela, one of the world's largest religious gatherings.
  </p>
</div>

<div className="grid md:grid-cols-2 gap-8">

  <Card className="shadow-lg">
    <CardContent className="p-8">
      <h3 className="text-2xl font-bold mb-4">
        What is Kumbh Mela?
      </h3>

      <p className="text-gray-700 leading-8">
        Kumbh Mela is the largest spiritual gathering in the world and one of the most important festivals in Hinduism. Millions of pilgrims, saints, devotees, and spiritual seekers gather at sacred rivers to take a holy bath known as Snan. The festival is celebrated at four locations: Nashik, Prayagraj, Haridwar, and Ujjain. According to Hindu tradition, bathing during Kumbh Mela helps devotees seek spiritual purification and divine blessings.
      </p>
    </CardContent>
  </Card>

  <Card className="shadow-lg">
    <CardContent className="p-8">
      <h3 className="text-2xl font-bold mb-4">
        Why is Kumbh Mela Celebrated?
      </h3>

      <p className="text-gray-700 leading-8">
        Kumbh Mela is celebrated because of the ancient story of Samudra Manthan, the churning of the cosmic ocean by gods and demons. During this event, drops of Amrit, the nectar of immortality, are believed to have fallen at four sacred locations. These places later became the sites of Kumbh Mela. The festival symbolizes faith, spiritual awakening, and the pursuit of liberation.
      </p>
    </CardContent>
  </Card>

  <Card className="shadow-lg">
    <CardContent className="p-8">
      <h3 className="text-2xl font-bold mb-4">
        Importance of Kumbh Mela
      </h3>

      <p className="text-gray-700 leading-8">
        The importance of Kumbh Mela extends beyond ritual bathing. It represents devotion, cultural heritage, spiritual learning, and the preservation of ancient traditions. Saints, Akharas, Naga Sadhus, and pilgrims come together to participate in religious ceremonies, spiritual discussions, and sacred rituals. The event is recognized globally as one of humanity's most remarkable gatherings of faith.
      </p>
    </CardContent>
  </Card>

  <Card className="shadow-lg">
    <CardContent className="p-8">
      <h3 className="text-2xl font-bold mb-4">
        Why Nashik Hosts Kumbh Mela
      </h3>

      <p className="text-gray-700 leading-8">
        Nashik Kumbh Mela is celebrated on the banks of the sacred Godavari River and at Trimbakeshwar, one of the twelve Jyotirlingas of Lord Shiva. According to tradition, a drop of Amrit fell in this region during Samudra Manthan. Important locations such as Ramkund, Panchavati, Kushavarta Kund, and Trimbakeshwar become major pilgrimage centers during the Nashik Kumbh Mela and Shahi Snan ceremonies.
      </p>
    </CardContent>
  </Card>

</div>


  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Must Visit Places During Kumbh
    </h2>

    {/* tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {[
        { name: "Ramkund", img: "/images/ramkund.jpg" },
        { name: "Tapovan", img: "/images/tapovan.jpg" },
        { name: "Panchavati", img: "/images/panchavati.jpg" },
        { name: "Someshwar Temple", img: "/images/someshwar.jpg" },
        { name: "Godavari River", img: "/images/godavari.jpg" },
        { name: "Gangapur Dam", img: "/images/gangapur.jpg" },
        { name: "Sita Gufa", img: "/images/sitagufa.jpg" },
        { name: "Kalaram Temple", img: "/images/kalaram.jpg" },
        { name: "Naroshankar Temple", img: "/images/naroshankar.jpg" },
        { name: "Trimbakeshwar Jyotirlinga", img: "/images/trimbak.jpg" },
        { name: "Pandavleni Caves", img: "/images/pandavleni.jpg" }
      ].map((place, i) => (
        <button
          key={i}
          onClick={() => setActive(place)}
          className={`px-5 py-2 rounded-full border font-medium transition 
          ${active.name === place.name 
            ? "bg-orange-500 text-white" 
            : "bg-white text-gray-700 hover:bg-orange-100"}`}
        >
           {place.name}
        </button>
      ))}
    </div>

    <div className="rounded-2xl overflow-hidden shadow-xl border">
      <img
        src={active.img}
        alt={active.name}
        className="w-full h-[450px] object-cover transition-all duration-500"
      />
    </div>

  </div>
</section>


<section className="py-16 sm:py-20 bg-gradient-to-b from-orange-50 to-white">
  <div className="max-w-7xl mx-auto px-4">

<div className="text-center mb-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
    Explore Nashik Kumbh Mela
  </h2>

  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Discover the traditions, sacred rituals, pilgrimage sites, and spiritual experiences that make Nashik Kumbh Mela one of the most important religious gatherings in the world.
  </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  <Link href="/blog/shahi-snan-amrit-snan-guide-nashik-kumbh-mela-2027">
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Shahi Snan & Amrit Snan Guide
        </h3>
        <p className="text-gray-600">
          Learn about the most sacred bathing rituals of Kumbh Mela, their significance, traditions, and importance for pilgrims.
        </p>
      </CardContent>
    </Card>
  </Link>

  <Link href="/blog/akharas-in-kumbh-mela-guide-nashik-kumbh-mela-2027">
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Akharas & Naga Sadhus
        </h3>
        <p className="text-gray-600">
          Explore the history, traditions, and role of Akharas and Naga Sadhus during Nashik Kumbh Mela.
        </p>
      </CardContent>
    </Card>
  </Link>

  <Link href="/blog/ramkund-nashik-guide-kumbh-mela">
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Ramkund Guide
        </h3>
        <p className="text-gray-600">
          Discover the spiritual significance of Ramkund, the most important bathing ghat during Nashik Kumbh Mela.
        </p>
      </CardContent>
    </Card>
  </Link>

  <Link href="/blog/panchavati-nashik-kumbh-mela-guide">
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Panchavati Guide
        </h3>
        <p className="text-gray-600">
          Explore the sacred land associated with Lord Rama and one of Nashik's most important pilgrimage destinations.
        </p>
      </CardContent>
    </Card>
  </Link>

  <Link href="/blog/trimbakeshwar-temple-guide-kumbh-mela-2027">
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Trimbakeshwar Guide
        </h3>
        <p className="text-gray-600">
          Learn about one of the twelve Jyotirlingas and its deep connection with Nashik Kumbh Mela.
        </p>
      </CardContent>
    </Card>
  </Link>

  <Link href="/ghats">
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">
          Godavari River & Ghats
        </h3>
        <p className="text-gray-600">
          Explore the sacred Godavari River, Ramkund, Kushavarta Kund, and other important ghats of Nashik.
        </p>
      </CardContent>
    </Card>
  </Link>

</div>


  </div>
</section>



      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Plan Your Sacred Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for a blessed pilgrimage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link href="/temples">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                        src="/images/kalramtemp.jpg"
                        alt="Sacred Temples of Nashik"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Sacred Temples
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Visit ancient temples including Trimbakeshwar Jyotirlinga, Kalaram Temple, and other significant shrines.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      Explore Temples
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ghats">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/ramkund.jpg"
alt="Ramkund Ghat in Nashik where pilgrims perform holy bathing rituals during Kumbh Mela"                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Holy Ghats
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Take sacred dips at Ramkund, Kushavarta Kund, and other holy bathing ghats along the Godavari River.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      View Ghats
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/travel">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/travel.jpg"
alt="Pilgrims travelling to Nashik Kumbh Mela by road, railway and air"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Travel Guide
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Information about railway station, bus stand, airport, and getting around Nashik during Kumbh Mela.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      Travel Info
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/snan.jpg"
                      alt="About Nashik Kumbh"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      About Kumbh
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Learn about the history, significance, and traditions of the Nashik-Trimbakeshwar Kumbh Mela.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/updates">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/update.jpg"
alt="Latest official updates and announcements for Nashik Kumbh Mela 2027"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Latest Updates
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Stay informed with official announcements, dates, and important information about Kumbh Mela.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      View Updates
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-300 backdrop-blur-md bg-white/70 border border-white/40 shadow-xl h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center h-full">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Info className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                  Important Notice
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                  All information on this website is sourced from official announcements. Please verify dates and arrangements with local authorities before planning your visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About This Guide
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
                This website is created and maintained by a local resident of Nashik to help pilgrims and visitors navigate the sacred Nashik-Trimbakeshwar Kumbh Mela. Designed specifically for mobile access, all information is regularly updated based on official sources from the Maharashtra Government and Nashik District Administration.
              </p>
              <div className="inline-flex items-center bg-orange-100 px-6 py-3 rounded-full">
                <span className="text-lg font-semibold text-orange-700">
                  Jai Shri Ram • Har Har Mahadev
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

<section className="py-16 bg-gradient-to-br from-orange-50 to-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-10">
      Quick Guide for Kumbh Pilgrims
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-orange-600">
          🛕 Must Visit Temples
        </h3>
        <p className="text-gray-700 mb-3">
          Explore sacred temples like Trimbakeshwar Jyotirlinga, Kalaram Temple and many more spiritual places.
        </p>
        <Link href="/temples" className="text-orange-600 font-semibold underline">
          View all temples →
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-orange-600">
          🌊 Holy Ghats & Snan
        </h3>
        <p className="text-gray-700 mb-3">
          Know best ghats for holy bath including Ramkund and Godavari river banks.
        </p>
        <Link href="/ghats" className="text-orange-600 font-semibold underline">
          Explore ghats →
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-orange-600">
          🚌 Travel Guide
        </h3>
        <p className="text-gray-700 mb-3">
          Find bus, railway, airport and accommodation details for pilgrims.
        </p>
        <Link href="/travel" className="text-orange-600 font-semibold underline">
          Travel info →
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-orange-600">
          📢 Latest Kumbh Updates
        </h3>
        <p className="text-gray-700 mb-3">
          Get latest government announcements and Kumbh news.
        </p>
        <Link href="/updates" className="text-orange-600 font-semibold underline">
          Check updates →
        </Link>
      </div>

    </div>
  </div>
</section>


<section className="py-16 bg-gradient-to-b from-orange-50 to-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Latest Kumbh Updates & Guides
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* ARTICLE 1 */}
      <Link href="/blog/what-is-kumbh-mela">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            What is Kumbh Mela and Why is it Celebrated?
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            Know the spiritual meaning, history and importance of the world&apos;s largest religious gathering.
          </p>
          <span className="text-orange-600 font-semibold">
            Read Full Article →
          </span>
        </div>
      </Link>

      <Link href="/blog/nashik-kumbh-mela-2027-dates">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Nashik Kumbh Mela 2027 Dates & Full Schedule
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            Complete list of Amrit Snan dates, major bathing days and full Kumbh Mela 2026-2028 schedule.
          </p>
          <span className="text-orange-600 font-semibold">
            View All Dates →
          </span>
        </div>
      </Link>

<Link href="/blog/trimbakeshwar-temple-guide-kumbh-mela-2027">

  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">

    <h3 className="text-xl font-bold text-gray-900 mb-3">
      Trimbakeshwar Temple Guide for Nashik Kumbh Mela 2027
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      Explore Trimbakeshwar Jyotirlinga, Kushavarta Kund, temple rituals, darshan timings, travel guidance, and the spiritual importance of Trimbakeshwar during Nashik Kumbh Mela 2027.
    </p>

    <span className="text-orange-600 font-semibold">
      Read Full Guide →
    </span>

  </div>

</Link>

<Link href="/updates/clean-godavari-project-kumbh-2027">

  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">

  

    <h3 className="text-xl font-bold text-gray-900 mb-2">
      ₹1,600 Crore Clean Godavari Project Intensified Ahead of Nashik Kumbh Mela 2027
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      Nashik Municipal Corporation is accelerating sewage treatment, sanitation systems, pumping stations, and river cleanup projects ahead of Kumbh Mela 2027.
    </p>

    <span className="text-orange-600 font-semibold">
      Read Full Update →
    </span>

  </div>

</Link>

      <Link href="/blog/nashik-kumbh-mela-railway-travel-guide">
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">
    
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Nashik Kumbh Mela 2027 Railway Travel Guide
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      Complete railway travel guide including train routes, Nashik Road station information, booking tips, and transportation details for pilgrims.
    </p>

    <span className="text-orange-600 font-semibold">
      Read Railway Guide →
    </span>

  </div>
</Link>

<Link href="/blog/samudra-manthan-origin-kumbh">
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        The origin story of Kumbh Mela
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        Learn more about the spiritual background of the festival in our guide on{" "}
      </p>
      <span className="text-orange-600 font-semibold">
        Read History →
      </span>
    </div>
  </Link>
  
  <Link href="/blog/ramkund-nashik-guide-kumbh-mela">

  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">

    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Ramkund Nashik Guide for Kumbh Mela 2027
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      Explore the spiritual significance of Ramkund, important bathing rituals, nearby temples, travel tips, and pilgrimage information for Nashik Kumbh Mela 2027.
    </p>

    <span className="text-orange-600 font-semibold">
      Read Guide →
    </span>

  </div>

</Link>



<Link href="/blog/nashik-kumbh-mela-bus-travel-guide">
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">
    
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      Planning to travel to Nashik Kumbh Mela 2027 by road or bus?
    </h3>

    <p className="text-gray-600 text-sm mb-3">
     explains highway routes, bus transportation, official booking platforms, nearby city connectivity, and useful travel tips for pilgrims and visitors.
    </p>
    <span className="text-orange-600 font-semibold">
      Read Guide →
    </span>

  </div>
</Link>

  <Link href="/blog/nashik-kumbh-mela-2027-development-plan">
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border hover:-translate-y-1 cursor-pointer">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        ₹25,000 Crore Development Plan for Nashik Kumbh Mela 2027
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        Full breakdown of government budget, roads, railway, airport upgrades and infrastructure projects.
      </p>
      <span className="text-orange-600 font-semibold">
        Read Latest Update →
      </span>
    </div>
  </Link>
  

   


    </div>
<section className="max-w-6xl mx-auto px-4 py-16">

  <div className="bg-orange-50 border rounded-3xl p-8 md:p-12">

    <div className="max-w-3xl">

      <p className="text-orange-600 font-semibold mb-3">
        Trusted Pilgrimage Information
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why Trust Nashik Kumbh Guide?
      </h2>

      <p className="text-gray-700 leading-8 mb-8">
        Nashik Kumbh Guide is an independent informational platform created to help pilgrims, devotees, and travelers visiting Nashik Kumbh Mela 2027. Our goal is to provide useful pilgrimage guidance, temple information, travel resources, transportation updates, and spiritually relevant content based on publicly available references, official updates, and regional travel information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="bg-white rounded-2xl p-5 border">
          <h3 className="font-bold text-lg mb-2">
            Pilgrimage-Focused Information
          </h3>

          <p className="text-gray-600 leading-7 text-sm">
            Detailed guides related to temples, ghats, rituals, travel routes, accommodation, and Kumbh Mela preparations.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border">
          <h3 className="font-bold text-lg mb-2">
            Regularly Updated Content
          </h3>

          <p className="text-gray-600 leading-7 text-sm">
            Ongoing updates related to Nashik Kumbh Mela infrastructure, transportation, crowd management, and pilgrimage planning.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border">
          <h3 className="font-bold text-lg mb-2">
            Spiritual & Travel Guidance
          </h3>

          <p className="text-gray-600 leading-7 text-sm">
            Helpful information for devotees visiting Trimbakeshwar, Ramkund, Panchavati, and other important spiritual destinations.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border">
          <h3 className="font-bold text-lg mb-2">
            User-Friendly Experience
          </h3>

          <p className="text-gray-600 leading-7 text-sm">
            Structured articles, internal linking, mobile-friendly design, and accessible pilgrimage resources for visitors.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
  </div>
</section>


    </div>
  );
}
