import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // 🔥 Define a porta fixa do Vite
    strictPort: true, // ❗ Evita mudanças automáticas de porta
    host: "localhost", // 🏠 Define o host corretamente
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
});
