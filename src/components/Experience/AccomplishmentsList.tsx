import AnimatedCard from "../common/AnimatedCard";

interface AccomplishmentsListProps {
  accomplishments: string[];
  inView: boolean;
}

export default function AccomplishmentsList({
  accomplishments,
  inView,
}: AccomplishmentsListProps) {
  return (
    <AnimatedCard
      delay={0.4}
      inView={inView}
      className="mt-16 p-8 border rounded-lg bg-background"
    >
      <h3 className="text-2xl font-bold tracking-tight mb-6">
        Key Accomplishments
      </h3>
      <ul className="space-y-4 text-muted-foreground">
        {accomplishments.map((accomplishment, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>{accomplishment}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
