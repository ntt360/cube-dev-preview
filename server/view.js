import { resolve } from 'path';
import { existsSync, createReadStream } from 'fs';

const wwwRoot = resolve(process.env.DIST_PATH);
const indexFile = 'index.html';

/** 读取文件输出到 http response */
export function sendStatic(ctx, file) {
  if (!file) {
    const path = ctx.path.replace('/', '') || indexFile;
    file = resolve(wwwRoot, path);
  }
  if (!existsSync(file)) {
    ctx.throw(404);
  }
  const ext = file.match(/\.(\w+)$/);
  if (ext) {
    ctx.type = ext[1];
  }
  ctx.body = createReadStream(file);
}

/** 渲染页面 */
export async function render(ctx) {
  if (process.env.MODE === 'dev') {
    sendStatic(ctx, resolve(wwwRoot, '..', 'www', 'index.html'));
  } else {
    sendStatic(ctx);
  }
}
