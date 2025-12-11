import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Jose Francisco Santos Hidalgo Alvarez",
  initials: "JH",
  title: "AI Systems Engineer",
  email: "josepakohidalgo@gmail.com",
  description: "Specializing in Multi-Agent Frameworks and Agentic AI, architecting scalable AI solutions that deliver significant business impact.",
  socials: [
    {
      label: "GitHub Profile",
      href: "https://github.com",
      icon: Github,
    },
    {
      label: "LinkedIn Profile",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
  ],
  contactAction: {
    label: "Get in Touch",
    icon: Mail,
  },
} as const;
