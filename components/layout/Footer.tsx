import NavyBg from "@/components/ui/NavyBg";
import { businessInfo } from "@/data/info";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "What's On" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-text-light">
      <NavyBg />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="font-playfair text-xl tracking-widest">
              <span className="text-gold">SKYLIGHT</span> LOUNGE
            </Link>
            <p className="mt-4 font-lora text-sm italic text-cream/80">
              Great coffee. Great events. Greater people.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Visit Us</h3>
            <address className="mt-4 space-y-2 font-lora text-sm not-italic text-cream/90">
              <p>{businessInfo.address}</p>
              <p><a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="hover:text-gold">{businessInfo.phone}</a></p>
              <p><a href={`mailto:${businessInfo.email}`} className="hover:text-gold">{businessInfo.email}</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Explore</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-cream/90 hover:text-gold">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Opening Hours</h3>
            <div className="mt-4 space-y-2 font-lora text-sm text-cream/90">
              <div>
                <p className="font-semibold text-cream">Mon – Fri</p>
                <p>9:00am – 6:00pm</p>
                <p className="text-cream/70 text-xs">Brunch till 4pm</p>
              </div>
              <div className="pt-1">
                <p className="font-semibold text-cream">Sat – Sun</p>
                <p>9:30am – 7:00pm</p>
                <p className="text-cream/70 text-xs">Brunch till 5pm</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">Follow</h3>
            <div className="mt-4 flex gap-4">
              <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gold hover:text-cream"><Instagram size={22} /></a>
              <a href={businessInfo.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gold hover:text-cream"><TikTokIcon className="h-[22px] w-[22px]" /></a>
              <a href={businessInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gold hover:text-cream"><Facebook size={22} /></a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-gold/20 pt-8 text-center font-sans text-xs text-cream/60">© 2026 Skylight Lounge LTD</p>
      </div>
    </footer>
  );
}
