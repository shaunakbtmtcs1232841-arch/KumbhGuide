import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kumbh Nashik Guide",

  description:
    "Read the Privacy Policy of Kumbh Nashik Guide to understand how we collect, use, and protect visitor information, cookies, analytics, and advertising data.",

  keywords: [
    "Privacy Policy",
    "Kumbh Nashik Guide Privacy",
    "Google Analytics",
    "Google AdSense",
    "Website Privacy Policy",
    "Kumbh Nashik Guide",
  ],

  alternates: {
    canonical: "https://kumbhnashikguide.com/privacy",
  },

  openGraph: {
    title: "Privacy Policy | Kumbh Nashik Guide",
    description:
      "Privacy Policy for Kumbh Nashik Guide website.",
    url: "https://kumbhnashikguide.com/privacy",
    siteName: "Kumbh Nashik Guide",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Privacy Policy | Kumbh Nashik Guide",
    description: "Privacy Policy for Kumbh Nashik Guide.",
  },
};

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="text-gray-700 space-y-4 leading-relaxed">
        <p>
          This Privacy Policy explains how Kumbh Nashik Guide collects, uses,
          stores, and protects information when visitors access our website.
        </p>

        <p>
          We use services such as Google Analytics and Google AdSense to
          improve website performance, understand visitor behavior, and display
          relevant advertisements.
        </p>

        <p>
          By continuing to use this website, you agree to this Privacy Policy
          and our use of cookies where applicable.
        </p>
      </div>
    </div>
  );
}