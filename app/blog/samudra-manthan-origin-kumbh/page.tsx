import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Samudra Manthan and Origin of Kumbh Mela | Mythological Story",
  description:
    "Learn the mythological story of Samudra Manthan and how it led to the origin of the Kumbh Mela at Nashik, Haridwar, Prayagraj and Ujjain.",
};

export const dynamic = "force-static";

export default function SamudraManthan() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Samudra Manthan and the Origin of Kumbh Mela
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          The ancient mythological story behind the world&apos;s largest spiritual gathering.
        </p>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <div className="relative w-full h-[260px] md:h-[360px] mb-6">
          <Image
            src="/images/samudramanthan.jpg"
            alt="Samudra Manthan mythological churning of ocean"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>

        <p className="mb-6">
          The story of <strong>Samudra Manthan</strong>, or the churning of the cosmic ocean,
          is one of the most important mythological events described in Hindu scriptures.
          This divine event is believed to be the origin of the
          <Link
            href="/blog/what-is-kumbh-mela"
            className="text-orange-600 font-semibold hover:underline"
          >
            {" "}Kumbh Mela
          </Link>, the largest religious gathering in the world.
        </p>

        <p className="mb-8">
          According to Hindu mythology, the gods (Devas) and demons (Asuras)
          worked together to churn the ocean of milk in search of the nectar
          of immortality known as <strong>Amrit</strong>.
        </p>

        {/* Why Samudra Manthan Happened */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why Did Samudra Manthan Happen?
        </h2>

        <p className="mb-6">
          The Devas had lost their strength and power due to a curse from
          Sage Durvasa. To regain their power, Lord Vishnu advised them
          to churn the cosmic ocean and obtain the Amrit,
          which would grant immortality.
        </p>

        <p className="mb-8">
          Since the task was extremely difficult, the Devas formed an
          alliance with the Asuras to perform the churning.
        </p>

        {/* The Churning Process */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How the Ocean Was Churned
        </h2>

        <p className="mb-6">
          Mount Mandara was used as the churning rod and the serpent
          Vasuki was used as the rope. The gods and demons pulled the
          serpent from both sides to churn the ocean.
        </p>

        <p className="mb-8">
          During this process, many divine objects and beings emerged,
          including the goddess Lakshmi, the moon, celestial jewels,
          and the deadly poison Halahala which was later consumed
          by Lord Shiva.
        </p>

        {/* Appearance of Amrit */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Appearance of the Amrit Kumbh
        </h2>

        <p className="mb-6">
          Eventually, the divine physician Dhanvantari emerged from
          the ocean carrying a pot (Kumbh) filled with the nectar of
          immortality.
        </p>

        <p className="mb-8">
          A fierce struggle broke out between the Devas and Asuras to
          possess the Amrit.
        </p>

        {/* How Kumbh Mela Started */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How This Led to the Kumbh Mela
        </h2>

        <p className="mb-6">
          According to mythology, during the struggle for the nectar,
          drops of Amrit fell at four places on Earth:
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8">
          <li>Prayagraj (Allahabad)</li>
          <li>Haridwar</li>
          <li>Ujjain</li>
          <li>Nashik</li>
        </ul>

        <p className="mb-8">
          These four places became the sacred sites where the
          <strong> Kumbh Mela </strong> is celebrated.
          In Nashik, the sacred bathing rituals take place in the
          <Link
            href="/blog/significance-of-godavari-river"
            className="text-orange-600 font-semibold hover:underline"
          >
            {" "}Godavari River
          </Link>.
        </p>

        {/* Spiritual Significance */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Spiritual Significance Today
        </h2>

        <p className="mb-6">
          The Kumbh Mela symbolizes the eternal quest for purity,
          knowledge, and spiritual liberation. Millions of pilgrims
          gather to take a holy dip believing it cleanses sins
          and grants divine blessings.
        </p>

        <p className="mb-8">
          During the
          <Link
            href="/blog/shahi-snan-importance"
            className="text-orange-600 font-semibold hover:underline"
          >
            {" "}Shahi Snan
          </Link>, saints, sadhus and devotees take part in the
          sacred bathing rituals.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          Conclusion
        </h2>

        <p className="mb-10">
          The story of Samudra Manthan beautifully explains the
          mythological origin of the Kumbh Mela. It reminds devotees
          that spiritual effort and devotion lead to divine rewards,
          just like the churning of the ocean produced the nectar
          of immortality.
        </p>

        {/* RELATED */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Related Articles</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>➜ <Link href="/blog/what-is-kumbh-mela">What is Kumbh Mela?</Link></li>
            <li>➜ <Link href="/blog/shahi-snan-importance">Importance of Shahi Snan</Link></li>
            <li>➜ <Link href="/blog/significance-of-godavari-river">Godavari River Significance</Link></li>
          </ul>
        </div>

      </article>
    </div>
  );
}