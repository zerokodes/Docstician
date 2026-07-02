import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "../../lib/gsapSetup";
import MagneticButton from "../ui/MagneticButton";
import GlowOrb from "../ui/GlowOrb";
import { WAITLIST_FORM_URL } from "../../lib/constants";

export function FinalCta() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cta-reveal]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="glass-panel glow-teal relative overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
          <GlowOrb className="left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2" color="violet" />

          <div className="relative">
            <span className="eyebrow" data-cta-reveal>
              <Sparkles size={12} /> Now building — early access waitlist open
            </span>

            <h2
              className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-mist-50 sm:text-4xl lg:text-5xl"
              data-cta-reveal
            >
              Be among the first clinicians to reclaim your time.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-balance text-base text-mist-300 sm:text-lg" data-cta-reveal>
              Docstician is currently in active development. Join the waitlist to get early
              access, shape the product, and be first in line at launch.
            </p>

            <div className="mt-9 flex justify-center" data-cta-reveal>
              <MagneticButton
                href={WAITLIST_FORM_URL}
                target="_blank"
                className="text-base"
                trackEvent="final_cta_clicked"
              >
                Join the waitlist
                <ArrowRight size={18} />
              </MagneticButton>
            </div>

            <p className="mt-5 text-xs text-mist-500" data-cta-reveal>
              No spam. No commitment. Just early access when we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
