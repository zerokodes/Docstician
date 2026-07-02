/**
 * Ambient background glow used to add depth without heavy imagery.
 * Purely decorative — hidden from assistive tech.
 */
export function GlowOrb({ className = "", color = "teal" }) {
  const gradientClass = color === "violet" ? "glow-orb-violet" : "glow-orb-teal";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${gradientClass} ${className}`}
    />
  );
}

export default GlowOrb;
