import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    __DEFINES__: '{}',
    // Add any other environment variables you're using
    'process.env.VITE_ABDUL_WHATSAPP': JSON.stringify(process.env.VITE_ABDUL_WHATSAPP),
    'process.env.VITE_EVOLUTION_KEY': JSON.stringify(process.env.VITE_EVOLUTION_KEY),
    'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.VITE_SERVICE_ID),
    'process.env.VITE_ADMIN_TEMPLATE_ID': JSON.stringify(process.env.VITE_ADMIN_TEMPLATE_ID),
    'process.env.VITE_USER_TEMPLATE_ID': JSON.stringify(process.env.VITE_USER_TEMPLATE_ID),
    'process.env.VITE_PUBLIC_KEY': JSON.stringify(process.env.VITE_PUBLIC_KEY),


  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,

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
