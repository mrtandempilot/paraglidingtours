import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soar Above Oludeniz
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience the breathtaking beauty of the Blue Lagoon from the sky.
              Book your paragliding adventure today!
            </p>
            <div className="flex gap-4">
              <Link
                href="/tours"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                View Tours
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Popular Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tandem Paragliding</h3>
                <p className="text-gray-600 mb-4">
                  Fly with an experienced pilot and enjoy stunning views of
                  Oludeniz&apos;s famous Blue Lagoon.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">€75</span>
                  <Link
                    href="/tours"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Boat Tour</h3>
                <p className="text-gray-600 mb-4">
                  Explore the beautiful bays and islands of Oludeniz on our
                  full-day boat excursion.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">€45</span>
                  <Link
                    href="/tours"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Tour Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Jeep Safari</h3>
                <p className="text-gray-600 mb-4">
                  Discover the rugged mountain terrain and traditional villages
                  surrounding Oludeniz.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">€50</span>
                  <Link
                    href="/tours"
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Oludeniz Tours?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Experienced Guides</h3>
              <p className="text-gray-600">
                Our professional team has years of experience ensuring your
                safety and enjoyment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">5-Star Reviews</h3>
              <p className="text-gray-600">
                Rated excellent by thousands of satisfied customers from around
                the world.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive rates with no hidden fees. Get the best value for
                your adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
