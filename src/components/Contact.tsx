import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiCheck, FiCopy, FiExternalLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { getGmailComposeUrl, portfolioData } from "../data/portfolio";

export default function Contact() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-6 sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Get In Touch
                </p>
                <h2
                  id="contact-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                >
                  Let&apos;s build something impactful together
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Full Stack Developer experienced in React.js, Next.js, TypeScript,
                  Node.js, Java, Microsoft Azure, and Shopify App Development. Open to
                  connecting with hiring teams and engineering leaders.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    {profile.location}
                  </span>
                  <a
                    href={`tel:${profile.phone}`}
                    className="inline-flex items-center gap-1.5 transition hover:text-cyan-300"
                  >
                    <FiPhone className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    {profile.phone}
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={getGmailComposeUrl(profile.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 break-all rounded-xl bg-indigo-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 sm:text-sm"
                  >
                    <FiMail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{profile.email}</span>
                    <FiExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-xs font-medium text-slate-200 transition hover:border-cyan-500/50 hover:text-cyan-200 sm:text-sm"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-4 w-4" aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-500/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">LinkedIn</p>
                    <p className="truncate font-mono text-xs text-slate-400">
                      {profile.linkedinHandle}
                    </p>
                  </div>
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-indigo-500/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                    <FaGithub className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">GitHub</p>
                    <p className="truncate font-mono text-xs text-slate-400">
                      {profile.githubHandle}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="no-print border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-slate-400 sm:flex-row sm:px-6 sm:text-left sm:text-sm lg:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp;
            Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-cyan-400"
          >
            <span>Back to top</span>
            <FiArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
