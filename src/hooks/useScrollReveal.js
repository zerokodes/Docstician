import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsapSetup";

/**
 * Animates direct children matching `selector` with a staggered fade/rise
 * as the container enters the viewport.
 */
export function useScrollReveal({ selector = "[data-reveal]", start = "top 78%", stagger = 0.12 } = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      if (!targets.length) return;

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 36 });

      ScrollTrigger.batch(targets, {
        start,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger,
            overwrite: true,
          }),
      });
    }, scope);

    return () => ctx.revert();
  }, [selector, start, stagger]);

  return scopeRef;
}

export default useScrollReveal;
