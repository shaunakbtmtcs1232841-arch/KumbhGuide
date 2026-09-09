import {
  Train,
  Bus,
  Plane,
  MapPin,
  ExternalLink,
  Info,
  ArrowRight,
  Clock,
  Route,
  Hotel,
  ShieldCheck,
  CalendarDays,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title:
    'Nashik Kumbh Mela 2027 Travel Guide | How to Reach Nashik by Train, Bus & Air',
  description:
    'Complete Nashik Kumbh Mela 2027 travel guide covering how to reach Nashik by train, bus and air, Nashik Road Railway Station, CBS Bus Stand, Ozar Airport, local transport and travel planning tips.',
  keywords: [
    'Nashik Kumbh Mela travel guide',
    'Nashik Kumbh Mela 2027 travel',
    'how to reach Nashik Kumbh Mela',
    'how to reach Nashik',
    'Nashik railway station',
    'Nashik Road Railway Station',
    'Nashik bus stand',
    'Nashik CBS bus stand',
    'Nashik airport',
    'Ozar Airport Nashik',
    'Nashik Kumbh Mela transportation',
    'Nashik travel guide',
  ],
  alternates: {
    canonical: 'https://kumbhnashikguide.com/travel',
  },
  openGraph: {
    title:
      'Nashik Kumbh Mela 2027 Travel Guide | Train, Bus & Air',
    description:
      'Plan your journey to Nashik for Kumbh Mela 2027 with this practical guide to trains, buses, flights, local transport and important travel tips.',
    url: 'https://kumbhnashikguide.com/travel',
    siteName: 'Nashik Kumbh Guide',
    type: 'website',
    images: [
      {
        url: 'https://kumbhnashikguide.com/images/train.jpg',
        width: 1200,
        height: 630,
        alt: 'Travel to Nashik Kumbh Mela by train',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Nashik Kumbh Mela 2027 Travel Guide | Train, Bus & Air',
    description:
      'How to reach Nashik for Kumbh Mela 2027 by train, bus and air, with local transport and travel planning tips.',
    images: ['https://kumbhnashikguide.com/images/train.jpg'],
  },
};

export const revalidate = 3600;

const transportOptions = [
  {
    type: 'railway',
    icon: Train,
    title: 'Nashik Road Railway Station',
    badge: 'Railway',
    image: '/images/train.jpg',
    imageAlt:
      'Nashik Road Railway Station travel option for Nashik Kumbh Mela 2027',
    description:
      'Nashik Road Railway Station is the main railway gateway for travellers visiting Nashik. It has rail connectivity with Mumbai, Pune, Delhi and other major cities across India.',
    distance: 'Approximately 10 km from Ramkund',
    details: [
      'Taxis, autos and buses are available for onward travel.',
      'Allow additional time during major Kumbh bathing days.',
      'Check Indian Railways for the latest train schedules and availability.',
      'Book tickets early when travelling during the Kumbh period.',
    ],
    mapUrl:
      'https://maps.google.com/?q=Nashik+Road+Railway+Station',
    color: 'blue',
    href: '/blog/nashik-kumbh-mela-railway-guide',
  },
  {
    type: 'bus',
    icon: Bus,
    title: 'Nashik CBS Bus Stand',
    badge: 'Bus',
    image: '/images/bus.jpg',
    imageAlt:
      'Nashik CBS Bus Stand for travellers visiting Nashik Kumbh Mela 2027',
    description:
      'Nashik Central Bus Stand (CBS) is an important road-transport hub for travellers arriving from Nashik, Pune, Mumbai, Shirdi and surrounding areas. MSRTC services connect Nashik with many destinations.',
    distance: 'Approximately 3 km from Ramkund',
    details: [
      'Autos and local transport are available around the bus stand.',
      'MSRTC buses connect Nashik with major cities and nearby towns.',
      'Mahamarg Bus Stand may be used for selected intercity services.',
      'Expect heavier traffic and crowds during the Kumbh period.',
    ],
    mapUrl:
      'https://maps.google.com/?q=Nashik+CBS+Bus+Stand',
    color: 'green',
    href: '/blog/nashik-kumbh-mela-bus-travel-guide',
  },
  {
    type: 'airport',
    icon: Plane,
    title: 'Nashik Airport (Ozar)',
    badge: 'Airport',
    image: '/images/airport.jpg',
    imageAlt:
      'Nashik Airport Ozar travel option for Nashik Kumbh Mela 2027',
    description:
      'Nashik Airport, also known as Ozar Airport, is the city’s airport option for travellers arriving by air. Flight schedules and routes can change, so check current airline and airport information before travelling.',
    distance: 'Approximately 25 km from Nashik city',
    details: [
      'Taxi and private road-transfer options are available for onward travel.',
      'Check current flight schedules before planning your journey.',
      'Mumbai Airport provides a wider range of domestic and international connections.',
      'Allow extra road-travel time during large Kumbh gatherings.',
    ],
    mapUrl:
      'https://maps.google.com/?q=Nashik+Ozar+Airport',
    color: 'orange',
    href: '/blog/nashik-kumbh-mela-air-travel-guide',
  },
];

const colorClasses = {
  blue: {
    badge: 'bg-blue-100 text-blue-700',
    icon: 'bg-blue-100 text-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
    border: 'border-blue-100',
  },
  green: {
    badge: 'bg-green-100 text-green-700',
    icon: 'bg-green-100 text-green-700',
    button: 'bg-green-600 hover:bg-green-700',
    border: 'border-green-100',
  },
  orange: {
    badge: 'bg-orange-100 text-orange-700',
    icon: 'bg-orange-100 text-orange-700',
    button: 'bg-orange-600 hover:bg-orange-700',
    border: 'border-orange-100',
  },
};

const faqs = [
  {
    question: 'How can I reach Nashik for Kumbh Mela 2027?',
    answer:
      'Nashik can be reached by railway, road and air. Nashik Road Railway Station is the main rail gateway, while CBS and other bus terminals provide road connectivity. Nashik Airport at Ozar is the city’s airport option. Travellers should check the latest transport schedules before their journey.',
  },
  {
    question: 'Which railway station is closest to Nashik Kumbh Mela?',
    answer:
      'Nashik Road Railway Station is the principal railway station serving Nashik. It is approximately 10 km from Ramkund, although the actual travel time can vary considerably depending on traffic and Kumbh-period restrictions.',
  },
  {
    question: 'Which bus stand should I use to reach Nashik?',
    answer:
      'Nashik CBS is an important central bus terminal and is approximately 3 km from Ramkund. During large events, different bus terminals or temporary transport arrangements may be used, so travellers should check official announcements close to their travel date.',
  },
  {
    question: 'Does Nashik have an airport?',
    answer:
      'Yes. Nashik Airport at Ozar serves the city. Flight routes and schedules can change, so travellers should verify the latest available flights before booking. Mumbai Airport is another option for travellers requiring a wider range of domestic and international connections.',
  },
  {
    question: 'Will transportation be different during Nashik Kumbh Mela 2027?',
    answer:
      'Large crowds can lead to traffic restrictions, route changes, additional public transport services and temporary pilgrim-management arrangements. Specific Kumbh-period services and routes should be confirmed through official announcements as the event approaches.',
  },
];

export default function TravelPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kumbhnashikguide.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Travel',
        item: 'https://kumbhnashikguide.com/travel',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Nashik Kumbh Mela 2027 Travel Guide: How to Reach Nashik by Train, Bus and Air',
    description:
      'A practical travel guide for reaching Nashik during Kumbh Mela 2027 by train, bus and air, including local transportation and planning tips.',
    image: 'https://kumbhnashikguide.com/images/train.jpg',
    author: {
      '@type': 'Organization',
      name: 'Nashik Kumbh Guide',
      url: 'https://kumbhnashikguide.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nashik Kumbh Guide',
      url: 'https://kumbhnashikguide.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kumbhnashikguide.com/images/kumbha.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kumbhnashikguide.com/travel',
    },
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm ring-1 ring-green-100">
              <Route className="h-4 w-4" />
              Nashik Kumbh Mela 2027 Travel Guide
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              How to Reach Nashik for Kumbh Mela 2027
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
              Plan your journey to Nashik–Trimbakeshwar with this practical
              guide to trains, buses, flights, local transport and important
              travel tips for Kumbh Mela 2027.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#transport">
                <Button className="w-full bg-orange-600 px-6 hover:bg-orange-700 sm:w-auto">
                  Explore Transport
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027">
                <Button
                  variant="outline"
                  className="w-full px-6 sm:w-auto"
                >
                  First-Time Pilgrim Guide
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-green-50 p-5 text-center">
            <Train className="mx-auto mb-2 h-6 w-6 text-green-700" />
            <p className="text-sm font-semibold text-gray-900">
              By Train
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Nashik Road
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-5 text-center">
            <Bus className="mx-auto mb-2 h-6 w-6 text-blue-700" />
            <p className="text-sm font-semibold text-gray-900">
              By Bus
            </p>
            <p className="mt-1 text-xs text-gray-600">
              CBS & road routes
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 p-5 text-center">
            <Plane className="mx-auto mb-2 h-6 w-6 text-orange-700" />
            <p className="text-sm font-semibold text-gray-900">
              By Air
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Ozar Airport
            </p>
          </div>

          <div className="rounded-2xl bg-red-50 p-5 text-center">
            <MapPin className="mx-auto mb-2 h-6 w-6 text-red-700" />
            <p className="text-sm font-semibold text-gray-900">
              Local Travel
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Autos, buses & taxis
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Before You Travel
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Plan Your Journey to Nashik Kumbh Mela
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Nashik is connected to major cities by rail and road, while
              Nashik Airport at Ozar provides an air-travel option. During
              Kumbh Mela, the volume of pilgrims can significantly affect
              road traffic, station access and local movement.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              The best transport option depends on where you are travelling
              from, your arrival time and your destination within Nashik or
              Trimbakeshwar. Always check the latest transport schedules and
              official Kumbh-period announcements before starting your trip.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPORT OPTIONS */}
      <section
        id="transport"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Main Transport Options
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Reach Nashik by Train, Bus or Air
            </h2>

            <p className="mt-4 text-gray-600">
              Choose the travel option that best fits your starting city,
              budget and Kumbh Mela itinerary.
            </p>
          </div>

          <div className="space-y-10">
            {transportOptions.map((option) => {
              const Icon = option.icon;
              const colors =
                colorClasses[
                  option.color as keyof typeof colorClasses
                ];

              return (
                <Card
                  key={option.type}
                  className={`overflow-hidden border ${colors.border} shadow-sm transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* IMAGE */}
                    <div className="relative min-h-[280px] lg:col-span-2 lg:min-h-full">
                      <img
                        src={option.image}
                        alt={option.imageAlt}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute left-5 top-5">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ${colors.icon}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <CardContent className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-500">
                            Nashik Kumbh Mela Transportation
                          </p>

                          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {option.title}
                          </h3>
                        </div>

                        <span
                          className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${colors.badge}`}
                        >
                          {option.badge}
                        </span>
                      </div>

                      <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                        {option.description}
                      </p>

                      <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                        <div className="flex items-center gap-2">
                          <Info
                            className={`h-5 w-5 ${colors.icon.split(' ')[1]}`}
                          />

                          <h4 className="font-semibold text-gray-900">
                            Travel Information
                          </h4>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-700">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          {option.distance}
                        </div>

                        <ul className="mt-4 space-y-2">
                          {option.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:flex-wrap">
                        <a
                          href={option.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            className={`${colors.button} w-full text-white sm:w-auto`}
                          >
                            <MapPin className="mr-2 h-4 w-4" />
                            View on Google Maps
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>

                        <a href={option.href}>
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto"
                          >
                            Read Detailed Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL TRANSPORT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Getting Around Nashik
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Local Transportation During Kumbh Mela
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Once you arrive in Nashik, local travel may involve
                autos, taxis, city buses and event-specific transport
                arrangements. During major bathing days, travel times can
                increase significantly because of crowd movement and
                traffic controls.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Bus className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Local buses
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Useful for connecting different parts of Nashik.
                      Routes and operations can change during large events.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Autos and taxis
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Useful for shorter journeys, but availability,
                      pricing and access may vary during peak periods.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Route className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Kumbh-period arrangements
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Temporary shuttle, parking, route and crowd-management
                      arrangements may be introduced for pilgrims.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-green-50 via-white to-orange-50 shadow-sm">
              <CardContent className="p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <ShieldCheck className="h-7 w-7 text-green-700" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Important for Kumbh Travellers
                </h3>

                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-600">
                      Check official traffic and transport instructions before
                      leaving for major bathing days.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-600">
                      Keep additional time for transfers between transport
                      hubs and pilgrimage areas.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-600">
                      Follow police, Kumbh administration and local traffic
                      directions.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-600">
                      Save your accommodation address and important
                      contact details offline.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MAJOR CITY DISTANCES */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Road Travel
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Approximate Distance to Nashik
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Road distance and travel time can vary depending on your route,
              traffic and Kumbh-period restrictions. Treat these figures as
              approximate planning references.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="divide-y divide-gray-100">
              {[
                ['Mumbai', '~165 km', 'Approx. 3–4 hours'],
                ['Pune', '~210 km', 'Approx. 4–5 hours'],
                ['Aurangabad', '~180 km', 'Approx. 4 hours'],
                ['Shirdi', '~90 km', 'Approx. 2 hours'],
              ].map(([city, distance, time]) => (
                <div
                  key={city}
                  className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>

                    <span className="font-semibold text-gray-900">
                      {city}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-6">
                    <span className="font-medium text-gray-700">
                      {distance}
                    </span>

                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      {time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL PLANNING */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Smart Travel Planning
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Nashik Kumbh Mela Travel Tips
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <CalendarDays className="h-7 w-7 text-orange-600" />

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Book Early
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Demand for trains, buses and accommodation can increase
                  substantially around major Kumbh dates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <Clock className="h-7 w-7 text-green-600" />

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Allow Extra Time
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Avoid planning tight connections because traffic and
                  pedestrian movement may slow local journeys.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <ShieldCheck className="h-7 w-7 text-blue-600" />

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Follow Instructions
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Follow official police, traffic and Kumbh administration
                  directions, especially around crowded pilgrimage zones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <Hotel className="h-7 w-7 text-red-600" />

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Plan Your Stay
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Choose accommodation based on your pilgrimage itinerary,
                  transport access and expected crowd conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Continue Planning
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Nashik Kumbh Mela Travel Guides
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore detailed guides before planning your Nashik–Trimbakeshwar
              pilgrimage.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Nashik Kumbh Mela Railway Guide',
                href: '/blog/nashik-kumbh-mela-railway-guide',
                icon: Train,
              },
              {
                title: 'Nashik Kumbh Mela Bus Travel Guide',
                href: '/blog/nashik-kumbh-mela-bus-travel-guide',
                icon: Bus,
              },
              {
                title: 'Nashik Kumbh Mela Air Travel Guide',
                href: '/blog/nashik-kumbh-mela-air-travel-guide',
                icon: Plane,
              },
              {
                title: 'Where to Stay in Nashik',
                href: '/blog/where-to-stay-nashik-kumbh-mela',
                icon: Hotel,
              },
              {
                title: 'Nashik Kumbh Mela 2027 Dates',
                href: '/blog/nashik-kumbhmela-2027-tarikh',
                icon: CalendarDays,
              },
              {
                title: 'First-Time Pilgrim Guide',
                href: '/blog/first-time-pilgrim-guide-nashik-kumbh-mela-2027',
                icon: MapPin,
              },
            ].map((guide) => {
              const Icon = guide.icon;

              return (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="group"
                >
                  <Card className="h-full border-white/70 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {guide.title}
                        </h3>

                        <span className="mt-1 inline-flex items-center text-sm font-medium text-orange-600">
                          Read Guide
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Travelling to Nashik Kumbh Mela
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 open:bg-white"
              >
                <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900 marker:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>

                    <span className="text-xl text-orange-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Planning Your Nashik Kumbh Mela 2027 Visit?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Check the dates, accommodation, pilgrimage places and practical
            travel information before you begin your journey.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/blog/nashik-kumbhmela-2027-tarikh">
              <Button className="w-full bg-orange-600 text-white hover:bg-orange-700 sm:w-auto">
                Check Kumbh Dates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href="/blog/where-to-stay-nashik-kumbh-mela">
              <Button
                variant="outline"
                className="w-full border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:text-white sm:w-auto"
              >
                Find Accommodation
                <Hotel className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}