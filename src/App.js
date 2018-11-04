import React, { Component } from 'react';
import logo from '@/assets/images/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      val: '请输入密码',
      name: 'welcome to React',
      data: 1
    };
  }
  // 组件输出被渲染到 DOM 之后运行
  componentDidMount () {

  }
  // 组价被移除是触发
  componentWillUnmount () {

  }
  handleChange (e) {
    // 唯一可以分配 this.state 的地方是构造函数
    // 所以不要直接修改state的状态,例如:
    // this.state.val = '请输入用户名
    this.setState({ val: e.target.value, name: '输入内容改变了' });
    // state的更新可能是异步的
    // 当需要异步的修改state的状态时
    // setState()接收一个函数,而不是接收一个对象
    // 该函数接收前一个状态值作为第1个参数， 并将更新后的值作为第2个参数
    this.setState((prevState, props) => ({
      data: prevState.data + prevState
      // eslint-disable-next-line
    }, console.log(prevState, props)));
  }
  render () {
    // 将val加入到state中实现数据的双向绑定
    const val = this.state.val;
    const name = this.state.name;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <label>
            Name:
            <input type="text" name="name" className="input" value={val} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" className="input" />
        </form>
        <h1>{name}</h1>
        <p>计数{this.state.data}</p>
      </div>
    );
  }
}
export default App;
