import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top Ghats of Nashik for Holy Bath | Nashik Kumbh Guide",
  description:
    "Discover the most sacred ghats of Nashik including Ramkund, Kushavarta Kund and other holy bathing places during Kumbh Mela.",
};

export const dynamic = "force-static";

export default function TopGhatsNashik() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Top Ghats of Nashik for Holy Bath
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Explore the most sacred bathing ghats of Nashik where millions of pilgrims
          take holy dips during the Kumbh Mela.
        </p>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <p className="mb-6">
          Nashik is one of the holiest pilgrimage destinations in India and a
          major location for the sacred 
          <Link href="/blog/what-is-kumbh-mela" className="text-orange-600 font-semibold hover:underline">
            {" "}Kumbh Mela
          </Link>. The city is located on the banks of the holy 
          <Link href="/blog/significance-of-godavari-river" className="text-orange-600 font-semibold hover:underline">
            {" "}Godavari River
          </Link>, which is believed to purify the soul.
        </p>

        <p className="mb-10">
          Several ghats along the river hold immense religious importance.
          Pilgrims take ritual baths here believing it removes sins and brings
          spiritual blessings.
        </p>

        {/* Ramkund */}
        <h2 className="text-2xl font-bold mb-4">1. Ramkund</h2>

        <img
          src="/images/ramkund.jpg"
          alt="Ramkund Nashik"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          Ramkund is the most famous and sacred ghat in Nashik. According to
          Hindu belief, Lord Rama performed rituals here for his father King
          Dasharatha.
        </p>

        <p className="mb-6">
          During the Nashik Kumbh Mela, millions of devotees gather here to
          take the holy dip. You can read a full guide here:
          <Link href="/blog/ramkund-nashik-guide" className="text-orange-600 font-semibold hover:underline">
            {" "}Ramkund Nashik Guide
          </Link>.
        </p>

        <a
          href="https://maps.google.com/?q=Ramkund+Nashik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-semibold hover:underline"
        >
          📍 View Ramkund on Google Maps
        </a>

        {/* Kushavarta */}
        <h2 className="text-2xl font-bold mt-10 mb-4">2. Kushavarta Kund</h2>

        <img
          src="/images/kushavarta.jpg"
          alt="Kushavarta Kund Trimbakeshwar"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          Kushavarta Kund is located near the Trimbakeshwar Temple and is
          considered the symbolic origin of the Godavari River.
        </p>

        <p className="mb-6">
          It is one of the most sacred bathing places during Kumbh Mela and
          holds immense religious importance for pilgrims visiting
          Trimbakeshwar.
        </p>

        <a
          href="https://maps.google.com/?q=Kushavarta+Kund+Trimbakeshwar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-semibold hover:underline"
        >
          📍 View Kushavarta Kund on Google Maps
        </a>

        {/* Godavari Ghats */}
        <h2 className="text-2xl font-bold mt-10 mb-4">3. Godavari River Ghats</h2>

        <img
          src="/images/godavari.jpg"
          alt="Godavari River Ghats Nashik"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          Several ghats are built along the Godavari River in Nashik where
          pilgrims gather for ritual baths, prayers, and religious ceremonies.
        </p>

        <p className="mb-8">
          These ghats become the center of spiritual activity during
          <Link href="/blog/shahi-snan-importance" className="text-orange-600 font-semibold hover:underline">
            {" "}Shahi Snan
          </Link>, when millions of devotees participate in the sacred bath.
        </p>

        {/* Panchavati */}
        <h2 className="text-2xl font-bold mt-10 mb-4">4. Panchavati Ghats</h2>

        <img
          src="/images/panchavati.jpg"
          alt="Panchavati Nashik"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-8">
          Panchavati is one of the most spiritually important areas of Nashik.
          Many ghats in this region are associated with the Ramayana and attract
          thousands of pilgrims daily.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>

        <p className="mb-10">
          The ghats of Nashik are not just architectural structures but sacred
          places deeply connected with Hindu spirituality. Visiting these ghats
          and taking a holy dip during Kumbh Mela is believed to cleanse the
          soul and bring divine blessings.
        </p>

        {/* RELATED ARTICLES */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Related Articles</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>➜ <Link href="/blog/what-is-kumbh-mela">What is Kumbh Mela?</Link></li>
            <li>➜ <Link href="/blog/ramkund-nashik-guide">Ramkund Nashik Guide</Link></li>
            <li>➜ <Link href="/blog/best-places-nashik">Best Places to Visit in Nashik</Link></li>
          </ul>
        </div>

      </article>
    </div>
  );
}