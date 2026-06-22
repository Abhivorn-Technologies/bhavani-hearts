import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Activities } from "@/components/site/Activities";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Our Activities - Bhavani Foundation" },
      { name: "description", content: "Explore our food donation drives, community welfare programs, and initiatives to fight hunger in Karimnagar." },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Activities & Programs</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Through various initiatives and programs, we work to address food insecurity and provide support to vulnerable communities.
          </p>
        </div>
      </div>
      
      <Activities />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">📦 Weekly Food Distribution</h3>
            <p className="mb-3">Every week, we distribute nutritious meals and groceries to 300+ families in need. Our carefully curated meal plans ensure that beneficiaries receive balanced nutrition.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Hot cooked meals on weekdays</li>
              <li>Grocery kits for weekends</li>
              <li>Nutritious dry rations</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🍽️ Community Kitchens</h3>
            <p className="mb-3">We operate community kitchens in underserved areas where families can come for fresh, hot meals prepared with quality ingredients and care.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Daily meal service</li>
              <li>Hygiene and sanitation maintained</li>
              <li>Community gathering space</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">👶 Children's Nutrition Program</h3>
            <p className="mb-3">Special focus on providing nutritious meals to children in schools and learning centers to support their growth and development.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>School meal programs</li>
              <li>Nutritional counseling</li>
              <li>Health checkups</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">👵 Senior Care Support</h3>
            <p className="mb-3">Special programs designed to care for elderly citizens who are living alone or in difficult circumstances.</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Home delivery of meals</li>
              <li>Social support visits</li>
              <li>Health awareness camps</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Impact by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-4xl font-bold">2000+</div>
              <div className="text-sm mt-2">Families Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-sm mt-2">Meals Distributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4</div>
              <div className="text-sm mt-2">Community Kitchens</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100+</div>
              <div className="text-sm mt-2">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
