import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, TrendingDown, TrendingUp, Zap } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const achievements = [
    {
      icon: TrendingDown,
      title: "85% Cost Reduction",
      description: "Reduced AI operational costs through hierarchical multi-agent framework",
    },
    {
      icon: TrendingUp,
      title: "92% Accuracy",
      description: "Improved agent task completion accuracy with specialized agent roles",
    },
    {
      icon: Zap,
      title: "60% Faster Planning",
      description: "Accelerated project planning cycles from 10 days to 4 days",
    },
    {
      icon: Briefcase,
      title: "45% Productivity Boost",
      description: "Increased team productivity through workflow automation",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-32 bg-muted/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
        <p className="text-xl text-muted-foreground mb-16">AI Project Consultant | Hive Mind Solutions (HMS) | Kingston, ON | 2024–Present</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border rounded-lg bg-background"
            >
              <achievement.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-2xl font-bold tracking-tight mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 border rounded-lg bg-background"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-6">Key Accomplishments</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Architected hierarchical multi-agent framework using CrewAI with 5 specialized agent roles</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Orchestrated multi-agent AI system integrating 3 LLM providers (OpenAI, Google Gemini, Ollama)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Architected RAG-based knowledge system with 150+ context-aware prompts, reducing hallucinations by 75%</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Designed automated workflows using N8N and Make, eliminating 20 hours of manual data entry per week</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
