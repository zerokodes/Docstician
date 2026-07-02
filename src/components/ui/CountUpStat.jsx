import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsapSetup";

/**
 * Animates a numeric value counting up from 0 once it scrolls into view.
 */
export function CountUpStat({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const numeric = parseFloat(value);
  const isNumeric = !Number.isNaN(numeric);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric) return undefined;

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: numeric,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      onUpdate: () => {
        el.textContent = Number.isInteger(numeric)
          ? Math.round(counter.val).toString()
          : counter.val.toFixed(1);
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [numeric, isNumeric]);

  return (
    <span className={className}>
      <span ref={ref}>{isNumeric ? 0 : value}</span>
      {suffix}
    </span>
  );
}

export default CountUpStat;
