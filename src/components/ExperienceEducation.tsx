import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

export default function ExperienceEducation() {
  const { experience, education, certifications } = portfolioData;

  return (
    <>
      {/* Professional Experience */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="border-b border-slate-800/80 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Career History
            </p>
            <h2
              id="experience-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Professional Experience
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Enterprise integration, Shopify application development, frontend UI
              engineering, and production support.
            </p>
          </div>

          <div className="mt-8 space-y-8 sm:mt-10">
            {experience.map((item) => (
              <motion.article
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-8"
              >
                {/* Role Header */}
                <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3 sm:items-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/30">
                      <FiBriefcase className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 break-words text-sm font-medium text-cyan-300">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border border-slate-700 bg-slate-950 px-3.5 py-1 font-mono text-xs font-semibold text-slate-200">
                    {item.period}
                  </span>
                </div>

                {/* Enterprise Projects Grid */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {item.projects.map((proj) => (
                    <div
                      key={proj.name}
                      className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-950/60 p-5"
                    >
                      <div>
                        <h4 className="text-base font-bold text-white sm:text-lg">
                          {proj.name}
                        </h4>

                        <ul className="mt-4 space-y-2.5">
                          {proj.highlights.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm"
                            >
                              <FiCheckCircle
                                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-300 ring-1 ring-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="border-b border-slate-800/80 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Credentials
            </p>
            <h2
              id="education-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Education &amp; Certifications
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 lg:col-span-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30">
                  <FiBookOpen className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-white sm:text-xl">Education</h3>
              </div>

              <div className="mt-6 space-y-5">
                {education.map((edu) => (
                  <div
                    key={`${edu.degree}-${edu.period}`}
                    className="relative border-l-2 border-slate-700 pl-4 sm:pl-5"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-indigo-400"
                    />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                      <h4 className="text-sm font-bold text-white sm:text-base">
                        {edu.degree}
                      </h4>
                      <span className="shrink-0 font-mono text-xs text-slate-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 break-words text-xs font-medium text-indigo-300 sm:text-sm">
                      {edu.institution}
                    </p>
                    <p className="mt-1.5 inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-300">
                      {edu.score}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 lg:col-span-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
                  <FiAward className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Certifications
                </h3>
              </div>

              <ul className="mt-6 space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={`${cert.title}-${cert.year}`}
                    className="flex flex-col gap-1.5 rounded-xl border border-slate-800 bg-slate-950/65 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{cert.title}</p>
                      {cert.issuer && (
                        <p className="mt-0.5 text-xs text-slate-400">{cert.issuer}</p>
                      )}
                    </div>
                    <span className="w-fit shrink-0 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-0.5 font-mono text-xs text-cyan-300">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
