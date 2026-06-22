import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import v1 from "@/assets/WhatsApp Video 2026-06-22 at 8.50.40 PM.mp4";
import v2 from "@/assets/WhatsApp Video 2026-06-22 at 8.50.42 PM.mp4";
import v3 from "@/assets/WhatsApp Video 2026-06-22 at 8.50.46 PM.mp4";
import v4 from "@/assets/WhatsApp Video 2026-06-22 at 8.50.47 PM.mp4";

const videos = [
  { url: v1, title: "Community Food Serving Drive" },
  { url: v2, title: "Annadanam Meal Distribution" },
  { url: v3, title: "Food Preparation & Packaging" },
  { url: v4, title: "Serving Needy People" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Media</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Moments of <span className="text-gradient-gold italic">Kindness</span>
          </h2>
          <p className="mt-4 text-cream/70 max-w-2xl mx-auto text-sm md:text-base">
            Watch real moments from our recent food distribution and community service activities.
          </p>
        </div>

        {/* Horizontal Scrolling Video Marquee */}
        <div className="relative mt-16 w-full overflow-hidden py-4">
          {/* Gradient shadows on sides for a premium fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex gap-8">
            {/* Render duplicated set of videos for seamless horizontal looping */}
            {[...videos, ...videos, ...videos, ...videos].map((v, i) => (
              <VideoCard
                key={`${v.url}-${i}`}
                url={v.url}
                title={v.title}
                index={i % videos.length}
                onClick={() => setLightbox(v.url)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for playing videos */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button 
              className="absolute top-6 right-6 text-gold text-2xl hover:scale-110 transition"
              onClick={() => setLightbox(null)}
            >
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden ring-2 ring-gold/30 bg-black/60 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightbox}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function VideoCard({ url, title, index, onClick }: { url: string; title: string; index: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="w-[260px] sm:w-[300px] flex-shrink-0 relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 bg-white/[0.01] hover:border-gold/30 transition-all duration-300 shadow-xl shadow-black/20"
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] w-full bg-navy-deep/20 overflow-hidden">
        <video
          src={url}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover/Play overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent transition-opacity duration-300 opacity-60 group-hover:opacity-40" />

        {/* Label & Title */}
        <div className="absolute bottom-4 inset-x-4">
          <span className="inline-block text-[9px] uppercase tracking-widest text-gold font-bold bg-navy-deep/80 px-2.5 py-1 rounded-md border border-gold/10 backdrop-blur-sm">
            Activity Video
          </span>
          <h3 className="mt-2 text-sm font-display text-white font-bold leading-snug drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
