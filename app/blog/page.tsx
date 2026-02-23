import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Nashik Kumbh Mela Blog &amp; Updates
        </h1>
        <p className="text-sm md:text-base opacity-95">
          Important dates, travel tips, temples, and complete Kumbh guidance
        </p>
      </section>

      {/* COMPACT BLOG LIST */}
      <section className="max-w-4xl mx-auto px-6 py-10">

        <div className="divide-y">

          {/* ARTICLE 1 */}
          <div className="py-5">
            <Link
              href="/blog/nashik-kumbh-mela-2027-dates"
              className="text-lg font-semibold hover:text-orange-600"
            >
              Nashik Kumbh Mela 2027 Important Dates
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Complete list of Shahi Snan dates and major spiritual events of Nashik Kumbh Mela.
            </p>
          </div>

          {/* ARTICLE 2 */}
          <div className="py-5">
            <Link
              href="/blog/what-is-kumbh-mela"
              className="text-lg font-semibold hover:text-orange-600"
            >
              What is Kumbh Mela and Why it is Celebrated?
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              History, mythology and spiritual importance of the world&apos;s largest religious gathering.
            </p>
          </div>

          {/* ARTICLE 3 */}
          <div className="py-5">
            <Link
              href="/blog/best-places-nashik"
              className="text-lg font-semibold hover:text-orange-600"
            >
              10 Best Places to Visit in Nashik During Kumbh Mela
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Explore Ramkund, Trimbakeshwar, Panchavati and other sacred places every pilgrim must visit.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}