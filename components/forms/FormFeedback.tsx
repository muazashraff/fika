export function FormSuccess({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="rounded border border-gold/50 bg-gold/10 px-4 py-3 font-sans text-sm text-gold"
    >
      {message}
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="rounded border border-red-400/50 bg-red-50 px-4 py-3 font-sans text-sm text-red-700"
    >
      {message}
    </div>
  );
}
