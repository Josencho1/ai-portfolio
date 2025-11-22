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

export const addRdfundingInfographic = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Check if project already exists to avoid duplicates
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "R&D Funding Infographic for Hive Mind Solutions"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "R&D Funding Infographic for Hive Mind Solutions",
      description: "An interactive infographic visualizing R&D funding opportunities for Hive Mind Solutions, featuring doughnut and bar charts with Chart.js, multi-layered funding ecosystem details (federal, provincial, municipal), tax credit breakdowns, talent pipeline guidance, and top program recommendations using Tailwind CSS and JavaScript.",
      category: "Web Development",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js"],
      link: null,
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "R&D Funding Infographic added successfully" };
  },
});

export const updateRdfundingLink = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Find the project by title to avoid duplicates
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "R&D Funding Infographic for Hive Mind Solutions"))
      .first();
    if (!existing) {
      return { message: "Project not found" };
    }

    // Update the link field
    await ctx.db.patch(existing._id, { link: "https://lightcoral-trout-302187.hostingersite.com/" });
    return { message: "Link updated successfully" };
  },
});

export const addExpenseTracker = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "Expense Tracker Application"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "Expense Tracker Application",
      description: "A full-stack expense tracking application built with React, featuring PDF and CSV export capabilities, real-time data visualization, and comprehensive expense management. Developed as part of advanced Claude AI collaboration exercises.",
      category: "Web Development",
      technologies: ["React", "TypeScript", "PDF Export", "CSV Export", "Data Visualization"],
      link: "https://github.com/Josencho1/expense-tracker",
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "Expense Tracker Application added successfully" };
  },
});

export const addGasTechUnit3 = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "Gas Technician Unit 3 Training Website"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "Gas Technician Unit 3 Training Website",
      description: "Interactive educational website covering properties, characteristics, and safe handling of fuel gases. Refactored using Claude AI with meta-prompting and context engineering, fact-checked against CSA training units and code B149.1.25 for regulatory compliance.",
      category: "Technical Documentation",
      technologies: ["HTML", "CSS", "JavaScript", "CSA B149.1.25", "Meta-Prompting", "Context Engineering"],
      link: "https://slateblue-magpie-302187.hostingersite.com/",
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "Gas Technician Unit 3 Training Website added successfully" };
  },
});

export const addFurnaceSOP = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "High-Efficiency Furnace Maintenance SOP"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "High-Efficiency Furnace Maintenance SOP",
      description: "Interactive Standard Operating Procedure for high-efficiency gas furnace inspection, maintenance, and commissioning. Features tabbed navigation, checklists, and detailed procedures adhering to CSA B149.1-25 and Ontario TSSA regulations.",
      category: "Technical Documentation",
      technologies: ["HTML", "CSS", "JavaScript", "CSA B149.1-25", "TSSA Compliance"],
      link: "https://lightcoral-trout-302187.hostingersite.com/",
      featured: false,
    };

    await ctx.db.insert("projects", project);
    return { message: "High-Efficiency Furnace Maintenance SOP added successfully" };
  },
});

export const addContextEngineering = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), "Context Engineering Research"))
      .first();
    if (existing) {
      return { message: "Project already exists" };
    }

    const project = {
      title: "Context Engineering Research",
      description: "Comprehensive research on Context Engineering methodologies for optimizing LLM performance. Covers retrieval strategies, processing techniques, and management approaches, contrasting with traditional Prompt Engineering. Includes impact statistics and future directions for agentic context systems.",
      category: "Research",
      technologies: ["LLM Optimization", "Context Engineering", "Prompt Engineering", "AI Research"],
      link: null,
      featured: true,
    };

    await ctx.db.insert("projects", project);
    return { message: "Context Engineering Research added successfully" };
  },
});