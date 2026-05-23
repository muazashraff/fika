import Image from "next/image";

export default function NavyBg() {
  return (
    <>
      {/* TODO: Replace with real photography */}
      <Image
        src="/images/background.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
    </>
  );
}
