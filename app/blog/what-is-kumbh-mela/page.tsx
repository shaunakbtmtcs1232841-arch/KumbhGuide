import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
"What is Kumbh Mela? History, Significance & Why It Is Celebrated | Nashik Kumbh Guide",
  description:
"Learn what Kumbh Mela is, why it is celebrated, its history, spiritual significance, mythological origin, Shahi Snan, Amrit Snan, and the importance of Nashik Kumbh Mela 2027.",
keywords:  
"What is Kumbh Mela, Kumbh Mela, Kumbh Mela meaning, Kumbh Mela history, why Kumbh Mela is celebrated, importance of Kumbh Mela, significance of Kumbh Mela, Nashik Kumbh Mela, Nashik Kumbh Mela 2027, Kumbh Mela guide, Kumbh festival, Kumbh Mela information, Godavari River Kumbh Mela, Shahi Snan, Amrit Snan, Akharas, Naga Sadhus, Kumbh pilgrimage, Hindu pilgrimage festival, Kumbh Mela in Nashik",
};

export default function ArticlePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What is Kumbh Mela and Why is it Celebrated?
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Understanding the spiritual, cultural, and mythological importance of
          the world’s largest religious gathering.
        </p>
      </section>

{/* FEATURED IMAGE */}
<div className="max-w-5xl mx-auto px-6 py-10">
  <Image
    src="/images/godavari_fixed.png"
    alt="Pilgrims taking a holy dip in the Godavari River during Nashik Kumbh Mela"
    width={1200}
    height={675}
    className="rounded-xl shadow-lg w-full h-auto"
    priority
  />

  <p className="text-center text-sm text-gray-500 mt-3">
    Pilgrims gather on the banks of the Godavari River during Nashik Kumbh Mela for sacred bathing rituals.
  </p>
</div>
      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <h2 className="text-2xl font-bold mb-4">What is Kumbh Mela?</h2>
        <p className="mb-6">
          Kumbh Mela is one of the largest and most sacred religious gatherings
          in the world. It is a Hindu pilgrimage where millions of devotees
          gather to take a holy dip in sacred rivers to cleanse their sins and
          attain spiritual liberation. This grand festival is celebrated at four
          major locations in India — Prayagraj, Haridwar, Ujjain, and
          Nashik-Trimbakeshwar.
        </p>

        <p className="mb-6">
          The Nashik Kumbh Mela holds special importance as it takes place on the
          banks of the holy Godavari River. Devotees believe that bathing in this
          river during Kumbh brings spiritual purification and divine blessings.
        </p>

        <h2 className="text-2xl font-bold mb-4">Mythological Origin of Kumbh Mela</h2>
        <p className="mb-6">
          The origin of Kumbh Mela comes from the ancient Hindu story of
          <strong> Samudra Manthan </strong> (churning of the ocean). According
          to mythology, gods and demons churned the ocean to obtain the nectar of
          immortality known as Amrit.
        </p>

        <p className="mb-6">
          When the pot (Kumbh) of nectar appeared, a battle took place between
          gods and demons. During this struggle, drops of nectar fell at four
          sacred places on Earth — Prayagraj, Haridwar, Ujjain, and Nashik.
          These places later became the sites of Kumbh Mela.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why is Kumbh Mela Celebrated?</h2>
        <p className="mb-6">
          Kumbh Mela is celebrated to mark this divine event and to provide an
          opportunity for devotees to purify themselves spiritually. It
          represents faith, devotion, and the victory of good over evil.
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Taking a holy dip is believed to remove sins</li>
          <li>Helps in achieving spiritual liberation (moksha)</li>
          <li>Devotees receive blessings from saints and sadhus</li>
          <li>Provides spiritual growth and inner peace</li>
        </ul>

<h2 className="text-2xl font-bold mb-4">
Meaning and Significance of Kumbh Mela
</h2>

<p className="mb-6">
The word <strong>Kumbh</strong> means a sacred pot or pitcher, while
<strong> Mela </strong> means gathering or fair. The term Kumbh Mela is
derived from the mythological story of the Amrit Kalash, the pot of nectar
that emerged during Samudra Manthan. According to Hindu beliefs, this nectar
represented immortality and divine blessings.
</p>

<p className="mb-6">
The significance of Kumbh Mela goes far beyond ritual bathing. It is regarded
as a spiritual gathering where devotees seek purification, self-reflection,
and a deeper connection with the divine. Millions of pilgrims travel from
across India and around the world to participate in this sacred event,
making it one of the largest peaceful gatherings on Earth.
</p>

