// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config

export default defineConfig({
  site: "https://astro-opscdeguy.netlify.app/",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
    },
  ],
});
