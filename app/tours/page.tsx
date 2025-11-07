import Link from "next/link";

const tours = [
  {
    id: 1,
    name: "Tandem Paragliding",
    price: "€75",
    duration: "30-45 minutes",
    description: "Experience the ultimate thrill of flying above the stunning Blue Lagoon with our tandem paragliding adventure. Accompanied by experienced, certified pilots, you&apos;ll soar high above Oludeniz and enjoy breathtaking panoramic views of the coastline.",
    includes: [
      "Professional pilot",
      "Safety equipment",
      "Photos and videos",
      "Hotel pickup and drop-off",
      "Insurance"
    ],
    color: "blue"
  },
  {
    id: 2,
    name: "Boat Tour",
    price: "€45",
    duration: "Full day",
    description: "Discover the hidden gems of the Turquoise Coast on our full-day boat tour. Visit secluded bays, swim in crystal-clear waters, and explore the stunning Butterfly Valley. Includes a delicious lunch on board.",
    includes: [
      "Lunch and refreshments",
      "Swimming stops",
      "Butterfly Valley visit",
      "Snorkeling equipment",
      "Experienced crew"
    ],
    color: "green"
  },
  {
    id: 3,
    name: "Jeep Safari",
    price: "€50",
    duration: "6-7 hours",
    description: "Embark on an exciting off-road adventure through the Taurus Mountains. Visit traditional villages, explore ancient ruins, and enjoy spectacular mountain views. Perfect for those seeking adventure and culture.",
    includes: [
      "4x4 jeep ride",
      "Village visits",
      "Lunch in local restaurant",
      "Swimming break",
      "Professional guide"
    ],
    color: "orange"
  },
  {
    id: 4,
    name: "Scuba Diving",
    price: "€60",
    duration: "Half day",
    description: "Dive into the crystal-clear Mediterranean waters and explore vibrant marine life. Suitable for both beginners and experienced divers. All equipment and instruction provided.",
    includes: [
      "Diving equipment",
      "PADI certified instructor",
      "2 dives",
      "Light refreshments",
      "Underwater photos"
    ],
    color: "cyan"
  },
  {
    id: 5,
    name: "Sunset Cruise",
    price: "€40",
    duration: "3 hours",
    description: "Enjoy a romantic evening sailing along the coast as the sun sets over the Mediterranean. Includes drinks and snacks while you relax and take in the spectacular views.",
    includes: [
      "Drinks and snacks",
      "Swimming opportunity",
      "Music on board",
      "Sunset views",
      "Professional crew"
    ],
    color: "purple"
  },
  {
    id: 6,
    name: "Kayaking Adventure",
    price: "€35",
    duration: "4 hours",
    description: "Paddle through the beautiful turquoise waters and explore hidden coves and beaches. Suitable for all skill levels with a guide to lead the way.",
    includes: [
      "Kayak and equipment",
      "Safety gear",
      "Professional guide",
      "Snorkeling opportunity",
      "Waterproof bag"
    ],
    color: "teal"
  }
];

const colorVariants: { [key: string]: string } = {
  blue: "from-blue-400 to-blue-600",
  green: "from-green-400 to-green-600",
  orange: "from-orange-400 to-orange-600",
  cyan: "from-cyan-400 to-cyan-600",
  purple: "from-purple-400 to-purple-600",
  teal: "from-teal-400 to-teal-600"
};

const buttonVariants: { [key: string]: string } = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  orange: "bg-orange-600 hover:bg-orange-700",
  cyan: "bg-cyan-600 hover:bg-cyan-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  teal: "bg-teal-600 hover:bg-teal-700"
};

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Tours</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from our wide selection of exciting tours and activities in
            beautiful Oludeniz. Each adventure is designed to create
            unforgettable memories.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className={`h-48 bg-gradient-to-r ${colorVariants[tour.color]}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
                  <p className="text-gray-500 mb-4">
                    Duration: {tour.duration}
                  </p>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-3xl font-bold text-gray-800">
                      {tour.price}
                    </span>
                    <Link
                      href="/contact"
                      className={`${buttonVariants[tour.color]} text-white px-6 py-2 rounded-lg transition`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to book your tour or if you have any questions.
            Our friendly team is here to help!
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
