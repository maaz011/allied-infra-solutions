import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
 define: {
  __DEFINES__: JSON.stringify({}),
  __HMR_CONFIG_NAME__: JSON.stringify(''),
  __BASE__: JSON.stringify('/'),
  __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  __SSR__: JSON.stringify(false),

  // HMR-related placeholders
  __SERVER_HOST__: JSON.stringify(''),
  __HMR_PROTOCOL__: JSON.stringify(''),
  __HMR_PORT__: JSON.stringify(''),
  __HMR_HOSTNAME__: JSON.stringify(''),
  __HMR_BASE__: JSON.stringify('/'),
  __HMR_DIRECT_TARGET__: JSON.stringify(''),
},

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
