import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Significance of Godavari River in Hinduism | Sacred River of Nashik Kumbh",
  description:
    "Discover the spiritual significance of the Godavari River in Hinduism, its connection with Nashik Kumbh Mela, Ramkund, and Trimbakeshwar Jyotirlinga.",
};

export const dynamic = "force-static";

export default function GodavariSignificance() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Significance of Godavari River in Hinduism
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Understanding why the Godavari is called the “Ganga of the South” and its sacred connection to Nashik Kumbh Mela.
        </p>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <img 
          src="/images/godavari.jpg"
          alt="Godavari River Nashik"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          The Godavari River holds immense spiritual importance in Hinduism.
          Flowing across several Indian states, it is the second longest river in India
          and is often called the <strong>“Ganga of the South.”</strong> For millions of devotees,
          the Godavari is not just a river — it is a sacred lifeline of faith, purification,
          and divine blessings.
        </p>

        <p className="mb-8">
          In Nashik, the river becomes the center of spiritual energy during the 
          <Link href="/blog/what-is-kumbh-mela" className="text-orange-600 font-semibold hover:underline"> Kumbh Mela</Link>.
          Pilgrims gather at Ramkund to take the holy snan (ritual bath),
          believing it cleanses sins and grants spiritual liberation.
        </p>

        {/* Origin */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Origin of the Godavari River
        </h2>

        <img 
          src="/images/brahmagiri.jpg"
          alt="Brahmagiri Hills Trimbakeshwar"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          The Godavari originates from the sacred Brahmagiri Hills near 
          Trimbakeshwar in Maharashtra. According to Hindu mythology,
          the river was brought to Earth through the prayers of Sage Gautama.
          It is believed that Lord Shiva released the sacred waters to purify the land.
        </p>

        <p className="mb-8">
          The presence of the <Link href="/blog/trimbakeshwar-temple" className="text-orange-600 font-semibold hover:underline">
          Trimbakeshwar Jyotirlinga</Link> near its origin further enhances
          its spiritual value.
        </p>

        {/* Religious Importance */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Religious Importance in Hinduism
        </h2>

        <img 
          src="/images/ramkund.jpg"
          alt="Ramkund Nashik Kumbh Mela"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          The Godavari River is considered highly sacred for performing rituals,
          pind daan (ancestral offerings), and spiritual ceremonies.
          Ramkund in Nashik is one of the most important ghats where devotees
          perform last rites for their ancestors.
        </p>

        <p className="mb-8">
          During the <Link href="/blog/nashik-kumbh-mela-2027-dates" className="text-orange-600 font-semibold hover:underline">
          Nashik Kumbh Mela</Link>, millions of devotees take a holy dip in
          the Godavari, believing it washes away past sins and brings divine blessings.
        </p>

        {/* Why Called Ganga of the South */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why is Godavari Called the “Ganga of the South”?
        </h2>

        <p className="mb-6">
          The Godavari is revered in the southern parts of India just like
          the River Ganga is worshipped in the north. Scriptures describe
          that bathing in the Godavari during auspicious periods carries
          spiritual merit equivalent to bathing in the Ganga.
        </p>

        <p className="mb-8">
          This is why Nashik holds one of the four Kumbh Melas in India,
          making the river a central element of this grand spiritual event.
        </p>

        {/* Spiritual Beliefs */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Spiritual Beliefs Associated with Godavari
        </h2>

        <ul className="list-disc pl-6 space-y-3 mb-8">
          <li>Bathing in the river removes sins and negative karma.</li>
          <li>Performing rituals at Ramkund grants peace to ancestors.</li>
          <li>Holy dip during Kumbh multiplies spiritual benefits.</li>
          <li>The river is considered a divine mother who blesses devotees.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          Conclusion
        </h2>

        <p className="mb-10">
          The Godavari River is far more than a geographical feature —
          it is a sacred symbol of purification, devotion, and divine grace.
          Its connection with Trimbakeshwar and Nashik Kumbh Mela
          makes it one of the holiest rivers in Hinduism.
        </p>

        {/* INTERNAL LINKS */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Related Articles</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>➜ <Link href="/blog/what-is-kumbh-mela">What is Kumbh Mela?</Link></li>
            <li>➜ <Link href="/blog/best-places-nashik">Best Places to Visit During Kumbh</Link></li>
            <li>➜ <Link href="/blog/nashik-kumbh-mela-2027-dates">Nashik Kumbh 2027 Dates</Link></li>
          </ul>
        </div>

      </article>
    </div>
  );
}