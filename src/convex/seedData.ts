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

export const addCareerRoadmap = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Check if project already exists to avoid duplicates
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "AI Career Roadmap Infographic"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "AI Career Roadmap Infographic",
      description: "An interactive HTML/CSS visualization of my study plan to become an AI engineer, featuring a progress dashboard, expandable timeline with Coursera courses and book outlines, and a doughnut chart for skill distribution using Chart.js.",
      category: "Web Development",
      technologies: ["HTML", "CSS (Tailwind)", "JavaScript", "Chart.js"],
      link: null,
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "AI Career Roadmap Infographic added successfully" };
  },
});

export const addResilienceReport = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Check if project already exists to avoid duplicates
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "LLM Resilience Test Report"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "LLM Resilience Test Report",
      description: "An interactive HTML report for Hive Mind Solutions evaluating LLM resilience against prompt injection attacks, featuring a sticky navigation, key findings on model performance (e.g., Gemini 2.5 Pro and Claude Sonnet 4.5 showed high resilience), mitigation strategies, and recommendations for agent security using a custom 'HMS Secure Responder Template'.",
      category: "Web Development",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Inter Font"],
      link: null,
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "LLM Resilience Test Report added successfully" };
  },
});

export const addFundingDashboard = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Check if project already exists to avoid duplicates
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "Interactive Funding Dashboard for Hive Mind Solutions"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "Interactive Funding Dashboard for Hive Mind Solutions",
      description: "An interactive dashboard visualizing R&D funding opportunities, featuring a program explorer with filters, dynamic charts (Chart.js), strategic pathways, and a prioritized action plan using Tailwind CSS and JavaScript.",
      category: "Web Development",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js", "Inter Font"],
      link: null,
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "Interactive Funding Dashboard added successfully" };
  },
});