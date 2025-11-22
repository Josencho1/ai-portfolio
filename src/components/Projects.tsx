import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useQuery } from "convex/react";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import CategoryFilter from "./Projects/CategoryFilter";
import ProjectCard from "./Projects/ProjectCard";
import { projectCategories } from "@/data/projectCategories";

export default function Projects() {
  const [, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const projects = useQuery(api.projects.getByCategory, { category: selectedCategory });

  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>

      <CategoryFilter
        categories={[...projectCategories]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            delay={index * 0.1}
            inView={inView}
          />
        ))}
      </div>
    </SectionContainer>
  );
}