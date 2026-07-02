import { useEffect, useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { gsap } from "../../lib/gsapSetup";
import MagneticButton from "../ui/MagneticButton";
import GlowOrb from "../ui/GlowOrb";
import HeroProductVisual from "./hero/HeroProductVisual";
import { WAITLIST_FORM_URL } from "../../lib/constants";

export function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          "[data-hero-eyebrow]",
          "[data-hero-line]",
          "[data-hero-sub]",
          "[data-hero-cta]",
          "[data-hero-visual]",
          "[data-hero-badge]",
        ],
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      );
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.1
      )
        .fromTo(
          "[data-hero-line]",
          { opacity: 0, y: 40, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12 },
          0.25
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-visual]",
          { opacity: 0, y: 50, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.7"
        )
        .fromTo(
          "[data-hero-badge]",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 },
          "-=0.5"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52"
    >
      <GlowOrb className="-left-32 -top-32 h-[420px] w-[420px] animate-pulse-slow" color="teal" />
      <GlowOrb className="-right-24 top-40 h-[380px] w-[380px] animate-pulse-slow" color="violet" />

      <div className="container-page relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="eyebrow" data-hero-eyebrow>
            Now building — clinician waitlist open
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[68px]">
            <span className="block text-gradient" data-hero-line>
              Your AI clinical scribe
            </span>
            <span className="block text-gradient-accent" data-hero-line>
              that never sleeps.
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-mist-300 sm:text-lg lg:mx-0"
            data-hero-sub
          >
            Docstician listens during your consultation and turns it into structured,
            specialty-aware clinical documentation — so you can focus on the patient,
            not the paperwork.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <div data-hero-cta>
              <MagneticButton
                href={WAITLIST_FORM_URL}
                target="_blank"
                trackEvent="hero_cta_clicked"
                trackProps={{ position: "primary" }}
              >
                Join the waitlist
                <ArrowRight size={16} />
              </MagneticButton>
            </div>
            <div data-hero-cta>
              <MagneticButton
                href="#how-it-works-preview"
                variant="secondary"
                trackEvent="hero_cta_clicked"
                trackProps={{ position: "secondary" }}
              >
                <PlayCircle size={16} />
                See it in action
              </MagneticButton>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
            {["Physiotherapy", "General Medicine", "Dentistry"].map((role) => (
              <span
                key={role}
                data-hero-badge
                className="text-xs font-medium uppercase tracking-wider text-mist-500"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div data-hero-visual>
          <HeroProductVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;
