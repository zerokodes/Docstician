import {
  AudioLines,
  Users,
  Stethoscope,
  ShieldCheck,
  BadgeCheck,
  UploadCloud,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSectionView } from "../../hooks/useSectionView";
import { mergeRefs } from "../../lib/mergeRefs";
import { FEATURE_GROUPS } from "../../lib/constants";

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
  const viewRef = useSectionView("features");

  return (
    <section id="features" ref={mergeRefs(scopeRef, viewRef)} className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Built for clinical reality"
          title="Every feature exists to give you back time and trust."
          description="Not another generic transcription tool — a documentation system designed around how clinicians actually work."
        />

        <div className="mt-16 space-y-16">
          {FEATURE_GROUPS.map((group, groupIndex) => (
            <div key={group.stage}>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-300">
                  {String(groupIndex + 1).padStart(2, "0")} — {group.stage}
                </span>
                <span className="text-sm text-mist-500">{group.description}</span>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {group.items.map((feature) => {
                  const Icon = ICONS[feature.tag];
                  return (
                    <div
                      key={feature.title}
                      data-reveal
                      className="glass-panel group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal-400/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
                      <p className="mt-2 text-sm leading-relaxed text-mist-400">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {groupIndex < FEATURE_GROUPS.length - 1 && (
                <div className="mt-10 flex items-center justify-center gap-3 text-mist-500" aria-hidden="true">
                  <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/15" />
                  <ArrowRight size={16} />
                  <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/15" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
