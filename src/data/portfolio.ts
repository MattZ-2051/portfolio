export const profile = {
  name: "Matt Zamora",
  role: "Senior Full-Stack Engineer",
  description:
    "I'm a software engineer with 5+ years of experience building scalable web apps that are performance optimized and good looking.",
  email: "mzamora2899@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/matt-zamora-95b38316b/",
  },
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export const homeProjects: Project[] = [

  {
    title: "Hatch AI CFO",
    description:
      "A AI fractional CFO to help founders raise capital.",
    tags: ["React", "Supabase", "TailwindCSS"],
    image: "hatch-app",
    href: "https://hatch.today/",
  },
  {
    title: "AgentBoost AI",
    description:
      "A web app for real estate agents providing AI assisted tools for social media and marketing.",
    tags: ["Sveltekit", "NestJS", "TailwindCSS"],
    image: "project-1",
    href: "https://agentboost-ai.io/",
  },
  {
    title: "Z Tech Solutions",
    description: "Website for software development agency",
    tags: ['SvelteKit', 'TailwindCSS'],
    image: "ztechsolutions",
    href: "https://ztechsolutions.io/",
  },
  {
    title: "Evlo Salon Website",
    description: "Website for small business Evlo Salon Suites",
    tags: ["SvelteKit", "TailwindCSS"],
    image: "project-2",
    href: "https://www.evlosalon.com/",
  },
  {
    title: "North Ridge Backyards Website",
    description: "Website for small business North Ridge Backyards",
    tags: ["React", "TailwindCSS"],
    image: "northridgebackyards",
    href: "https://northridgebackyards.com/",
  },

  {
    title: "Gem State Jiu Jitsu",
    description: "Website for business Gem State Jiu Jitsu",
    tags: ["React", "TailwindCSS"],
    image: "gemstatejiujitsu",
    href: "https://gemstatejiujitsu.com/",
  },
  {
    title: "208 Jiu Jitsu Academy",
    description: "Website for business 208 Jiu Jitsu Academy",
    tags: ["Webflow" ],
    image: "208jiujitsu",
    href: "https://208jiujitsuacademy.com/",
  },
  {
    title: "Treasure Valley Windows",
    description:
      "Website for small business Treasure Valley Windows and Power Wash",
    tags: ["React", "TailwindCSS"],
    image: "treasurevalleywindows",
    href: "https://treasurevalleywindows.com/",
  },
  {
    title: "Martis Cleaning Website",
    description: "Website for small business Martis Cleaning Service",
    tags: ["React", "TailwindCSS"],
    image: "project-4",
    href: "https://martis-cleaning.com/",
  },
];
export const projects: Project[] = [
  {
    title: "AgentBoost AI",
    description:
      "A web app for real estate agents providing AI assisted tools for social media and marketing.",
    tags: ["Sveltekit", "NestJS", "TailwindCSS"],
    image: "project-1",
    href: "https://agentboost-ai.io/",
  },
  {
    title: "Z Teck Solutions",
    description: "Website for software development agency",
    tags: ["SvelteKit", "TailwindCSS"],
    image: "ztechsolutions",
    href: "https://ztechsolutions.io/",
  },

  {
    title: "Evlo Salon Website",
    description: "Website for small business Evlo Salon Suites",
    tags: ["SvelteKit", "TailwindCSS"],
    image: "project-2",
    href: "https://www.evlosalon.com/",
  },
  {
    title: "North Ridge Backyards Website",
    description: "Website for small business North Ridge Backyards",
    tags: ["React", "TailwindCSS"],
    image: "northridgebackyards",
    href: "https://northridgebackyards.com/",
  },

  {
    title: "Treasure Valley Windows",
    description:
      "Website for small business Treasure Valley Windows and Power Wash",
    tags: ["React", "TailwindCSS"],
    image: "treasurevalleywindows",
    href: "https://treasurevalleywindows.com/",
  },
  {
    title: "Martis Cleaning Website",
    description: "Website for small business Martis Cleaning Service",
    tags: ["React", "TailwindCSS"],
    image: "project-4",
    href: "https://martis-cleaning.com/",
  },
  {
    title: "Gem State Jiu Jitsu",
    description: "Website for business Gem State Jiu Jitsu",
    tags: ["React", "TailwindCSS"],
    image: "gemstatejiujitsu",
    href: "https://gemstatejiujitsu.com/",
  },
  {
    title: "208 Jiu Jitsu Academy",
    description: "Website for business 208 Jiu Jitsu Academy",
    tags: ["Webflow"],
    image: "208jiujitsu",
    href: "https://208jiujitsuacademy.com/",
  },
  {
    title: "Ethereum blockchain projects",
    description:
      "Projects built while taking a 3 month course from Metana studying the Ethereum blockchain and Solidity programming",
    tags: ["Solidity", "JavaScript"],
    image: "project-3",
    href: "https://github.com/MattZ-2051/metana-bootcamp",
  },

  {
    title: "ThreeJS 3D projects",
    description:
      "Projects and coursework using the ThreeJS / webgl library for 3D graphics on the web. This repo is filled with coursework from threejsjourney",
    tags: ["Solidity", "JavaScript"],
    image: "project-3",
    href: "https://github.com/MattZ-2051/threejs",
  },
];

