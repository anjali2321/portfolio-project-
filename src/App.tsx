import { useState } from "react";
import AtsResumeView from "./components/AtsResumeView";
import Contact from "./components/Contact";
import ExperienceEducation from "./components/ExperienceEducation";
import Hero from "./components/Hero";
import Navbar, { type ViewMode } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { portfolioData } from "./data/portfolio";

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("portfolio");

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <Navbar
        shortName={portfolioData.profile.shortName}
        viewMode={viewMode}
        onChangeView={setViewMode}
      />

      {viewMode === "resume" ? (
        <main className="pt-16 print:pt-0">
          <AtsResumeView onBackToPortfolio={() => setViewMode("portfolio")} />
        </main>
      ) : (
        <main className="bg-grid-pattern pt-16">
          <Hero />
          <Skills />
          <ExperienceEducation />
          <Projects />
          <Contact />
        </main>
      )}
    </div>
  );
}
