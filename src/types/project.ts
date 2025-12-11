export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link: string | null;
  featured: boolean;
}

export type ProjectCategory =
  | "all"
  | "AI Systems"
  | "Automation"
  | "Web Development"
  | "Technical Documentation"
  | "Research";
