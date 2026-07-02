import { useEffect, useMemo, useRef } from "react";
import { FileCheck2, Mic, Sparkles } from "lucide-react";
import { gsap } from "../../../lib/gsapSetup";
import StatusPill from "../../ui/StatusPill";
import { PATIENT_INFO, NOTE_SECTIONS } from "./soapierNote";

const WAVE_BAR_COUNT = 28;

/**
 * Flattens the structured clerking document into a flat, ordered list of
 * renderable "lines" so they can be typed out one-by-one, top to bottom,
 * like the note is being written live.
 */
function buildNoteLines() {
  const lines = [];
  lines.push({ kind: "kicker", text: "Patient Information" });
  PATIENT_INFO.forEach((f) => lines.push({ kind: "field", label: f.label, text: f.value }));

  NOTE_SECTIONS.forEach((section) => {
    lines.push({ kind: "heading", text: section.heading });
    section.groups.forEach((group) => {
      lines.push({ kind: "subheading", text: group.subheading });
      group.lines?.forEach((l) => lines.push({ kind: "line", text: l }));
      group.fields?.forEach((f) => lines.push({ kind: "field", label: f.label, text: f.value }));
    });
  });

  lines.push({ kind: "sign", text: "Physiotherapist Signature / Date: ______" });
  return lines;
}

/**
 * The hero product mockup: a live "session" panel (waveform) on top, and a
 * draft-note panel below that types out the full SOAPIER physiotherapy
 * clerking document line by line — as if Docstician is writing it live.
 */
