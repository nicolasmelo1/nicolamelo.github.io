import { defineConfig } from "vite";

// User/Org pages repo (username.github.io) should use base '/'.
export default defineConfig({
  base: "/",
  build: {
    // Deploying via GitHub Pages quickstart using /docs folder.
    outDir: "docs",
  },
});
