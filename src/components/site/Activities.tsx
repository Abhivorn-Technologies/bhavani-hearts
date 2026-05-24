import { motion } from "framer-motion";
import {
  FaUtensils, FaBirthdayCake, FaHandHoldingHeart,
  FaGift, FaUsers, FaHandsHelping
} from "react-icons/fa";

const activities = [
  { icon: FaUtensils, title: "Food Donation Camps", desc: "Regular drives that bring hot, home-style meals to families in need." },
  { icon: FaBirthdayCake, title: "Birthday Food Distribution", desc: "Celebrate joy by sharing meals with the underprivileged on special days." },
  { icon: FaHandHoldingHeart, title: "Poor Feeding Programs", desc: "Daily and weekly outreach feeding those without a safe meal." },
  { icon: FaGift, title: "Festival Charity Events", desc: "Festive distributions so no one feels left behind on auspicious days." },
  { icon: FaUsers, title: "Community Support", desc: "Standing with families through medical, educational and emergency aid." },
  { icon: FaHandsHelping, title: "Volunteer Activities", desc: "Mobilizing kind hearts to serve the streets of Karimnagar with us." },
];

export function Activities() {
  return (
    <section id="activities" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">What We Do</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Activities of <span className="text-gradient-gold italic">Compassion</span>
          </h2>
          <p className="mt-4 text-cream/70">Every act, every meal, every smile — a small offering for humanity.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-gold/40 via-pink/30 to-transparent group"
            >
              <div className="rounded-2xl bg-navy h-full p-7 hover:bg-navy/70 transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-pink/20 flex items-center justify-center text-gold text-xl mb-5 group-hover:scale-110 transition">
                  <a.icon />
                </div>
                <h3 className="font-display text-2xl text-cream">{a.title}</h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed">{a.desc}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
