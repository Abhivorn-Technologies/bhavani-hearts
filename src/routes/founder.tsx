import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Founder } from "@/components/site/Founder";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Our Founder - Bhavani Foundation" },
      { name: "description", content: "Learn about Kuna Maruthi, the founder of Bhavani Foundation, and his vision for serving humanity." },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Meet Our Founder</h1>
        </div>
      </div>
      
      <Founder />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Kuna Maruthi's Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Journey</h3>
            <p className="mb-4">
              Kuna Maruthi's journey with Bhavani Foundation began with a simple observation - too many families in Karimnagar were going to bed hungry. What started as a personal initiative to feed a few families has evolved into a comprehensive welfare organization serving thousands.
            </p>
            <p className="mb-4">
              "Serving food is serving humanity. Every meal we provide is not just nutrition; it's hope, dignity, and love," says Maruthi, reflecting on the foundation's philosophy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">His Beliefs</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>No one should go hungry regardless of their circumstances</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Community service is everyone's responsibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Transparency and accountability are essential</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Sustainable change comes through collective effort</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Every life has value and deserves dignity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-6">Key Milestones</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-32 font-bold text-lg">2020</div>
              <div className="flex-1">Foundation established with a vision to fight hunger in Karimnagar</div>
            </div>
            <div className="flex items-center">
              <div className="w-32 font-bold text-lg">2021</div>
              <div className="flex-1">First community kitchen launched, serving 100+ families</div>
            </div>
            <div className="flex items-center">
              <div className="w-32 font-bold text-lg">2022</div>
              <div className="flex-1">Expanded to 4 community kitchens, 500+ families served monthly</div>
            </div>
            <div className="flex items-center">
              <div className="w-32 font-bold text-lg">2023</div>
              <div className="flex-1">Launched children's nutrition program and senior care initiatives</div>
            </div>
            <div className="flex items-center">
              <div className="w-32 font-bold text-lg">2024</div>
              <div className="flex-1">Reached 2000+ beneficiaries, 100+ active volunteers, 50,000+ meals distributed</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">💫</div>
            <h4 className="font-bold mb-2">Personal Touch</h4>
            <p className="text-sm">Kuna Maruthi personally visits communities and connects with families being served.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="font-bold mb-2">Sustainable Growth</h4>
            <p className="text-sm">Focus on building sustainable programs that create long-term positive impact.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-bold mb-2">Community Leadership</h4>
            <p className="text-sm">Empowers volunteers and staff to become leaders in community service.</p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
