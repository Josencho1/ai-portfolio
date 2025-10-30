import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bot, Cloud, Code, Database, GitBranch, Workflow } from "lucide-react";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skillCategories = [
    {
      icon: Bot,
      title: "AI & Multi-Agent Frameworks",
      skills: ["CrewAI", "LangGraph", "Agentic AI Architecture", "LLM Integration", "RAG Architectures", "Prompt Engineering"],
    },
    {
      icon: Code,
      title: "Python & Development",
      skills: ["Python for AI/ML", "Automation Scripting", "Backend Development", "Data Structures & Algorithms"],
    },
    {
      icon: Workflow,
      title: "Project Management",
      skills: ["Agile Methodologies", "Waterfall", "Project Planning", "Risk Assessment", "Stakeholder Reporting"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform", "AWS Fundamentals", "Git & GitHub"],
    },
    {
      icon: Database,
      title: "Data Science",
      skills: ["SQL", "Advanced Data Analysis", "Data Visualization"],
    },
    {
      icon: GitBranch,
      title: "LLM Providers",
      skills: ["OpenAI", "Google Gemini", "Claude", "Ollama"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-32 bg-muted/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border rounded-lg bg-background"
            >
              <category.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold tracking-tight mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 border rounded-lg bg-background"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-6">Certifications & Specializations</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Multi AI Agent Systems with crewAI | DeepLearning.AI</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Generative AI Software Engineering | Vanderbilt University</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Google IT Automation with Python | Google</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Google Project Management | Google</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Generative AI Leadership & Strategy | Vanderbilt University</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Generative AI Data Analyst | Vanderbilt University</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
