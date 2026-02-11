import { MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { supabase, Temple } from '@/lib/supabase';

export const metadata = {
  title: 'Sacred Temples in Nashik | Nashik Kumbh Guide',
  description: 'Explore sacred temples in Nashik including Trimbakeshwar Jyotirlinga, Kalaram Temple, and other significant shrines.',
};

export const revalidate = 3600;

// // async function getTemples() {
//   const { data, error } = await supabase
//     .from('temples')
//     .select('*')
//     .order('display_order', { ascending: true });

//   if (error) {
//     console.error('Error fetching temples:', error);
//     return [];
//   }

//   return data as Temple[];
// }

export default function TemplesPage() {
  // const temples = await getTemples();

  return (
    <div className="relative">
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Sacred Temples
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Visit the holy shrines of Nashik-Trimbakeshwar
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* {temples.map((temple, index) => ( */}
              <Card
                // key={temple.id}
                className="group overflow-hidden transition-all duration-500 
                hover:shadow-2xl hover:-translate-y-2 
                bg-white border border-orange-100"
>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2">
                    <img
                      src="/images/trimbakeshwakmb.jpg"
                      alt="Trimbakeshwar Temple"
                      className="w-full h-full object-cover"
                    />
                  </div>


                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900 
                                    transition-all duration-300 group-hover:text-orange-600">

                    Trimbakeshwar Jyotirlinga
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                        Temple 1
                      </span>
                    </div>

                    <div className="flex items-start text-gray-600 mb-6">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Trimbak, Nashik, Maharashtra
                      </span>
                    </div>

                    <div className="prose prose-gray max-w-none mb-8">
                      <p className="text-gray-600 leading-relaxed">
                        Trimbakeshwar Temple is one of the twelve Jyotirlingas of Lord Shiva and
                        is among the most sacred pilgrimage sites in India. Located near the
                        origin of the Godavari River, it holds immense spiritual significance
                        during the Nashik Kumbh Mela.
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=Trimbakeshwar+Temple"

                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white 
                                w-full sm:w-auto shadow-lg hover:shadow-orange-300/50 
                                hover:scale-105 transition-all duration-300">

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
                // key={temple.id}
                className="group overflow-hidden transition-all duration-500 
                            hover:shadow-2xl hover:-translate-y-2 
                            bg-white border border-orange-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2">
                    <img
                      src="/images/kalaram.jpg"
                      alt="Kalaram Temple"
                      className="w-full h-full object-cover"
                    />
                  </div>


                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900 
                                    transition-all duration-300 group-hover:text-orange-600">

                    Kalaram Temple
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                        Temple 2
                      </span>
                    </div>

                    <div className="flex items-start text-gray-600 mb-6">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Panchvati, Nashik, Maharashtra
                      </span>
                    </div>

                    <div className="prose prose-gray max-w-none mb-8">
                      <p className="text-gray-600 leading-relaxed">
                        The Kalaram Mandir in Nashik, Maharashtra, is a significant temple dedicated to Lord Rama. This is the place where Lord Rama, Sita, and Lakshmana stayed during their exile in Panchavati. Devotees believe visiting the temple strengthens faith, dharma, and devotion.
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=kalaram+Temple"

                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white 
                                w-full sm:w-auto shadow-lg hover:shadow-orange-300/50 
                                hover:scale-105 transition-all duration-300">

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
                // key={temple.id}
                className="group overflow-hidden transition-all duration-500 
                            hover:shadow-2xl hover:-translate-y-2 
                            bg-white border border-orange-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2">
                    <img
                      src="/images/naroshankar.jpg"
                      alt="Naroshankar Temple"
                      className="w-full h-full object-cover"
                    />
                  </div>


                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900 
                                    transition-all duration-300 group-hover:text-orange-600">

                    Naroshankar Temple
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                        Temple 3
                      </span>
                    </div>

                    <div className="flex items-start text-gray-600 mb-6">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Panchvati, Nashik, Maharashtra
                      </span>
                    </div>

                    <div className="prose prose-gray max-w-none mb-8">
                      <p className="text-gray-600 leading-relaxed">
                        The temple complex once housed a court, highlighting its historical significance in local governance. Though weathered by time, the Naroshankara Temple remains a testament to Nashik's rich cultural heritage, offering a glimpse into its storied past. A must-see for any history enthusiast visiting Nashik.                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=naroshankar+Temple"

                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white 
                                w-full sm:w-auto shadow-lg hover:shadow-orange-300/50 
                                hover:scale-105 transition-all duration-300">

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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Temple Visit Guidelines
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-700 text-xs">✓</span>
                </span>
                <span>Dress modestly and respectfully when visiting temples</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-700 text-xs">✓</span>
                </span>
                <span>Remove footwear before entering temple premises</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-700 text-xs">✓</span>
                </span>
                <span>Follow photography restrictions where applicable</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-700 text-xs">✓</span>
                </span>
                <span>
                  Maintain silence and respect the sanctity of religious spaces
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-700 text-xs">✓</span>
                </span>
                <span>
                  Visit during non-peak hours for a more peaceful experience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
