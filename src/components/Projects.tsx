import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-slate-800/80 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Web Applications
            </p>
            <h2
              id="projects-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
              Live React.js applications built with REST API integrations, protected
              routing, and responsive component architecture.
            </p>
          </div>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-500/40 hover:text-cyan-300 sm:text-sm"
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            <span>More on GitHub</span>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2">
          {portfolioData.projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/75 p-5 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 sm:p-6"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-300">
                    {project.subtitle}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-300 transition hover:text-emerald-200"
                    >
                      <span>Live App</span>
                      <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((bullet) => (
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

              <div className="mt-6 border-t border-slate-800 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-300 ring-1 ring-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="mt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 break-all text-xs font-semibold text-cyan-300 transition hover:text-cyan-200 sm:text-sm"
                    >
                      <FiExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{project.liveLabel ?? project.liveUrl}</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
