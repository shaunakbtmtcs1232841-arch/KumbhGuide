import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nashik Kumbh Mela 2027 Authorities & Committees | NTKMA Guide",
  description:
    "Who is managing Nashik–Trimbakeshwar Kumbh Mela 2027? Learn about NTKMA, the Maharashtra Simhastha Kumbh Mela Act 2025, Shikhar Samiti, Ministerial Committee, Executive Committee, government departments, committees and administrative structure.",
  keywords: [
    "Nashik Kumbh Mela authority",
    "Nashik Kumbh Mela 2027 authority",
    "Nashik Kumbh Mela committee",
    "Nashik Kumbh Mela 2027 committees",
    "NTKMA",
    "Nashik Trimbakeshwar Kumbh Mela Authority",
    "Nashik Kumbh Mela Act 2025",
    "Nashik Kumbh Mela government committee",
    "who is organizing Nashik Kumbh Mela 2027",
    "Nashik Kumbh Mela administration",
    "Simhastha Kumbh Mela 2027 authority",
    "Nashik Kumbh Mela government departments",
  ],
  alternates: {
    canonical:
      "https://kumbhnashikguide.com/blog/nashik-kumbh-mela-authorities-committees",
  },
  openGraph: {
    title:
      "Nashik Kumbh Mela 2027 Authorities & Committees | NTKMA Guide",
    description:
      "Understand the official administrative structure behind Nashik–Trimbakeshwar Kumbh Mela 2027, including NTKMA, major committees and participating government departments.",
    url:
      "https://kumbhnashikguide.com/blog/nashik-kumbh-mela-authorities-committees",
    siteName: "Nashik Kumbh Guide",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://kumbhnashikguide.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const ntkmaMembers = [
  ["Chairperson", "Commissioner, Nashik Division"],
  ["Vice-Chairperson", "Collector, Nashik District"],
  [
    "Vice-Chairperson",
    "Special Inspector General of Police, Nashik Range",
  ],
  ["Ex-officio Member", "Collector, Ahilyanagar District"],
  [
    "Ex-officio Member",
    "Metropolitan Commissioner, Nashik Metropolitan Region Development Authority",
  ],
  [
    "Ex-officio Member",
    "Commissioner of Police, Nashik City",
  ],
  [
    "Ex-officio Member",
    "Superintendent of Police, Nashik Rural",
  ],
  [
    "Ex-officio Member",
    "Municipal Commissioner, Nashik Municipal Corporation",
  ],
  [
    "Ex-officio Member",
    "Chief Executive Officer, Zilla Parishad, Nashik",
  ],
  [
    "Ex-officio Member",
    "Chief Officer, Trimbakeshwar Municipal Council",
  ],
  [
    "Ex-officio Member",
    "Deputy Commissioner (Planning), Nashik",
  ],
  [
    "Ex-officio Member",
    "Divisional Controller, Maharashtra State Road Transport Corporation (MSRTC), Nashik",
  ],
  [
    "Ex-officio Member",
    "Deputy Director of Health, Nashik",
  ],
  [
    "Ex-officio Member",
    "Superintending Engineer, Water Resources Department – in charge of Godavari River and water management, Nashik",
  ],
  [
    "Ex-officio Member",
    "Chief Engineer, Public Works Department, Nashik",
  ],
  [
    "Ex-officio Member",
    "Chief Engineer, Maharashtra Jeevan Pradhikaran, Nashik",
  ],
  [
    "Ex-officio Member",
    "Superintending Engineer, Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL), Nashik",
  ],
  [
    "Ex-officio Member",
    "Regional Officer, Maharashtra Pollution Control Board (MPCB), Nashik",
  ],
  [
    "Ex-officio Member",
    "Joint Director, Accounts and Treasuries, Nashik",
  ],
  [
    "Ex-officio Member",
    "Joint Director, Town Planning, Nashik Division",
  ],
  [
    "Ex-officio Member",
    "Representative nominated by the Railway Board",
  ],
  ["Member–Secretary", "Kumbh Mela Commissioner"],
];

