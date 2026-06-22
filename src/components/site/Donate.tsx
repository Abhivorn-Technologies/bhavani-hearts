import { motion } from "framer-motion";
import vegRice from "@/assets/veg_rice.png";
import chickenRice from "@/assets/chicken_rice.png";
import chickenBiryani from "@/assets/chicken_biryani.png";
import foodDriveImg from "@/assets/g1.jpg";

const tiers = [
  {
    amount: "₹1,500",
    impact: "Veg Rice & Water Bottle",
    desc: "A wholesome meal of freshly prepared vegetable rice and clean packaged water bottles.",
    image: vegRice,
    borderColor: "hover:border-emerald-500/40 border-emerald-500/10",
    glowColor: "group-hover:shadow-emerald-500/10",
    textColor: "text-emerald-400",
    btnClass: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20",
    badge: "Veg Option",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
  },
  {
    amount: "₹2,000",
    impact: "Chicken Rice & Water Bottle",
    desc: "A nutritious meal of seasoned chicken rice and clean packaged water bottles.",
    image: chickenRice,
    featured: true,
    borderColor: "border-amber-500/30 hover:border-amber-500/50",
    glowColor: "group-hover:shadow-amber-500/15 shadow-md shadow-amber-500/5",
    textColor: "text-amber-400",
    btnClass: "bg-gradient-to-r from-amber-500 to-orange-500 text-navy-deep font-bold shadow-lg shadow-amber-500/20 hover:scale-105",
    badge: "Most Selected",
    badgeClass: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
  },
  {
    amount: "₹3,000",
    impact: "Chicken Biryani & Water Bottle",
    desc: "A celebratory meal of rich, aromatic chicken biryani and clean packaged water bottles.",
    image: chickenBiryani,
    borderColor: "hover:border-rose-500/40 border-rose-500/10",
    glowColor: "group-hover:shadow-rose-500/10",
    textColor: "text-rose-400",
    btnClass: "bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20",
    badge: "Special Feast",
    badgeClass: "bg-rose-500/10 text-rose-400 border border-rose-500/20"
  }
];

export function Donate() {
  return (
    <section id="donate" className="relative py-28 bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Give</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Sponsor Meals for <span className="text-gradient-gold italic">Needy People</span>
          </h2>
          <p className="mt-4 text-cream/70 max-w-2xl mx-auto text-sm md:text-base">
            Your generous donation directy supports cooking and distributing nutritious meals in our community.
          </p>
        </div>

        {/* General Member Tier Badge */}
        <div className="flex justify-center mt-12 mb-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-emerald-950/20"
          >
            <span className="text-amber-500 text-base">★</span> For 25 Members <span className="text-amber-500 text-base">★</span>
          </motion.div>
        </div>

        {/* Donation Cards */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.impact}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`group relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 glass border ${t.borderColor} ${t.glowColor} ${
                t.featured ? "ring-2 ring-amber-500/30 bg-white/[0.02]" : ""
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-navy-deep font-bold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20">
                  {t.badge}
                </span>
              )}

              <div>
                {/* Image Area */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-white/5 bg-navy-deep/20">
                  <img 
                    src={t.image} 
                    alt={t.impact} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                  
                  {!t.featured && (
                    <span className={`absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md backdrop-blur-md ${t.badgeClass}`}>
                      {t.badge}
                    </span>
                  )}
                  
                  <span className="absolute bottom-3 left-3 bg-navy-deep/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                    <span>🍛</span> Serves 25 People
                  </span>
                </div>

                {/* Info Area */}
                <h3 className={`font-display text-2xl font-bold transition-colors duration-300 ${t.textColor}`}>
                  {t.impact}
                </h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed min-h-[48px]">
                  {t.desc}
                </p>
              </div>

              {/* Price & Action */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-widest font-semibold">Sponsorship</p>
                  <p className="text-3xl font-display font-bold text-white mt-1">{t.amount}</p>
                </div>
                <a 
                  href={`https://wa.me/919346691958?text=${encodeURIComponent(`Hello Bhavani Foundation, I would like to sponsor the ${t.impact} meal plan (${t.amount}) for 25 people.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center ${t.btnClass}`}
                >
                  Sponsor
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message from flyer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-display text-2xl md:text-3xl text-gradient-gold italic font-bold">
            "Let's Serve Humanity Together"
          </p>
          <p className="mt-2 text-cream/60 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
            Your Support Can Feed Many
          </p>
        </motion.div>

        {/* Support Mission block */}
        <motion.div
          id="support-mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center border border-white/5"
        >
          <div className="flex justify-center w-full">
            <div className="relative overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] w-full max-w-md border border-white/10 shadow-2xl">
              <img src={foodDriveImg} alt="Bhavani Foundation Food Drive" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl text-gold font-bold">Support Our Mission</h3>
            <p className="mt-4 text-cream/80 text-sm md:text-base leading-relaxed">
              Your support directly empowers us to organize food distribution drives, supply warm meals to the needy, and provide nourishment kits to underprivileged families in Karimnagar.
            </p>
            <div className="mt-6 space-y-3.5 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-cream/50 uppercase tracking-widest text-[10px] font-semibold w-24">Cell Phone</span>
                <span className="text-gold font-mono font-semibold">9346691958</span>
              </div>
            </div>
            <a 
              href="tel:9346691958" 
              className="btn-gold inline-flex mt-8 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg shadow-gold/10 hover:shadow-gold/25"
            >
              Call to Donate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
