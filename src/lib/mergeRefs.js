/**
 * Combines multiple refs (callback or object refs) into a single ref callback,
 * so one DOM node can be attached to several hooks at once (e.g. a scroll-reveal
 * ref and an analytics section-view ref on the same <section>).
 */
export function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else ref.current = node;
    });
  };
}

export default mergeRefs;
