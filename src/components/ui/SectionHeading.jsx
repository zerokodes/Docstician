export function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} gap-5 ${className}`}>
      {eyebrow && <span className="eyebrow" data-reveal>{eyebrow}</span>}
      <h2
        className="max-w-2xl font-display text-3xl font-semibold leading-tight text-mist-50 sm:text-4xl lg:text-5xl"
        data-reveal
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-balance text-base text-mist-300 sm:text-lg" data-reveal>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
