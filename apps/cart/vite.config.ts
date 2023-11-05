import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/Cart",
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "react-icons"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: false,
  },
});
