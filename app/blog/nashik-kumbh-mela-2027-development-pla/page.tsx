import Link from "next/link";

export const metadata = {
  title: "Nashik Kumbh Mela 2027 Development Plan: ₹25,000 Crore Projects Explained",
  description:
    "Latest updates on Nashik Kumbh Mela 2027 development plan including budget, roads, ghats, railway, airport and infrastructure improvements.",
  alternates: {
    canonical: "https://kumbhnashikguide.com/blog/nashik-kumbh-mela-2027-development-plan",
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 leading-7">

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Nashik Kumbh Mela 2027 Development Plan: ₹25,000 Crore Projects Explained
      </h1>

      <p className="text-gray-600 mb-6">
        The Maharashtra government has approved a massive development plan for Nashik Kumbh Mela 2027. With an investment of over ₹25,000 crore, the city is set to undergo major infrastructure upgrades to handle millions of visitors.
      </p>

      <img
        src="/images/ramkund.jpg"
        alt="Nashik Kumbh Mela crowd"
        className="w-full h-[260px] md:h-[360px] object-cover rounded-xl mb-8"
      />

      {/* INTRO */}
      <p className="mb-4">
        The Kumbh Mela is one of the largest religious gatherings in the world, and preparations for the 2027 Nashik event have already started at a large scale.
      </p>

      <p className="mb-8">
        This article explains all major government projects, budget allocations, and what visitors can expect during the upcoming Kumbh Mela.
      </p>

      {/* TOTAL PLAN */}
      <h2 className="text-2xl font-semibold mb-4">
        ₹25,000 Crore Development Plan Overview
      </h2>

      <ul className="list-disc pl-6 mb-8">
        <li>Total development budget crosses ₹25,000 crore</li>
        <li>Focus on roads, transport, safety, and infrastructure</li>
        <li>Massive upgrades to handle large crowds efficiently</li>
      </ul>

      {/* MAJOR ALLOCATIONS */}
      <h2 className="text-2xl font-semibold mb-4">
        Major Allocations Under Development Plan
      </h2>

      <ul className="list-disc pl-6 mb-8">
        <li>National Highway and Road Work: ₹2,458 crore</li>
        <li>Nashik Airport Development: ₹640 crore</li>
        <li>Eight Railway Stations Upgrade: ₹1,676 crore</li>
        <li>Ramkal Path Project: ₹99.14 crore</li>
        <li>Sadhugram Land Acquisition: ₹1,000 crore</li>
        <li>Trimbakeshwar Sewage Project: ₹165.88 crore</li>
        <li>Power Substation Setup: ₹73.50 crore</li>
        <li>Archaeology Department Work: ₹48.48 crore</li>
        <li>66 km Nashik Ring Road: ₹7,613 crore</li>
      </ul>

      {/* PHASE DETAILS */}
      <h2 className="text-2xl font-semibold mb-4">
        Phase 1 Development Details
      </h2>

      <ul className="list-disc pl-6 mb-8">
        <li>₹5,140 crore approved for initial development phase</li>
        <li>₹3,016 crore for roads, bridges, sewage, CCTV, and fire safety</li>
        <li>₹750 crore allocated for water resources and ghat construction</li>
      </ul>

      {/* WHAT THIS MEANS */}
      <h2 className="text-2xl font-semibold mb-4">
        What This Means for Visitors
      </h2>

      <p className="mb-4">
        These developments will make Nashik more accessible, safer, and better equipped to handle the massive crowd expected during Kumbh Mela 2027.
      </p>

      <ul className="list-disc pl-6 mb-8">
        <li>Better roads and reduced traffic congestion</li>
        <li>Improved railway and airport connectivity</li>
        <li>Cleaner ghats and improved sanitation</li>
        <li>Enhanced safety with CCTV and emergency systems</li>
      </ul>

      {/* DATES */}
      <h2 className="text-2xl font-semibold mb-4">
        Important Dates of Kumbh Mela 2027
      </h2>

      <ul className="list-disc pl-6 mb-8">
        <li>First Shahi Snan: August 2, 2027</li>
        <li>Main Shahi Snan: August 31, 2027</li>
        <li>Key Bathing Dates: September 11 and 12, 2027</li>
      </ul>

      {/* INTERNAL LINKS */}
      <h2 className="text-2xl font-semibold mb-4">
        Related Guides
      </h2>

      <ul className="list-disc pl-6">
        <li>
          <Link href="/blog/nashik-kumbh-mela-2027-dates" className="text-blue-600 underline">
            Nashik Kumbh Mela 2027 Dates
          </Link>
        </li>
        <li>
          <Link href="/blog/top-ghats-nashik" className="text-blue-600 underline">
            Top Ghats in Nashik
          </Link>
        </li>
        <li>
          <Link href="/blog/what-is-kumbh-mela" className="text-blue-600 underline">
            What is Kumbh Mela
          </Link>
        </li>
      </ul>

    </div>
  );
}