export const techStack = [
  "React",
  "NextJs",
  "SvelteKit",
  "PHP",
  "NestJS",
  "TypeScript",
  "Node.js",
  "CSS",
  "Material UI",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Jest",
  "Storybook",
  "Figma",
];

export const aboutContent = {
  paragraphs: [
    "I'm a senior full-stack engineer based in Boise, Idaho, with a deep love for creating elegant, performant web applications that make a real difference in people's lives.",
    "Over the past 5+ years I've built and shipped cloud-native web and AI/RAG applications using React, Next.js, Svelte, Node/NestJS, and AWS. I've led engineering teams of up to 4, including distributed, cross-timezone teams, and delivered measurable results: 95+ Lighthouse scores, 30%+ SEO gains, and a 50% increase in marketplace sales.",
    "I enjoy learning new things in the world of software, like what new tech people in the industry are using, or building side projects. Besides my love for coding I am also a fitness fanatic, when I'm not coding I enjoy lifting weights or training and competing in the sport of Jiu Jitsu.",
  ],
  experience: [
    {
      role: "Web Technologist & Software Specialist",
      company: "Fusion",
      period: "May 2026 — Present",
      highlights: [
        "Improved Lighthouse scores across delivered projects: Performance 55→95, SEO 70→100, Accessibility 65→100, through performance and accessibility optimization.",
        "Led design and development of enterprise web platforms on Strapi headless CMS with AWS hosting, delivering 3 client projects to date as the sole engineer.",
        "Architected SEO, analytics, and business intelligence solutions that improved search visibility and gave stakeholders clearer operational insight.",
        "Established CI/CD automation and AI-assisted development workflows, and partnered directly with clients to scope and deliver scalable solutions, helping grow the organization's web development offerings.",
      ],
    },
    {
      role: "AI Software Engineer (Contract, Part-Time)",
      company: "Hatch",
      period: "Jul 2026 — Present",
      highlights: [
        "Built a RAG-based conversational application using the OpenAI and Perplexity APIs, a Supabase vector database, and TanStack, delivering context-aware, scalable chat experiences.",
        "Implemented observability (error monitoring, analytics, production support workflows), improving system reliability and operational visibility.",
        "Architected and maintained CI/CD pipelines automating testing, deployment, and release, and established architecture standards and documentation to improve maintainability.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Viiision",
      period: "Mar 2025 — Mar 2026",
      highlights: [
        "Led a team of 2 engineers through modernization of a legacy PHP/React application to a NestJS backend and Svelte frontend, improving Lighthouse SEO scores by over 30% and reducing technical debt.",
        "Designed scalable backend services and optimized RESTful APIs, improving performance and reliability across high-traffic applications.",
        "Established engineering standards and AI-assisted development workflows to improve team productivity and maintainability.",
      ],
    },
    {
      role: "Full Stack Engineer (Contract, Full-Time)",
      company: "AdPrompt AI",
      period: "Jun 2024 — Mar 2025",
      highlights: [
        "Architected and deployed AWS infrastructure (EC2, Fargate, Amplify, Route 53, Docker) supporting frontend and backend services across dev, staging, and production environments.",
        "Designed and implemented CI/CD pipelines and cloud infrastructure automation, improving deployment reliability and operational efficiency.",
        "Led a distributed team of 4 engineers based in India through software quality initiatives, engineering standards, and code review, improving cross-timezone collaboration, development consistency, and maintainability.",
      ],
    },
    {
      role: "Full Stack Engineer (Contract, Full-Time)",
      company: "Fandem",
      period: "Feb 2023 — Jun 2023",
      highlights: [
        "Integrated Stripe and MetaMask/on-chain payment flows for a digital collectibles marketplace, supporting both fiat and cryptocurrency transactions and contributing to a 50% increase in marketplace sales volume.",
        "Diagnosed and resolved production issues across distributed systems through API tracing, log analysis, and performance optimization.",
        "Collaborated with cross-functional teams to design and maintain scalable marketplace services and backend applications.",
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "Suku / InfiniteWorld",
      period: "Mar 2021 — Dec 2022",
      highlights: [
        "Built the storefront UI, payment integration, and backend services for a high-traffic distributed marketplace that sold $2.5M in digital collectible assets.",
        "Developed reusable React/TypeScript component libraries with 100% automated test coverage.",
        "Contributed to application performance, maintainability, and software quality through rigorous testing practices.",
      ],
    },
  ],
};