const governmentFunctions = [
  {
    department: "Police & Security",
    responsibility:
      "Law and order, security arrangements, crowd control, traffic management and public safety.",
  },
  {
    department: "Nashik Municipal Corporation",
    responsibility:
      "Urban civic infrastructure, sanitation, ghats, roads, public facilities and city-level Kumbh works.",
  },
  {
    department: "Trimbakeshwar Municipal Council",
    responsibility:
      "Local civic arrangements and infrastructure within Trimbakeshwar.",
  },
  {
    department: "MSRTC",
    responsibility:
      "Public bus transportation and coordination of transport arrangements for pilgrims.",
  },
  {
    department: "Health Department",
    responsibility:
      "Health services and medical arrangements required for the large pilgrim gathering.",
  },
  {
    department: "Water Resources Department",
    responsibility:
      "Godavari River and water-management matters relevant to the Kumbh.",
  },
  {
    department: "Public Works Department",
    responsibility:
      "Road, bridge and related public infrastructure works.",
  },
  {
    department: "Maharashtra Jeevan Pradhikaran",
    responsibility:
      "Water-supply infrastructure and related arrangements.",
  },
  {
    department: "MSEDCL",
    responsibility:
      "Electricity and power-supply infrastructure.",
  },
  {
    department: "MPCB",
    responsibility:
      "Environmental and pollution-control responsibilities.",
  },
  {
    department: "Town Planning",
    responsibility:
      "Planning and development coordination for the Kumbh-related infrastructure.",
  },
  {
    department: "Railways",
    responsibility:
      "Railway-related coordination and arrangements for pilgrims arriving by train.",
  },
];

