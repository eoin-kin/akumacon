import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [react(), netlify()],
  assetsInclude: ["**/*.json"],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        admin: "public/admin/index.html",
      },
    },
  },
});
