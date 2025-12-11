import { Project, ProjectCategory } from "@/types/project";
import { projects } from "@/data/projectsData";

/**
 * Interface for project data access (Dependency Inversion Principle)
 * Components depend on this abstraction, not concrete implementation
 */
export interface IProjectService {
  getAllProjects(): Project[];
  getProjectsByCategory(category: ProjectCategory): Project[];
}

/**
 * Service for accessing project data (Single Responsibility Principle)
 * Implements Repository Pattern for data access abstraction
 */
class ProjectService implements IProjectService {
  getAllProjects(): Project[] {
    return projects;
  }

  getProjectsByCategory(category: ProjectCategory): Project[] {
    if (category === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === category);
  }
}

// Export singleton instance
export const projectService = new ProjectService();
