import { motion } from "framer-motion";
import founder from "@/assets/founder_img.jpeg";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export function Founder() {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-gold via-pink to-gold animate-pulse-glow" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-navy-deep">
            <img src={founder} alt="Kuna Maruthi" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="divider-ornament justify-start text-xs tracking-[0.4em] uppercase">Founder</p>
          <h2 className="mt-4 text-5xl font-display">
            Kuna <span className="text-gradient-gold italic">Maruthi</span>
          </h2>
          <p className="mt-2 text-gold tracking-widest text-sm uppercase">Founder · Bhavani Foundation</p>

          <p className="mt-6 text-cream/80 leading-relaxed">
            A passionate humanitarian dedicated to helping people through food donation
            initiatives and community welfare activities. Driven by a simple belief —
            that every shared meal can rewrite someone's day.
          </p>

          <blockquote className="mt-8 pl-5 border-l-2 border-gold font-display italic text-xl text-cream/90">
            “When we serve, we don't lose anything. We become whole.”
          </blockquote>

          <div className="mt-8 flex gap-3">
            <a href="https://instagram.com/bhavani_foundation" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition">
              <FaInstagram />
            </a>
            <a href="tel:9346691958" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition">
              <FaPhoneAlt />
            </a>
            <a href="https://wa.me/919346691958" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
