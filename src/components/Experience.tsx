import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import AchievementCard from "./Experience/AchievementCard";
import AccomplishmentsList from "./Experience/AccomplishmentsList";
import { achievements, accomplishments } from "@/data/experienceData";

export default function Experience() {
  const [, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionContainer id="experience" className="bg-muted/30">
      <SectionTitle subtitle="AI Project Consultant | Hive Mind Solutions (HMS) | Kingston, ON | 2024–Present">
        Experience
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements && achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              {...achievement}
              delay={index * 0.1}
              inView={inView}
            />
          ))
        ) : (
          <p className="text-muted-foreground col-span-2 text-center">
            No achievements data available.
          </p>
        )}
      </div>

      {accomplishments && accomplishments.length > 0 && (
        <AccomplishmentsList accomplishments={accomplishments} inView={inView} />
      )}
    </SectionContainer>
  );
}