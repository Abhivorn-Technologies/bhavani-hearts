import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const items = [
  { name: "Ramesh K.", role: "Karimnagar Local", text: "Bhavani Foundation truly inspires humanity. Their work brings real change.", stars: 5 },
  { name: "Lakshmi Devi", role: "Beneficiary Family", text: "Their food donation programs helped many families like ours during hard times.", stars: 5 },
  { name: "Suresh M.", role: "Volunteer", text: "Amazing social service initiative in Karimnagar. Proud to be part of it.", stars: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Voices</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-display">
          Hearts We've <span className="text-gradient-gold italic">Touched</span>
        </h2>

        <div className="mt-14 relative h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-10 absolute inset-0"
            >
              <FaQuoteLeft className="text-gold/40 text-4xl mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-display italic text-cream leading-relaxed">
                “{items[i].text}”
              </p>
              <div className="mt-6 flex justify-center gap-1 text-gold">
                {Array.from({ length: items[i].stars }).map((_, k) => <FaStar key={k} />)}
              </div>
              <p className="mt-4 text-gold">{items[i].name}</p>
              <p className="text-xs text-cream/60 uppercase tracking-widest">{items[i].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-gold" : "w-4 bg-cream/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
