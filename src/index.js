import React from 'react';         // 导入 react 依赖文件
import ReactDOM from 'react-dom';  // 导入 react渲染 模块
import './index.css';              // 导入 项目入口 样式
import App from './App';           // 导入 项目首页 组件 

// 渲染 节点实例
ReactDOM.render(<App />, document.getElementById('root'));
