import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export function FloatingActions() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-pink to-gold origin-left z-[60]"
      />

      <a
        href="https://wa.me/919346691958"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full btn-gold flex items-center justify-center"
          aria-label="Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
