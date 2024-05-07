import { defineConfig } from "vite";

export default defineConfig({
  clearScreen: false,
  envPrefix: "APP_",
  logLevel: "info",
  envDir: "direnv",
  server: {
    open: "index.html",
    port: 3000,
  },
  preview: {
    port: 8080,
    strictPort: true
  },
});
