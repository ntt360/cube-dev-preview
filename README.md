# cube-dev-preview
cube 开发测试预览环境，可供 cube 开发时生成预览地址，方便其他同事进行测试。

## 本地部署：
1. 项目下新建 `.env` 文件，配置项可参考 `.env.example`；
2. 执行 `npm run build` 编译；
3. 运行 `node dist/index.js` 开启服务。

## 使用容器部署：
1. 制作镜像 `docker build .`；
2. 运行应用 `docker run -P [OPTIONS] IMAGE` 开启服务。

*.env 中的配置项均可在应用运行时使用 `-e` 参数传递。*

## 发布 cube 到测试预览环境：
可将 cube 项目打包成 zip 文件上传到 `http://$HOST:$PORT/upload`，返回的 `id` 值作为参数访问 `http://$HOST:$PORT?id=${id}` 即可得到预览地址。
> 提示：在安装了 cubetool CLI 工具及安装了 [@cubetool/plugin-cli-plus](https://www.npmjs.com/package/@cubetool/plugin-cli-plus) 插件之后，可以直接使用 `cubetool publish -a http://$HOST:$PORT/upload`