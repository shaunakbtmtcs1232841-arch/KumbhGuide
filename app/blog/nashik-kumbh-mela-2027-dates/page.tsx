import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nashik Kumbh Mela 2027 Dates & Full Schedule | Official Snan Dates",
  description:
    "Complete list of Nashik Kumbh Mela 2027 dates including Amrit Snan, major bathing days, and important religious events from 2026 to 2028.",
  keywords:
    "Nashik Kumbh Mela 2027 dates, Kumbh snan dates Nashik, Amrit Snan 2027, Nashik Kumbh schedule, Kumbh Mela bathing dates",
};

export default function NashikKumbhDates() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nashik Kumbh Mela 2027 Dates & Full Schedule
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Complete list of official bathing dates, Amrit Snan days, and important events of Nashik–Trimbakeshwar Kumbh Mela 2026–2028.
        </p>
      </section>

      {/* ARTICLE SECTION */}
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

        <p className="mb-6">
          The Nashik–Trimbakeshwar Kumbh Mela 2027 is one of the most sacred religious gatherings in India.
          Celebrated once every 12 years, this grand spiritual event attracts millions of devotees who gather
          on the banks of the holy Godavari River to take a sacred bath on auspicious dates.
        </p>

        <p className="mb-6">
          The Kumbh Mela in Nashik officially begins in late 2026 and continues until 2028, with the
          most important events taking place in 2027. Below is the complete schedule of major bathing days
          and religious events.
        </p>

        {/* MAIN SNAN DATES */}
        <h2 className="text-2xl font-bold mb-4">🌊 Main Amrit Snan (Royal Bath) Dates – 2027</h2>

        <div className="space-y-6 mb-8">

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">First Amrit Snan</h3>
            <p><strong>Date:</strong> 2 August 2027 (Monday)</p>
            <p><strong>Occasion:</strong> Ashadh Somvati Amavasya</p>
            <p>
              This marks the first and one of the most significant bathing days of the Kumbh Mela.
              Lakhs of devotees and saints gather at Ramkund and the Godavari ghats to take the holy dip.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Second Amrit Snan</h3>
            <p><strong>Date:</strong> 31 August 2027</p>
            <p><strong>Occasion:</strong> Shravan Amavasya</p>
            <p>
              This is another highly auspicious bathing day. Massive crowds are expected at Nashik
              and Trimbakeshwar during this sacred occasion.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Third Amrit Snan</h3>
            <p><strong>Date:</strong> 11 September 2027</p>
            <p><strong>Occasion:</strong> Bhadrapada Shuddha Ekadashi</p>
            <p>
              The third royal bath concludes the major Amrit Snan sequence and is spiritually significant
              for devotees seeking divine blessings.
            </p>
          </div>

        </div>

        {/* OTHER IMPORTANT DATES */}
        <h2 className="text-2xl font-bold mb-4">📅 Other Important Nashik Kumbh Dates (2026–2028)</h2>

        <ul className="list-disc pl-6 space-y-3 mb-8">
          <li><strong>October 31, 2026:</strong> Flag hoisting ceremony – Official beginning of Kumbh Parva</li>
          <li><strong>July 24, 2027:</strong> Akhara flag hoisting ceremony</li>
          <li><strong>July 29, 2027:</strong> Nagar Pradakshina (Holy procession)</li>
          <li><strong>September 5, 2027:</strong> Rishi Panchami</li>
          <li><strong>November 2027:</strong> Kartik Shudh Ekadashi & Purnima celebrations</li>
          <li><strong>January 26, 2028:</strong> Mouni Amavasya</li>
          <li><strong>February 1, 2028:</strong> Vasant Panchami</li>
          <li><strong>February 27, 2028:</strong> Maha Shivratri</li>
          <li><strong>July 2028:</strong> Official conclusion and flag lowering ceremony</li>
        </ul>

        {/* CROWD INFORMATION */}
        <h2 className="text-2xl font-bold mb-4">Expected Peak Crowd Days</h2>

        <p className="mb-6">
          The three Amrit Snan dates in August and September 2027 are expected to witness the highest
          number of devotees. Authorities usually make special arrangements for security, medical services,
          and crowd management during these peak days.
        </p>

        <p className="mb-6">
          Devotees planning to visit during these main bathing days should stay updated with official
          announcements from local administration and religious authorities.
        </p>

        {/* CONCLUSION */}
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>

        <p className="mb-6">
          The Nashik Kumbh Mela 2027 is scheduled with multiple sacred bathing days and religious
          ceremonies between 2026 and 2028. The most important events are the three Amrit Snan dates
          in August and September 2027.
        </p>

        <p className="mb-10">
          Devotees are encouraged to plan in advance and follow official updates to participate
          peacefully in this once-in-12-years sacred gathering.
        </p>

        {/* INTERNAL LINKING */}
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Related Reading</h3>
          <ul className="space-y-2 text-orange-700 font-medium">
            <li>
              ➜ <Link href="/blog/what-is-kumbh-mela">What is Kumbh Mela and Why is it Celebrated?</Link>
            </li>
          </ul>
        </div>

      </article>
    </div>
  );
}