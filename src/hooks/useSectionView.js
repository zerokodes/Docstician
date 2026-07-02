import { useEffect, useRef } from "react";
import { track } from "../lib/analytics";

/**
 * Fires a `section_viewed` analytics event once, the first time the returned
 * ref's element crosses 50% into the viewport. Cheaper and more precise than
 * scroll-depth percentages for a page with unevenly sized sections.
 */
export function useSectionView(sectionName) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;

    let fired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          track("section_viewed", { section: sectionName });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}

export default useSectionView;
