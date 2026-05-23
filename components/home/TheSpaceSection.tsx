import Button from "@/components/ui/Button";
import NavyBg from "@/components/ui/NavyBg";
import SectionReveal from "@/components/ui/SectionReveal";
import Image from "next/image";

export default function TheSpaceSection() {
  return (
    <SectionReveal className="relative overflow-hidden py-20">
      <NavyBg />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          {/* TODO: Replace with real photography */}
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
            alt="Skylight Lounge interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="heading-underline font-playfair text-3xl text-gold md:text-4xl">
            More than a café
          </h2>
          <p className="mt-6 font-lora leading-relaxed text-cream/90">
            Skylight Lounge was built with one idea in mind — to create a space where
            everyone feels welcome. Whether you&apos;re here to work, create, connect, or
            simply breathe, there&apos;s a corner here for you.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Our Story →
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
