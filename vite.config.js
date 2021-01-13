import 'dotenv/config';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '3601';

export default {
  host: host,
  port: process.env.VITE_PORT || '3602',
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
    '/get_info': `http://${host}:${port}`,
    '/cubefile': `http://${host}:${port}`,
  },
};
