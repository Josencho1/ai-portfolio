import { ExternalLink } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";
import { Doc } from "@/convex/_generated/dataModel";

interface ProjectCardProps {
  project: Doc<"projects">;
  delay: number;
  inView: boolean;
}

export default function ProjectCard({
  project,
  delay,
  inView,
}: ProjectCardProps) {
  return (
    <AnimatedCard
      delay={delay}
      inView={inView}
      className="p-8 border rounded-lg bg-background hover:border-primary transition-colors"
    >
      {project.featured && (
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4">
          Featured
        </span>
      )}
      <h3 className="text-2xl font-bold tracking-tight mb-3">
        {project.title}
      </h3>
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
    </AnimatedCard>
  );
}
