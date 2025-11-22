import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import SocialLink from "./common/SocialLink";

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Jose Francisco Santos
            <br />
            Hidalgo Alvarez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            AI Systems Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Specializing in Multi-Agent Frameworks and Agentic AI, architecting scalable AI solutions that deliver significant business impact.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="gap-2"
            >
              <Mail size={18} />
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
            >
              View Work
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <SocialLink href="https://github.com" icon={Github} label="GitHub Profile" />
            <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn Profile" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}