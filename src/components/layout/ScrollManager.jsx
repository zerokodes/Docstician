import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { track, initScrollDepthTracking } from "../../lib/analytics";

/**
 * On route change: scroll to top for new pages, or smooth-scroll to the target
 * element when the URL contains a hash (e.g. "/#features" from another page).
 * Also fires `page_viewed` and resets scroll-depth tracking per route.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick for the target section to render before scrolling to it.
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0 });
      });
      return;
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  useEffect(() => {
    track("page_viewed", { path: pathname });
    const cleanup = initScrollDepthTracking();
    return cleanup;
  }, [pathname]);

  return null;
}

export default ScrollManager;
