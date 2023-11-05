/* eslint-disable no-undef */
import config from "@mf-kahve/ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/tailwind.config.js",

    "./src/**/*.{js,jsx,ts,tsx}",

    // Remotes that uses tailwind
    "../cart/src/**/*.{js,jsx,ts,tsx}",
    "../search/src/**/*.{js,jsx,ts,tsx}",
    "../list/src/**/*.{js,jsx,ts,tsx}",
  ],
};
