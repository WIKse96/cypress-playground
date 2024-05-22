const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern:	"cypress/e2e/qa-playwground/*.cy.{js,jsx,ts,tsx}",
    baseUrl: 'https://qaplayground.dev/',
  },
})