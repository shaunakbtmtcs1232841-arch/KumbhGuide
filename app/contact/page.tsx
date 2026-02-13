import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Nashik Kumbh Guide",
  description: "Contact Nashik Kumbh Guide for questions, suggestions or updates.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border">

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Contact Us
        </h1>

        <p className="text-gray-700 text-center mb-8">
          If you have any questions, suggestions, corrections or business enquiries
          related to Nashik Kumbh Mela information, feel free to contact us.
        </p>

        <div className="space-y-6 text-center">

          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-orange-600" />
            <span className="text-lg font-medium">
              shaunakshukla2110@gmail.com
            </span>
          </div>

          {/* Location optional */}
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <MapPin className="text-orange-600" />
            <span>Nashik, Maharashtra, India</span>
          </div>

        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          We usually reply within 24–48 hours.
        </div>

      </div>
    </div>
  );
}
