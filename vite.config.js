import 'dotenv/config';

export default {
  host: process.env.HOST || 'localhost',
  port: process.env.VITE_PORT,
  outDir: '../dist/www/',
  assetsDir: 'static',
  optimizeDeps: {
    exclude: [
      '@cubetool/base',
      '@koa/router',
      'koa',
      'vue',
      'dotenv',
      'unzipper',
      'koa-body',
      'md5',
    ],
  },
  rollupOutputOptions: {
    entryFileNames: `[name].js`,
    chunkFileNames: `[name].js`,
    assetFileNames: `[name].[ext]`,
  },
  proxy: {
    '/get_info': `http://localhost:${process.env.PORT}`,
    '/cubefile': `http://localhost:${process.env.PORT}`,
  },
};
