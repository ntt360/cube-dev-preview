import 'dotenv/config';
import { resolve } from 'path';
import { utils } from '@cubetool/base';

const ROOT_PATH = resolve(__dirname, '..');
const DIST_PATH = resolve(ROOT_PATH, 'dist');

process.env.ROOT_PATH = ROOT_PATH;
process.env.DIST_PATH = DIST_PATH;

const defaultEnv = {
  HOST: 'localhost',
  PORT: '3601',
  VITE_PORT: '3602',
  UPLOAD_PATH: '/var/run/cube_dev_preview/upload',
  CUBE_COMPILER_PATH: '/var/run/cube_dev_preview/compiler',
  CUBE_DIST_PATH: '/var/run/cube_dev_preview/dist',
};

for (let key in defaultEnv) {
  if (typeof process.env[key] === 'undefined') {
    process.env[key] = defaultEnv[key];
  }
  if (/\_PATH$/.test(key)) {
    try {
      utils.mkdir(process.env[key]);
    } catch (e) {}
  }
}
