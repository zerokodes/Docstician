import { useMagneticHover } from "../../hooks/useMagneticHover";
import { track } from "../../lib/analytics";
import { WAITLIST_FORM_URL } from "../../lib/constants";

/**
 * Anchor-based CTA button with a magnetic hover pull.
 * Renders as `<a>` so it can link out (e.g. to the waitlist Google Form).
 *
 * Pass `trackEvent`/`trackProps` to identify this CTA in analytics — e.g.
 * `trackEvent="hero_cta_clicked" trackProps={{ position: "primary" }}`.
 * Clicks to the waitlist form URL always also fire `waitlist_form_opened`,
 * since that's the site's true conversion event.
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  trackEvent,
  trackProps,
  onClick,
  ...rest
}) {
  const magneticRef = useMagneticHover(0.25);
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";

  const handleClick = (e) => {
    if (trackEvent) track(trackEvent, trackProps);
    if (href === WAITLIST_FORM_URL) track("waitlist_form_opened", trackProps);
    onClick?.(e);
  };

  return (
    <a
      ref={magneticRef}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={`${base} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}

export default MagneticButton;
