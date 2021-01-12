import { createReadStream } from 'fs';
import { resolve, parse } from 'path';
import { Extract } from 'unzipper';

export function unzip(zipFile, path) {
  return new Promise((_resolve, _reject) => {
    if (!path) {
      let { name } = parse(zipFile);
      path = path || resolve(process.cwd(), name);
    }
    const extract = Extract({ path: path });
    createReadStream(zipFile).pipe(extract);
    extract.on('close', () => {
      _resolve(path);
    });
    setTimeout(() => {
      _reject(new Error('unzip timeout.'));
    }, 120 * 1000);
  });
}

export function timeuuid() {
  return new Date(Date.now() + 28800000).toISOString().replace(/\D+/g, '');
}