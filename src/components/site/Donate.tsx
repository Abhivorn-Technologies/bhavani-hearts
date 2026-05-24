import { motion } from "framer-motion";
import { FaQrcode } from "react-icons/fa";

const tiers = [
  { amount: "₹100", impact: "Feed 2 People", desc: "A warm meal for two souls in need." },
  { amount: "₹500", impact: "Support Family Meals", desc: "Nourish an entire family for a day.", featured: true },
  { amount: "₹1000", impact: "Sponsor Food Drive", desc: "Power a full community feeding event." },
];

export function Donate() {
  return (
    <section id="donate" className="relative py-28 bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Give</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Your Gift Becomes <span className="text-gradient-gold italic">Their Hope</span>
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.amount}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 text-center transition ${
                t.featured ? "bg-gradient-to-br from-gold to-pink text-navy-deep ring-gold-glow" : "glass hover:border-gold/40"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-deep text-gold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                  Most Loved
                </span>
              )}
              <p className="font-display text-5xl">{t.amount}</p>
              <p className={`mt-3 font-semibold ${t.featured ? "" : "text-gold"}`}>{t.impact}</p>
              <p className={`mt-3 text-sm ${t.featured ? "text-navy-deep/80" : "text-cream/70"}`}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-2xl bg-cream flex items-center justify-center text-navy-deep ring-gold-glow">
              <FaQrcode className="text-9xl" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl text-gold">Scan &amp; Donate</h3>
            <p className="mt-3 text-cream/80">Quick, secure UPI contributions. Every rupee reaches a plate.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-cream/60 uppercase tracking-widest text-xs w-24">UPI ID</span>
                <span className="text-gold font-mono">bhavani@upi</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cream/60 uppercase tracking-widest text-xs w-24">Phone</span>
                <span className="text-gold font-mono">9346691958</span>
              </div>
            </div>
            <a href="tel:9346691958" className="btn-gold inline-flex mt-8 px-6 py-3 rounded-full text-sm">
              Call to Donate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
