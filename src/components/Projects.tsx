import { useState } from "react";
import { useInView } from "react-intersection-observer";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import CategoryFilter from "./Projects/CategoryFilter";
import ProjectCard from "./Projects/ProjectCard";
import { projectCategories } from "@/data/projectCategories";
import { projects } from "@/data/projectsData";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>

      <CategoryFilter
        categories={[...projectCategories]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              delay={index * 0.1}
              inView={inView}
            />
          ))
        ) : (
          <p className="text-muted-foreground col-span-2 text-center">
            No projects found in this category.
          </p>
        )}
      </div>
    </SectionContainer>
  );
}