const { readFilesToContextTool } = default_api;
const files = await readFilesToContextTool({
  file_paths: ["vite.config.ts", "src/components/LogoDropdown.tsx"],
  replace_files_in_context: false
});
