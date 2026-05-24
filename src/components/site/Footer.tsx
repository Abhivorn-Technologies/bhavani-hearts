import logo from "@/assets/logo.png";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14 rounded-full ring-1 ring-gold/40" />
              <div>
                <p className="font-display text-xl text-gold">Bhavani Foundation</p>
                <p className="text-xs tracking-[0.3em] uppercase text-cream/60">Est. 2024</p>
              </div>
            </div>
            <p className="mt-5 text-cream/70 max-w-md leading-relaxed italic font-display">
              “Serving Food is Serving Humanity.”
            </p>
          </div>

          <div>
            <p className="text-gold text-sm tracking-widest uppercase">Explore</p>
            <ul className="mt-4 space-y-2 text-cream/70 text-sm">
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#activities" className="hover:text-gold">Activities</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#donate" className="hover:text-gold">Donate</a></li>
            </ul>
          </div>

          <div>
            <p className="text-gold text-sm tracking-widest uppercase">Connect</p>
            <ul className="mt-4 space-y-2 text-cream/70 text-sm">
              <li>Karimnagar, Telangana</li>
              <li>+91 9346691958</li>
              <li>@bhavani_foundation</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/bhavani_foundation" className="w-9 h-9 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition"><FaInstagram /></a>
              <a href="tel:9346691958" className="w-9 h-9 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition"><FaPhoneAlt /></a>
              <a href="https://wa.me/919346691958" className="w-9 h-9 rounded-full glass flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Bhavani Foundation. Made with love in Karimnagar.</p>
          <p>Founded by Kuna Maruthi</p>
        </div>
      </div>
    </footer>
  );
}
