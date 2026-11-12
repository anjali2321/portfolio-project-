import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { getGmailComposeUrl, portfolioData } from "../data/portfolio";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-800/80 py-12 sm:py-16 lg:py-24"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/20 via-cyan-500/15 to-emerald-500/10 blur-3xl sm:h-96 sm:w-[44rem]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="min-w-0 lg:col-span-7"
        >
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-300 sm:px-3.5 sm:text-xs">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            <span className="truncate">{profile.availability}</span>
          </div>

          <h1
            id="hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
            <span className="mt-1.5 block bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mt-3 font-mono text-xs leading-relaxed text-cyan-300/90 sm:mt-4 sm:text-sm md:text-base">
            {profile.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base md:text-lg">
            {profile.summary}
          </p>

          {/* Primary Action */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <a
              href="#experience"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 sm:w-auto"
            >
              <span>View Experience &amp; Work</span>
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Quick Contact & Socials */}
          <div className="mt-7 flex flex-col gap-3 text-xs text-slate-400 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-sm">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                {profile.location}
              </span>

              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-1.5 transition hover:text-cyan-300"
              >
                <FiPhone className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                {profile.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anjali Chimata on GitHub"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anjali Chimata on LinkedIn"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={getGmailComposeUrl(profile.email)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compose email to Anjali Chimata in Gmail"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300"
              >
                <FiMail className="h-4 w-4" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Engineering Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="min-w-0 lg:col-span-5"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 sm:h-3 sm:w-3" />
              </div>
              <span className="font-mono text-[11px] text-slate-400 sm:text-xs">
                anjali-chimata.ts
              </span>
            </div>

            <pre className="max-w-full overflow-x-auto font-mono text-[11px] leading-6 text-slate-300 sm:text-xs md:text-[13px]">
              <code>
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-cyan-300">engineer</span> = {"{\n"}
                {"  "}name:{" "}
                <span className="text-emerald-300">&quot;{profile.name}&quot;</span>,
                {"\n"}
                {"  "}role:{" "}
                <span className="text-emerald-300">&quot;{profile.role}&quot;</span>,
                {"\n"}
                {"  "}frontend: [
                <span className="text-amber-300">&quot;React.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;TS&quot;</span>],{"\n"}
                {"  "}backend: [
                <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Java&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Spring Boot&quot;</span>],{"\n"}
                {"  "}cloud: [
                <span className="text-amber-300">&quot;Azure Logic Apps&quot;</span>,{" "}
                <span className="text-amber-300">&quot;APIM&quot;</span>],{"\n"}
                {"  "}ecommerce:{" "}
                <span className="text-emerald-300">&quot;Shopify GraphQL Admin&quot;</span>
                {"\n}"};
              </code>
            </pre>

            <div className="mt-5 grid gap-2.5 border-t border-slate-800 pt-4 sm:mt-6 sm:gap-3 sm:pt-5">
              {profile.coreHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 rounded-xl border border-slate-800/90 bg-slate-950/60 px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-xs font-medium text-slate-400">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-100">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
