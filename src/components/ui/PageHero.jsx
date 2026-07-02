import GlowOrb from "./GlowOrb";

/**
 * Standard header block for standalone pages (How it works, Privacy, Terms).
 */
export function PageHero({ eyebrow, title, description, meta }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <GlowOrb className="-left-24 -top-24 h-[360px] w-[360px]" color="teal" />
      <GlowOrb className="-right-20 top-24 h-[320px] w-[320px]" color="violet" />

      <div className="container-page relative max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-mist-50 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {description}
          </p>
        )}
        {meta && <p className="mt-6 text-sm text-mist-500">{meta}</p>}
      </div>
    </section>
  );
}

export default PageHero;
