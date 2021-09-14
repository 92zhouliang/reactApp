const { override, fixBabelImports, addDecoratorsLegacy, addWebpackAlias } = require("customize-cra");

const path = require('path');

// override 从左向右执行重写配置函数
module.exports = override(
  // alias
  addWebpackAlias({
    'src':path.resolve(__dirname,'src')
  }),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  // 添加支持装饰器语法 @babel/plugin-proposal-decorators
  addDecoratorsLegacy()
);
