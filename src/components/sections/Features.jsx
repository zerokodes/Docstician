import {
  AudioLines,
  Users,
  Stethoscope,
  ShieldCheck,
  BadgeCheck,
  UploadCloud,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { FEATURES } from "../../lib/constants";

const ICONS = {
  Capture: AudioLines,
  Understand: Users,
  Generate: Stethoscope,
  Verify: BadgeCheck,
  Trust: ShieldCheck,
  Export: UploadCloud,
};

export function Features() {
  const scopeRef = useScrollReveal();

  return (
    <section id="features" ref={scopeRef} className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Built for clinical reality"
          title="Every feature exists to give you back time and trust."
          description="Not another generic transcription tool — a documentation system designed around how clinicians actually work."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.tag];
            return (
              <div
                key={feature.title}
                data-reveal
                className={`glass-panel group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-teal-300 transition-colors group-hover:bg-teal-400 group-hover:text-ink-950">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-mist-500">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-mist-50">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
