export interface SkillGroup {
  category: string;
  atsLabel: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
}

export interface ExperienceProject {
  name: string;
  highlights: string[];
  techStack: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  projects: ExperienceProject[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  year: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    availability: string;
    location: string;
    phone: string;
    email: string;
    githubUrl: string;
    githubHandle: string;
    linkedinUrl: string;
    linkedinHandle: string;
    summary: string;
    coreHighlights: { label: string; value: string }[];
  };
  skillGroups: SkillGroup[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export function getGmailComposeUrl(email: string, subject = "Portfolio Inquiry") {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: subject,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/**
 * Single source of truth for both the Web Portfolio and the ATS-Friendly Resume View.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: "Anjali Chimata",
    shortName: "Anjali",
    role: "Full Stack Developer",
    tagline: "Full Stack Developer | React.js | Node.js | Java | Azure | Shopify",
    availability: "1+ Year Experience · Full Stack, Azure & Shopify",
    location: "Chennai, Tamil Nadu",
    phone: "6305316958",
    email: "anjalichimata21@gmail.com",
    githubUrl: "https://github.com/anjali2321",
    githubHandle: "github.com/anjali2321",
    linkedinUrl: "https://www.linkedin.com/in/anjalichimata520741/",
    linkedinHandle: "linkedin.com/in/anjalichimata520741",
    summary:
      "Full Stack Developer with 1+ year of experience in enterprise application development, frontend engineering, Microsoft Azure integration, Shopify app development, and production support. Proficient in building responsive, component-driven web applications using React.js, Next.js, TypeScript, JavaScript, and Node.js, alongside Java, REST APIs, and GraphQL. Experienced in developing enterprise workflows with Azure Logic Apps, Azure Functions, and APIM, working with the Shopify GraphQL Admin API, and resolving 25+ production issues through systematic debugging, Postman API testing, and Agile/Scrum collaboration.",
    coreHighlights: [
      { label: "Experience", value: "1+ Year · 25+ Prod Issues Resolved" },
      { label: "Frontend & App", value: "React.js · Next.js · TypeScript" },
      { label: "Cloud & E-Commerce", value: "Azure Integration · Shopify" },
    ],
  },

  skillGroups: [
    {
      category: "Programming Languages",
      atsLabel: "Programming Languages",
      description: "Core application, scripting, and relational query languages.",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      category: "Frontend Development",
      atsLabel: "Frontend Development",
      description: "Component-driven interfaces, styling systems, and responsive layouts.",
      skills: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Web Design",
      ],
    },
    {
      category: "Backend Development",
      atsLabel: "Backend Development",
      description: "Server-side services, ORM persistence, and enterprise API integration.",
      skills: [
        "Node.js",
        "Spring Boot",
        "Hibernate",
        "REST API Development",
        "API Integration",
      ],
    },
    {
      category: "Databases",
      atsLabel: "Databases",
      description: "Relational schema design, querying, and transactional storage.",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      category: "API & E-Commerce",
      atsLabel: "API & E-Commerce",
      description: "Embedded Shopify Admin architecture, GraphQL schemas, and API validation.",
      skills: [
        "GraphQL",
        "Shopify GraphQL Admin API",
        "Shopify App Development",
        "Postman",
      ],
    },
    {
      category: "Microsoft Azure",
      atsLabel: "Microsoft Azure",
      description: "Enterprise integration pipelines, serverless compute, and observability.",
      skills: [
        "Azure Logic Apps",
        "Azure Functions",
        "Azure API Management (APIM)",
        "Azure Key Vault",
        "Azure Storage Account",
        "Azure Monitor",
      ],
    },
    {
      category: "Tools & Methodologies",
      atsLabel: "Tools & Methodologies",
      description: "Collaborative engineering workflows, containerization, and production reliability.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jira",
        "Docker",
        "Agile",
        "Scrum",
        "Debugging",
        "API Testing",
        "Production Support",
      ],
    },
  ],

  experience: [
    {
      role: "Full Stack Developer",
      organization: "Dcomm Ventures Private Limited (Arizon Digital Solutions USA)",
      period: "October 2025 – Present",
      projects: [
        {
          name: "Project 1: GES – Enterprise Integration & UI Development",
          techStack: [
            "Azure Logic Apps",
            "Azure Functions",
            "APIM",
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Postman",
          ],
          highlights: [
            "Engineered and supported enterprise integration workflows using Azure Logic Apps, Azure Functions, and Azure API Management (APIM), including Oracle-to-BigCommerce integration pipelines and API data transformation.",
            "Developed and maintained responsive frontend UI components using React.js, Next.js, JavaScript, TypeScript, and Tailwind CSS.",
            "Provided dedicated production support by troubleshooting integration failures, analyzing Logic App executions, and resolving 25+ production issues.",
            "Utilized Azure Key Vault, Azure Storage Account, and Azure Monitor for integration configuration, storage, and monitoring, and executed REST API testing and payload validation via Postman.",
            "Collaborated with cross-functional teams using Jira, Git, GitHub, and Agile/Scrum practices.",
          ],
        },
        {
          name: "Project 2: Sales Pilot – Shopify Application Development",
          techStack: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Shopify GraphQL Admin API",
            "Git & GitHub",
          ],
          highlights: [
            "Developing a full-stack Shopify application using React.js, Next.js, TypeScript, and Node.js.",
            "Analyzing and verifying Agent Cockpit functionalities, including product catalog, sales workflows, and AI Concierge capabilities.",
            "Integrating the Shopify GraphQL Admin API for data operations while contributing to embedded Shopify Admin application architecture and workflows.",
            "Managing source control, feature branches, and pull request workflows via Git and GitHub, and collaborating with the engineering team to analyze requirements, troubleshoot defects, and deliver application enhancements.",
          ],
        },
      ],
    },
  ],

  projects: [
    {
      id: "nxt-watch",
      title: "Nxt Watch",
      subtitle: "React.js Web Application",
      liveUrl: "https://acnxtwatchapp.ccbp.tech/login",
      liveLabel: "acnxtwatchapp.ccbp.tech/login",
      summary:
        "Video streaming web application featuring multi-page navigation, search filtering, theme customization, and authenticated routes.",
      highlights: [
        "Developed a video streaming application with Login, Home, Trending, Gaming, and Saved Videos pages featuring reusable React components, search functionality, and theme customization.",
        "Integrated REST APIs and implemented JWT-based authentication with protected routes using React Router.",
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "REST APIs",
        "React Router",
        "JWT",
      ],
    },
    {
      id: "github-popular-repos",
      title: "GitHub Popular Repos",
      subtitle: "React.js Web Application",
      liveUrl: "https://acgitrepos.ccbp.tech",
      liveLabel: "acgitrepos.ccbp.tech",
      summary:
        "Responsive repository discovery app allowing users to explore popular GitHub repositories filtered by programming language.",
      highlights: [
        "Built a responsive application to explore popular GitHub repositories by programming language using reusable React components and dynamic data rendering.",
        "Integrated GitHub REST APIs to retrieve and display repository details.",
      ],
      techStack: ["React.js", "JavaScript", "CSS", "Bootstrap", "REST APIs"],
    },
  ],

  education: [
    {
      degree: "Industry Ready Certification in Java Full-Stack Development",
      institution: "NxtWave Disruptive Technologies",
      period: "2023 – 2024",
      score: "CGPA: 9.4",
    },
    {
      degree: "Bachelor of Science (B.Sc.) – Computer Science",
      institution:
        "Sri Sai Degree College, Dharmajigudem | Adikavi Nannaya University",
      period: "2017 – 2020",
      score: "CGPA: 8.84",
    },
    {
      degree: "Intermediate – MPC",
      institution: "Narayana Junior College, Vijayawada",
      period: "2015 – 2017",
      score: "Percentage: 97.7%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "MSZP High School, Chekkapalli",
      period: "2014 – 2015",
      score: "CGPA: 9.5",
    },
  ],

  certifications: [
    {
      title: "Certified Shopify Full Stack Developer",
      year: "2026",
    },
    {
      title: "Stripe Professional Developer",
      year: "2026",
    },
    {
      title: "Front End Web Development",
      issuer: "IBM Innovation Camp",
      year: "2022",
    },
    {
      title: "Back End Web Development",
      year: "2022",
    },
  ],
};
