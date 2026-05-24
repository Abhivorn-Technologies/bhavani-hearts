import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Reach Out</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Let's <span className="text-gradient-gold italic">Connect</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-3xl p-8 space-y-6"
          >
            <Item icon={FaMapMarkerAlt} label="Address" value="Karimnagar, Telangana" />
            <Item icon={FaPhoneAlt} label="Phone" value="9346691958" href="tel:9346691958" />
            <Item icon={FaInstagram} label="Instagram" value="@bhavani_foundation" href="https://instagram.com/bhavani_foundation" />
            <Item icon={FaWhatsapp} label="WhatsApp" value="Chat with us" href="https://wa.me/919346691958" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl overflow-hidden ring-1 ring-white/10 min-h-[400px]"
          >
            <iframe
              title="Karimnagar Map"
              src="https://www.google.com/maps?q=Karimnagar,Telangana&output=embed"
              className="w-full h-full min-h-[400px] grayscale-[30%] contrast-110"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-pink/20 flex items-center justify-center text-gold text-lg">
        <Icon />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-cream/60">{label}</p>
        <p className="text-cream mt-1">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-90">{inner}</a> : inner;
}
