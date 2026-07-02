/**
 * Placeholder wordmark: a waveform-inspired mark (speech capture) paired
 * with the Docstician name in the display typeface.
 */
export function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="9" className="fill-ink-700" />
        <rect x="6" y="14" width="2.4" height="4" rx="1.2" className="fill-teal-400" />
        <rect x="10.4" y="10" width="2.4" height="12" rx="1.2" className="fill-teal-300" />
        <rect x="14.8" y="6" width="2.4" height="20" rx="1.2" className="fill-teal-400" />
        <rect x="19.2" y="11" width="2.4" height="10" rx="1.2" className="fill-violet-400" />
        <rect x="23.6" y="14.5" width="2.4" height="3" rx="1.2" className="fill-violet-400/70" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-mist-50">
        Docstician
      </span>
    </div>
  );
}

export default Logo;
