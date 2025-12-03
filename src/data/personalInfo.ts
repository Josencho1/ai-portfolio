import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Jose Hidalgo",
  initials: "JH",
  title: "AI Systems Engineer",
  email: "josepakohidalgo@gmail.com",
  description: "AI Systems Engineer specializing in production-grade agentic AI systems and multi-agent orchestration frameworks. Proven track record architecting scalable, cost-optimized AI solutions delivering measurable business impact. Expert in multi-framework orchestration (CrewAI, LangGraph), LLM integration across diverse providers, multi-LLM federation strategies, and production RAG systems.",
  socials: [
    {
      label: "GitHub Profile",
      href: "https://github.com",
      icon: Github,
    },
    {
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/jose-hidalgo-alvarez/",
      icon: Linkedin,
    },
  ],
  contactAction: {
    label: "Get in Touch",
    icon: Mail,
  },
} as const;