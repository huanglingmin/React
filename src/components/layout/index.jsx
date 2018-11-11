import React, { Component } from 'react';
import { Row, Col, Input, Button, Menu, Dropdown, Icon, Layout, Breadcrumb } from 'antd';
import { withRouter } from "react-router-dom";
import './index.styl';

const Search = Input.Search;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">文章管理</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
    </Menu.Item>
  </Menu>
);

class LayoutPag extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // 组件输出被渲染到 DOM 之后运行
  componentDidMount () {

  }
  // 组价被移除是触发
  componentWillUnmount () {

  }
  onSelect (index, path) {
    this.props.history.push(index);
  }
  render () {
    return (
      <div className="layout_box">
        <header className="top_nav">
          <Row type="flex" className="row-bg" justify="space-around">
            <Col span={6} offset={3}></Col>
            <Col span={6}><Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            /></Col>
            <Col span={6} offset={3}>
              <Button type="primary" icon="edit" className="edit_btn">写文章</Button>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  我的<Icon type="down" />
                </a>
              </Dropdown>,
            </Col>
          </Row>
        </header>
        <div className="content_box">
          <div className="line"></div>
            {/* 路由出口 */}
          <Row>{this.props.children}</Row>
        </div>
      </div>
    )
  }
}
export default withRouter(LayoutPag);

