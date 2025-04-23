import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: "./tsconfig.app.json" })],
  server: {
    port: 8888,
  },
  build: {
    copyPublicDir: false,
    lib: {
      name: "lib",
      entry: resolve(__dirname, "src/lib.ts"),
      // fileName: (format, entryName) => `npdc-${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Mark React and ReactDOM as external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
