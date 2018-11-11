import React, { Component } from 'react';
import { Col, List, Avatar, Icon, Row, Menu } from 'antd';
import api from '@/api/index';
import './index.styl';
import Echarts from '@/components/echarts/echarts';
import WrappedHorizontalRegisterForm from '../register/register';

const { SubMenu } = Menu;
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
// 定义一个Home组件，使用类的方式
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [{
        id: 1,
        index: '1',
        icon: 'el-icon-message',
        name: '文章'
      }, {
        id: 2,
        index: '2',
        icon: 'el-icon-message',
        name: '我的',
        children: [{
          id: 21,
          index: '2-1',
          name: '选项1'
        }, {
          id: 22,
          index: '/home',
          icon: 'el-icon-message',
          name: '选项2'
        }, {
          id: 23,
          index: '2-3',
          name: '选项3'
        }]
      }, {
        id: 3,
        index: '3',
        icon: 'el-icon-message',
        name: '资料'
      }],
      params: {
        count: 0,
        pageNum: 1,
        pageSize: 10
      },
      userList: [],
      columns: [
        {
          prop: "createdAt",
          label: "日期",
        },
        {
          prop: "username",
          label: "姓名",
        },
        {
          prop: "iphone",
          label: "手机号",
        }
      ],
    };
  }
  // 组件输出被渲染到 DOM 之后运行
  componentDidMount () {
    // this.getUserList();
  }
  // 组价被移除是触发
  componentWillUnmount () {

  }
  getUserList () {
    api.get('user/userList', this.state.params).then((res) => {
      this.setState({
        userList: res.data.rows
      });
    })
  }
  render () {
    return (
      <div className="home_box">
        <Row gutter={40}>
          <Col span={14}>
            <div className="left">
              <Menu defaultSelectedKeys={['1']} className="el-menu-demo" mode="horizontal">
                {
                  this.state.menuList.map(item => {
                    if (item.children) {
                      return (
                        <SubMenu index={item.index} title={item.name} key={item.id}>
                          {
                            item.children.map(subItem => (
                              <Menu.Item index={subItem.index} key={subItem.id}>{subItem.name}</Menu.Item>
                            ))
                          }
                        </SubMenu>)
                    } else {
                      return (<Menu.Item index={item.index} key={item.id}><i className={item.icon}></i>{item.name}</Menu.Item>)
                    }
                  })
                }
              </Menu>
            </div>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={listData}
              footer={<div><b>ant design</b> footer part</div>}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                  extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Col>
          <Col span={10} className="right">
            {/* <WrappedHorizontalRegisterForm /> */}
            <Echarts />
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home;
