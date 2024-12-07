import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Use relative paths
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