export function HeroProductVisual() {
  const barsRef = useRef([]);
  const panelRef = useRef(null);
  const scrollRef = useRef(null);
  const lineRefs = useRef([]);

  const noteLines = useMemo(() => buildNoteLines(), []);

  useEffect(() => {
    const bars = barsRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const waveTl = gsap.timeline({ repeat: -1 });
    waveTl.to(bars, {
      scaleY: () => gsap.utils.random(0.25, 1),
      duration: 0.5,
      ease: "sine.inOut",
      stagger: { each: 0.03, repeat: -1, yoyo: true },
    });

    gsap.to(panelRef.current, {
      y: -12,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    const scrollEl = scrollRef.current;
    const els = lineRefs.current.filter(Boolean);

    // Reduced motion: show the whole document, no typing.
    if (prefersReducedMotion || !scrollEl) {
      els.forEach((el) => {
        if (el.dataset.full) el.textContent = el.dataset.full;
        el.style.opacity = "1";
      });
      return () => {
        waveTl.kill();
        gsap.killTweensOf(panelRef.current);
      };
    }

    // Type the document out line-by-line, auto-scrolling to follow the cursor.
    const typeTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    els.forEach((el) => {
      const full = el.dataset.full || "";
      const label = el.dataset.label;

      typeTl
        .set(el, { opacity: 1 })
        .to(el, {
          duration: Math.max(0.18, Math.min(full.length * 0.014, 0.9)),
          ease: "none",
          onUpdate: function typeChars() {
            const chars = Math.round(full.length * this.progress());
            el.textContent = (label ? `${label}: ` : "") + full.slice(0, chars);
          },
          onComplete: () => {
            el.textContent = (label ? `${label}: ` : "") + full;
          },
        })
        // Keep the newest line in view as the document grows.
        .to(
          scrollEl,
          {
            scrollTop: () => Math.max(0, el.offsetTop - scrollEl.clientHeight + el.offsetHeight + 12),
            duration: 0.3,
            ease: "power2.out",
          },
          "<"
        );
    });

    // Before looping, reset all lines back to empty/hidden.
    typeTl.call(() => {
      els.forEach((el) => {
        el.textContent = el.dataset.label ? `${el.dataset.label}: ` : "";
        el.style.opacity = "0";
      });
      scrollEl.scrollTop = 0;
    });

    return () => {
      waveTl.kill();
      typeTl.kill();
      gsap.killTweensOf(panelRef.current);
    };
  }, [noteLines]);

  return (
    <div ref={panelRef} className="relative mx-auto w-full max-w-md lg:max-w-lg">
      {/* Live consultation / recording panel */}
      <div className="glass-panel glow-teal overflow-hidden p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Mic size={16} className="text-teal-300" />
            <span className="text-sm font-medium text-mist-200">Live consultation</span>
          </div>
          <StatusPill>Recording</StatusPill>
        </div>

        <div className="flex h-14 items-center justify-center gap-1 py-4">
          {Array.from({ length: WAVE_BAR_COUNT }).map((_, i) => (
            <span
              key={i}
              ref={(el) => (barsRef.current[i] = el)}
              className="inline-block w-1 rounded-full bg-gradient-to-t from-teal-500 to-teal-300"
              style={{ height: "100%", transform: "scaleY(0.4)" }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-mist-400">
          <Sparkles size={14} className="text-violet-400" />
          <span className="text-xs">Docstician is transcribing &amp; structuring in real time</span>
        </div>
      </div>

      {/* Draft note — full SOAPIER clerking document, typed out live.
          Offset & overlapping only slightly at the corner so it never
          covers the recording panel above. */}
      <div className="glass-panel relative mt-4 ml-auto w-[94%] p-3.5 sm:p-4">
        <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2.5 text-mist-200">
          <div className="flex items-center gap-2">
            <FileCheck2 size={14} className="text-teal-300" />
            <span className="text-[11px] font-semibold uppercase tracking-wide">
              Draft note · SOAPIER
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-wide text-mist-500">
            Physiotherapy · OA
          </span>
        </div>

        <div
          ref={scrollRef}
          className="relative h-[196px] overflow-hidden pr-1 font-mono text-[9.5px] leading-relaxed text-mist-300 sm:text-[10px]"
        >
          {noteLines.map((line, i) => {
            const common = "opacity-0";
            if (line.kind === "kicker") {
              return (
                <p
                  key={i}
                  ref={(el) => (lineRefs.current[i] = el)}
                  data-full={line.text}
                  className={`${common} mb-1 text-[9px] font-semibold uppercase tracking-wide text-mist-400`}
                />
              );
            }
            if (line.kind === "heading") {
              return (
                <p
                  key={i}
                  ref={(el) => (lineRefs.current[i] = el)}
                  data-full={line.text}
                  className={`${common} mb-1 mt-2 border-t border-white/10 pt-2 text-[11px] font-semibold text-teal-300`}
                />
              );
            }
            if (line.kind === "subheading") {
              return (
                <p
                  key={i}
                  ref={(el) => (lineRefs.current[i] = el)}
                  data-full={line.text}
                  className={`${common} mt-1.5 text-[9.5px] font-semibold text-mist-100`}
                />
              );
            }
            if (line.kind === "field") {
              return (
                <p
                  key={i}
                  ref={(el) => (lineRefs.current[i] = el)}
                  data-full={line.text}
                  data-label={line.label}
                  className={`${common} mt-0.5 text-mist-300`}
                />
              );
            }
            if (line.kind === "sign") {
              return (
                <p
                  key={i}
                  ref={(el) => (lineRefs.current[i] = el)}
                  data-full={line.text}
                  className={`${common} mt-2 border-t border-white/10 pt-2 text-[9px] text-mist-500`}
                />
              );
            }
            return (
              <p
                key={i}
                ref={(el) => (lineRefs.current[i] = el)}
                data-full={line.text}
                className={`${common} mt-0.5 text-mist-400`}
              />
            );
          })}
        </div>

        {/* Bottom fade to reinforce the "document being written" feel */}
        <div className="pointer-events-none absolute inset-x-3.5 bottom-3.5 h-8 bg-gradient-to-t from-ink-900/95 to-transparent sm:inset-x-4" />
      </div>
    </div>
  );
}

export default HeroProductVisual;
