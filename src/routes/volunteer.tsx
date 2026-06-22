import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Volunteer } from "@/components/site/Volunteer";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer With Us - Bhavani Foundation" },
      { name: "description", content: "Join our team of dedicated volunteers and make a real difference in the lives of families in need." },
    ],
  }),
  component: VolunteerPage,
});

function VolunteerPage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Join Our Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Every volunteer makes a difference. Whether you have a few hours a week or can dedicate more time, there's a role for you.
          </p>
        </div>
      </div>
      
      <Volunteer />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Volunteer Opportunities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🍳 Food Preparation</h3>
            <p className="mb-4">Help us prepare nutritious meals in our community kitchens. No special skills needed - just a willing heart!</p>
            <p className="text-sm">Commitment: 4-8 hours weekly</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">📦 Distribution Drives</h3>
            <p className="mb-4">Help us pack and distribute groceries during our weekly and monthly distribution drives across Karimnagar.</p>
            <p className="text-sm">Commitment: Weekend availability</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💻 Administrative Support</h3>
            <p className="mb-4">Assist with documentation, data management, social media, and communications from your home or office.</p>
            <p className="text-sm">Commitment: Flexible</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🏥 Healthcare Support</h3>
            <p className="mb-4">If you're a doctor, nurse, or healthcare professional, help us conduct health checkups and awareness camps.</p>
            <p className="text-sm">Commitment: Monthly</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🎓 Education Programs</h3>
            <p className="mb-4">Teach children about nutrition, life skills, or provide tuition support to underprivileged students.</p>
            <p className="text-sm">Commitment: 2-3 hours weekly</p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🚗 Transportation</h3>
            <p className="mb-4">Help transport groceries, meals, or volunteers to distribution centers and remote areas.</p>
            <p className="text-sm">Commitment: As available</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-2">💚 Make Real Impact</h3>
              <p className="text-sm">See the direct results of your efforts in the lives of families we serve.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🤝 Build Community</h3>
              <p className="text-sm">Join a passionate community of like-minded individuals making a difference.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">📈 Develop Skills</h3>
              <p className="text-sm">Gain valuable experience, learn new skills, and grow as a person.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-700 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="mb-6">Contact us to register as a volunteer and start your journey with Bhavani Foundation.</p>
          <button className="bg-navy-deep text-cream px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
            Register as Volunteer
          </button>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
