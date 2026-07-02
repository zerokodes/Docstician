import { ShieldCheck, Lock, UserCheck, Lightbulb } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import CountUpStat from "../ui/CountUpStat";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSectionView } from "../../hooks/useSectionView";
import { mergeRefs } from "../../lib/mergeRefs";
import { TRUST_METRICS } from "../../lib/constants";

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Clinician-verified, always",
    body: "No note reaches a patient record without clinician review and approval.",
  },
  {
    icon: Lock,
    title: "Privacy by design",
    body: "Data handling follows a controlled pipeline with anonymization before any model training.",
  },
  {
    icon: UserCheck,
    title: "Built with licensed professionals",
    body: "Designed around real clinical workflows across physiotherapy, medicine, and dentistry.",
  },
];

export function Trust() {
  const scopeRef = useScrollReveal();
  const viewRef = useSectionView("trust");

  return (
    <section id="trust" ref={mergeRefs(scopeRef, viewRef)} className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why clinicians will trust it"
          title="Designed around safety, not just speed."
          description="Docstician is being built with the seriousness that clinical documentation demands."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.label} data-reveal className="glass-panel p-6 text-center">
              <p className="font-display text-4xl font-semibold text-gradient-accent">
                <CountUpStat value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-mist-500">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <div key={principle.title} data-reveal className="glass-panel p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-mist-50">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{principle.body}</p>
              </div>
            );
          })}
        </div>

        <div className="glass-panel relative mt-8 overflow-hidden p-8 sm:p-12" data-reveal>
          <div className="flex items-center gap-2 text-teal-300">
            <Lightbulb size={16} />
            <span className="text-xs font-semibold uppercase tracking-widest">
              What we're hearing — not a customer testimonial
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist-200 sm:text-xl">
            In early conversations, clinicians consistently describe the same feeling:
            documentation steals the time and attention they'd rather give their patients.
            That's the gap Docstician is being built to close.
          </p>
          <p className="mt-6 text-sm text-mist-400">
            — Docstician team, summarizing early clinician interviews (pre-launch)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Trust;
