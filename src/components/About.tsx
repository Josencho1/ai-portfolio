import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm an AI Systems Engineer with a proven track record of architecting scalable AI solutions that deliver significant business impact. My expertise spans Multi-Agent Frameworks, LLM integration, Python automation, and agile project management.
          </p>
          
          <p>
            Currently working with Hive Mind Solutions (HMS), I've successfully reduced AI operational costs by 85%, accelerated project planning cycles by 60%, and improved AI agent factual accuracy by 40% through innovative multi-agent architectures and RAG-based knowledge systems.
          </p>
          
          <p>
            I hold 9 professional specializations from institutions including DeepLearning.AI, Google, and Vanderbilt University, covering areas from Multi AI Agent Systems to Generative AI Leadership & Strategy.
          </p>

          <div className="pt-8">
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Energy Systems Engineering Technician Diploma</p>
                <p className="text-sm">St. Lawrence College, Kingston, ON | 2022–2024</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Residential A/C Systems Technician Pre-Apprenticeship (Level 1)</p>
                <p className="text-sm">St. Lawrence College, Kingston, ON | Completed August 2025</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
