import { Train, Bus, Plane, MapPin, ExternalLink, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { supabase, TravelLocation } from '@/lib/supabase';

export const metadata = {
  title: 'Travel Guide to Nashik | Nashik Kumbh Guide',
  description: 'Complete travel information for reaching Nashik including railway station, bus stand, and airport details with maps.',
};

export const revalidate = 3600;

// async function getTravelLocations() {
//   const { data, error } = await supabase
//     .from('travel_locations')
//     .select('*')
//     .order('display_order', { ascending: true });

//   if (error) {
//     console.error('Error fetching travel locations:', error);
//     return [];
//   }

//   return data as TravelLocation[];
// }

function getIcon(type: string) {
  switch (type) {
    case 'railway':
      return <Train className="h-8 w-8" />;
    case 'bus':
      return <Bus className="h-8 w-8" />;
    case 'airport':
      return <Plane className="h-8 w-8" />;
    default:
      return <MapPin className="h-8 w-8" />;
  }
}

function getColor(type: string) {
  switch (type) {
    case 'railway':
      return 'from-blue-100 to-indigo-100';
    case 'bus':
      return 'from-green-100 to-emerald-100';
    case 'airport':
      return 'from-orange-100 to-red-100';
    default:
      return 'from-gray-100 to-slate-100';
  }
}

function getBadgeColor(type: string) {
  switch (type) {
    case 'railway':
      return 'bg-blue-100 text-blue-700';
    case 'bus':
      return 'bg-green-100 text-green-700';
    case 'airport':
      return 'bg-orange-100 text-orange-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export default function TravelPage() {
  // const locations = await getTravelLocations();

  return (
    <div className="relative">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Travel Guide
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              How to reach Nashik for Kumbh Mela
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* {locations.map((location) => ( */}
              <Card
                // key={location.id}
                className="overflow-hidden transition-all hover:shadow-xl duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                 <div className="lg:col-span-2">
                  <img
                    src="/images/train.jpg"
                    alt="Nashik Railway Station"
                    className="w-full h-full object-cover"
                  />
                </div>


                    {/* <div className="text-center">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg mb-4 text-gray-700">
                        {getIcon(location.type)}
                      </div>
                      <p className="text-sm text-gray-600 mt-2 capitalize">
                        {location.type} Transportation
                      </p>
                    </div>
                  </div> */}

                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">
                    Nashik Road Railway Station
                      </h2>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700"
                      >
                        Railway
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                    Nashik Road Railway Station connects Nashik with Mumbai, Pune, Delhi and major cities. Special trains run during Kumbh Mela.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-blue-600" />
                        Travel Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                        Distance from Ramkund: 10km
                        Taxi and bus available
                        Heavy crowd during Kumbh
                        Book tickets early
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=Nashik+Road+Railway+Station"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          View on Google Maps
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>

              <Card
                // key={location.id}
                className="overflow-hidden transition-all hover:shadow-xl duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2">
                  <img
                    src="/images/bus.jpg"
                    alt="Nashik Bus Stand"
                    className="w-full h-full object-cover"
                  />
                </div>


                    {/* <div className="text-center">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg mb-4 text-gray-700">
                        {getIcon(location.type)}
                      </div>
                      <p className="text-sm text-gray-600 mt-2 capitalize">
                        {location.type} Transportation
                      </p>
                    </div>
                  </div> */}

                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">
                    Nashik CBS Bus Stand
                      </h2>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-700"
                      >
                        Bus
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                    Nashik Central Bus Stand (CBS) connects Nashik with Pune, Shirdi and nearby cities. MSRTC buses run frequently and special buses operate during Kumbh Mela for pilgrims . 
                      </p>
                      <ul className="list-disc ml-6 mt-2 text-gray-600 text-lg">
                        <li>Mahamarg Bus stand is specially used for transportation from Mumbai.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-green-600" />
                        Travel Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                       Distance from Ramkund: 3 km  
                      Auto and local buses easily available  
                      Frequent MSRTC buses from major cities  
                      Heavy rush during Kumbh Mela
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=Nashik+CBS+Bus+Stand"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          View on Google Maps
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>

              <Card
                // key={location.id}
                className="overflow-hidden transition-all hover:shadow-xl duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                 <div className="lg:col-span-2">
                  <img
                    src="/images/airport.jpg"
                    alt="Nashik Airport"
                    className="w-full h-full object-cover"
                  />
                </div>


                    {/* <div className="text-center">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg mb-4 text-gray-700">
                        {getIcon(location.type)}
                      </div>
                      <p className="text-sm text-gray-600 mt-2 capitalize">
                        {location.type} Transportation
                      </p>
                    </div>
                  </div> */}

                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">
                    Nashik Airport (Ozar)
                      </h2>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-orange-100 text-orange-700"
                      >
                        Airport
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                    Nashik Airport at Ozar connects the city with major destinations. Mumbai International Airport is the nearest major airport for national and international travellers visiting Nashik for Kumbh Mela.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-orange-600" />
                        Travel Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                       Distance from Nashik city: 25 km  
                       Taxi services available from airport  
                       Nearest international airport: Mumbai (170 km)  
                       Best option for long-distance travellers

                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=Nashik+Ozar+Airport"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="bg-orange-600 hover:bg-orange-700"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          View on Google Maps
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            {/* ))} */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Local Transportation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Auto-rickshaws and taxis are readily available throughout
                      the city
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Local MSRTC buses connect major areas within Nashik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      App-based cab services (Ola, Uber) operate in the city
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      During Kumbh Mela, special shuttle services may be arranged
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Travel Planning Tips
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Book train and bus tickets well in advance during Kumbh
                      period
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Carry sufficient cash as ATMs may run out during peak times
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Keep emergency contact numbers handy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>
                      Plan for extra travel time due to increased crowds
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Distance from Major Cities
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-medium">Mumbai</span>
                    <span>~165 km (3-4 hours)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-medium">Pune</span>
                    <span>~210 km (4-5 hours)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-medium">Aurangabad</span>
                    <span>~180 km (4 hours)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Shirdi</span>
                    <span>~90 km (2 hours)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Important Reminder
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  During Kumbh Mela, transportation facilities see extremely high
                  demand. The Maharashtra Government and Indian Railways typically
                  arrange additional trains and buses. Stay updated with official
                  announcements for special services and schedules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
