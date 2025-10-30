import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("desc").collect();
  },
});

export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    if (args.category === "all") {
      return await ctx.db.query("projects").order("desc").collect();
    }
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("category"), args.category))
      .order("desc")
      .collect();
  },
});
