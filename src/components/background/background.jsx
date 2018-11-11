import React, { Component } from 'react';
import './background.css';
class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: Array.from(new Array(30).keys())
    };
  }
  // 组件输出被渲染到 DOM 之后运行
  componentDidMount () {
  }
  render () {
    return (
      <div className="cssload-wrap">
        {this.state.list.map(item => <div className="cssload-circle" key={item}></div>)}
      </div>
    )
  }
};
export default Background;