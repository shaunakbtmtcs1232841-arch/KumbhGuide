import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Best Places to Visit in Nashik During Kumbh Mela | Complete Guide",
  description:
    "Discover the best places to visit in Nashik during Kumbh Mela including Panchavati, Ramkund, Trimbakeshwar Temple and more.",
};

export const dynamic = "force-static";

export default function BestPlacesNashik() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          10 Best Places to Visit in Nashik During Kumbh Mela
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Explore sacred temples, spiritual sites, and peaceful places to make your Kumbh journey divine.
        </p>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <p className="mb-6">
          Nashik is not just a city — it is one of India's most sacred pilgrimage destinations
          and proudly hosts the Simhastha Kumbh Mela. Every devotee visiting Nashik during Kumbh
          seeks more than just the holy snan; they look for temples, spiritual experiences,
          history, and peace.
        </p>

        {/* 1 PANCHAVATI */}
        <h2 className="text-2xl font-bold mb-4">1. Panchavati — Spiritual Heart of Nashik</h2>

        <img src="/images/panchavati.jpg" alt="Ramkund Nashik Kumbh Mela" className="rounded-xl mb-4 shadow-md"/>

        <p className="mb-6">
          Panchavati is the most sacred region of Nashik and is deeply connected with the Ramayana.
          It is believed Lord Rama and Mata Sita stayed here during exile.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Kalaram Temple</h3>
        <img src="/images/kalaram.jpg" alt="Kalaram Temple Nashik" className="rounded-xl mb-3 shadow"/>
        <a href="https://maps.google.com/?q=Kalaram+Temple+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        <h3 className="text-xl font-semibold mt-8 mb-2">Sita Gufa</h3>
        <img src="/images/sitagufa.jpg" alt="Sita Gufa Nashik" className="rounded-xl mb-3 shadow"/>
        <a href="https://maps.google.com/?q=Sita+Gufa+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        <h3 className="text-xl font-semibold mt-8 mb-2">Kapaleshwar Temple</h3>
        <img src="/images/kapaleshwar.jpg" alt="Kapaleshwar Temple Nashik" className="rounded-xl mb-3 shadow"/>
        <a href="https://maps.google.com/?q=Kapaleshwar+Temple+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* 2 PANDAVLENI */}
        <h2 className="text-2xl font-bold mt-12 mb-4">2. Pandavleni Caves</h2>
        <img src="/images/pandavleni.jpg" alt="Pandavleni caves Nashik" className="rounded-xl mb-4 shadow-md"/>
        <a href="https://maps.google.com/?q=Pandavleni+Caves+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* 3 CHAMBARLENI */}
        <h2 className="text-2xl font-bold mt-12 mb-4">3. Chambarleni Caves</h2>
        <img src="/images/chambarleni.jpg" alt="Chambarleni Nashik" className="rounded-xl mb-4 shadow-md"/>
        <a href="https://maps.google.com/?q=Chambarleni+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* 4 TRIMBAK */}
        <h2 className="text-2xl font-bold mt-12 mb-4">4. Trimbakeshwar Temple</h2>
        <img src="/images/trimbak.jpg" alt="Trimbakeshwar Temple" className="rounded-xl mb-4 shadow-md"/>
        <a href="https://maps.google.com/?q=Trimbakeshwar+Temple" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* 5 GANGAPUR */}
        <h2 className="text-2xl font-bold mt-12 mb-4">5. Gangapur Dam</h2>
        <img src="/images/gangapur.jpg" alt="Gangapur dam Nashik" className="rounded-xl mb-4 shadow-md"/>
        <a href="https://maps.google.com/?q=Gangapur+Dam+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* 6 BRAHMAGIRI */}
        <h2 className="text-2xl font-bold mt-12 mb-4">6. Brahmagiri Hills</h2>
        <img src="/images/brahmagiri.jpg" alt="Brahmagiri Nashik" className="rounded-xl mb-4 shadow-md"/>
        <a href="https://maps.google.com/?q=Brahmagiri+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* 7 ANJANERI */}
        <h2 className="text-2xl font-bold mt-12 mb-4">7. Anjaneri</h2>
        <img src="/images/anjanerihills.jpg" alt="Anjaneri Nashik" className="rounded-xl mb-4 shadow-md"/>
        <a href="https://maps.google.com/?q=Anjaneri+Nashik" target="_blank"
          className="text-orange-600 font-semibold hover:underline">
          📍 View on Google Maps
        </a>

        {/* CONCLUSION */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
        <p className="mb-10">
          Visiting these sacred locations during Kumbh Mela will make your Nashik journey
          spiritually complete and unforgettable.
        </p>

        {/* INTERNAL LINKS */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Related Articles</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>➜ <Link href="/blog/what-is-kumbh-mela">What is Kumbh Mela?</Link></li>
            <li>➜ <Link href="/blog/nashik-kumbh-mela-2027-dates">Nashik Kumbh Dates</Link></li>
          </ul>
        </div>

      </article>
    </div>
  );
}