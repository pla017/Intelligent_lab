import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        postcss: {
            plugins: [],
        },
        preprocessorOptions: {
            scss: {
                additionalData: "@use \"@/styles/mixins.scss\" as *;",
            },
        },
    },
    server: {
        port: 80,
        host: true,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: function (p) { return p.replace(/^\/api/, ''); }
            }
        }
    },
});
