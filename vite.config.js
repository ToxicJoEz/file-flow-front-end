import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Import Node's path module

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "lucide-react": path.resolve(__dirname, "node_modules/lucide-react"),
    },
  },
});
