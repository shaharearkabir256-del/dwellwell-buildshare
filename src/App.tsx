export default function App() {
  return (
    <div className="font-sans">
      
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">HomeShare Pro</h1>
          <button className="text-gray-700">
            {/* মেনু আইকন */}
            ☰
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Find or Build Your <span className="text-green-500">Perfect</span> Home
        </h2>
        <p className="mt-4 text-gray-600">
          Connect with premium house sharing opportunities or create your dream home with our expert construction portfolio services.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg shadow-md">
          Browse Homes
        </button>
      </section>
    </div>
  );
}
