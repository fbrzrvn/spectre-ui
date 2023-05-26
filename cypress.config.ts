import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log('🚀 ~ file: cypress.config.ts:7 ~ setupNodeEvents ~ on:', on)
      console.log('🚀 ~ file: cypress.config.ts:8 ~ setupNodeEvents ~ config:', config)
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/e2e/tests/**/*.spec.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: 'tests/e2e/support/e2e.ts',
  },
})
