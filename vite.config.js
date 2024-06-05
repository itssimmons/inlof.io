import { defineConfig, loadEnv } from "vite";

export default defineConfig(config => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(config.mode, process.cwd(), "");

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    base: './',
    server: {
      host: true,
      open: true,
      port: 1234,
    }
  };
});
