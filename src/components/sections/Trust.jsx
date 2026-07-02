import { ShieldCheck, Lock, UserCheck, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import CountUpStat from "../ui/CountUpStat";
import { useScrollReveal } from "../../hooks/useScrollReveal";
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

  return (
    <section id="trust" ref={scopeRef} className="relative py-24 sm:py-32">
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
          <Quote className="absolute right-8 top-8 text-white/5" size={72} aria-hidden="true" />
          <p className="max-w-2xl font-display text-xl font-medium leading-relaxed text-mist-100 sm:text-2xl">
            "The clinicians we've spoken with all describe the same feeling — documentation
            steals the time and attention they'd rather give their patients. That's the exact
            gap Docstician is being built to close."
          </p>
          <p className="mt-6 text-sm text-mist-400">— Docstician team, from early clinician interviews</p>
        </div>
      </div>
    </section>
  );
}

export default Trust;
