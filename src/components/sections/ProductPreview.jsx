import { useEffect, useRef } from "react";
import { Activity, MessagesSquare, TrendingUp, Sparkles } from "lucide-react";
import { gsap } from "../../lib/gsapSetup";
import SectionHeading from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSectionView } from "../../hooks/useSectionView";
import { mergeRefs } from "../../lib/mergeRefs";

const PIPELINE = [
  { label: "New sessions", value: 68 },
  { label: "AI drafted", value: 54 },
  { label: "Approved", value: 41 },
];

export function ProductPreview() {
  const scopeRef = useScrollReveal();
  const viewRef = useSectionView("product_preview");
  const barsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: i * 0.15,
            transformOrigin: "left",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
            },
          }
        );
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef]);

  return (
    <section ref={mergeRefs(scopeRef, viewRef)} className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="A glimpse of the workspace"
          title="See your clinic's documentation, at a glance."
          description="A single dashboard for every session, transcript, and AI-generated note — built for clinics and hospital teams."
        />

        <div className="glass-panel relative mt-16 overflow-hidden p-4 sm:p-6 lg:p-8" data-reveal>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent"
          />

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
              <span className="ml-3 text-xs text-mist-500">docstician.app/dashboard</span>
            </div>
            <span className="hidden items-center gap-1.5 text-xs text-teal-300 sm:flex">
              <Sparkles size={12} /> AI Assistant active
            </span>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="glass-panel p-5 lg:col-span-2">
              <div className="flex items-center gap-2 text-mist-300">
                <Activity size={16} className="text-teal-300" />
                <span className="text-sm font-medium">Weekly session pipeline</span>
              </div>

              <div className="mt-6 space-y-5">
                {PIPELINE.map((row, i) => (
                  <div key={row.label}>
                    <div className="mb-1.5 flex items-center justify-between text-xs text-mist-400">
                      <span>{row.label}</span>
                      <span className="font-mono text-mist-300">{row.value}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        ref={(el) => (barsRef.current[i] = el)}
                        className="h-full origin-left rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
                        style={{ width: `${row.value}%`, transform: "scaleX(0)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  { label: "Avg. note time", value: "38s" },
                  { label: "Accuracy signal", value: "High" },
                  { label: "Specialties live", value: "7" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-xl font-semibold text-mist-50">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-mist-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel flex flex-col p-5">
              <div className="flex items-center gap-2 text-mist-300">
                <MessagesSquare size={16} className="text-violet-400" />
                <span className="text-sm font-medium">Recent activity</span>
              </div>

              <ul className="mt-5 flex-1 space-y-4">
                {[
                  { name: "Session #204", detail: "Orthopaedic note approved", time: "2m ago" },
                  { name: "Session #203", detail: "AI draft ready for review", time: "9m ago" },
                  { name: "Session #202", detail: "Dental note exported to EHR", time: "24m ago" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-mist-100">{item.name}</p>
                      <p className="text-xs text-mist-500">{item.detail}</p>
                    </div>
                    <span className="whitespace-nowrap text-[11px] text-mist-500">{item.time}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-400/5 p-3 text-xs text-teal-300">
                <TrendingUp size={14} />
                Documentation time down 71% this week
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-mist-500">
          Illustrative preview — Docstician is in active development. Figures shown are
          representative, not live product data.
        </p>
      </div>
    </section>
  );
}

export default ProductPreview;
