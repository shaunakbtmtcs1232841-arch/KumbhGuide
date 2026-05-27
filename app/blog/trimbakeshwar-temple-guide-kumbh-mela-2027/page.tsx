import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Trimbakeshwar Temple Guide for Nashik Kumbh Mela 2027 | Jyotirlinga, Darshan & Travel Information",

  description:
    "Complete Trimbakeshwar Temple guide for Nashik Kumbh Mela 2027 including Jyotirlinga significance, temple history, darshan timings, Kushavarta Kund, Godavari origin, travel guidance, accommodation, and pilgrimage information.",

  keywords: [
    "Trimbakeshwar Temple",
    "Trimbakeshwar Jyotirlinga",
    "Nashik Kumbh Mela 2027",
    "Trimbakeshwar darshan",
    "Kushavarta Kund",
    "Godavari River origin",
    "Trimbak Nashik",
    "Maharashtra pilgrimage",
    "How to reach Trimbakeshwar",
  ],

  alternates: {
    canonical:
      "https://kumbhnashikguide.com/blog/trimbakeshwar-temple-guide-kumbh-mela-2027",
  },
};

export default function TrimbakeshwarTempleGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <p className="text-orange-600 font-semibold mb-3">
        Temple & Pilgrimage Guide
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Trimbakeshwar Temple Guide for Nashik Kumbh Mela 2027
      </h1>

      <p className="text-gray-700 text-lg leading-8 mb-8">
        Trimbakeshwar Temple is one of the holiest Shiva temples in India and an important spiritual destination during Nashik Kumbh Mela 2027.
      </p>

      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
        <img
          src="/trimbakeshwar-temple.jpg"
          alt="Trimbakeshwar Temple Nashik"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold mb-5">
        Spiritual Importance
      </h2>

      <p className="text-gray-700 leading-8 mb-8">
        Trimbakeshwar is one of the twelve Jyotirlingas dedicated to Lord Shiva and holds immense religious significance in Hindu traditions.
      </p>

      <h2 className="text-3xl font-bold mb-5">
        Related Guides
      </h2>

      <div className="space-y-4 mb-12">

        <div>
          <Link
            href="/blog/ramkund-nashik-guide-kumbh-mela"
            className="text-orange-600 font-semibold hover:underline"
          >
            Ramkund Nashik Guide
          </Link>
        </div>

        <div>
          <Link
            href="/blog/panchavati-nashik-kumbh-mela-guide"
            className="text-orange-600 font-semibold hover:underline"
          >
            Panchavati Nashik Guide
          </Link>
        </div>

      </div>

    </div>
  );
}