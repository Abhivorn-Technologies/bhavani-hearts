import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials - Bhavani Foundation" },
      { name: "description", content: "Read stories and testimonials from families, volunteers, and donors who have been part of our mission." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Testimonials & Stories</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Hear from the people whose lives have been touched by Bhavani Foundation.
          </p>
        </div>
      </div>
      
      <Testimonials />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">More Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="text-4xl">👨‍👩‍👧‍👦</div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Ramesh's Family</h3>
                <p className="text-sm text-orange-200">Karimnagar</p>
              </div>
            </div>
            <p>
              "Bhavani Foundation has been a lifesaver for our family. After losing my job, we didn't know how we'd feed our three children. The weekly food distribution has given us hope and dignity. We're incredibly grateful."
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="text-4xl">👵</div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Lakshmi Amma</h3>
                <p className="text-sm text-orange-200">Senior Beneficiary</p>
              </div>
            </div>
            <p>
              "At 78 years old, living alone was tough. The foundation not only delivers nutritious meals but also checks on my wellbeing. I feel cared for and valued. God bless everyone at Bhavani Foundation."
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="text-4xl">🤝</div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Priya - Volunteer</h3>
                <p className="text-sm text-orange-200">Active Volunteer</p>
              </div>
            </div>
            <p>
              "Volunteering with Bhavani Foundation has transformed my perspective on life. Working with families in need has taught me the true meaning of compassion. This is my calling now."
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="text-4xl">💼</div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Raj Kumar - Donor</h3>
                <p className="text-sm text-orange-200">Corporate Partner</p>
              </div>
            </div>
            <p>
              "Supporting Bhavani Foundation is one of the best decisions our company has made. Seeing the direct impact of our contributions on real lives is incredibly rewarding and motivates us to do more."
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
