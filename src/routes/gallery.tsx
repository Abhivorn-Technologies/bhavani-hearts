import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Bhavani Foundation" },
      { name: "description", content: "View photos and moments from our food distribution drives, community events, and volunteer activities." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Gallery</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            A visual journey of our food donation drives, community events, and the smiling faces of the families we serve.
          </p>
        </div>
      </div>
      
      <Gallery />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Stories Behind Every Photo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Community Drives</h3>
            <p>Our monthly food distribution drives reach remote areas of Karimnagar, ensuring that no community is left behind in our mission to fight hunger.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Volunteer Activities</h3>
            <p>Passionate volunteers from all walks of life come together to prepare meals, pack groceries, and deliver hope to families in need.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Event Moments</h3>
            <p>Special events, awareness campaigns, and charity drives that bring our community together for a common cause.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Smiles & Impact</h3>
            <p>The real reward of our work - the grateful smiles and warm hearts of the families we help every single day.</p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
