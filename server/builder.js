import { CODES, CubeError } from './error';
import cubeTool, { utils } from '@cubetool/base';
import { unzip } from './utils';
import { resolve, parse, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { save, get } from './cubedb';

const { Project, ENV, log, plugin } = cubeTool('cube-dev-preview/v1', {
  spath: process.env.CUBE_SPATH,
});

function genBuildEntryFile(path, pkgId) {
  let entryJsCode = `
    import css from '${path}/src/cube.css';
    import js from '${path}/src/cube.js';
    import tpl from '${path}/src/cube.tpl';
    import api from '${path}/api.json';
    addCube('${pkgId}', {tpl, js, api, css});
  `;
  return writeFileSync(resolve(path, 'index.js'), entryJsCode);
}

class Compiler {
  constructor(project) {
    this.project = project;
  }

  installNpmDeps() {
    let argv = ['--no-save', '--production'];
    if (process.env.NPM_REGISTRY) {
      argv.push('--registry=' + process.env.NPM_REGISTRYs);
    }
    return utils
      .exec(
        'npm install',
        {
          cwd: this.project.path,
        },
        argv
      )
      .promise();
  }

  async _init() {
    /** 获取 cube 元数据 */
    const meta = this.project.cubeMetaData;
    const data = {
      name: meta.name,
      id: meta.id,
      v: meta.version,
      idn: meta.idn || meta.id,
      miniapp_only: meta.miniapp_only ? 1 : 0,
      disable_expand: meta.disable_expand ? 1 : 0,
    };
    /** 安装依赖 */
    const dependencies = this.project.cubePackageData.dependencies;
    if (dependencies && dependencies.length) {
      await installNpmDeps();
    }
    this.launchimg = meta.launchimg;
    return data;
  }

  async _compiler(pkgId) {
    const project = this.project;
    const cubePath = this.project.path;
    const compiler = project.compiler();
    const publicPath = join('cubefile', pkgId, '/');
    compiler.init({
      pkgId,
      entry: resolve(cubePath, 'index.js'),
      output: {
        filename: '[hash].js',
        path: resolve(process.env.CUBE_DIST_PATH, pkgId),
        publicPath,
      },
    });
    compiler._genEntryFile = () => {
      genBuildEntryFile(cubePath, pkgId);
    };
    const stats = await compiler.runOnce();
    console.log('\ncube compile stats:\n', stats.toString());
    if (stats.hasErrors()) {
      throw new CubeError('cube compile error', CODES.COMPILE_ERR);
    }
    const { hash, assets } = stats.toJson();
    let splash = '',
      res = '';
    for (let i = 0, l = assets.length; i < l; i++) {
      const asset = assets[i];
      const sourceFilename = asset?.info?.sourceFilename;
      if (sourceFilename && sourceFilename.endsWith(this.launchimg)) {
        splash = join(publicPath, asset.name);
        break;
      }
    }
    res = join(publicPath, hash + '.js');
    return { splash, res };
  }

  _getTestData() {
    let data = {};
    try {
      data = JSON.parse(readFileSync(resolve(this.project.path, 'testdata.json')));
    } catch (e) {}
    return data;
  }

  async build() {
    const pkgId = utils.uniqId();
    const data = await this._init();
    const { splash, res } = await this._compiler(pkgId);
    const testdata = this._getTestData();
    return {
      ...data,
      pkg_id: pkgId,
      splash,
      res,
      ...testdata,
    };
  }

  static async NewFromZip(zipFile) {
    let { name } = parse(zipFile);
    const cubePath = resolve(process.env.CUBE_COMPILER_PATH, name);
    try {
      await unzip(zipFile, cubePath);
      const project = new Project(cubePath);
      return new Compiler(project);
    } catch (e) {
      throw e;
    }
  }
}

/** 编译 cube 项目 */
export async function buildCube(ctx) {
  const { file } = ctx.request.files;
  const compiler = await Compiler.NewFromZip(file.path);
  let data = await compiler.build();
  console.log('build result:', data);
  const id = save(data);
  return {
    errno: 0,
    data: {
      id: id,
    },
  };
}

/** 根据标识获取 cube pkg 信息 */
export function getPkgInfo(id) {
  if (!id) {
    throw new CubeError('id empty', CODES.EMPTY_ID);
  }
  if (id.length !== 32) {
    throw new CubeError('illegal id', CODES.ILLEGAL_ID);
  }
  return get(id);
}

export function installPlugins(plugins) {
  plugins.forEach(async (name) => {
    try {
      console.log(`install cubetool plugin [${name}] ...`);
      const p = await plugin.install(name);
      const installRet = await p.promise();
      plugin.load(name);
      console.log(`cubetool plugin [${name}] installed\n`, installRet);
    } catch (e) {
      console.log(`cubetool plugin [${name}] install error\n`, e);
    }
  });
}
