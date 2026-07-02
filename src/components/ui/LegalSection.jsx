/**
 * A titled section of legal/prose copy with consistent typography.
 * `children` is the body content (paragraphs, lists).
 */
export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-xl font-semibold text-mist-50 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-mist-300 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default LegalSection;
