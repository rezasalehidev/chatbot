import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiUrl = new URL(
    env.VITE_API_URL || "https://chat.aiahura.com/api/v1/chat/completions"
  );
  const apiBaseUrl = `${apiUrl.protocol}//${apiUrl.host}`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "@components": resolve(__dirname, "./src/components"),
        "@pages": resolve(__dirname, "./src/pages"),
        "@hooks": resolve(__dirname, "./src/hooks"),
        "@store": resolve(__dirname, "./src/store"),
        "@services": resolve(__dirname, "./src/services"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@constants": resolve(__dirname, "./src/constants"),
        "@types": resolve(__dirname, "./src/types"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: apiBaseUrl,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
  };
});
