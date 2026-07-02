import { useMagneticHover } from "../../hooks/useMagneticHover";

/**
 * Anchor-based CTA button with a magnetic hover pull.
 * Renders as `<a>` so it can link out (e.g. to the waitlist Google Form).
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  ...rest
}) {
  const magneticRef = useMagneticHover(0.25);
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <a
      ref={magneticRef}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={`${base} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export default MagneticButton;
