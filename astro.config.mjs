import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://taxevaiden.pages.dev",

  // env: {
  //   schema: {
  //     WORKER_URL: envField.string({
  //       context: "client",
  //       access: "public",
  //       optional: true,
  //     }),
  //   },
  // },
});
