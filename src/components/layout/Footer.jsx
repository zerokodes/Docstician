import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import { NAV_LINKS, LEGAL_LINKS, WAITLIST_FORM_URL } from "../../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/60">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link to="/" aria-label="Docstician home">
            <Logo />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-mist-400">
            The AI clinical documentation assistant that listens, understands, and writes —
            so clinicians can focus on patient care.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-mist-100">Product</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink item={link} className="text-sm text-mist-400 hover:text-mist-100" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-mist-100">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm text-mist-400 hover:text-mist-100">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mist-400 hover:text-mist-100"
                >
                  Join waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-mist-100">Legal</h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink item={link} className="text-sm text-mist-400 hover:text-mist-100" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist-500 sm:flex-row">
          <p>© {year} Docstician. All rights reserved.</p>
          <p>Built for licensed clinicians — currently in active development.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
