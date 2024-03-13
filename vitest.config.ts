import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ["./setupTests.js"],
    environment: "jsdom",
    // Adjust the include pattern to match your test files
    include: ["**/*.{test,spec}.[jt]sx"],
    // Make sure to exclude node_modules and other non-relevant directories
    exclude: ["node_modules", "dist"],
  },
});
