export const profile = {
  name: "Matt Zamora",
  role: "Developer",
  description:
    "I'm a senior software engineer with 5 years of experience building scalable web apps that are performance optimized and good looking.",
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
    title: "Evlo Salon Website",
    description: "Website for small business Evlo Salon Suites",
    tags: ["SvelteKit", "TailwindCSS"],
    image: "project-2",
    href: "#",
  },

  {
    title: "Martis Cleaning Website",
    description: "Website for small business Martis Cleaning Service",
    tags: ["React", "TailwindCSS"],
    image: "project-4",
    href: "https://martis-cleaning.com/",
  },
  {
    title: "Ethereum blockchain projects",
    description:
      "Projects built while taking a 3 month course studying the Ethereum blockchain and Solidity programming",
    tags: ["Solidity", "JavaScript"],
    image: "project-3",
    href: "https://github.com/MattZ-2051/into-the-ether",
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
    "I'm full-stack developer based in Boise Idaho, with a deep love for creating elegant, performant web applications that make a real difference in people's lives.",
    "Over the past 5 years, I've had the privilege of working with startups and established companies alike, helping them build products that scale.",
    "I enjoy learning new things in the world of software what new tech people in the industry are using, or building side projects. Besides my love for coding I am also a fitness fanatic, when I'm not coding I enjoy lifting weights or training and competing in the sport of Jiu Jitsu.",
  ],
  experience: [
    {
      role: "Senior Software Engineer / Lead Software Engineer (Contract / Full Time)",
      company: "Viiision",
      period: "Mar 2025 — Feb 2026",
      description:
        "Lead software development team of 3 engineers building scalable web applications.",
    },
    {
      role: "Senior Software Engineer (Contract)",
      company: "AdPrompt AI",
      period: "May 2024 — Feb 2025",
      description:
        "Reviewed code and led team of 4 programmers consisting of outsourced and in house developers owning features from end to end and reporting to CEO.",
    },
    {
      role: "Full Stack Engineer (Contract)",
      company: "Fandem",
      period: "Mar 2023 — Mar 2024",
      description:
        "Developed marketplace to purchase and sell digital collectibles using various payment methods like fiat and crypto for GlorySmacks Kickboxing league.",
    },

    {
      role: "Junior Full Stack Engineer / Full Stack Engineer",
      company: "Suku / Infinite",
      period: "Mar 2021 — Dev 2022",
      description:
        "Crafted NFT NYC award winning marketplace from concept to production use by McLaren for their digital collectible release. Our team implemented designs that met the high-end standards of this renowned brand.The campaign generated $2.5M and sold out in 72 hours.",
    },
  ],
};
