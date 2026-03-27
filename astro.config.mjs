import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      cssVariable: "--font-google-sans-flex",
      name: "Google Sans Flex",
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      cssVariable: "--font-google-sans-code",
      name: "Google Sans Code",
      styles: ["normal"],
    },
  ],
});
