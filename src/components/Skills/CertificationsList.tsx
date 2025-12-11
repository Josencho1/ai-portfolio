import AnimatedCard from "../common/AnimatedCard";

interface CertificationsListProps {
  certifications: string[];
  inView: boolean;
}

export default function CertificationsList({
  certifications,
  inView,
}: CertificationsListProps) {
  return (
    <AnimatedCard
      delay={0.6}
      inView={inView}
      className="mt-16 p-8 border rounded-lg bg-background"
    >
      <h3 className="text-2xl font-bold tracking-tight mb-6">
        Certifications & Specializations
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
        {certifications.map((cert, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
