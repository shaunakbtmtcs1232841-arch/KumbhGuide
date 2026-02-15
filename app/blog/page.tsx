export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Nashik Kumbh Blog & Updates
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Latest news, travel tips and Kumbh updates will be posted here.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="border p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold">
            Coming Soon 🚀
          </h2>
          <p className="text-gray-600 mt-2">
            Articles about Nashik temples, ghats, travel tips and Kumbh 2027 updates will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
