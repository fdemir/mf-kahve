import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const isDev = process.env.NODE_ENV === "development";

const ports = {
  list: 3001,
  search: 3002,
  cart: 3003,
};

const buildRemotes = (mfList: string[], dev: boolean) => {
  const remotes = {};
  mfList.forEach((mf) => {
    if (dev) {
      remotes[mf] = `http://localhost:${ports[mf]}/assets/remoteEntry.js`;
      return;
    }

    remotes[mf] = `${process.env.URL}/mf/${mf}/assets/remoteEntry.js`;
  });
  return remotes;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "composer",
      remotes: buildRemotes(["list", "search", "cart"], isDev),
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
  },
});
