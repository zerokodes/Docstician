import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mic, Brain, FileCheck2, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "../../lib/gsapSetup";
import SectionHeading from "../ui/SectionHeading";
import { useSectionView } from "../../hooks/useSectionView";
import { mergeRefs } from "../../lib/mergeRefs";

// A condensed, 3-step teaser — deliberately mirrors the Listen/Understand/Write
// language used in the Solution section instead of maintaining a second,
// independently-drifting description of the full pipeline. The complete
// step-by-step breakdown lives in one place: the /how-it-works page.
const TEASER_STEPS = [
  {
    icon: Mic,
    title: "Listen",
    description: "Docstician captures the consultation in real time — no typing, no dictation breaks.",
  },
  {
    icon: Brain,
    title: "Understand",
    description: "Profession, specialty, and context shape how the conversation is interpreted.",
  },
  {
    icon: FileCheck2,
    title: "Write",
    description: "A structured, specialty-formatted draft note is ready for your review.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const viewRef = useSectionView("how_it_works_preview");

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works-preview"
      ref={mergeRefs(sectionRef, viewRef)}
      className="relative py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="From voice to record"
          title="One conversation becomes one finished note."
          description="Every step keeps the clinician in control while removing the manual burden of writing it all down."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {TEASER_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                ref={(el) => (stepRefs.current[i] = el)}
                className="glass-panel p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-mist-50">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
          >
            See the full pipeline, step by step
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
