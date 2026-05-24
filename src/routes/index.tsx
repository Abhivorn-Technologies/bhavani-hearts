import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Activities } from "@/components/site/Activities";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Volunteer } from "@/components/site/Volunteer";
import { Donate } from "@/components/site/Donate";
import { Founder } from "@/components/site/Founder";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhavani Foundation — Serving Food is Serving Humanity" },
      { name: "description", content: "Bhavani Foundation, founded by Kuna Maruthi in Karimnagar, serves needy people through food donation drives, charity events and community welfare." },
      { property: "og:title", content: "Bhavani Foundation — Feeding Hope in Karimnagar" },
      { property: "og:description", content: "Join our food donation drives, volunteer, or donate to help feed families in need." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-navy-deep text-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Activities />
      <Gallery />
      <Testimonials />
      <Volunteer />
      <Donate />
      <Founder />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
