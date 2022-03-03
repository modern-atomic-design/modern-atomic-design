import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";

export default {
  head: {
    title: "Modern Atomic Design",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
  },
  ssr: true,
  target: "static",
  generate: {
    dir: "public",
  },
  router: {
    base: "/modern-atomic-design/",
  },
  components: {
    dirs: [
      { path: "~/components/global/atoms", extensions: ["vue"] },
      { path: "~/components/global/molecules", extensions: ["vue"] },
      { path: "~/components/global/organisms", extensions: ["vue"] },
      { path: "~/lib/components", extensions: ["vue"], prefix: "MW" },
    ],
  },
  css: ["~/static/css/global.css"],
  plugins: [],
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
  ],
  pwa: {
    manifest: {
      name: "Modern Atomic Design",
      lang: "en",
      useWebmanifestExtension: false,
      background_color: "#000000",
      theme_color: "#000000",
    },
  },
  content: {
    liveEdit: false,
  },
  modules: ["@nuxt/content"],
  publicRuntimeConfig: {
    gitlabContentDirectory:
      "https://gitlab.maibornwolff.de/department-dtd/modern-atomic-design/-/edit/main/content",
  },
  build: {},
  storybook: {
    parameters: {
      backgrounds: {
        default: "background",
        values: [{ name: "background", value: "#F5F7FF" }],
      },
    },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindForms, tailwindTypography],
    },
  },
};
