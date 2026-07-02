import { AlertTriangle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { PROBLEM_CARDS } from "../../lib/constants";

export function Problem() {
  const scopeRef = useScrollReveal();

  return (
    <section id="problem" ref={scopeRef} className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The reality today"
          title="Documentation is quietly burning out great clinicians."
          description="Every consultation demands full clinical attention — and a perfect written record. Right now, clinicians are forced to choose between the two."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.title}
              data-reveal
              className="glass-panel group flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-white/[0.05]"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-400/10 text-red-300">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-mist-50">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{card.description}</p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <span className="font-display text-3xl font-semibold text-gradient-accent">
                  {card.stat}
                </span>
                <p className="mt-1 text-xs uppercase tracking-wide text-mist-500">
                  {card.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;
