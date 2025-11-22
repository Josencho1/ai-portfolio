import { LucideIcon } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";

interface SkillCategoryCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  delay: number;
  inView: boolean;
}

export default function SkillCategoryCard({
  icon: Icon,
  title,
  skills,
  delay,
  inView,
}: SkillCategoryCardProps) {
  return (
    <AnimatedCard
      delay={delay}
      inView={inView}
      className="p-8 border rounded-lg bg-background"
    >
      <Icon className="w-10 h-10 mb-4 text-primary" />
      <h3 className="text-xl font-bold tracking-tight mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm text-muted-foreground flex items-start gap-2"
          >
            <span className="text-primary mt-1">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
