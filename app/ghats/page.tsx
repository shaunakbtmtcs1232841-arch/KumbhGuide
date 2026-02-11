import { Waves, MapPin, ExternalLink, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { supabase, Ghat } from '@/lib/supabase';

export const metadata = {
  title: 'Holy Ghats in Nashik | Nashik Kumbh Guide',
  description: 'Explore holy bathing ghats along the Godavari River including Ramkund, Kushavarta Kund, and other sacred bathing sites.',
};

export const revalidate = 3600;

// async function getGhats() {
//   const { data, error } = await supabase
//     .from('ghats')
//     .select('*')
//     .order('display_order', { ascending: true });

//   if (error) {
//     console.error('Error fetching ghats:', error);
//     return [];
//   }

//   return data as Ghat[];
// }

export default function GhatsPage() {
  // const ghats = await getGhats();

  return (
    <div className="relative">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Holy Ghats
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Sacred bathing sites along the Godavari River
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* {ghats.map((ghat, index) => ( */}
              <Card
                // key={ghat.id}
                className="overflow-hidden transition-all hover:shadow-xl duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                 <div className="lg:col-span-2">
                  <img
                    src="/images/ramkundd.jpg"
                    alt="Ramkund Ghat"
                    className="w-full h-full object-cover"
                  />
                </div>


                  <CardContent className="lg:col-span-3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">
                       Ramkund Ghat
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        Ghat 1
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Droplets className="h-5 w-5 mr-2 text-blue-600" />
                        About This Ghat
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                         Ramkund is the most sacred bathing ghat in Nashik and holds great
                        spiritual importance during the Kumbh Mela. Devotees take holy dips
                        here believing it washes away sins and grants blessings.                    
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Ritual Context
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        During Kumbh Mela, thousands of pilgrims gather at Ramkund for the
                        sacred Shahi Snan. Many important religious rituals and prayers are
                        performed here by saints and devotees.
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href="https://maps.google.com/?q=Ramkund+Nashik"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Bathing Guidelines
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-700 text-xs">✓</span>
                </span>
                <span>
                  Bathe early in the morning for the most auspicious experience
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-700 text-xs">✓</span>
                </span>
                <span>Keep valuables secure and in waterproof containers</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-700 text-xs">✓</span>
                </span>
                <span>
                  Follow crowd management instructions from authorities
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-700 text-xs">✓</span>
                </span>
                <span>
                  Be mindful of water depth and currents, especially if
                  swimming is not your strength
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-700 text-xs">✓</span>
                </span>
                <span>
                  Help keep the ghats clean by not littering or polluting the
                  sacred waters
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-700 text-xs">✓</span>
                </span>
                <span>
                  During Kumbh Mela, expect large crowds on auspicious bathing
                  days
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Best Time to Visit
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For a peaceful experience, visit the ghats during early morning
              hours (before 7 AM) or late evening (after 6 PM). During Kumbh
              Mela, main bathing dates see maximum crowds. Plan accordingly and
              arrive early if visiting on auspicious days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
