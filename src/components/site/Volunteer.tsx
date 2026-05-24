import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export function Volunteer() {
  const [sent, setSent] = useState(false);

  return (
    <section id="volunteer" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 31) % 100}%`, width: 2 + (i % 3), height: 2 + (i % 3) }}
            animate={{ y: [0, -40, 0], opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Join Us</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-display">
          Become a <span className="text-gradient-gold italic">Volunteer</span>
        </h2>
        <p className="mt-4 text-cream/70">Lend your hands. Light up someone's day.</p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-12 glass rounded-3xl p-8 md:p-10 text-left space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" type="text" />
            <Field label="Mobile Number" type="tel" />
          </div>
          <Field label="Email" type="email" />
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/70">Message</label>
            <textarea
              rows={4}
              required
              className="mt-2 w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream resize-none"
            />
          </div>
          <button type="submit" className="btn-gold px-8 py-3.5 rounded-full inline-flex items-center gap-2">
            <FaPaperPlane /> {sent ? "Thank You!" : "Send Application"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-cream/70">{label}</label>
      <input
        required
        type={type}
        className="mt-2 w-full bg-transparent border-b border-cream/20 focus:border-gold outline-none py-2 text-cream"
      />
    </div>
  );
}
