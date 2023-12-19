// vite.config.ts
import { defineConfig } from "file:///D:/test-tasks/weather/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/test-tasks/weather/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslintPlugin from "file:///D:/test-tasks/weather/node_modules/vite-plugin-eslint/dist/index.mjs";
import path from "path";
import svgLoader from "file:///D:/test-tasks/weather/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "D:\\test-tasks\\weather";
var vite_config_default = defineConfig({
  base: "https://githi54.github.io/weather/",
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@api": path.resolve(__vite_injected_original_dirname, "./src/api"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
      "@typify": path.resolve(__vite_injected_original_dirname, "./src/typify"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets")
    }
  },
  plugins: [vue(), eslintPlugin(), svgLoader()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx0ZXN0LXRhc2tzXFxcXHdlYXRoZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHRlc3QtdGFza3NcXFxcd2VhdGhlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovdGVzdC10YXNrcy93ZWF0aGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcImh0dHBzOi8vZ2l0aGk1NC5naXRodWIuaW8vd2VhdGhlci9cIixcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIFwiQGNvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpLFxuICAgICAgXCJAYXBpXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXBpXCIpLFxuICAgICAgXCJAc3RvcmVcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9zdG9yZVwiKSxcbiAgICAgIFwiQHR5cGlmeVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3R5cGlmeVwiKSxcbiAgICAgIFwiQGFzc2V0c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2Fzc2V0c1wiKSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbdnVlKCksIGVzbGludFBsdWdpbigpLCBzdmdMb2FkZXIoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsU0FBUyxvQkFBb0I7QUFDcFIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGVBQWU7QUFKdEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3BDLGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3pELFFBQVEsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUMzQyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDL0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2pELFdBQVcsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQztBQUM5QyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
