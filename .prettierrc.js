/// 规则详见：https://prettier.io/docs/en/options.html

module.exports = {
  printWidth: 100, // 每行最多100个字符
  trailingComma: "es5", // es5内建对象使用尾逗号
  tabWidth: 2, // 每个缩进为两个空字符
  semi: true, // 语句末尾使用分号
  singleQuote: true, // 单引号替代双引号
  arrowParens: "always", // 箭头函数参数使用括号
  quoteProps: "consistent" // 如果对象属性有使用引号，则其他属性也要使用引号
};
