import ContactForm from "@/components/forms/ContactForm";
import { businessInfo } from "@/data/info";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="grain-overlay bg-navy py-24 pt-32">
        <h1 className="text-center font-playfair text-5xl text-gold">Contact</h1>
      </section>

      <section className="bg-cream py-16 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="shrink-0 text-gold" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-navy">Address</h2>
                <p className="mt-1 font-lora text-brown">{businessInfo.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="shrink-0 text-gold" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-navy">Phone</h2>
                <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="mt-1 block font-lora text-brown hover:text-gold">
                  {businessInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="shrink-0 text-gold" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-navy">Email</h2>
                <a href={`mailto:${businessInfo.email}`} className="mt-1 block font-lora text-brown hover:text-gold">
                  {businessInfo.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="shrink-0 text-gold" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-navy">Opening Hours</h2>
                <ul className="mt-2 space-y-2">
                  {businessInfo.hours.map((h) => (
                    <li key={h.days} className="font-lora text-sm text-brown">
                      <span className="font-sans font-medium text-navy">{h.days}:</span> {h.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                title="Skylight Lounge location"
                src="https://maps.google.com/maps?q=176+Norman+Lane,+Bradford+BD2+2JU&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl text-navy">Send us a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
