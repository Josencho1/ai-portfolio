import { useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { projectService } from "@/services/projectService";
import { ProjectCategory } from "@/types/project";
import SectionContainer from "./common/SectionContainer";
import SectionTitle from "./common/SectionTitle";
import CategoryFilter from "./Projects/CategoryFilter";
import ProjectCard from "./Projects/ProjectCard";
import { projectCategories } from "@/data/projectCategories";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  // Use service layer for data access (Dependency Inversion Principle)
  // useMemo optimizes performance by only re-filtering when category changes
  const projects = useMemo(
    () => projectService.getProjectsByCategory(selectedCategory),
    [selectedCategory]
  );

  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>

      <CategoryFilter
        categories={[...projectCategories]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={project.id}
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