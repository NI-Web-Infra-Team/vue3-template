import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@':'绝对路径', 若有需要，自行配置其他
      "@": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
  plugins: [vue()],
});
