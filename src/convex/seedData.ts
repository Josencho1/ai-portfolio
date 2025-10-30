import { internalMutation } from "./_generated/server";

export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existingProjects = await ctx.db.query("projects").collect();
    if (existingProjects.length > 0) {
      return { message: "Data already seeded" };
    }

    const projects = [
      {
        title: "Multi-Agent Software Development Framework",
        description: "Architected a hierarchical multi-agent framework using CrewAI with 5 specialized agent roles, reducing AI operational costs by 85% and improving task completion accuracy to 92%.",
        category: "AI Systems",
        technologies: ["CrewAI", "Python", "OpenAI", "Gemini", "Claude"],
        link: null,
        featured: true,
      },
      {
        title: "Automated Research Synthesis System",
        description: "Orchestrated a multi-agent AI system using CrewAI and Flowise, integrating 3 LLM providers to accelerate project planning cycles by 60%, reducing timeline from 10 days to 4 days.",
        category: "Automation",
        technologies: ["CrewAI", "Flowise", "OpenAI", "Gemini", "Ollama"],
        link: null,
        featured: true,
      },
      {
        title: "RAG-Based Knowledge System",
        description: "Architected a RAG-based knowledge system using NotebookLM and Gemini API with 150+ context-aware prompts, improving AI agent factual accuracy by 40% and reducing hallucinations by 75%.",
        category: "AI Systems",
        technologies: ["RAG", "NotebookLM", "Gemini API", "Prompt Engineering"],
        link: null,
        featured: true,
      },
      {
        title: "Workflow Automation Integration",
        description: "Designed automated workflows using N8N and Make to integrate AI agent outputs with ClickUp and Google Workspace, increasing team productivity by 45% and eliminating 20 hours of manual work weekly.",
        category: "Automation",
        technologies: ["N8N", "Make", "ClickUp", "Google Workspace"],
        link: null,
        featured: false,
      },
      {
        title: "AI Career Roadmap Infographic",
        description: "An interactive HTML/CSS visualization of my study plan to become an AI engineer, featuring a progress dashboard, expandable timeline with Coursera courses and book outlines, and a doughnut chart for skill distribution using Chart.js.",
        category: "Web Development",
        technologies: ["HTML", "CSS (Tailwind)", "JavaScript", "Chart.js"],
        link: null,
        featured: false,
      },
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return { message: "Seed data created successfully" };
  },
});