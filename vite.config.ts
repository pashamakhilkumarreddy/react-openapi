import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      viteTsconfigPaths(),
      visualizer({
        template: 'treemap',
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: 'analyse.html',
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          entryFileNames:
            mode === 'production' ? `[name].[hash].js` : `[name].js`,
          chunkFileNames: `[name].custom.js`,
          assetFileNames: `[name].custom.[ext]`,
        },
      },
    },
  });
};
