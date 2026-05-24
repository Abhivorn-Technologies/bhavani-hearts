import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const photos = [g1, g3, g2, g4, g5, g6];
const events = [g6, g4, g2, g1];
const videos = [
  { thumb: g3, title: "Annadanam Drive 2024" },
  { thumb: g4, title: "Festival Distribution" },
  { thumb: g1, title: "Community Feeding" },
];

type Tab = "photos" | "videos" | "events";

export function Gallery() {
  const [tab, setTab] = useState<Tab>("photos");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs: Tab[] = ["photos", "videos", "events"];

  return (
    <section id="gallery" className="relative py-28 bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Media</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Moments of <span className="text-gradient-gold italic">Kindness</span>
          </h2>
        </div>

        <div className="mt-10 flex justify-center gap-2 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-widest transition ${
                tab === t ? "btn-gold" : "glass text-cream/80 hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-12"
          >
            {tab === "photos" && (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {photos.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(p)}
                    className="block w-full overflow-hidden rounded-2xl group relative"
                  >
                    <img src={p} alt="" loading="lazy" className="w-full group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </button>
                ))}
              </div>
            )}

            {tab === "videos" && (
              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((v, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                    <img src={v.thumb} alt={v.title} loading="lazy" className="w-full h-72 object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-navy-deep/60 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full btn-gold flex items-center justify-center animate-pulse-glow">
                        <FaPlay className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-deep to-transparent">
                      <p className="font-display text-lg text-cream">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "events" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {events.map((p, i) => (
                  <button key={i} onClick={() => setLightbox(p)} className="relative rounded-2xl overflow-hidden group">
                    <img src={p} alt="" loading="lazy" className="w-full h-64 object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-4 font-display text-cream">Event {i + 1}</p>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-gold text-2xl"><FaTimes /></button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] rounded-2xl ring-1 ring-gold/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
