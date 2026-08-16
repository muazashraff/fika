import { businessInfo } from "@/data/info";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
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
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-cormorant text-2xl tracking-widest">
              <span className="text-brown">FIKA</span> CAFÉ
            </Link>
            <p className="mt-4 font-sans text-sm italic text-cream/70">
              Specialty coffee, matcha and bakes on Thornton Road.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brown">Visit Us</h3>
            <address className="mt-4 space-y-2 font-sans text-sm not-italic text-cream/90">
              <p>{businessInfo.address}</p>
              <p><a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="hover:text-brown">{businessInfo.phone}</a></p>
              <p><a href={`mailto:${businessInfo.email}`} className="hover:text-brown">{businessInfo.email}</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brown">Explore</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-cream/90 hover:text-brown">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brown">Opening Hours</h3>
            <ul className="mt-4 space-y-1.5 font-sans text-sm text-cream/90">
              {businessInfo.hours.map(({ days, hours }) => (
                <li key={days} className="flex justify-between gap-4">
                  <span>{days}</span>
                  <span className={hours === "Closed" ? "text-cream/50" : "text-cream"}>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-brown/20 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-cream/60">© 2026 Fika Café Bradford</p>
          <div className="flex gap-4">
            <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brown hover:text-cream"><Instagram size={20} /></a>
            <a href={businessInfo.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-brown hover:text-cream"><TikTokIcon className="h-5 w-5" /></a>
            <a href={businessInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brown hover:text-cream"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
