'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import { ArrowRight, MapPin, Mountain, Waves, Bus, Bell, Calendar, Star, Droplet, Sun, Moon, Flag, Sparkles, Info, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


export default function Home() {

  const [active, setActive] = useState({
  name: "Ramkund",
  img: "/images/ramkund.jpg"
});

  return (
    <div className="relative bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section with Image Space */}
      <section className="relative overflow-hidden">
        {/* Image Placeholder - Replace with actual Kumbh image */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gradient-to-br from-orange-500 via-red-500 to-yellow-600 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-5 w-5 text-orange-600 mr-2 animate-pulse" />
              <span className="text-sm font-bold text-orange-600">Nashik-Trimbakeshwar Kumbh Mela 2026-2028</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Welcome to Nashik Kumbh
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-orange-100 mb-3 font-semibold animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              नाशिक कुंभमेळा
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Your complete guide to the sacred pilgrimage on the banks of the holy Godavari River. Find all information, dates, temples, ghats, and travel details in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-base sm:text-lg px-8 py-6 shadow-2xl font-semibold"
                onClick={() => document.getElementById('important-dates')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Important Dates
              </Button>
              <Button
                size="lg"
                className="bg-orange-600/95 text-white border-2 border-white hover:bg-orange-700 text-base sm:text-lg px-8 py-6 shadow-2xl font-semibold"
                onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section - Most Critical Information */}
      <section id="important-dates" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Star className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold text-white">Essential Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Important Dates 2026-2028
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto">
              Mark your calendar for these sacred occasions
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            {/* Amrit Snan - Most Important */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Amrit Snan - Holy Baths</h3>
              </div>
              <p className="text-center text-orange-100 text-sm sm:text-base">Most auspicious bathing days for spiritual purification</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8">
              {/* First Amrit Snan */}
              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 rounded-full p-3 mr-3">
                      <Sun className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-600 font-semibold">First Amrit Snan</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">August 2, 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Ashadh Somvati Amavasya (Monday)</p>
                  <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Location: Godavari River</p>
                </CardContent>
              </Card>

              {/* Second Amrit Snan */}
              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 rounded-full p-3 mr-3">
                      <Moon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-600 font-semibold">Second Amrit Snan</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">August 31, 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Shravan Amavasya</p>
                  <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Location: Godavari River</p>
                </CardContent>
              </Card>

              {/* Third Amrit Snan */}
              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-100 rounded-full p-3 mr-3">
                      <Waves className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-orange-600 font-semibold">Third Amrit Snan</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">September 11, 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Bhadrapada Shuddha Ekadashi</p>
                  <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Location: Panchvati</p>
                </CardContent>
              </Card>

              {/* Fourth Amrit Snan */}
              {/* <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"> */}
                {/* <CardContent className="p-5 sm:p-6"> */}
                  {/* <div className="flex items-center mb-3"> */}
                    {/* <div className="bg-orange-100 rounded-full p-3 mr-3"> */}
                      {/* <Sparkles className="h-6 w-6 text-orange-600" /> */}
                    {/* </div> */}
                    {/* <div> */}
                      {/* <p className="text-xs sm:text-sm text-orange-600 font-semibold">Fourth Amrit Snan</p> */}
                      {/* <p className="text-lg sm:text-xl font-bold text-gray-900">October 11 & 15, 2027</p> */}
                    {/* </div> */}
                  {/* </div> */}
                  {/* <p className="text-sm text-gray-700 mb  -2">Ashwin Shudh Ekadashi & Purnima</p> */}
                  {/* <p className="text-xs sm:text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">Two auspicious dates</p> */}
                {/* </CardContent> */}
              {/* </Card> */}
            </div>

            {/* Complete Timeline Table */}
            <div className="px-4 sm:px-8 pb-6 sm:pb-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center flex items-center justify-center">
                  <Calendar className="h-6 w-6 mr-2 text-orange-600" />
                  Complete Event Calendar
                </h4>

                <div className="space-y-3 sm:space-y-4">
                  {/* Key Events */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">October 31, 2026</p>
                          <p className="text-xs sm:text-sm text-gray-600">Flag Hoisting - Kumbh Parva Begins</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">July 24, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Akhara Flag Hoisting (Ashadha Krishna Panchami)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">July 29, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Nagar Pradakshina</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <div className="flex items-start">
                        <Star className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">September 5, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Rishi Panchami</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                      <div className="flex items-start">
                        <Sparkles className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">November 10 & 14, 2027</p>
                          <p className="text-xs sm:text-sm text-gray-600">Kartik Shudh Ekadashi & Purnima</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                      <div className="flex items-start">
                        <Moon className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">January 26, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Mouni Amavasya</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-500">
                      <div className="flex items-start">
                        <Star className="h-5 w-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">February 1, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Vasant Panchami</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                      <div className="flex items-start">
                        <Waves className="h-5 w-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">February 8, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Ganga Godavari Mahotsav</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-600">
                      <div className="flex items-start">
                        <Mountain className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">February 27, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Maha Shivratri</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                      <div className="flex items-start">
                        <Waves className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">May 25 - June 2, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Ganga Dussehra Utsav</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-600">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">July 24, 2028</p>
                          <p className="text-xs sm:text-sm text-gray-600">Official Conclusion - Flag Lowering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Kumbh Section - Scrollable Information */}
      <section id="about-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Nashik Kumbh Mela
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the world&apos;s largest peaceful gathering
            </p>
          </div>

          {/* Image Space for Kumbh Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
  <Card className="overflow-hidden shadow-xl">
    <div className="relative h-64 sm:h-80 bg-red-200">
      <Image
  src="/images/trimbakeshwar_fixed.jpg"
  alt="Trimbakeshwar Jyotirlinga"
  fill
  className="object-cover"
/>

      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="p-4 text-white">
          <p className="text-lg font-semibold">Trimbakeshwar Jyotirlinga</p>
          <p className="text-sm opacity-90 mt-1">
            One of the 12 Jyotirlingas
          </p>
        </div>
      </div>
    </div>
  </Card>

  <Card className="overflow-hidden shadow-xl">
    <div className="relative h-64 sm:h-80">
      <Image
  src="/images/godavari_fixed.png"
  alt="Godavari River Nashik"
  fill
  className="object-cover"
/>
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="p-4 text-white">
          <p className="text-lg font-semibold">Godavari River</p>
          <p className="text-sm opacity-90 mt-1">
            Sacred river of Nashik
          </p>
        </div>
      </div>
    </div>
  </Card>
</div>



          {/* Key Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Held Every 12 Years</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kumbh Mela at Nashik occurs once every twelve years, with Ardh Kumbh (half Kumbh) held every six years. The timing is determined by astrological positions of Jupiter and the Sun.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Droplet className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Holy Godavari River</h3>
                <p className="text-gray-600 leading-relaxed">
                  The sacred Godavari River, originating from Trimbakeshwar, is considered one of the holiest rivers in India. Bathing in its waters during Kumbh is believed to wash away sins.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Millions of Pilgrims</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Nashik Kumbh Mela attracts millions of devotees from across India and the world. The gathering includes saints, sadhus, and pilgrims seeking spiritual blessings.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mythological Significance */}
          <Card className="mt-8 sm:mt-12 shadow-xl">
            <CardContent className="p-6 sm:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 rounded-full p-4 mr-4">
                  <Sparkles className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">The Legend of Amrit</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                According to Hindu mythology, during the churning of the ocean (Samudra Manthan) by gods and demons to obtain the nectar of immortality (amrit), drops of the nectar fell at four places: Prayagraj, Haridwar, Ujjain, and Nashik (Trimbakeshwar). These four places are where Kumbh Mela is celebrated. The sacred gathering offers devotees a chance to cleanse their sins and attain spiritual merit by bathing in the holy waters during auspicious times.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== MUST VISIT PLACES SECTION ===== */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Must Visit Places During Kumbh
    </h2>

    {/* tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {[
        { name: "Ramkund", img: "/images/ramkund.jpg" },
        { name: "Tapovan", img: "/images/tapovan.jpg" },
        { name: "Panchavati", img: "/images/panchavati.jpg" },
        { name: "Someshwar Temple", img: "/images/someshwar.jpg" },
        { name: "Godavari River", img: "/images/godavari.jpg" },
        { name: "Gangapur Dam", img: "/images/gangapur.jpg" },
        { name: "Sita Gufa", img: "/images/sitagufa.jpg" },
        { name: "Kalaram Temple", img: "/images/kalaram.jpg" },
        { name: "Naroshankar Temple", img: "/images/naroshankar.jpg" },
        { name: "Trimbakeshwar Jyotirlinga", img: "/images/trimbak.jpg" },
        { name: "Pandavleni Caves", img: "/images/pandavleni.jpg" }
      ].map((place, i) => (
        <button
          key={i}
          onClick={() => setActive(place)}
          className={`px-5 py-2 rounded-full border font-medium transition 
          ${active.name === place.name 
            ? "bg-orange-500 text-white" 
            : "bg-white text-gray-700 hover:bg-orange-100"}`}
        >
           {place.name}
        </button>
      ))}
    </div>

    {/* image display */}
    <div className="rounded-2xl overflow-hidden shadow-xl border">
      <img
        src={active.img}
        alt={active.name}
        className="w-full h-[450px] object-cover transition-all duration-500"
      />
    </div>

  </div>
</section>


      {/* Sacred Sites - Visual Guide */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Plan Your Sacred Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for a blessed pilgrimage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link href="/temples">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                        src="/images/kalramtemp.jpg"
                        alt="Sacred Temples of Nashik"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Sacred Temples
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Visit ancient temples including Trimbakeshwar Jyotirlinga, Kalaram Temple, and other significant shrines.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      Explore Temples
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/ghats">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/ramkund.jpg"
                      alt="Holy Ghats of Nashik"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Holy Ghats
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Take sacred dips at Ramkund, Kushavarta Kund, and other holy bathing ghats along the Godavari River.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      View Ghats
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/travel">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/travel.jpg"
                      alt="Travel Guide Nashik Kumbh"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Travel Guide
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Information about railway station, bus stand, airport, and getting around Nashik during Kumbh Mela.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      Travel Info
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/snan.jpg"
                      alt="About Nashik Kumbh"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      About Kumbh
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Learn about the history, significance, and traditions of the Nashik-Trimbakeshwar Kumbh Mela.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/updates">
              <Card className="group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src="/images/update.jpg"
                      alt="Latest Updates Nashik Kumbh"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Latest Updates
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Stay informed with official announcements, dates, and important information about Kumbh Mela.
                    </p>
                    <span className="text-orange-600 font-semibold group-hover:underline inline-flex items-center text-base">
                      View Updates
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-300 backdrop-blur-md bg-white/70 border border-white/40 shadow-xl h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center h-full">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Info className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                  Important Notice
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                  All information on this website is sourced from official announcements. Please verify dates and arrangements with local authorities before planning your visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About This Guide */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About This Guide
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
                This website is created and maintained by a local resident of Nashik to help pilgrims and visitors navigate the sacred Nashik-Trimbakeshwar Kumbh Mela. Designed specifically for mobile access, all information is regularly updated based on official sources from the Maharashtra Government and Nashik District Administration.
              </p>
              <div className="inline-flex items-center bg-orange-100 px-6 py-3 rounded-full">
                <span className="text-lg font-semibold text-orange-700">
                  Jai Shri Ram • Har Har Mahadev
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="mt-10 border-t pt-6">
<p className="font-semibold mb-2">Explore More:</p>

<ul className="space-y-2 text-orange-600">
<li><Link href="/">Home</Link></li>
<li><Link href="/temples">Sacred Temples</Link></li>
<li><Link href="/ghats">Holy Ghats</Link></li>
<li><Link href="/travel">Travel Guide</Link></li>
<li><Link href="/about">About Kumbh</Link></li>
</ul>
</div>

    </div>
  );
}
