import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist'
  }
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // ✅ No need for `path` or `__dirname` – Vite handles `/src` as root
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': '/src', // ✅ Works without Node path module
//     },
//   },
//   define: {
//     __DEFINES__: '{}', // ✅ Prevents runtime error if Vite 7 misses replacement
//   },
//   build: {
//     outDir: 'dist', // ✅ Default is already 'dist', but keeping for clarity
//     emptyOutDir: true, // ✅ Clean dist before building
//   },
// });
