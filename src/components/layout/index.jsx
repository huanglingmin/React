import React, { Component } from 'react';
import { Layout, Menu } from 'element-react';

class layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 组件输出被渲染到 DOM 之后运行
  componentDidMount () {

  }
  // 组价被移除是触发
  componentWillUnmount () {

  }
  onOpen () {

  }

  onClose () {

  }
  render () {
    return (
      <Layout.Row className="tac">
        <Layout.Col span={8}>
          <h5>带 icon</h5>
          <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">选项1</Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
          </Menu>
        </Layout.Col>
        <Layout.Col span={8}>
          <h5>不带 icon</h5>
          <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
            <Menu.SubMenu index="1" title="导航一">
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">选项1</Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item index="2">导航二</Menu.Item>
            <Menu.Item index="3">导航三</Menu.Item>
          </Menu>
        </Layout.Col>
        <Layout.Col span={8}>
          <h5>分组</h5>
          <Menu mode="vertical" defaultActive="1" className="el-menu-vertical-demo">
            <Menu.ItemGroup title="分组一">
              <Menu.Item index="1"><i className="el-icon-message"></i>导航一</Menu.Item>
              <Menu.Item index="2"><i className="el-icon-message"></i>导航二</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="分组二">
              <Menu.Item index="3"><i className="el-icon-message"></i>导航三</Menu.Item>
              <Menu.Item index="4"><i className="el-icon-message"></i>导航四</Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Layout.Col>
        {this.props.children}
      </Layout.Row>
    )
  }
}
export default layout;
