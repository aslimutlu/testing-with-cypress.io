
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Çerezlerin vs. temizlenmemesi için eklendi.
    testIsolation: false,
    baseUrl: "https://admin-template-jet.vercel.app/#/dashboard",
    env: {
      "userEmail": "deneme@deneme.com",
      "pass": "12345"
    }
  },
});

