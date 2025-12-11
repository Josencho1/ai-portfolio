import { EducationItem } from "@/data/educationData";

interface EducationListProps {
  education: EducationItem[];
}

export default function EducationList({ education }: EducationListProps) {
  return (
    <div className="pt-8">
      <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">
        Education
      </h3>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index}>
            <p className="font-semibold text-foreground">{item.degree}</p>
            <p className="text-sm">
              {item.institution} | {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
