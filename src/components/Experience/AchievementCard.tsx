import { LucideIcon } from "lucide-react";
import AnimatedCard from "../common/AnimatedCard";

interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}

export default function AchievementCard({
  icon: Icon,
  title,
  description,
  delay,
  inView,
}: AchievementCardProps) {
  return (
    <AnimatedCard
      delay={delay}
      inView={inView}
      className="p-8 border rounded-lg bg-background"
    >
      <Icon className="w-10 h-10 mb-4 text-primary" />
      <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </AnimatedCard>
  );
}
