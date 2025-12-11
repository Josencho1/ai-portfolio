import { Button } from "../ui/button";
import { ProjectCategory } from "@/types/project";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: ProjectCategory) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category as ProjectCategory)}
          variant={selectedCategory === category ? "default" : "outline"}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
