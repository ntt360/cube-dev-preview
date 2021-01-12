/// 使用了eslint默认推荐的规则
/// 访问 https://eslint.bootcss.com/docs/rules/ 带有对勾标记的规则为推荐开启的规则

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2020: true,
  },
  globals: {
    require: 'readonly',
    module: 'readonly',
    exports: 'writable',
  },
  extends: ['plugin:prettier/recommended'],
  ignorePatterns: ['/dist/*', '**/node_modules'],
};
