// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Production domain — drives canonical URLs and OG tags.
  site: "https://pbernard.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
