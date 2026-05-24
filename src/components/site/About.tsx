import { motion } from "framer-motion";
import deity from "@/assets/deity.png";
import { Counter } from "./Counter";
import { FaUtensils, FaUsers, FaCalendarAlt, FaSmile } from "react-icons/fa";

const stats = [
  { icon: FaUtensils, n: 5000, label: "Meals Served" },
  { icon: FaUsers, n: 200, label: "Volunteers" },
  { icon: FaCalendarAlt, n: 50, label: "Charity Events" },
  { icon: FaSmile, n: 1000, label: "Happy Faces" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 mandala-bg">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 via-pink/10 to-transparent rounded-full blur-3xl" />
          <img src={deity} alt="" className="relative w-full max-w-md mx-auto animate-float-slow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="divider-ornament justify-start text-xs tracking-[0.4em] uppercase">Our Story</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            A vision born from <span className="text-gradient-gold italic">kindness</span>
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed">
            Bhavani Foundation was established in <span className="text-gold">2024</span> by{" "}
            <span className="text-gold">Kuna Maruthi</span> with a vision to support needy
            people and spread kindness through food donation and social service activities.
            The foundation believes every meal shared can bring hope, happiness, and humanity
            to someone's life.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover:border-gold/40 transition"
              >
                <s.icon className="text-gold text-2xl mb-3" />
                <div className="text-3xl font-display text-gradient-gold">
                  <Counter to={s.n} />
                </div>
                <p className="text-xs uppercase tracking-widest text-cream/70 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
