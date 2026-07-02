import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { gsap, ScrollTrigger } from "../../lib/gsapSetup";
import SectionHeading from "../ui/SectionHeading";
import { WORKFLOW_STEPS } from "../../lib/constants";

export function HowItWorks() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The connector line "draws" downward as the section scrolls through view.
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      stepRefs.current.forEach((step) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 78%",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="From voice to record"
          title="A single workflow, from first word to final note."
          description="Every step is designed to keep the clinician in control while removing the manual burden of writing it all down."
        />

        <div className="relative mt-20 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 sm:left-[23px]">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-teal-400 via-teal-400 to-violet-400"
            />
          </div>

          <ol className="space-y-10">
            {WORKFLOW_STEPS.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => (stepRefs.current[i] = el)}
                className="relative flex gap-6 pl-0 sm:gap-8"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-400/40 bg-ink-900 text-sm font-semibold text-teal-300 sm:h-12 sm:w-12">
                  {i === WORKFLOW_STEPS.length - 1 ? (
                    <CheckCircle2 size={20} className="text-teal-300" />
                  ) : (
                    i + 1
                  )}
                </div>

                <div className="glass-panel flex-1 p-6">
                  <h3 className="text-lg font-semibold text-mist-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
