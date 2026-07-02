import { useState } from "react";
import { Ear, Brain, NotebookPen } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlowOrb from "../ui/GlowOrb";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSectionView } from "../../hooks/useSectionView";
import { mergeRefs } from "../../lib/mergeRefs";
import { track } from "../../lib/analytics";

const MODES = [
  {
    id: "listen",
    icon: Ear,
    label: "Listens",
    heading: "Captures the natural conversation",
    body: "No dictation, no typing mid-exam. Docstician transcribes the clinician-patient conversation in real time — even in busy, noisy clinical settings.",
  },
  {
    id: "understand",
    icon: Brain,
    label: "Understands",
    heading: "Applies real clinical context",
    body: "Profession, specialty, and encounter type shape how the AI interprets the conversation — a physiotherapy assessment isn't read like a dental exam.",
  },
  {
    id: "write",
    icon: NotebookPen,
    label: "Writes",
    heading: "Delivers a structured, ready note",
    body: "A specialty-formatted clinical note is generated from the transcript alone — grounded, traceable, and ready for your review.",
  },
];

export function Solution() {
  const [active, setActive] = useState(MODES[0].id);
  const scopeRef = useScrollReveal();
  const viewRef = useSectionView("solution");
  const activeMode = MODES.find((m) => m.id === active);

  return (
    <section id="solution" ref={mergeRefs(scopeRef, viewRef)} className="relative py-24 sm:py-32">
      <GlowOrb className="left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2" color="teal" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="The Docstician approach"
          title="One conversation. One accurate note. Zero extra effort."
          description="Docstician sits quietly in the background of your consultation, turning speech into structured clinical intelligence."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-3" data-reveal>
          {MODES.map((mode) => {
            const Icon = mode.icon;
            const isActive = mode.id === active;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  setActive(mode.id);
                  track("solution_tab_clicked", { value: mode.id });
                }}
                className={`glass-panel flex items-center gap-3 p-5 text-left transition-[background-color,border-color] duration-300 ${
                  isActive ? "border-teal-400/40 bg-teal-400/[0.06]" : "hover:bg-white/[0.05]"
                }`}
                aria-pressed={isActive}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isActive ? "bg-teal-400 text-ink-950" : "bg-white/5 text-teal-300"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span className={`text-sm font-semibold ${isActive ? "text-mist-50" : "text-mist-300"}`}>
                  {mode.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="glass-panel mt-6 p-8 sm:p-12" data-reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                {activeMode.heading}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-mist-300">
                {activeMode.body}
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="relative flex h-48 w-full max-w-sm items-center justify-center rounded-2xl border border-white/10 bg-ink-900/60">
                <div className="flex items-center gap-3">
                  {MODES.map((mode, i) => {
                    const Icon = mode.icon;
                    const isActive = mode.id === active;
                    return (
                      <div key={mode.id} className="flex items-center gap-3">
                        <div
                          className={`isolate flex h-14 w-14 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color,box-shadow] duration-500 ease-out will-change-transform ${
                            isActive
                              ? "scale-110 border-teal-400 bg-teal-400/10 text-teal-300 glow-teal"
                              : "border-white/10 text-mist-500"
                          }`}
                        >
                          <Icon size={22} />
                        </div>
                        {i < MODES.length - 1 && (
                          <div className="h-px w-8 bg-gradient-to-r from-white/20 to-white/5" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
