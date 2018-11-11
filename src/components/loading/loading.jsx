import React, { Component } from 'react';
import './background.css';
class Loading extends Component {
  constructor(props) { }
  // 组件输出被渲染到 DOM 之后运行
  componentDidMount () {
  }
  render () {
    return (
      <div className="cssload-loader">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    )
  }
};
export default Loading;