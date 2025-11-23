import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import SocialLink from "./common/SocialLink";
import { personalInfo } from "@/data/personalInfo";

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
            {personalInfo.name.split(" ").slice(0, 3).join(" ")}
            <br />
            {personalInfo.name.split(" ").slice(3).join(" ")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {personalInfo.title}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            {personalInfo.description}
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="gap-2"
            >
              <Mail size={18} />
              {personalInfo.contactAction.label}
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
            {personalInfo.socials.map((social) => (
              <SocialLink
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
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