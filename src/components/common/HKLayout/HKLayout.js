/* 项目 TabBar 导航 */

import React from "react";                     // 导入 React 依赖
import { TabBar } from "antd-mobile";          // 导入 TabBar 依赖
import { withRouter } from "react-router-dom"; // 导入 页面渲染 函数

// 创建 HKLayout 组件实例
class HKLayout extends React.Component {

  // 创建 构造函数声明
  constructor(props) {
    // 调用父类方法
    super(props);
    // 重新绑定 this   
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: false
    };
  }
  
  // 创建节点
  render() {
    // 定义 history 变量
    const { history } = this.props;
    // 定义 path 变量
    const path = this.props.match.path;
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar>
          {/* 首页导航 */}
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={path === "/"}
            onPress={() => {
              history.push("/")
            }}
          >
            {/* 首页页面 */}
            {this.props.children}
          </TabBar.Item>
          {/* 找房导航 */}
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="HKList"
            selected={path === "/HKList"}
            onPress={() => {
              history.push("/HKList")
            }}
          >
            {/* 找房页面 */}
            {this.props.children}
          </TabBar.Item>
          {/* 资讯导航 */}
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="News"
            selected={path === "/News"}
            onPress={() => {
              history.push("/News")
            }}
          >
            {/* 咨讯页面 */}
            {this.props.children}
          </TabBar.Item>
          {/* 我的导航 */}
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="My"
            selected={path === "/My"}
            onPress={() => {
              history.push("/My")
            }}
          >
            {/* 我的导航页面 */}
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

// 使用 withRouter 把组件包起来即可
export default withRouter(HKLayout);
