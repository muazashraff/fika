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
      <section className="bg-espresso py-24 pt-32">
        <div className="relative z-10">
          <h1 className="text-center font-cormorant text-5xl text-cream">Contact</h1>
        </div>
      </section>

      <section className="bg-cream py-16 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="shrink-0 text-brown" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-espresso">Address</h2>
                <p className="mt-1 font-sans text-espresso/70">{businessInfo.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="shrink-0 text-brown" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-espresso">Phone</h2>
                <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="mt-1 block font-sans text-espresso/70 hover:text-brown">
                  {businessInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="shrink-0 text-brown" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-espresso">Email</h2>
                <a href={`mailto:${businessInfo.email}`} className="mt-1 block font-sans text-espresso/70 hover:text-brown">
                  {businessInfo.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="shrink-0 text-brown" size={22} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase text-espresso">Opening Hours</h2>
                <ul className="mt-2 space-y-1.5">
                  {businessInfo.hours.map((h) => (
                    <li key={h.days} className="font-sans text-sm text-espresso/70">
                      <span className="font-sans font-medium text-espresso">{h.days}:</span> {h.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                title="Fika Café location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(businessInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
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
            <h2 className="font-cormorant text-2xl text-espresso">Send us a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
