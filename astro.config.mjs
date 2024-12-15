import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://taxevaiden.pages.dev",
  adapter: cloudflare(),

  env: {
    schema: {
      WORKER_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
});
