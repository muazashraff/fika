export default function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center py-8 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 40"
        className="h-10 w-full max-w-md text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 20 Q100 5, 200 20 T400 20" />
        <path d="M180 20 Q200 0, 220 20 Q200 40, 180 20" />
        <path d="M195 8 L200 20 L205 8" />
        <path d="M160 25 Q170 15, 180 22" />
        <path d="M240 25 Q230 15, 220 22" />
        <ellipse cx="200" cy="20" rx="4" ry="8" />
      </svg>
    </div>
  );
}
