/**
 * cube 开发预览服务
 */
process.on('uncaughtException', (err, origin) => {
  console.log('uncaughtException', err, origin);
});

import './env';
import Koa from 'koa';
import koaBody from 'koa-body';
import Router from '@koa/router';
import { resolve } from 'path';
import { render, sendStatic } from './view';
import { getPkgInfo, buildCube, installPlugins } from './builder';
import { timeuuid } from './utils';

const app = new Koa();
const router = new Router();

app.on('error', (err) => {
  console.log(`server error:\n`, err);
});

app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 500 * 1024,
      keepExtensions: true,
      uploadDir: process.env.UPLOAD_PATH,
      onFileBegin(_, file) {
        file.path = resolve(process.env.UPLOAD_PATH, timeuuid() + '_' + file.name);
      },
    },
  })
);

/** 渲染首页 */
router.get('/', async (ctx, next) => {
  await render(ctx);
  next();
});

/** 处理编译上传的 cube 包 */
router.post('/upload', async (ctx, next) => {
  try {
    const data = await buildCube(ctx);
    ctx.body = data;
  } catch (e) {
    ctx.body = {
      errno: e.code || -1,
      msg: e.message || 'unknow',
    };
  }
  next();
});

/** 获取 pkg 信息 */
router.get('/get_info', (ctx, next) => {
  const { id } = ctx.query;
  try {
    const data = getPkgInfo(id);
    ctx.body = data;
  } catch (e) {
    ctx.body = {
      errno: e.code || -1,
      msg: e.message || 'unknow',
    };
  }
  next();
});

/** 输出静态文件 */
router.get('/static/:file', (ctx, next) => {
  sendStatic(ctx);
  next();
});
/** 输出 cube 托管静态文件 */
router.get('/cubefile/:pkgid/:file', (ctx, next) => {
  if (ctx.params.pkgid === '.db') {
    ctx.throw(403);
  }
  const file = resolve(process.env.CUBE_DIST_PATH, ctx.params.pkgid, ctx.params.file);
  sendStatic(ctx, file);
  next();
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(process.env.PORT);
console.log(`server start at: http://${process.env.HOST}:${process.env.PORT}`);

if (process.env.CUBE_PLUGINS) {
  const plugins = process.env.CUBE_PLUGINS.split(':');
  installPlugins(plugins);
}