<p className="mb-6">
For many devotees, Kumbh Mela is an opportunity to perform religious rituals,
listen to spiritual teachings, meet saints and ascetics, and strengthen their
faith. The festival also serves as a living symbol of India's spiritual,
cultural, and religious heritage.
</p>

        <h2 className="text-2xl font-bold mb-4">Importance of Nashik Kumbh Mela</h2>
        <p className="mb-6">
          The Nashik-Trimbakeshwar Kumbh Mela is held on the banks of the
          Godavari River. Trimbakeshwar is home to one of the twelve Jyotirlingas
          of Lord Shiva, making it extremely sacred.
        </p>

        <p className="mb-6">Important locations during Nashik Kumbh include:</p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Ramkund – Most sacred bathing ghat</li>
          <li>Kushavarta Kund – Origin of Godavari River</li>
          <li>Trimbakeshwar Jyotirlinga Temple</li>
          <li>Panchavati spiritual area</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">How Often is Kumbh Mela Celebrated?</h2>
        <p className="mb-6">
          Kumbh Mela follows a special astrological cycle based on planetary
          movements:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Every 12 years – Full Kumbh Mela</li>
          <li>Every 6 years – Ardh Kumbh</li>
          <li>Every 144 years – Maha Kumbh</li>
        </ul>

<h2 className="text-2xl font-bold mb-4">
The Four Sacred Locations of Kumbh Mela
</h2>

<p className="mb-6">
Kumbh Mela is celebrated at four sacred locations in India. Each location is
associated with the legend of Amrit and has immense religious significance.
The festival rotates between these cities according to specific astrological
alignments.
</p>

<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>
    <strong>Prayagraj</strong> – Located at the confluence of the Ganga,
    Yamuna, and the mythical Saraswati rivers.
  </li>

  <li>
    <strong>Haridwar</strong> – Situated on the banks of the holy Ganga River.
  </li>

  <li>
    <strong>Ujjain</strong> – Celebrated on the banks of the sacred Shipra River.
  </li>

  <li>
    <strong>Nashik-Trimbakeshwar</strong> – Associated with the Godavari River
    and one of the most important pilgrimage destinations in Maharashtra.
  </li>
</ul>

<p className="mb-6">
Among these locations, Nashik Kumbh Mela holds a special place due to its
connection with the Godavari River, Ramkund, Panchavati, Kushavarta Kund,
and the Trimbakeshwar Jyotirlinga.
</p>

        <h2 className="text-2xl font-bold mb-4">Major Rituals During Kumbh</h2>
        <p className="mb-6">
          The most important ritual is the holy bath known as Shahi Snan or
          Amrit Snan. Saints and Akharas lead grand processions for bathing in
          the sacred river. Devotees also attend spiritual discourses, prayers,
          and cultural events throughout the festival.
        </p>

<h2 className="text-2xl font-bold mb-4">
Akharas, Naga Sadhus, and Shahi Snan
</h2>

<p className="mb-6">
One of the most fascinating aspects of Kumbh Mela is the participation of
Akharas and Naga Sadhus. Akharas are traditional monastic organizations that
preserve spiritual teachings, religious practices, and ancient traditions.
Their presence adds a unique spiritual dimension to the festival.
</p>

<p className="mb-6">
Naga Sadhus are ascetic monks known for their strict spiritual discipline,
renunciation, and devotion. They are among the most recognized figures of
Kumbh Mela and lead ceremonial processions during important bathing days.
</p>

<p className="mb-6">
The Shahi Snan, often referred to as the Royal Bath, is one of the most
important rituals of Kumbh Mela. During this event, Akharas and Naga Sadhus
participate in grand processions before taking a holy dip in the sacred river.
In recent years, the term Amrit Snan has also gained prominence to emphasize
the spiritual significance of this sacred bathing ritual.
</p>

        <h2 className="text-2xl font-bold mb-4">Spiritual and Cultural Significance</h2>
        <p className="mb-6">
          Kumbh Mela represents faith, unity, and devotion. Millions of people
          gather peacefully to seek blessings and spiritual purification. It is
          considered a symbol of India’s rich cultural and spiritual heritage.
        </p>

        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-6">
          Kumbh Mela is not just a festival but a powerful spiritual experience.
          Celebrated at sacred locations including Nashik, it attracts millions
          of devotees seeking blessings and purification. Experiencing Kumbh
          Mela in Nashik is truly a once-in-a-lifetime spiritual journey.
        </p>

        {/* INTERNAL LINKS FOR SEO */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mt-10">
          <h3 className="font-bold text-lg mb-3">Explore More</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>
              ➜ <Link href="/temples">Famous temples to visit in Nashik</Link>
            </li>
            <li>
              ➜ <Link href="/ghats">Sacred ghats of Nashik Kumbh</Link>
            </li>
            <li>
              ➜ <Link href="/travel">Travel guide for Nashik Kumbh</Link>
            </li>
            <li>
              ➜ <Link href="/about">About Nashik Kumbh Mela</Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}