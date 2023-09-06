import config from "@mf-kahve/ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/tailwind.config.js",

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
};
