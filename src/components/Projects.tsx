import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useQuery } from "convex/react";
import { Button } from "./ui/button";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const projects = useQuery(api.projects.getByCategory, { category: selectedCategory });

  const categories = ["all", "AI Systems", "Automation", "Web Development"];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Projects</h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border rounded-lg bg-background hover:border-primary transition-colors"
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4">
                  Featured
                </span>
              )}
              <h3 className="text-2xl font-bold tracking-tight mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Project <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
