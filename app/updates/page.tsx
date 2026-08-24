import Link from "next/link";

export const metadata = {
  title: "Nashik Kumbh Mela 2027 Latest Updates",
  description:
    "Latest updates, transportation developments, crowd management news, infrastructure projects, and important announcements related to Nashik Kumbh Mela 2027.",
  alternates: {
    canonical: "https://kumbhnashikguide.com/updates",
  },
};

const latestUpdates = [
  {
    href: "/blog/nashik-kumbh-mela-2027-development-plan",
    image: "/images/development-plan.jpg",
    category: "Infrastructure Update",
    title:
      "Nashik Kumbh Mela 2027 Development Plan: ₹25,000 Crore Projects Explained",
    description:
      "Major infrastructure upgrades including roads, railway stations, airport development, ghats, sanitation systems, and transportation improvements are planned ahead of Nashik Kumbh Mela 2027.",
  },
  {
    href: "/updates/clean-godavari-project-kumbh-2027",
    image: "/images/clean-godavari.jpg",
    category: "River Cleanup Update",
    title:
      "₹1,600 Crore Clean Godavari Project Intensified Ahead of Nashik Kumbh Mela 2027",
    description:
      "Nashik Municipal Corporation is accelerating sewage treatment, pumping stations, sanitation systems, and river cleanup infrastructure projects ahead of Kumbh Mela 2027.",
  },
  {
    href: "/updates/nashik-pune-highway-widening-kumbh-2027",
    image: "/images/nashik-pune-highway.jpg",
    category: "Infrastructure & Traffic Update",
    title:
      "Nashik–Pune Highway Expansion and Major Road Projects Ahead of Kumbh Mela 2027",
    description:
      "Authorities are accelerating Nashik–Pune highway widening, Nashik Ring Road planning, traffic management systems, and transportation infrastructure projects ahead of Simhastha Kumbh Mela 2027.",
  },
  {
    href: "/updates/crowd-management-security-preparations-kumbh-2027",
    image: "/images/crowd-security.jpg",
    category: "Security Update",
    title:
      "Crowd Management and Security Preparations for Nashik Kumbh Mela 2027",
    description:
      "Authorities are expected to strengthen surveillance systems, emergency response planning, crowd movement systems, and transportation management before the festival.",
  },
  {
    href: "/blog/nashik-kumbh-mela-2027-2,267-crore-plan-approved",
    image: "/images/cm.avif",
    category: "Infrastructure Update",
    title: "Nashik Kumbh Mela 2027: ₹2,267 Crore Plan Approved",
    description:
      "Major land acquisition and infrastructure projects are now underway for the upcoming Nashik Kumbh Mela 2027.",
  },
];

const guides = [
  {
    href: "/blog/nashik-kumbh-mela-air-travel-guide",
    image: "/images/airport.jpg",
    title: "Air Travel Guide",
    description:
      "Complete flight and airport guide for Nashik Kumbh Mela 2027 visitors.",
  },
  {
    href: "/blog/nashik-kumbh-mela-railway-guide",
    image: "/images/train.jpg",
    title: "Railway Travel Guide",
    description:
      "Train routes, station details, booking tips, and railway information for pilgrims.",
  },
  {
    href: "/blog/nashik-kumbh-mela-road-bus-travel-guide",
    image: "/images/bus.jpg",
    title: "Road & Bus Travel Guide",
    description:
      "Highway routes, bus services, transportation information, and travel tips.",
  },
  {
    href: "/blog/where-to-stay-nashik-kumbh-mela",
    image: "/images/stay.jpg",
    title: "Stay Guide for Nashik Kumbh Mela",
    description:
      "Explore accommodation options, hotels, camps, and important stay tips.",
  },
  {
    href: "/blog/nashik-kumbh-mela-2027-dates",
    image: "/images/kumbh-dates.jpg",
    title: "Nashik Kumbh Mela 2027 Dates",
    description:
      "Important bathing dates, festival schedule, and pilgrimage timings.",
  },
  {
    href: "/blog/samudra-manthan-origin-kumbh",
    image: "/images/samudramanthan.jpg",
    title: "Origin Story of Kumbh Mela",
    description:
      "Learn about the spiritual and mythological origins of Kumbh Mela.",
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            Nashik Kumbh Mela 2027
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Nashik Kumbh Mela 2027
            <span className="block text-orange-50">
              Latest Updates &amp; Developments
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-orange-50 md:text-lg">
            Stay updated with transportation developments, crowd management
            plans, infrastructure projects, travel advisories, and important
            announcements related to Nashik Kumbh Mela 2027.
          </p>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-600">
              Stay Informed
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Latest Kumbh Updates
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Important developments and announcements connected with the
              preparation for Nashik Kumbh Mela 2027.
            </p>
          </div>

          <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Updated Regularly
          </span>
        </div>

        {/* FEATURED UPDATE */}
        <Link
          href={latestUpdates[0].href}
          className="group mb-10 block overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-orange-100 lg:aspect-auto lg:min-h-[360px]">
              <img
                src={latestUpdates[0].image}
                alt={latestUpdates[0].title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-orange-700 shadow">
                Featured Update
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-600">
                {latestUpdates[0].category}
              </p>

              <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                {latestUpdates[0].title}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                {latestUpdates[0].description}
              </p>

              <span className="mt-7 font-bold text-orange-600">
                Read Full Update →
              </span>
            </div>
          </div>
        </Link>

        {/* OTHER UPDATES */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {latestUpdates.slice(1).map((update) => (
            <Link
              key={update.href}
              href={update.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-orange-100">
                <img
                  src={update.image}
                  alt={update.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-700 shadow">
                  {update.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold leading-tight text-gray-900 transition group-hover:text-orange-600">
                  {update.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {update.description}
                </p>

                <span className="mt-5 inline-block font-bold text-orange-600">
                  Read Full Update →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* IMPORTANT GUIDES */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-600">
              Plan Your Visit
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Important Kumbh Mela Guides
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Useful guides covering travel, accommodation, important dates,
              and the spiritual background of Kumbh Mela.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden bg-orange-100">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-orange-600">
                    {guide.title}
                  </h3>

                  <p className="mt-2 leading-6 text-gray-600">
                    {guide.description}
                  </p>

                  <span className="mt-4 inline-block font-bold text-orange-600">
                    Read Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT UPDATES */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-100 bg-orange-50 p-7 md:p-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-600">
            Nashik Kumbh Guide
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            About Nashik Kumbh Mela Updates
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 leading-7 text-gray-700">
            <p>
              Nashik Kumbh Guide regularly publishes transportation updates,
              infrastructure developments, crowd management information,
              travel advisories, and pilgrimage guidance related to Nashik
              Kumbh Mela 2027.
            </p>

            <p>
              Visitors are advised to regularly check official announcements
              and trusted travel resources before planning their journey during
              peak pilgrimage dates.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-600">
            Quick Answers
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              How often is the updates page refreshed?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              The updates section is refreshed regularly with new
              transportation information, preparations, infrastructure
              developments, and important announcements related to Nashik Kumbh
              Mela 2027.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              What type of information is shared here?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Visitors can find travel updates, crowd management information,
              accommodation guidance, transportation developments, and
              pilgrimage-related announcements.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Is Nashik Kumbh Guide an official government website?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              No, this is an independent informational platform created to help
              pilgrims and visitors with useful Kumbh Mela guidance and travel
              information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}