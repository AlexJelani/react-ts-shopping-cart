import { defineConfig } from 'vitest/config'


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      provider: "c8", // You can modify this to use a different provider if needed
      reporter: ["text", "html"],
    },
  },
});