import { motion } from "framer-motion";
import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiShoppingBag,
  FiTool,
} from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

const categoryIcons = [
  FiCode,
  FiLayers,
  FiServer,
  FiDatabase,
  FiShoppingBag,
  FiCloud,
  FiTool,
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-slate-800/80 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Technical Stack
          </p>
          <h2
            id="skills-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Technical Skills &amp; Cloud Capabilities
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Structured across programming languages, frontend, backend, databases,
            Shopify APIs, Microsoft Azure, and engineering tools.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {portfolioData.skillGroups.map((group, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isLastRowFullWidth = idx === portfolioData.skillGroups.length - 1;

            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                className={`flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-slate-700 sm:p-6 ${
                  isLastRowFullWidth ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/30">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {group.category}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {group.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-700/80 bg-slate-950/75 px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-cyan-500/50 hover:text-cyan-200 sm:px-3 sm:py-1.5"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
