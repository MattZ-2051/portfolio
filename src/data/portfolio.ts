export const profile = {
  name: "John Doe",
  role: "Developer",
  bio: "I'm a full-stack developer that loves building products and web apps that can impact millions of lives",
  description:
    "I'm a senior software engineer with 7 years of experience building scalable web apps that are performance optimized and good looking.",
  email: "john@example.com",
  socials: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
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
    title: "DevDash",
    description:
      "A comprehensive analytics dashboard for developers to track their productivity and code metrics.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "project-1",
    href: "#",
  },
  {
    title: "CodeForge",
    description:
      "Practice for technical interviews with hands-on coding challenges and real-time feedback.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "project-2",
    href: "#",
  },
  {
    title: "WriteFlow",
    description:
      "Never write from scratch again with WriteFlow, your AI-first writing tool for developers.",
    tags: ["React", "AI", "Tailwind"],
    image: "project-3",
    href: "#",
  },
  {
    title: "UI Toolkit",
    description:
      "A beautiful and comprehensive component library for building modern web applications.",
    tags: ["React", "Tailwind", "Storybook"],
    image: "project-4",
    href: "#",
  },
];

export const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
];

export const aboutContent = {
  paragraphs: [
    "I'm a passionate full-stack developer based in San Francisco, with a deep love for creating elegant, performant web applications that make a real difference in people's lives.",
    "Over the past 7 years, I've had the privilege of working with startups and established companies alike, helping them build products that scale to millions of users.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing my knowledge through blog posts and tech talks.",
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TechCorp",
      period: "2022 — Present",
      description: "Leading frontend architecture and building scalable web applications.",
    },
    {
      role: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 — 2022",
      description: "Built core product features and improved performance by 40%.",
    },
    {
      role: "Frontend Developer",
      company: "WebAgency",
      period: "2018 — 2020",
      description: "Developed responsive web applications for various clients.",
    },
  ],
};
