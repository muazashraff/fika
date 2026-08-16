export function FormSuccess({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="rounded border border-brown/40 bg-brown/10 px-4 py-3 font-sans text-sm text-brown"
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
