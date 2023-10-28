import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  site: "https://fugu-demo.web.app",
  integrations: [react(), serviceWorker()],
});
