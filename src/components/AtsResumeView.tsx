import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { getGmailComposeUrl, portfolioData } from "../data/portfolio";

interface AtsResumeViewProps {
  onBackToPortfolio: () => void;
}

export default function AtsResumeView({
  onBackToPortfolio,
}: AtsResumeViewProps) {
  const { profile, skillGroups, projects, experience, education, certifications } =
    portfolioData;

  return (
    <section
      aria-label="ATS-Friendly Resume Preview"
      className="min-h-screen bg-slate-950 px-3 py-6 sm:px-6 sm:py-8 lg:px-8 print:bg-white print:p-0"
    >
      {/* Top Action Bar (hidden when printing PDF) */}
      <div className="no-print mx-auto mb-6 max-w-[820px]">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-3.5 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <button
            type="button"
            onClick={onBackToPortfolio}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:text-white sm:text-sm"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500 sm:text-sm"
          >
            <FiDownload className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Download ATS Resume (PDF)</span>
          </button>
        </div>
      </div>

      {/* Single-Column ATS-Compliant Resume Sheet */}
      <article className="print-sheet mx-auto max-w-[820px] rounded-xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl sm:p-9">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-3 text-center">
          <h1 className="text-xl font-bold uppercase tracking-wide text-slate-950 sm:text-2xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">
            {profile.tagline}
          </p>
          <p className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] text-slate-700 sm:text-xs">
            <span>{profile.location}</span>
            <span aria-hidden="true">|</span>
            <a href={`tel:${profile.phone}`} className="hover:underline">
              {profile.phone}
            </a>
            <span aria-hidden="true">|</span>
            <a
              href={getGmailComposeUrl(profile.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {profile.email}
            </a>
          </p>
          <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] text-slate-700 sm:text-xs">
            <span>
              LinkedIn:{" "}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {profile.linkedinHandle}
              </a>
            </span>
            <span aria-hidden="true">|</span>
            <span>
              GitHub:{" "}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {profile.githubHandle}
              </a>
            </span>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mt-3.5">
          <h2 className="border-b border-slate-400 pb-0.5 text-xs font-bold uppercase tracking-wider text-slate-950">
            Professional Summary
          </h2>
          <p className="mt-1.5 text-[11px] leading-relaxed text-slate-800 sm:text-xs">
            {profile.summary}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-3.5">
          <h2 className="border-b border-slate-400 pb-0.5 text-xs font-bold uppercase tracking-wider text-slate-950">
            Technical Skills
          </h2>
          <div className="mt-1.5 space-y-1 text-[11px] leading-snug text-slate-800 sm:text-xs">
            {skillGroups.map((group) => (
              <p key={group.category}>
                <strong className="font-semibold text-slate-950">
                  {group.atsLabel}:
                </strong>{" "}
                {group.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-3.5">
          <h2 className="border-b border-slate-400 pb-0.5 text-xs font-bold uppercase tracking-wider text-slate-950">
            Professional Experience
          </h2>
          <div className="mt-1.5 space-y-2.5">
            {experience.map((item) => (
              <div key={`${item.role}-${item.organization}`}>
                <div className="flex flex-col gap-0.5 text-[11px] sm:flex-row sm:items-baseline sm:justify-between sm:text-xs">
                  <p className="font-bold text-slate-950">
                    {item.role} | {item.organization}
                  </p>
                  <span className="font-medium text-slate-700">{item.period}</span>
                </div>

                <div className="mt-1.5 space-y-2">
                  {item.projects.map((proj) => (
                    <div key={proj.name}>
                      <p className="text-[11px] font-bold text-slate-900 sm:text-xs">
                        {proj.name}
                      </p>
                      <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-snug text-slate-800 sm:pl-5 sm:text-xs">
                        {proj.highlights.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-3.5">
          <h2 className="border-b border-slate-400 pb-0.5 text-xs font-bold uppercase tracking-wider text-slate-950">
            Projects
          </h2>
          <div className="mt-1.5 space-y-2">
            {projects.map((project) => (
              <div key={project.id}>
                <p className="break-words text-[11px] font-bold text-slate-950 sm:text-xs">
                  {project.title}{" "}
                  <span className="font-normal text-slate-700">
                    | {project.subtitle}
                  </span>
                  {project.liveUrl && (
                    <>
                      {" "}
                      <span className="font-normal text-slate-700">|</span>{" "}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-normal underline"
                      >
                        {project.liveLabel ?? project.liveUrl}
                      </a>
                    </>
                  )}
                </p>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11px] leading-snug text-slate-800 sm:pl-5 sm:text-xs">
                  {project.highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-0.5 pl-4 text-[11px] text-slate-800 sm:pl-5 sm:text-xs">
                  <strong className="font-semibold">Technologies:</strong>{" "}
                  {project.techStack.join(", ")}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-3.5">
          <h2 className="border-b border-slate-400 pb-0.5 text-xs font-bold uppercase tracking-wider text-slate-950">
            Education
          </h2>
          <div className="mt-1.5 space-y-1.5">
            {education.map((edu) => (
              <div
                key={`${edu.degree}-${edu.period}`}
                className="flex flex-col gap-0.5 text-[11px] sm:flex-row sm:items-baseline sm:justify-between sm:text-xs"
              >
                <div className="min-w-0">
                  <p className="font-bold text-slate-950">{edu.degree}</p>
                  <p className="text-slate-700">{edu.institution}</p>
                </div>
                <span className="shrink-0 font-medium text-slate-800">
                  {edu.period} | {edu.score}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-3.5">
          <h2 className="border-b border-slate-400 pb-0.5 text-xs font-bold uppercase tracking-wider text-slate-950">
            Certifications
          </h2>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11px] text-slate-800 sm:pl-5 sm:text-xs">
            {certifications.map((cert) => (
              <li key={`${cert.title}-${cert.year}`}>
                {cert.title}
                {cert.issuer ? ` – ${cert.issuer}, ` : " – "}
                {cert.year}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
}
