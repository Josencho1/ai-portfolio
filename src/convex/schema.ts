import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema(
  {
    projects: defineTable({
      title: v.string(),
      description: v.string(),
      category: v.string(),
      technologies: v.array(v.string()),
      link: v.union(v.string(), v.null()),
      featured: v.boolean(),
    }).index("by_category", ["category"]),

    messages: defineTable({
      name: v.string(),
      email: v.string(),
      message: v.string(),
      read: v.boolean(),
    }),
  },
  {
    schemaValidation: false,
  },
);

export default schema;