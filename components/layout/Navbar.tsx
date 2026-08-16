"use client";

import Button from "@/components/ui/Button";
import { businessInfo } from "@/data/info";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-cream/95 shadow-sm backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <Link href="/" className="font-cormorant text-2xl tracking-widest md:text-3xl">
            <span className="text-brown">FIKA</span>{" "}
            <span className="text-espresso">CAFÉ</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-espresso/80 transition-colors hover:text-brown"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 rounded-sm border border-brown px-5 py-2.5 font-sans text-xs font-semibold text-brown transition-colors hover:bg-brown/10"
            >
              <Phone size={13} />
              Call Us
            </a>
            <Button href="/book" variant="filled" className="!py-2.5 !px-5 text-xs">
              Book a Table
            </Button>
          </div>

          <button
            type="button"
            className="text-brown lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-cormorant text-3xl text-espresso hover:text-brown"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length }}
              >
                <Button href="/book" onClick={() => setMobileOpen(false)}>
                  Book a Table
                </Button>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * (navLinks.length + 1) }}
              >
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 font-cormorant text-2xl text-espresso hover:text-brown"
                >
                  <Phone size={22} />
                  Call Us
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
