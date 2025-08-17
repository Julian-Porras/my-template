import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // or your machine IP like '192.168.1.5'
    port: 5174,      // optional
  },
});
