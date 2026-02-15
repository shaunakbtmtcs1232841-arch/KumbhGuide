import { Calendar, MapPin, Users, Droplets, Sparkles, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'About Nashik Kumbh Mela | History & Significance',
  description: 'Learn about the history, significance, and traditions of Nashik-Trimbakeshwar Kumbh Mela, one of the four sacred Kumbh Mela sites.',
};

export default function AboutPage() {
  return ( 
    <div className="relative">
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="mx-auto max-w-7xl px-4 + sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Nashik Kumbh Mela
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Understanding the Sacred Gathering
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is Kumbh Mela?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kumbh Mela is the largest peaceful gathering of pilgrims on earth.
              It is a Hindu pilgrimage of faith in which Hindus gather to bathe in
              a sacred river. The festival is held at four locations in India:
              Prayagraj (Allahabad), Haridwar, Ujjain, and Nashik-Trimbakeshwar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Nashik-Trimbakeshwar Kumbh Mela is held on the banks of the holy
              Godavari River. It is believed that taking a dip in the sacred river
              during Kumbh Mela cleanses sins and brings spiritual merit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 
                  hover:from-orange-100 hover:to-orange-200 
                  border-orange-200 shadow-lg hover:shadow-2xl 
                  transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Held Every 12 Years
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kumbh Mela at Nashik occurs once every twelve years, with Ardh
                  Kumbh (half Kumbh) held every six years. The timing is
                  determined by astrological positions of Jupiter and the Sun.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 
                  hover:from-orange-100 hover:to-orange-200 
                  border-orange-200 shadow-lg hover:shadow-2xl 
                  transition-all duration-300 hover:-translate-y-1">

              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Holy Godavari River
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The sacred Godavari River, originating from Trimbakeshwar, is
                  considered one of the holiest rivers in India. Bathing in its
                  waters during Kumbh is believed to wash away sins.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 
                            hover:from-orange-100 hover:to-orange-200 
                            border border-orange-200 shadow-lg hover:shadow-2xl 
                            transition-all duration-300 hover:-translate-y-2 rounded-2xl">


              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Millions of Pilgrims
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Nashik Kumbh Mela attracts millions of devotees from across
                  India and the world. The gathering includes saints, sadhus, and
                  pilgrims seeking spiritual blessings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 
                  hover:from-orange-100 hover:to-orange-200 
                  border-orange-200 shadow-lg hover:shadow-2xl 
                  transition-all duration-300 hover:-translate-y-1">

              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sacred Sites
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Key locations include Ramkund in Nashik and Kushavarta Kund at
                  Trimbakeshwar. Both sites hold immense spiritual significance
                  and witness massive congregations during bathing days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 
                  hover:from-orange-100 hover:to-orange-200 
                  border-orange-200 shadow-lg hover:shadow-2xl 
                  transition-all duration-300 hover:-translate-y-1">

              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Auspicious Bathing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specific dates are considered more auspicious based on
                  astrological calculations. The main bathing days see the highest
                  participation from devotees and religious leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 
                  hover:from-orange-100 hover:to-orange-200 
                  border-orange-200 shadow-lg hover:shadow-2xl 
                  transition-all duration-300 hover:-translate-y-1">

              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Rich Traditions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The festival features religious discourses, cultural programs,
                  and various rituals. It provides a unique opportunity to witness
                  and participate in ancient Hindu traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Mythological Significance
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Legend of Amrit
              </h3>
              <p className="text-gray-700 leading-relaxed">
                According to Hindu mythology, during the churning of the ocean
                (Samudra Manthan) by gods and demons to obtain the nectar of
                immortality (amrit), drops of the nectar fell at four places:
                Prayagraj, Haridwar, Ujjain, and Nashik (Trimbakeshwar). These
                four places are where Kumbh Mela is celebrated.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Connection with Lord Rama
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nashik holds special significance as it is closely associated with
              the Ramayana. Lord Rama, along with Sita and Lakshmana, spent a
              significant period of their exile in Panchavati, Nashik. The Ramkund
              ghat is believed to be the place where Lord Rama bathed, making it
              one of the most sacred bathing spots.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trimbakeshwar Jyotirlinga
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Trimbakeshwar is home to one of the twelve Jyotirlingas, the most
              sacred abodes of Lord Shiva. The temple is also the source of the
              Godavari River, which emerges from the Brahmagiri mountain. This
              combination of Jyotirlinga and the origin of the holy river makes
              the Nashik-Trimbakeshwar region extremely significant for devotees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-600 text-sm font-semibold">1</span>
                </div>
                <p className="leading-relaxed">
                  Exact dates of Kumbh Mela are determined based on astrological
                  calculations and are announced officially by the government.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-600 text-sm font-semibold">2</span>
                </div>
                <p className="leading-relaxed">
                  The administration makes extensive arrangements for pilgrims,
                  including accommodation, medical facilities, security, and
                  sanitation.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-600 text-sm font-semibold">3</span>
                </div>
                <p className="leading-relaxed">
                  Visitors should follow all guidelines issued by local authorities
                  and respect the sanctity of the religious gathering.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-600 text-sm font-semibold">4</span>
                </div>
                <p className="leading-relaxed">
                  Plan your visit well in advance, especially for main bathing
                  days, as the city experiences very high footfall during this
                  period.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      
    </div>
  );
}
