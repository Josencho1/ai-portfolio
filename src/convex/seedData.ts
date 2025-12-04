import { internalMutation } from "./_generated/server";

export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    const projects = [
      {
        title: "Multi-Provider LLM Orchestration for Software Development",
        description: "Challenge: Reduce operational costs while maintaining high accuracy. Solution: Architected a hierarchical multi-agent system using CrewAI with 5 specialized agent roles, routing tasks to optimal LLM providers. Impact: Reduced operational expenses by 85% while maintaining 92% task completion accuracy.",
        category: "AI Systems",
        technologies: ["CrewAI", "Python", "OpenAI", "Gemini", "Claude"],
        link: null,
        featured: true,
      },
      {
        title: "Research Synthesis & Multi-Format Content Generation",
        description: "Challenge: Manual research synthesis took 10 days per cycle. Solution: Deployed an integrated multi-agent orchestration system combining CrewAI with Flowise and a multi-tier LLM federation strategy. Impact: Accelerated research-to-delivery cycle by 60% (10 days to 4 days).",
        category: "Automation",
        technologies: ["CrewAI", "Flowise", "OpenAI", "Gemini", "Ollama"],
        link: null,
        featured: true,
      },
      {
        title: "Production RAG System & Hallucination Mitigation",
        description: "Challenge: High rates of factual inaccuracies in knowledge-intensive tasks. Solution: Engineered a production RAG system combining NotebookLM with Gemini API and a meta-prompting framework. Impact: Improved factual accuracy by 40% and reduced hallucination incidents by 75%.",
        category: "AI Systems",
        technologies: ["RAG", "NotebookLM", "Gemini API", "Prompt Engineering"],
        link: null,
        featured: true,
      },
      {
        title: "Cross-Platform Workflow Automation & Integration",
        description: "Challenge: 20+ hours/week lost to manual data entry. Solution: Designed cross-platform workflow automation using n8n and Make, creating seamless data pipelines from AI agents to ClickUp/Google Workspace. Impact: Eliminated 20 hours of manual work weekly and increased efficiency by 45%.",
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
        link: "https://orangered-herring-112166.hostingersite.com/",
        featured: true,
      },
      {
        title: "LLM Resilience Test Report",
        description: "An interactive HTML report for Hive Mind Solutions evaluating LLM resilience against prompt injection attacks, featuring a sticky navigation, key findings on model performance (e.g., Gemini 2.5 Pro and Claude Sonnet 4.5 showed high resilience), mitigation strategies, and recommendations for agent security using a custom 'HMS Secure Responder Template'.",
        category: "Web Development",
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "Inter Font"],
        link: "https://antiquewhite-snake-885911.hostingersite.com/",
        featured: false,
      },
      {
        title: "R&D Funding Infographic for Hive Mind Solutions",
        description: "An interactive infographic visualizing R&D funding opportunities for Hive Mind Solutions, featuring doughnut and bar charts with Chart.js, multi-layered funding ecosystem details (federal, provincial, municipal), tax credit breakdowns, talent pipeline guidance, and top program recommendations using Tailwind CSS and JavaScript.",
        category: "Web Development",
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js"],
        link: "https://lightcoral-trout-302187.hostingersite.com/",
        featured: false,
      },
      {
        title: "Interactive Funding Dashboard for Hive Mind Solutions",
        description: "An interactive dashboard visualizing R&D funding opportunities, featuring a program explorer with filters, dynamic charts (Chart.js), strategic pathways, and a prioritized action plan using Tailwind CSS and JavaScript.",
        category: "Web Development",
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js", "Inter Font"],
        link: "https://lightcoral-trout-302187.hostingersite.com/",
        featured: false,
      },
      {
        title: "Expense Tracker Application",
        description: "A full-stack expense tracking application built with React, featuring PDF and CSV export capabilities, real-time data visualization, and comprehensive expense management. Developed as part of advanced Claude AI collaboration exercises.",
        category: "Web Development",
        technologies: ["React", "TypeScript", "PDF Export", "CSV Export", "Data Visualization"],
        link: "https://github.com/Josencho1/expense-tracker",
        featured: false,
      },
      {
        title: "Gas Technician Unit 3 Training Website",
        description: "Interactive educational website covering properties, characteristics, and safe handling of fuel gases. Refactored using Claude AI with meta-prompting and context engineering, fact-checked against CSA training units and code B149.1.25 for regulatory compliance.",
        category: "Technical Documentation",
        technologies: ["HTML", "CSS", "JavaScript", "CSA B149.1.25", "Meta-Prompting", "Context Engineering"],
        link: "https://gray-badger-918104.hostingersite.com/",
        featured: false,
      },
      {
        title: "High-Efficiency Furnace Maintenance SOP",
        description: "Interactive Standard Operating Procedure for high-efficiency gas furnace inspection, maintenance, and commissioning. Features tabbed navigation, checklists, and detailed procedures adhering to CSA B149.1-25 and Ontario TSSA regulations.",
        category: "Technical Documentation",
        technologies: ["HTML", "CSS", "JavaScript", "CSA B149.1-25", "TSSA Compliance"],
        link: "https://navajowhite-snake-846878.hostingersite.com/",
        featured: false,
      },
      {
        title: "Context Engineering Research",
        description: "Comprehensive research on Context Engineering methodologies for optimizing LLM performance. Covers retrieval strategies, processing techniques, and management approaches, contrasting with traditional Prompt Engineering. Includes impact statistics and future directions for agentic context systems.",
        category: "Research",
        technologies: ["LLM Optimization", "Context Engineering", "Prompt Engineering", "AI Research"],
        link: "https://slateblue-magpie-954127.hostingersite.com/",
        featured: true,
      },
    ];

    let updatedCount = 0;
    let createdCount = 0;

    for (const project of projects) {
      const existing = await ctx.db
        .query("projects")
        .filter((q) => q.eq(q.field("title"), project.title))
        .first();

      if (existing) {
        await ctx.db.patch(existing._id, project);
        updatedCount++;
      } else {
        await ctx.db.insert("projects", project);
        createdCount++;
      }
    }

    return { message: `Seed complete: ${createdCount} created, ${updatedCount} updated` };
  },
});