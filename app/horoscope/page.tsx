

const rashis = [
  {
    name: "Aries",
    hindi: "मेष",
    symbol: "♈",
    dates: "Mar 21 – Apr 19",
    gradient: "from-red-500 to-orange-500",
    colorDot: "bg-red-500",
    luckyColor: "Red",
    prediction:
      "Courage and confidence surge today. New professional opportunities will emerge — seize them boldly. Home atmosphere is warm and joyous. Avoid hasty decisions and reckless driving.",
    advice: "Recite the Hanuman Chalisa for protection and success today.",
  },
  {
    name: "Taurus",
    hindi: "वृषभ",
    symbol: "♉",
    dates: "Apr 20 – May 20",
    gradient: "from-green-500 to-emerald-500",
    colorDot: "bg-green-500",
    luckyColor: "Green",
    prediction:
      "Highly auspicious for investments in real estate or stocks. Love life blooms with romance. Monitor diet carefully — avoid junk food to prevent digestive issues.",
    advice: "Perform Lakshmi-Narayan Aarti to attract wealth and abundance.",
  },
  {
    name: "Gemini",
    hindi: "मिथुन",
    symbol: "♊",
    dates: "May 21 – Jun 20",
    gradient: "from-yellow-400 to-amber-500",
    colorDot: "bg-yellow-400",
    luckyColor: "Yellow",
    prediction:
      "Communication skills shine and open new doors. Workplace networking yields long-term gains. Short travels prove profitable. Understand your partner's emotional needs today.",
    advice: "Worship Lord Ganesha and donate green moong lentils to the needy.",
  },
  {
    name: "Cancer",
    hindi: "कर्क",
    symbol: "♋",
    dates: "Jun 21 – Jul 22",
    gradient: "from-sky-400 to-blue-500",
    colorDot: "bg-slate-300",
    luckyColor: "White",
    prediction:
      "Moon's strong influence makes you emotionally sensitive. Family shows deep affection and mother's health improves. Career is stable — control emotional outbursts at work.",
    advice: "Offer water on a Shivling and meditate on Chandra Dev for balance.",
  },
  {
    name: "Leo",
    hindi: "सिंह",
    symbol: "♌",
    dates: "Jul 23 – Aug 22",
    gradient: "from-amber-400 to-yellow-500",
    colorDot: "bg-yellow-500",
    luckyColor: "Golden",
    prediction:
      "Leadership and creativity dazzle today. Promotion or salary hike possible. Social prestige rises. Love life is pleasant and energy stays vibrant all day long.",
    advice: "Offer Arghya to the Sun God from a copper vessel at sunrise.",
  },
  {
    name: "Virgo",
    hindi: "कन्या",
    symbol: "♍",
    dates: "Aug 23 – Sep 22",
    gradient: "from-blue-500 to-indigo-500",
    colorDot: "bg-blue-500",
    luckyColor: "Blue",
    prediction:
      "Focus on health improvement and work efficiency. Pending tasks complete with ease. Financial gains in business and employment. Keep a close eye on unnecessary expenses.",
    advice: "Offer Durva grass to Lord Ganesha and seek his blessings.",
  },
  {
    name: "Libra",
    hindi: "तुला",
    symbol: "♎",
    dates: "Sep 23 – Oct 22",
    gradient: "from-pink-400 to-rose-500",
    colorDot: "bg-pink-400",
    luckyColor: "Pink",
    prediction:
      "Exceptional day for partnerships and joint ventures — timing is perfect. Romance reignites in your love life. Work pressure may cause mild stress; stay grounded and calm.",
    advice: "Worship Goddess Durga and offer white sweets as Prasad.",
  },
  {
    name: "Scorpio",
    hindi: "वृश्चिक",
    symbol: "♏",
    dates: "Oct 23 – Nov 21",
    gradient: "from-purple-500 to-violet-600",
    colorDot: "bg-red-500",
    luckyColor: "Red",
    prediction:
      "Mystical energy surrounds you. A windfall or revealed secret works in your favor. Hard work finally bears fruit in career. Watch health in changing weather conditions.",
    advice: "Chant 'Om Namah Shivaya' 108 times for mental peace and protection.",
  },
  {
    name: "Sagittarius",
    hindi: "धनु",
    symbol: "♐",
    dates: "Nov 22 – Dec 21",
    gradient: "from-orange-400 to-amber-500",
    colorDot: "bg-yellow-400",
    luckyColor: "Yellow",
    prediction:
      "Highly favorable for higher education, research, or foreign travel. Spirituality calls you. Family and friends offer full support. Financial situation improves steadily.",
    advice: "Worship Lord Vishnu and donate Chana Dal or bananas at a temple.",
  },
  {
    name: "Capricorn",
    hindi: "मकर",
    symbol: "♑",
    dates: "Dec 22 – Jan 19",
    gradient: "from-slate-500 to-gray-600",
    colorDot: "bg-slate-700",
    luckyColor: "Navy Blue",
    prediction:
      "Career advancement is front and center. Hard work pays off with appreciation from seniors. Health is stable — ensure adequate rest between long working hours.",
    advice: "Light a mustard oil lamp under a Peepal tree to appease Lord Shani.",
  },
  {
    name: "Aquarius",
    hindi: "कुंभ",
    symbol: "♒",
    dates: "Jan 20 – Feb 18",
    gradient: "from-cyan-400 to-sky-500",
    colorDot: "bg-cyan-400",
    luckyColor: "Sky Blue",
    prediction:
      "Creative ideas earn recognition and profit. Influential new contacts emerge. Exercise caution in financial dealings. Romantic quality time with your partner awaits.",
    advice: "Recite Hanuman Chalisa seven times to ward off negative energies.",
  },
  {
    name: "Pisces",
    hindi: "मीन",
    symbol: "♓",
    dates: "Feb 19 – Mar 20",
    gradient: "from-violet-500 to-purple-600",
    colorDot: "bg-violet-500",
    luckyColor: "Violet",
    prediction:
      "Moon is in your sign — intuition and sixth sense are at peak. Artists and creatives shine bright. Family life is harmonious. Avoid impulsive financial decisions today.",
    advice: "Offer milk to Lord Shiva and chant the Maha Mrityunjaya Mantra.",
  },
];

