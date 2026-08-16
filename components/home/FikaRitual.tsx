import SectionReveal from "@/components/ui/SectionReveal";

export default function FikaRitual() {
  return (
    <SectionReveal className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-brown">
          What is Fika?
        </p>
        <h2 className="mt-4 font-cormorant text-3xl italic text-espresso md:text-4xl">
          &ldquo;A moment to slow down, and appreciate the good things in life.&rdquo;
        </h2>
        <p className="mt-8 font-sans leading-relaxed text-espresso/70">
          Fika (feé-ka) is a Swedish tradition — a daily pause for coffee, something sweet,
          and good company. It&apos;s less about the coffee itself and more about the moment
          it creates. We built this café around that idea: a warm, unhurried space on
          Thornton Road where you&apos;re always welcome to slow down for a while.
        </p>
      </div>
    </SectionReveal>
  );
}
