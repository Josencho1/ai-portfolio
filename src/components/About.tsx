import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EducationList from "./About/EducationList";
import { educationData } from "@/data/educationData";

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
            I'm an AI Systems Engineer with a proven track record of architecting scalable AI solutions that deliver significant business impact. My expertise spans Multi-Agent Frameworks, LLM integration, Python automation, and agile project management, complemented by hands-on technical documentation and regulatory compliance experience.
          </p>
          
          <p>
            Currently working with Hive Mind Solutions (HMS), I've successfully reduced AI operational costs by 85%, accelerated project planning cycles by 60%, and improved AI agent factual accuracy by 40% through innovative multi-agent architectures and RAG-based knowledge systems.
          </p>

          <p>
            My cross-domain expertise bridges AI engineering with technical trades, having developed interactive training materials and SOPs for gas technician certification that adhere to CSA B149.1-25 and TSSA regulations. This unique combination enables me to create AI solutions grounded in real-world operational requirements and safety standards.
          </p>
          
          <p>
            I hold 9 professional specializations from institutions including DeepLearning.AI, Google, and Vanderbilt University, covering areas from Multi AI Agent Systems to Generative AI Leadership & Strategy.
          </p>

          <EducationList education={educationData} />
        </div>
      </motion.div>
    </section>
  );
}