export default function HoroscopePage() {
  return (
    <section
      className="w-full py-16 px-4"
      style={{ background: "linear-gradient(160deg, #fff7ed 0%, #ffedd5 50%, #ffffff 100%)" }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
          ✨ Daily Rashifal
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Aaj Ka Rashifal
        </h2>
        <p className="text-gray-500 text-lg mb-4">
          Monday, 8 June 2026 &middot; Moon in Pisces (Meen Rashi)
        </p>
        <span className="inline-block bg-orange-500 text-white text-sm px-5 py-2 rounded-full font-medium shadow">
          Jupiter &amp; Venus bless all signs today — opportunity &amp; inner clarity abound
        </span>
      </div>

      {/* 4-column square card grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {rashis.map((r) => (
          <div
            key={r.name}
            className="bg-white rounded-2xl shadow border border-orange-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-br ${r.gradient} px-4 pt-4 pb-5 relative`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/75 text-xs font-medium">{r.dates}</p>
                  <h3 className="text-white text-xl font-bold leading-tight">{r.name}</h3>
                  <p className="text-white/90 text-sm font-semibold">{r.hindi}</p>
                </div>
                <span className="text-3xl leading-none mt-1" aria-hidden="true">{r.symbol}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3 flex-1">
              {/* Prediction */}
              <p className="text-gray-600 text-sm leading-relaxed">{r.prediction}</p>

              {/* Lucky color */}
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full flex-shrink-0 border border-gray-200 ${r.colorDot}`} />
                <span className="text-xs text-gray-400 font-medium">
                  Lucky Color: <span className="text-gray-700">{r.luckyColor}</span>
                </span>
              </div>

              {/* Remedy */}
              <div className="mt-auto bg-orange-50 border border-orange-200 rounded-xl px-3 py-2.5">
                <p className="text-orange-700 text-xs font-bold mb-0.5">🪔 Today's Remedy</p>
                <p className="text-orange-600 text-xs leading-relaxed">{r.advice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs mt-10 max-w-xl mx-auto">
        Predictions based on Vedic astrology &amp; planetary positions for 8 June 2026. Consult a qualified Jyotishi for personalised guidance.
      </p>
    </section>
  );
}