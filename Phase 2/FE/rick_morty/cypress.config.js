import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5175/",
    supportFile: false
  },
  viewportHeight: 768,
  viewportWidth:1024,
  video:false,
});