const officialDocuments = [
  {
    title: "Maharashtra Simhastha Kumbh Mela Act, 2025",
    description:
      "Provides the statutory foundation for the Nashik–Trimbakeshwar Kumbh Mela Authority.",
  },
  {
    title: "Establishment of Nashik–Trimbakeshwar Kumbh Mela Authority",
    description:
      "Provides the administrative and statutory framework for organisation, management, budgeting, procurement and legacy management.",
  },
  {
    title: "Apex Committee (Shikhar Samiti)",
    description:
      "Constituted under the chairmanship of the Chief Minister of Maharashtra.",
  },
  {
    title: "Ministerial Committee (Mantri Samiti)",
    description:
      "Constituted under the chairmanship of the designated Kumbh Mela Minister.",
  },
  {
    title: "Committee for Simhastha Kumbh Mela Preparations",
    description:
      "Government committee formed in connection with preparations for the 2027 Kumbh Mela.",
  },
  {
    title: "Highway Land Acquisition Committee",
    description:
      "Committee established for land acquisition required for highway works connected with the Nashik–Trimbakeshwar Kumbh Mela.",
  },
  {
    title: "Financial Administration and DDO Arrangements",
    description:
      "Government arrangements relating to financial transactions and fund disbursement for the 2027–28 Kumbh.",
  },
  {
    title: "Creation of Posts under NTKMA",
    description:
      "Government approval for staffing under the Nashik–Trimbakeshwar Kumbh Mela Authority.",
  },
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14 leading-8 text-gray-800">

      {/* INTRO */}
      <div className="mb-10">
        <p className="text-orange-600 font-semibold mb-3">
          Official Administration & Government Structure
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Nashik Kumbh Mela 2027 Authorities & Committees: Who Is Managing the Kumbh?
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-8">
          Nashik–Trimbakeshwar Kumbh Mela 2027 is being planned through a
          dedicated government authority and a multi-level administrative
          structure involving Maharashtra Government departments, local
          authorities, police, transport agencies, health services,
          infrastructure departments and other stakeholders.
        </p>
      </div>

      {/* IMAGE */}
      <img
        src="/images/kumbh-authority.jpg"
        alt="Government administration and planning for Nashik Trimbakeshwar Kumbh Mela 2027"
        className="w-full h-[260px] md:h-[430px] object-cover rounded-2xl mb-10"
      />

      {/* QUICK ANSWER */}
      <section className="bg-orange-50 border border-orange-100 rounded-2xl p-6 md:p-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Who is the main authority responsible for Nashik Kumbh Mela 2027?
        </h2>

        <p className="mb-4">
          The main dedicated body is the{" "}
          <strong>
            Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA)
          </strong>
          . It was established by the Government of Maharashtra to plan,
          coordinate and oversee preparations for Simhastha Kumbh Mela 2027
          in Nashik and Trimbakeshwar.
        </p>

        <p>
          NTKMA works together with local civic bodies, state and central
          government departments, police and security agencies, transport
          authorities, health authorities, Akhadas and other stakeholders.
        </p>
      </section>

      {/* WHAT IS NTKMA */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          What Is the Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA)?
        </h2>

        <p className="mb-4">
          The Nashik–Trimbakeshwar Kumbh Mela Authority, commonly referred
          to as NTKMA, is the dedicated government authority responsible for
          planning, coordination and oversight of the Simhastha Kumbh Mela
          2027.
        </p>

        <p className="mb-4">
          Its responsibilities cover multiple areas required to manage a
          large-scale pilgrimage, including infrastructure development,
          sanitation and waste management, safety and security,
          transportation and mobility planning, digital systems, pilgrim
          facilities and coordination between government departments.
        </p>

        <p>
          The Authority therefore acts as an important coordination point
          between different agencies involved in preparing Nashik and
          Trimbakeshwar for the Kumbh.
        </p>
      </section>

      {/* LEGAL FOUNDATION */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Legal Framework Behind the Kumbh Administration
        </h2>

        <p className="mb-4">
          The administrative framework for the 2027 Kumbh is based on the{" "}
          <strong>Maharashtra Simhastha Kumbh Mela Act, 2025</strong> and
          Government Resolutions issued from time to time.
        </p>

        <p className="mb-4">
          These legal and administrative instruments provide the framework
          required for planning, coordination and management of the Kumbh,
          including the functioning of NTKMA and associated committees.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="font-semibold text-gray-900 mb-2">
            Key legal and administrative areas include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Organisation and management of the Kumbh</li>
            <li>Budgeting and financial administration</li>
            <li>Procurement and implementation of works</li>
            <li>Infrastructure planning</li>
            <li>Inter-departmental coordination</li>
            <li>Legacy and post-event infrastructure management</li>
          </ul>
        </div>
      </section>

      {/* ADMINISTRATIVE STRUCTURE */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          How Is Nashik Kumbh Mela 2027 Administration Structured?
        </h2>

        <p className="mb-6">
          The 2027 Kumbh is not being managed by a single municipal
          department. Multiple levels of government administration and
          committees are involved.
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              Shikhar Samiti — Apex Committee
            </h3>

            <p>
              The Apex Committee, or Shikhar Samiti, has been constituted
              under the chairmanship of the Chief Minister of Maharashtra
              for the planning of the Nashik–Trimbakeshwar Simhastha Kumbh
              Mela.
            </p>
          </div>

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              Executive Committee
            </h3>

            <p>
              An Executive Committee has been constituted under the
              chairmanship of the Chief Secretary of Maharashtra for
              planning the 2027–2028 Simhastha Kumbh Mela.
            </p>
          </div>

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              Ministerial Committee — Mantri Samiti
            </h3>

            <p>
              A Kumbh Mela Ministerial Committee has also been constituted
              under the chairmanship of the designated Kumbh Mela Minister.
            </p>
          </div>

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              NTKMA
            </h3>

            <p>
              NTKMA functions as the dedicated authority responsible for
              coordinating and overseeing the practical planning and
              implementation framework for the Kumbh.
            </p>
          </div>

        </div>
      </section>

      {/* NTKMA MEMBERS */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Who Are the Members of NTKMA?
        </h2>

        <p className="mb-6">
          The Authority brings together senior officials from administration,
          policing, municipal government, transport, health, water,
          infrastructure, electricity, environment, finance, town planning
          and railways.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="border-b border-gray-200 p-4 text-left font-bold">
                  Role
                </th>
                <th className="border-b border-gray-200 p-4 text-left font-bold">
                  Designation / Member
                </th>
              </tr>
            </thead>

            <tbody>
              {ntkmaMembers.map(([role, designation], index) => (
                <tr
                  key={`${role}-${designation}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border-b border-gray-200 p-4 align-top font-medium">
                    {role}
                  </td>

                  <td className="border-b border-gray-200 p-4 align-top">
                    {designation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WHAT DEPARTMENTS DO */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Which Government Departments Are Involved?
        </h2>

        <p className="mb-6">
          The scale of the Kumbh requires coordination across many
          departments. The NTKMA structure itself demonstrates how
          responsibilities are distributed across different government
          agencies.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="bg-orange-100">
                <th className="border-b border-gray-200 p-4 text-left">
                  Department / Agency
                </th>
                <th className="border-b border-gray-200 p-4 text-left">
                  Main Area of Responsibility
                </th>
              </tr>
            </thead>

            <tbody>
              {governmentFunctions.map((item, index) => (
                <tr
                  key={item.department}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border-b border-gray-200 p-4 align-top font-semibold">
                    {item.department}
                  </td>

                  <td className="border-b border-gray-200 p-4 align-top">
                    {item.responsibility}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HIGHWAY COMMITTEE */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Highway Land Acquisition Committee
        </h2>

        <p className="mb-4">
          A separate committee was constituted in connection with the
          preparations for the August 2027 Kumbh for land acquisition
          required for various national highway works in the Nashik and
          Trimbakeshwar region.
        </p>

        <p className="mb-4">
          The Maharashtra Public Works Department circular dated{" "}
          <strong>3 July 2025</strong> states that the committee was formed
          following discussions concerning highway works and the need to
          expedite land acquisition procedures.
        </p>

        <p className="mb-6">
          According to the government circular you provided, the committee
          is chaired by the Additional Chief Secretary, Public Works
          Department, and includes senior officials from the Forest
          Department, Chief Minister's Office, Nashik Divisional
          Commissioner, Ministry of Road Transport and Highways, NHAI and
          the National Highways wing of the Public Works Department.
        </p>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
          <h3 className="font-bold text-xl mb-3">
            Committee's documented function
          </h3>

          <p>
            The stated scope is to undertake time-bound action regarding
            land acquisition required for various proposed national highway
            works connected with the Nashik Kumbh Mela.
          </p>
        </div>
      </section>

      {/* STAFFING */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          NTKMA Staffing and Administrative Capacity
        </h2>

        <p className="mb-4">
          A Maharashtra Government decision dated{" "}
          <strong>10 October 2025</strong> approved the creation of staff
          positions under the Nashik–Trimbakeshwar Kumbh Mela Authority for
          the period covering the organisation and implementation of the
          Simhastha Kumbh Mela.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-4xl font-bold text-orange-600">52</p>
            <p className="font-semibold mt-2">
              Regular positions
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-4xl font-bold text-orange-600">24</p>
            <p className="font-semibold mt-2">
              Outsourced manpower positions
            </p>
          </div>

        </div>

        <p className="mb-4">
          This gives a total of{" "}
          <strong>76 approved positions</strong> under the structure
          described in the government decision.
        </p>

        <p className="mb-6">
          The staffing structure covers areas including Kumbh
          administration, general coordination and religious affairs,
          crowd control and law and order, financial planning and
          expenditure, quality control, social media and public relations,
          subject-matter experts and other administrative support.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[650px] border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b p-4 text-left">
                  Functional Area
                </th>
                <th className="border-b p-4 text-left">
                  Examples of Roles
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-b p-4 font-semibold">
                  Kumbh Commissioner Office
                </td>
                <td className="border-b p-4">
                  Kumbh Mela Commissioner, stenographic and clerical support
                </td>
              </tr>

              <tr>
                <td className="border-b p-4 font-semibold">
                  General Coordination & Religious Affairs
                </td>
                <td className="border-b p-4">
                  Administrative officers, revenue officers and supporting
                  staff
                </td>
              </tr>

              <tr>
                <td className="border-b p-4 font-semibold">
                  Crowd Control, Law & Order
                </td>
                <td className="border-b p-4">
                  Police officers, police inspectors and supporting staff
                </td>
              </tr>

              <tr>
                <td className="border-b p-4 font-semibold">
                  Financial Planning & Expenditure
                </td>
                <td className="border-b p-4">
                  Planning, accounts and finance officers
                </td>
              </tr>

              <tr>
                <td className="border-b p-4 font-semibold">
                  Quality Control
                </td>
                <td className="border-b p-4">
                  Superintending/Executive Engineers and engineering staff
                </td>
              </tr>

              <tr>
                <td className="border-b p-4 font-semibold">
                  Social Media & Public Relations
                </td>
                <td className="border-b p-4">
                  Information and public-relations personnel and contracted
                  support
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold">
                  Subject Experts & Support
                </td>
                <td className="p-4">
                  Consultants, subject-matter experts, support staff and
                  other outsourced resources
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          What Does This Mean for Pilgrims?
        </h2>

        <p className="mb-6">
          The administrative structure matters to visitors because almost
          every major part of the Kumbh experience depends on coordination
          between multiple agencies.
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Roads & Infrastructure
            </h3>
            <p>
              Road and infrastructure projects involve agencies such as
              PWD, local authorities and other infrastructure departments.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Traffic & Security
            </h3>
            <p>
              Police and traffic authorities are involved in crowd control,
              law and order and transportation management.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Water & Ghats
            </h3>
            <p>
              Water Resources and civic agencies are involved in water and
              river-related arrangements and ghat infrastructure.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Public Transport
            </h3>
            <p>
              MSRTC and railway representatives form part of the wider
              coordination structure for pilgrim transportation.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Health & Emergency Services
            </h3>
            <p>
              Health and emergency-related arrangements require coordination
              across government agencies and local authorities.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Digital & Information Systems
            </h3>
            <p>
              Digital systems, information services, CCTV and other
              technology initiatives form part of the wider Kumbh
              preparation programme.
            </p>
          </div>

        </div>
      </section>

      {/* OFFICIAL DOCUMENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Important Official Kumbh Documents & Government Resolutions
        </h2>

        <p className="mb-6">
          The following categories of government documents form part of the
          administrative framework for Nashik–Trimbakeshwar Simhastha Kumbh
          Mela 2027.
        </p>

        <div className="space-y-4">
          {officialDocuments.map((document) => (
            <div
              key={document.title}
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {document.title}
              </h3>

              <p className="text-gray-700">
                {document.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MEETING PROCEEDINGS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          How Is Kumbh Planning Being Coordinated?
        </h2>

        <p className="mb-4">
          Official meeting proceedings show that Kumbh planning involves
          regular coordination meetings covering subjects such as railway
          stations, AI and CCTV-based crowd analysis, quality control,
          Godavari water flow, traffic management, municipal works,
          budgetary provisions and wider Simhastha planning.
        </p>

        <p>
          These proceedings are useful for understanding how the
          administrative framework is being translated into individual
          projects and operational decisions.
        </p>
      </section>

      {/* OFFICIAL CONTACT */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Official NTKMA Contact
        </h2>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="font-semibold text-gray-900 mb-2">
            Nashik–Trimbakeshwar Kumbh Mela Authority
          </p>

          <p className="mb-2">
            Office of the Divisional Commissioner,
            Nashik Division
          </p>

          <p className="mb-2">
            Nashik Road, Nashik, Maharashtra
          </p>

          <p className="mb-2">
            Phone:{" "}
            <a
              href="tel:02532461909"
              className="text-orange-600 underline"
            >
              0253-2461909
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:kumbhmela.2027@mah.gov.in"
              className="text-orange-600 underline"
            >
              kumbhmela.2027@mah.gov.in
            </a>
          </p>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Related Nashik Kumbh Mela Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <Link
            href="/blog/nashik-kumbh-mela-2027-budget-guide"
            className="border rounded-xl p-5 hover:bg-orange-50 transition"
          >
            <span className="font-semibold text-orange-600">
              Nashik Kumbh Mela 2027 Government Budget →
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Understand government spending, infrastructure allocations
              and development projects connected with the Kumbh.
            </p>
          </Link>

          <Link
            href="/updates/nashik-pune-highway-widening-kumbh-2027"
            className="border rounded-xl p-5 hover:bg-orange-50 transition"
          >
            <span className="font-semibold text-orange-600">
              Nashik–Pune Highway & Infrastructure Update →
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Read about major road and infrastructure preparations ahead
              of the Kumbh.
            </p>
          </Link>

          <Link
            href="/updates/crowd-management-security-preparations-kumbh-2027"
            className="border rounded-xl p-5 hover:bg-orange-50 transition"
          >
            <span className="font-semibold text-orange-600">
              Crowd Management & Security Preparations →
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Understand the security and crowd-management preparations
              relevant to pilgrims.
            </p>
          </Link>

          <Link
            href="/blog/nashik-kumbh-mela-railway-guide"
            className="border rounded-xl p-5 hover:bg-orange-50 transition"
          >
            <span className="font-semibold text-orange-600">
              Nashik Kumbh Railway Travel Guide →
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Plan your journey to Nashik by train.
            </p>
          </Link>

          <Link
            href="/blog/nashik-kumbh-mela-bus-travel-guide"
            className="border rounded-xl p-5 hover:bg-orange-50 transition"
          >
            <span className="font-semibold text-orange-600">
              Nashik Kumbh Road & Bus Travel Guide →
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Explore road connectivity and bus transportation options.
            </p>
          </Link>

          <Link
            href="/blog/nashik-kumbh-mela-2027-tarikh"
            className="border rounded-xl p-5 hover:bg-orange-50 transition"
          >
            <span className="font-semibold text-orange-600">
              Nashik Kumbh Mela 2027 Dates →
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Check the current Kumbh dates and major event schedule.
            </p>
          </Link>

        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Who is responsible for Nashik Kumbh Mela 2027?
            </h3>

            <p>
              The Nashik–Trimbakeshwar Kumbh Mela Authority (NTKMA) is the
              dedicated government authority responsible for planning,
              coordination and oversight of the Simhastha Kumbh Mela 2027,
              working with multiple government departments and other
              stakeholders.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              What is NTKMA?
            </h3>

            <p>
              NTKMA stands for Nashik–Trimbakeshwar Kumbh Mela Authority.
              It is the dedicated authority established by the Government
              of Maharashtra for the 2027 Kumbh in Nashik and
              Trimbakeshwar.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Who chairs the Shikhar Samiti?
            </h3>

            <p>
              The Apex Committee, or Shikhar Samiti, has been constituted
              under the chairmanship of the Chief Minister of Maharashtra.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Who chairs the Executive Committee?
            </h3>

            <p>
              The Executive Committee for planning the 2027–2028 Simhastha
              Kumbh Mela has been constituted under the chairmanship of the
              Chief Secretary of Maharashtra.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Is the Kumbh managed only by Nashik Municipal Corporation?
            </h3>

            <p>
              No. The administrative structure involves NTKMA, Nashik
              Municipal Corporation, Trimbakeshwar Municipal Council,
              police, transport agencies, health authorities, PWD, Water
              Resources, MSEDCL, MJP, MPCB, railways and other departments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              How many NTKMA positions were approved in the 2025 staffing
              decision?
            </h3>

            <p>
              The government decision you provided approved 52 regular
              positions and 24 positions through outsourced manpower,
              giving a total of 76 approved positions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Where can I find official Kumbh government updates?
            </h3>

            <p>
              Visitors should prioritize official Maharashtra Government,
              Divisional Commissioner Nashik, NTKMA and relevant government
              department announcements for current administrative
              information.
            </p>
          </div>

        </div>
      </section>

      {/* SOURCE NOTE */}
      <section className="border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500 leading-6">
          Information on this page is based primarily on Maharashtra
          Government legislation, Government Resolutions, official
          Divisional Commissioner Nashik / NTKMA information, and
          government documents concerning the planning and administration
          of Nashik–Trimbakeshwar Simhastha Kumbh Mela 2027. Administrative
          structures, officers, committees and project details may change
          through subsequent government orders or official notifications.
          Always verify time-sensitive information through the latest
          official announcement.
        </p>

        <p className="text-sm text-gray-500 mt-3">
          Last reviewed: August 2026
        </p>
      </section>

    </main>
  );
}