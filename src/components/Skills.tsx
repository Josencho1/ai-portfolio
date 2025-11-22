import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import SkillCategoryCard from "./Skills/SkillCategoryCard";
import CertificationsList from "./Skills/CertificationsList";
import { skillCategories, certifications } from "@/data/skillsData";

export default function Skills() {
  const [, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionContainer id="skills" className="bg-muted/30">
      <SectionTitle>Skills & Technologies</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard
            key={index}
            {...category}
            delay={index * 0.1}
            inView={inView}
          />
        ))}
      </div>

      <CertificationsList certifications={certifications} inView={inView} />
    </SectionContainer>
  );
}