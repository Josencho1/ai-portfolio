export const projectCategories = [
  "all",
  "AI Systems",
  "Automation",
  "Web Development",
  "Technical Documentation",
  "Research",
] as const;

export type ProjectCategory = typeof projectCategories[number];
