import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Nashik Kumbh Mela Blog &amp; Updates
        </h1>
        <p className="text-lg opacity-95">
          Important dates, travel tips, temples, and complete Kumbh guidance
        </p>
      </section>

      {/* BLOG LIST */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8">

        {/* ARTICLE 1 */}
        <div className="border rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-3">
            Nashik Kumbh Mela 2027 Important Dates
          </h2>

          <p className="text-gray-600 mb-4">
            Complete list of Shahi Snan dates, flag hoisting, and major spiritual events of Nashik-Trimbakeshwar Kumbh Mela.
          </p>

          <Link
            href="/blog/nashik-kumbh-mela-2027-dates"
            className="text-orange-600 font-semibold hover:underline"
          >
            Read Full Article →
          </Link>
        </div>

        {/* ARTICLE 2 */}
        <div className="border rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-3">
            What is Kumbh Mela and Why it is Celebrated?
          </h2>

          <p className="text-gray-600 mb-4">
            Understand history, mythology, and spiritual importance of Kumbh Mela — the world&apos;s largest religious gathering.
          </p>

          <Link
            href="/blog/what-is-kumbh-mela"
            className="text-orange-600 font-semibold hover:underline"
          >
            Read Full Article →
          </Link>
        </div>

        {/* ARTICLE 3 */}
        <div className="border rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-3">
            10 Best Places to Visit in Nashik During Kumbh Mela
          </h2>

          <p className="text-gray-600 mb-4">
            Explore Ramkund, Trimbakeshwar, Panchavati, and other sacred places every pilgrim must visit during Kumbh.
          </p>

          <Link
            href="/blog/best-places-nashik"
            className="text-orange-600 font-semibold hover:underline"
          >
            Read Full Article →
          </Link>
        </div>

      </section>
    </div>
  );
}