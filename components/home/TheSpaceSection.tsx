import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
import Image from "next/image";

export default function TheSpaceSection() {
  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          {/* TODO: Replace with real photography of the café interior */}
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80"
            alt="Fika Café interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="heading-underline font-cormorant text-3xl text-espresso md:text-4xl">
            More than a coffee shop
          </h2>
          <p className="mt-6 font-sans leading-relaxed text-espresso/80">
            Fika was built around a simple idea — the Swedish ritual of slowing down for coffee
            and something sweet, shared with good company. Airy, light-filled and thoughtfully
            designed, it&apos;s a space to pause, work, or catch up with someone you love.
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
