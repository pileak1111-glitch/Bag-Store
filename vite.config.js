// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     vue(),
//   ],
// })
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"), // Ensure this is correct
    },
  },
});
