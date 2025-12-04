import AnimatedCard from "./AnimatedCard";

interface BulletListCardProps {
  title: string;
  items: string[];
  inView: boolean;
  delay?: number;
  className?: string;
}

export default function BulletListCard({
  title,
  items,
  inView,
  delay = 0.4,
  className = "",
}: BulletListCardProps) {
  return (
    <AnimatedCard
      delay={delay}
      inView={inView}
      className={`p-8 border rounded-lg bg-background ${className}`}
    >
      <h3 className="text-2xl font-bold tracking-tight mb-6">
        {title}
      </h3>
      <ul className="space-y-4 text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
