import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Donate } from "@/components/site/Donate";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate - Bhavani Foundation" },
      { name: "description", content: "Your donation helps us feed more families in need. Support our mission to fight hunger in Karimnagar." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">Support Our Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Every rupee donated goes directly towards feeding families in need. Your generosity saves lives.
          </p>
        </div>
      </div>
      
      <Donate />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Ways to Give</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💰 One-Time Donation</h3>
            <p className="mb-4">Make a one-time contribution to support our ongoing operations.</p>
            <ul className="list-disc list-inside space-y-2 text-sm mb-4">
              <li>₹500 - Feeds 1 family for a day</li>
              <li>₹1,000 - Weekly meal kit for a family</li>
              <li>₹5,000 - Monthly support for a senior</li>
              <li>₹10,000+ - Sponsor a child's nutrition program</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🔄 Monthly Giving</h3>
            <p className="mb-4">Become a sustaining partner with a recurring monthly donation.</p>
            <ul className="list-disc list-inside space-y-2 text-sm mb-4">
              <li>Steady, predictable impact</li>
              <li>Help us plan long-term programs</li>
              <li>Special recognition for monthly supporters</li>
              <li>Monthly impact reports</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🎁 In-Kind Donations</h3>
            <p className="mb-4">Donate groceries, cooking supplies, or equipment.</p>
            <ul className="list-disc list-inside space-y-2 text-sm mb-4">
              <li>Rice, dal, spices, and cooking oil</li>
              <li>Fresh vegetables and fruits</li>
              <li>Kitchen equipment and utensils</li>
              <li>Clothing and personal care items</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-700 to-orange-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🏢 Corporate Partnerships</h3>
            <p className="mb-4">Engage your organization in our mission.</p>
            <ul className="list-disc list-inside space-y-2 text-sm mb-4">
              <li>CSR program partnerships</li>
              <li>Employee volunteer days</li>
              <li>Cause marketing campaigns</li>
              <li>Customized impact programs</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-8 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm mt-2">Transparent Use of Funds</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Tax</div>
              <div className="text-sm mt-2">80G Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹50L+</div>
              <div className="text-sm mt-2">Funds Distributed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-sm mt-2">Lives Impacted</div>
            </div>
          </div>
        </div>

        <div className="bg-orange-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Donation Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3">Online Payments</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Credit/Debit Card</li>
                <li>✓ Net Banking</li>
                <li>✓ UPI/Google Pay</li>
                <li>✓ PayPal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Direct Transfer</h4>
              <ul className="space-y-2 text-sm">
                <li>Bank: [Bank Name]</li>
                <li>Account: [Account Number]</li>
                <li>IFSC: [IFSC Code]</li>
                <li>UPI: foundation@upi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
