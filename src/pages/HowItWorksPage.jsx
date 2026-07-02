import { useEffect, useRef } from "react";
import {
  Mic,
  AudioLines,
  Users,
  Brain,
  LayoutTemplate,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { gsap, ScrollTrigger } from "../lib/gsapSetup";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import MagneticButton from "../components/ui/MagneticButton";
import GlowOrb from "../components/ui/GlowOrb";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { WAITLIST_FORM_URL } from "../lib/constants";

const PIPELINE = [
  { icon: Mic, title: "Audio capture", body: "The consultation is recorded through the clinician's device with consent." },
  { icon: AudioLines, title: "Speech recognition", body: "Real-time transcription tuned for clinical language and local accents." },
  { icon: Users, title: "Speaker diarization", body: "Clinician and patient speech are separated for clean, attributable context." },
  { icon: Brain, title: "Clinical context engine", body: "Profession, specialty, and encounter type shape interpretation." },
  { icon: LayoutTemplate, title: "Template selection", body: "The correct specialty documentation format is chosen automatically." },
  { icon: FileText, title: "Documentation generation", body: "A structured, terminology-accurate draft note is produced." },
  { icon: ShieldCheck, title: "Validation", body: "Output is grounded strictly in the transcript to resist hallucination." },
  { icon: CheckCircle2, title: "Final note", body: "The clinician reviews, edits, approves, and exports the record." },
];

const JOURNEY = [
  {
    step: "Before the visit",
    title: "Set up the session in seconds",
    body: "Create a patient session, select the case specialty, and start recording. Voice enrollment helps Docstician recognise you for better diarization.",
  },
  {
    step: "During the visit",
    title: "Just have the conversation",
    body: "Focus entirely on your patient. Docstician listens in the background and transcribes in real time — no typing, no dictation breaks.",
  },
  {
    step: "After the visit",
    title: "Review, approve, and export",
    body: "A specialty-formatted draft note is ready in seconds. Correct anything if needed, approve it, and export to PDF, hospital records, or your EHR.",
  },
];

export function HowItWorksPage() {
  const revealRef = useScrollReveal();
  const pipelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
      ScrollTrigger.refresh();
    }, pipelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From spoken consultation to finished clinical note."
        description="Docstician turns a natural clinician-patient conversation into structured, specialty-aware documentation — while keeping you the final decision maker at every step."
      />

      {/* Clinician journey */}
      <section ref={revealRef} className="relative py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="The clinician journey"
            title="Three simple moments, zero extra paperwork."
            description="Docstician fits into your existing workflow instead of adding to it."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {JOURNEY.map((item, i) => (
              <div key={item.title} data-reveal className="glass-panel p-7">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-300">
                  0{i + 1} · {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-mist-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI pipeline */}
      <section ref={pipelineRef} className="relative py-16 sm:py-24">
        <GlowOrb className="left-1/2 top-10 h-[440px] w-[440px] -translate-x-1/2" color="teal" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Under the hood"
            title="The AI documentation pipeline."
            description="Each stage is purpose-built for accuracy, low latency, and clinical trust."
          />

          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 sm:left-[23px]">
              <div
                ref={lineRef}
                className="h-full w-full origin-top bg-gradient-to-b from-teal-400 to-violet-400"
              />
            </div>

            <ol className="space-y-6">
              {PIPELINE.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <li key={stage.title} className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-400/40 bg-ink-900 text-teal-300 sm:h-12 sm:w-12">
                      <Icon size={18} />
                    </div>
                    <div className="glass-panel flex-1 p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-mist-500">
                          Step {i + 1}
                        </span>
                        <h3 className="text-base font-semibold text-mist-50">{stage.title}</h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{stage.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Clinician-in-the-loop callout */}
      <section className="relative py-16 sm:py-20">
        <div className="container-page">
          <div className="glass-panel glow-teal relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
            <GlowOrb className="left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2" color="violet" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
                You always stay in control.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-mist-300">
                Every note is a draft until you approve it. Docstician assists your
                clinical judgement — it never replaces it.
              </p>
              <MagneticButton
                href={WAITLIST_FORM_URL}
                target="_blank"
                className="mt-8"
                trackEvent="how_it_works_cta_clicked"
              >
                Join the waitlist
                <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorksPage;
