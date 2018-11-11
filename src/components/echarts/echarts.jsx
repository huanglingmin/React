import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import './echarts.styl';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends Component {
  componentDidMount () {
    this.barEcharts();
    this.pieEcharts();
  }
  // 访问量
  barEcharts () {
    // 基于准备好的dom，初始化echarts实例
    const bar = echarts.init(document.getElementById('bar'));
    // 绘制图表
    bar.setOption({
      title: { text: '访问量' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  // 文章统计
  pieEcharts () {
    const pie = echarts.init(document.getElementById('pie'));
    pie.setOption({
      // backgroundColor: '#2c343c',
      title: {
        text: '文章统计',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#000'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 274, name: '联盟广告' },
            { value: 235, name: '视频广告' },
            { value: 400, name: '搜索引擎' }
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                // color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    });
  }
  render () {
    return (
      <Row>
        <Col span={23}><Card className="echarts-box-card"><div id="bar" style={{ height: 250 }}></div></Card></Col>
        <Col span={23}><Card className="echarts-box-card"><div id="pie" style={{ height: 250 }}></div></Card></Col>
      </Row>
    )
  }
}
export default Echarts