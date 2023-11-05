import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "list",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/List",
      },
      shared: ["react", "react-dom", "@tanstack/react-query", "react-icons"],
      remotes: {
        cart: `http://localhost:3003/assets/remoteEntry.js`,
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: false,
  },
});
