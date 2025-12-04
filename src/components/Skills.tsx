import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import SkillCategoryCard from "./Skills/SkillCategoryCard";
import BulletListCard from "./common/BulletListCard";
import { skillCategories, certifications } from "@/data/skillsData";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionContainer id="skills" className="bg-muted/30">
      <SectionTitle>Skills & Technologies</SectionTitle>

      <div ref={ref}>
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

        <BulletListCard
          title="Certifications & Specializations"
          items={certifications}
          inView={inView}
          delay={0.6}
          className="mt-16"
        />
      </div>
    </SectionContainer>
  );
}