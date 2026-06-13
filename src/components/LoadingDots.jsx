/* Three soft bouncing dots (design ref: message-loading), used as the
   Suspense fallback while a page chunk loads. */
export default function LoadingDots({ label = "Opening file" }) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="loading__dot" />
      <span className="loading__dot" />
      <span className="loading__dot" />
      <span className="visually-hidden">{label}…</span>
    </div>
  );
}
