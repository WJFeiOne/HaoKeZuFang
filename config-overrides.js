/* 修改默认配置文件  */
const { override, fixBabelImports } = require('customize-cra');

// 导出配置规则
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);