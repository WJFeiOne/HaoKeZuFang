/* 项目首页组件 */

import React, { Component, Fragment } from "react"; // 导入 React 依赖
import { Carousel } from "antd-mobile";   // 导入 轮播图 依赖
import axios from "axios";                // 导入 请求数据 模块

// 创建 Home 组件
class Home extends Component {
  // 声明 state 状态参数
  state = { 
    swiperList: [],  // 定义 轮播图 数据 
    imgHeight: 176   // 定义 轮播图 高度
  };

  // 组件渲染后调用
  componentDidMount() {
    // 发送轮播图请求
    axios.get("http://hkzf.zbztb.cn/home/swiper").then(res => {
      // 修改state中的 轮播图数据
      this.setState({ swiperList: res.data.body });
    });
  }

  // 创建 组件节点
  render() {
    // 定义 轮播图 参数
    const { swiperList } = this.state;

    // 返回 组件节点
    return (
      <Fragment>
      {/* “swiperList.length” jsx中 普通的变量和便签可以在一起写 轮播图不会自动轮播 判断是否请求到轮播图数据*/}
      {swiperList.length && (<Carousel autoplay infinite>{swiperList.map(val => (
        // 轮播图链接
        <a
          key={val.id}
          href="http://www.alipay.com"
          style={{
            display: "inline-block",
            width: "100%",
            height: this.state.imgHeight
          }}
        >
          {/* 轮播图 */}
          <img
            src={`http://hkzf.zbztb.cn` + val.imgSrc}
            alt=""
            style={{ width: "100%", verticalAlign: "top" }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event("resize"));
              this.setState({ imgHeight: "auto" });
            }}
          />
        </a>
      ))}
        </Carousel>
      )}
      </Fragment>
    )
  }
}

// 导出 Home 组件
export default Home;
