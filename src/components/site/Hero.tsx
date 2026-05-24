import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { FaHeart, FaHandsHelping } from "react-icons/fa";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/75 to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--navy-deep)_80%)]" />
      </div>

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 3 + (i % 4),
              height: 3 + (i % 4),
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 pt-24">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto mb-8 animate-float-slow"
        >
          <img
            src={logo}
            alt="Bhavani Foundation Logo"
            className="h-36 w-36 md:h-44 md:w-44 mx-auto rounded-full ring-gold-glow"
          />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="divider-ornament text-xs tracking-[0.4em] uppercase mb-4"
        >
          Est. 2024 • Karimnagar
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
        >
          Together We Can <br />
          <span className="shimmer-text italic">Feed Hope</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-7 text-base md:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed"
        >
          Bhavani Foundation is dedicated to serving humanity through food donation drives,
          charity events, and helping people in need across Karimnagar.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#donate" className="btn-gold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2">
            <FaHeart /> Donate Now
          </a>
          <a href="#volunteer" className="btn-ghost-gold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2">
            <FaHandsHelping /> Join Volunteers
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 font-display italic text-gold/90 text-lg"
        >
          “Serving Food is Serving Humanity.”
        </motion.p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-widest">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          SCROLL ↓
        </motion.div>
      </div>
    </section>
  );
}
