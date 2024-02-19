import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  resolve: {
    alias: {
      "@": path.resolve(path.join(__dirname, "src")),
      "@components": path.resolve(path.join(__dirname, "src", "components")),
      "@containers": path.resolve(path.join(__dirname, "src", "containers")),
      "@styles": path.resolve(path.join(__dirname, "src", "styles")),
      "@states": path.resolve(path.join(__dirname, "src", "states")),
      "@hooks": path.resolve(path.join(__dirname, "src", "hooks")),
      "@layouts": path.resolve(path.join(__dirname, "src", "layouts")),
      "@pages": path.resolve(path.join(__dirname, "src", "pages")),
    },
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: "assets/[name].[ext]",
        entryFileNames: "js/[name].js",
      },
    },
  },
  plugins: [react()],
});
