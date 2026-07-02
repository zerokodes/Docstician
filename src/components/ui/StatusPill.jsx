export function StatusPill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
      </span>
      {children}
    </span>
  );
}

export default StatusPill;
