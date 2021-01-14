import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
import md5 from 'md5';
import { CODES, CubeError } from './error';
import { utils } from '@cubetool/base';

const DB_PATH = resolve(process.env.CUBE_DIST_PATH, '.db');
utils.mkdir(DB_PATH);

function getId(data) {
  let s = md5(JSON.stringify(data));
  return s.slice(0, 21) + new Date().getTime().toString(16);
}
function check(id) {
  const saveTime = parseInt(id.slice(21), 16);
  return new Date().getTime() - saveTime < process.env.ID_EXPIRED * 1000;
}

export function get(id) {
  if (!check(id)) {
    throw new CubeError('预览 id 已过期', CODES.DATA_EXPIRED);
  }
  try {
    return JSON.parse(readFileSync(resolve(DB_PATH, id), { encoding: 'utf8' }));
  } catch (e) {
    console.log('db get error:', e);
    throw new CubeError('没有该 cube 的预览数据', CODES.NO_DATA);
  }
}

export function save(data) {
  const id = getId(data);
  try {
    writeFileSync(resolve(DB_PATH, id), JSON.stringify(data));
    return id;
  } catch (e) {
    console.log('db save error:', e);
    throw new CubeError('存储 cube 信息失败', CODES.SAVE_ERR);
  }
}
