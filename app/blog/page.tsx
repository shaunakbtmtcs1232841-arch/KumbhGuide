import Link from 'next/link';
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Nashik Kumbh Blog & Updates
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Latest news, travel tips and Kumbh updates will be posted here.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="border p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold">
            Coming Soon 🚀
          </h2>
          <p className="text-gray-600 mt-2">
            Articles about Nashik temples, ghats, travel tips and Kumbh 2027 updates will appear here.
          </p>
        </div>
      </div>
      import Link from "next/link";


    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Nashik Kumbh Mela Blog & Updates
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
            Complete list of Shahi Snan dates, flag hoisting, and major
            spiritual events of Nashik-Trimbakeshwar Kumbh Mela.
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
            Understand history, mythology, and spiritual importance of Kumbh
            Mela — the world's largest religious gathering.
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
            Explore Ramkund, Trimbakeshwar, Panchavati, and other sacred places
            every pilgrim must visit during Kumbh.
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
  

    </div>
  );
}
