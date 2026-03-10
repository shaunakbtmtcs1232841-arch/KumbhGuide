import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Samudra Manthan Story – Origin of Kumbh Mela Explained",
  description:
    "Learn the mythological story of Samudra Manthan and how it led to the origin of the Kumbh Mela celebrated in Nashik, Prayagraj, Haridwar and Ujjain.",
};

export const dynamic = "force-static";

export default function SamudraManthanOrigin() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Story of Samudra Manthan – Origin of Kumbh Mela
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Understanding the mythological story behind the world&apos;s largest spiritual gathering.
        </p>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <img
          src="/images/samudramanthan.jpg"
          alt="Samudra Manthan Story"
          className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-6 shadow-md"
        />

        <p className="mb-6">
          The Kumbh Mela is one of the largest spiritual gatherings in the world.
          Its origin is deeply connected with the ancient Hindu mythological story
          known as the <strong>Samudra Manthan</strong>, or the churning of the cosmic ocean.
        </p>

        <p className="mb-8">
          This legendary event describes how gods (Devas) and demons (Asuras)
          worked together to obtain the nectar of immortality known as
          <strong> Amrit</strong>.
        </p>

        {/* Why Samudra Manthan Happened */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why Did Samudra Manthan Happen?
        </h2>

        <p className="mb-6">
          According to Hindu scriptures, the Devas once lost their strength
          after being cursed by Sage Durvasa. Without their divine powers,
          they were defeated by the Asuras.
        </p>

        <p className="mb-8">
          To regain their power, Lord Vishnu advised them to churn the
          cosmic ocean (Kshira Sagara) to obtain the nectar of immortality.
        </p>

        {/* How Ocean Was Churned */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How the Ocean Was Churned
        </h2>

        <p className="mb-6">
          The gods and demons used the great mountain <strong>Mandara</strong>
          as the churning rod and the divine serpent <strong>Vasuki</strong>
          as the rope.
        </p>

        <p className="mb-8">
          Lord Vishnu took the form of a giant turtle called
          <strong> Kurma Avatar</strong> to support the mountain so it
          would not sink into the ocean.
        </p>

        {/* Emergence of Amrit */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Emergence of the Nectar of Immortality
        </h2>

        <p className="mb-6">
          During the churning of the ocean, many divine treasures appeared,
          including Goddess Lakshmi, the celestial horse Uchchaihshravas,
          and the divine physician Dhanvantari carrying the pot of Amrit.
        </p>

        <p className="mb-8">
          The moment the pot of nectar appeared, a conflict began between
          the Devas and Asuras over who would obtain immortality.
        </p>

        {/* Birth of Kumbh */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How This Led to Kumbh Mela
        </h2>

        <p className="mb-6">
          According to mythology, while carrying the pot of nectar,
          drops of Amrit fell at four locations on Earth.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8">
          <li>Prayagraj (Allahabad)</li>
          <li>Haridwar</li>
          <li>Ujjain</li>
          <li>Nashik (Trimbakeshwar)</li>
        </ul>

        <p className="mb-8">
          These four sacred places are where the Kumbh Mela is celebrated today.
          In Nashik, the holy dip takes place in the sacred
          <Link
            href="/blog/significance-of-godavari-river"
            className="text-orange-600 font-semibold hover:underline"
          >
            {" "}Godavari River
          </Link>.
        </p>

        {/* Kumbh Today */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Kumbh Mela Today
        </h2>

        <p className="mb-6">
          Today, millions of pilgrims gather at these sacred places
          to take a holy dip during the auspicious dates of the
          <Link
            href="/blog/nashik-kumbh-mela-2027-dates"
            className="text-orange-600 font-semibold hover:underline"
          >
            {" "}Kumbh Mela
          </Link>.
        </p>

        <p className="mb-8">
          The ritual bath is believed to purify the soul and free
          devotees from the cycle of birth and death.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          Conclusion
        </h2>

        <p className="mb-10">
          The story of Samudra Manthan beautifully explains the origin
          of the Kumbh Mela. It represents the eternal struggle between
          good and evil and highlights humanity&apos;s spiritual quest
          for immortality and divine truth.
        </p>

        {/* RELATED ARTICLES */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Related Articles</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>➜ <Link href="/blog/what-is-kumbh-mela">What is Kumbh Mela?</Link></li>
            <li>➜ <Link href="/blog/shahi-snan-importance">Shahi Snan Importance</Link></li>
            <li>➜ <Link href="/blog/best-places-nashik">Best Places to Visit in Nashik</Link></li>
          </ul>
        </div>

      </article>
    </div>
  );
}