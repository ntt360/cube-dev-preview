import 'dotenv/config';
import { resolve } from 'path';

const ROOT_PATH = resolve(__dirname, '..');
const DIST_PATH = resolve(ROOT_PATH, 'dist');

process.env.ROOT_PATH = ROOT_PATH;
process.env.DIST_PATH = DIST_PATH;
