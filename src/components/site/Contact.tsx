import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Inquiry - Bhavani Foundation*
----------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919346691958?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-28 bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="divider-ornament text-xs tracking-[0.4em] uppercase">Reach Out</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display">
            Let's <span className="text-gradient-gold italic">Connect</span>
          </h2>
          <p className="mt-4 text-cream/70 max-w-2xl mx-auto text-sm md:text-base">
            Have questions, want to volunteer, or discuss sponsorships? Send us a message directly on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Contact details and Map */}
          <div className="lg:col-span-2 flex flex-col gap-6 w-full">
            {/* Contact Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 space-y-6 border border-white/5"
            >
              <Item icon={FaMapMarkerAlt} label="Address" value="Karimnagar, Telangana" />
              <Item icon={FaPhoneAlt} label="Phone" value="9346691958" href="tel:9346691958" />
              <Item icon={FaInstagram} label="Instagram" value="@bhavani_foundation" href="https://instagram.com/bhavani_foundation" />
              <Item icon={FaWhatsapp} label="WhatsApp" value="Chat with us" href="https://wa.me/919346691958" />
            </motion.div>

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden ring-1 ring-white/10 h-64 border border-white/5"
            >
              <iframe
                title="Karimnagar Map"
                src="https://www.google.com/maps?q=Karimnagar,Telangana&output=embed"
                className="w-full h-full grayscale-[30%] contrast-110"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-8 border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-display text-2xl text-gold font-bold">Send a Message</h3>
              
              <div>
                <label htmlFor="form-name" className="block text-xs uppercase tracking-widest text-cream/60 mb-2 font-semibold">Your Name</label>
                <input 
                  id="form-name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name" 
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-cream placeholder-cream/30 outline-none transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-phone" className="block text-xs uppercase tracking-widest text-cream/60 mb-2 font-semibold">Phone Number</label>
                  <input 
                    id="form-phone"
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number" 
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-cream placeholder-cream/30 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="form-subject" className="block text-xs uppercase tracking-widest text-cream/60 mb-2 font-semibold">Subject</label>
                  <div className="relative">
                    <select 
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-navy-deep/80 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-cream outline-none transition appearance-none cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Donation / Sponsorship">Donation / Sponsorship</option>
                      <option value="Other Support">Other Support</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gold">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs uppercase tracking-widest text-cream/60 mb-2 font-semibold">Message</label>
                <textarea 
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry..." 
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-cream placeholder-cream/30 outline-none transition resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full btn-gold py-3.5 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold/10"
              >
                <FaWhatsapp className="text-lg" /> Send via WhatsApp
              </button>
            </form>
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
        <p className="text-xs uppercase tracking-widest text-cream/60 font-semibold">{label}</p>
        <p className="text-cream mt-1">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-90">{inner}</a> : inner;
}
