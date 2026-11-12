import { useState, type MouseEvent } from "react";
import { FiFileText, FiLayers, FiMenu, FiX } from "react-icons/fi";

export type ViewMode = "portfolio" | "resume";

interface NavbarProps {
  shortName: string;
  viewMode: ViewMode;
  onChangeView: (mode: ViewMode) => void;
}

const navLinks = [
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ shortName, viewMode, onChangeView }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMobileOpen(false);

    const scrollToTarget = () => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    if (viewMode !== "portfolio") {
      onChangeView("portfolio");
      setTimeout(scrollToTarget, 80);
    } else {
      scrollToTarget();
    }
  };

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleSectionClick(e, "#home")}
          className="group flex shrink-0 items-center gap-2 text-slate-100 focus:outline-none"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition group-hover:scale-105 sm:h-9 sm:w-9 sm:text-sm">
            AC
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            {shortName}
            <span className="font-mono text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              className="whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* View Mode Switcher + Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            role="group"
            aria-label="View mode"
            className="flex items-center rounded-xl border border-slate-800 bg-slate-900/90 p-1"
          >
            <button
              type="button"
              onClick={() => {
                onChangeView("portfolio");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-semibold transition sm:px-3 sm:text-sm ${
                viewMode === "portfolio"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <FiLayers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Portfolio</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onChangeView("resume");
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-semibold transition sm:px-3 sm:text-sm ${
                viewMode === "resume"
                  ? "bg-cyan-600 text-white shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <FiFileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>ATS Resume</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 transition hover:border-slate-700 hover:text-white lg:hidden"
          >
            {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Dropdown */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-3 lg:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
