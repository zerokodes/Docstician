import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsapSetup";
import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import MagneticButton from "../ui/MagneticButton";
import { NAV_LINKS, WAITLIST_FORM_URL } from "../../lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate the inner nav row (not the fixed <header> itself) so the header
  // never carries an inline transform — a transform on the fixed element can
  // break sticky positioning in some mobile browsers.
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, clearProps: "all" }
    );
  }, []);

  // Lock body scroll and enable Escape-to-close while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-ink-950 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <nav ref={navRef} className="container-page flex items-center justify-between py-4">
          <Link to="/" aria-label="Docstician home" onClick={closeMenu}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  item={link}
                  className="text-sm font-medium text-mist-300 transition-colors hover:text-mist-50"
                />
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <MagneticButton
              href={WAITLIST_FORM_URL}
              target="_blank"
              className="!px-5 !py-2.5 text-sm"
            >
              Join the waitlist
            </MagneticButton>
          </div>

          {/* Mobile menu toggle — three-line hamburger that morphs into an X */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-[70] inline-flex h-9 w-9 items-center justify-center rounded-lg text-mist-100 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="relative block h-3.5 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile overlay rendered in a portal on <body> so it always covers the
          full viewport (unaffected by any transformed/positioned ancestor).
          Tapping anywhere outside the menu panel closes it; the backdrop blurs
          the entire page so only the nav panel is visible. */}
      {createPortal(
        <div
          onClick={closeMenu}
          aria-hidden={!mobileOpen}
          className={`fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
            mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute inset-x-0 top-[72px] origin-top px-6 transition-all duration-300 ${
              mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
          >
            <div className="glass-panel overflow-hidden bg-ink-900/95 p-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      item={link}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-mist-200 transition-colors hover:bg-white/5 hover:text-mist-50"
                    />
                  </li>
                ))}
                <li className="pt-2">
                  <MagneticButton
                    href={WAITLIST_FORM_URL}
                    target="_blank"
                    className="w-full"
                    onClick={closeMenu}
                  >
                    Join the waitlist
                  </MagneticButton>
                </li>
              </ul>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Navbar;
