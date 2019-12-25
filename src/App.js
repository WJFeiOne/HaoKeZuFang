/* 项目首页组件 */

import React, { Component,Fragment } from 'react'  // 导入 React 依赖
import {HashRouter as Router,Route} from "react-router-dom" // 导入 页面路由 依赖
import HKLayout from "./components/common/HKLayout/HKLayout" // 导入 TabBar 导航
import Home from "./pages/Home/Home";      // 导入 项目首页 组件
import HKList from "./pages/HKList/HKList" // 导入 找房页面 组件
import News from "./pages/News/News"       // 导入 咨讯页面 组件
import My from "./pages/My/My"             // 导入 我的页面 组件


// 创建 App 组件实例
class App extends Component {
  // 创建 组件实例 节点
  render() {
    // 返回 组件实例 节点
    return (
      // 组件节点
      <Fragment>
        <Router>
          <Route exact path="/" render={() => <HKLayout><Home/></HKLayout>}></Route>
          <Route path="/HKList" render={() => <HKLayout><HKList/></HKLayout>}></Route>
          <Route path="/News" render={() => <HKLayout><News/></HKLayout>}></Route>
          <Route path="/My" render={() => <HKLayout><My/></HKLayout>}></Route>
        </Router>   
      </Fragment>
    )
  }
}

// 导出 App 组件
export default App;
