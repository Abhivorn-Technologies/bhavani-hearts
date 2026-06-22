import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - Bhavani Foundation" },
      { name: "description", content: "Learn about Bhavani Foundation's mission, vision, and our journey in serving the community through food donation drives and welfare programs." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">About Bhavani Foundation</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              Bhavani Foundation is a nonprofit organization dedicated to serving the food-insecure communities in Karimnagar, Telangana. Since our inception, we have been working tirelessly to ensure that no one goes to bed hungry.
            </p>
          </div>
        </div>
      </div>
      <About />
      <MissionVision />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-orange-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">2020</h3>
            <p>Founded by Kuna Maruthi with a simple vision to feed the hungry in Karimnagar</p>
          </div>
          <div className="bg-orange-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">2022</h3>
            <p>Expanded operations to serve 500+ families monthly through organized donation drives</p>
          </div>
          <div className="bg-orange-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">2024</h3>
            <p>Reached 2000+ beneficiaries and established community welfare programs</p>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
