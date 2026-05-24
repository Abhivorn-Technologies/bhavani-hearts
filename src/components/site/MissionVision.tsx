import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const items = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    text: "To provide food and support to needy people and inspire society to spread kindness.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    text: "To build a compassionate community where no one sleeps hungry.",
  },
];

export function MissionVision() {
  return (
    <section id="mission" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Purpose</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-display">
          Mission &amp; <span className="text-gradient-gold italic">Vision</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-10 text-left relative overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-pink flex items-center justify-center text-navy-deep text-2xl mb-6 ring-gold-glow">
                <it.icon />
              </div>
              <h3 className="font-display text-3xl text-gold">{it.title}</h3>
              <p className="mt-4 text-cream/80 leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
