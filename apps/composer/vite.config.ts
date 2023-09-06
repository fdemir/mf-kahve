import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "composer",
      remotes: {
        search: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@mf-kahve/ui"],
    }),
  ],
});