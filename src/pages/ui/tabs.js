import React, { Component } from 'react';
import { Card, Button, Tabs, message, Icon } from 'antd';
import './ui.less';

const { TabPane } = Tabs;

export default class TTabs extends Component {

  newTabIndex=0;

  handleCallback = (key) => {
    message.info("你选择的是:" + key)
  }

  componentWillMount(){
    const panes = [
      {
        title:"react",
        content: "react",
        key:"react"
      },{
        title:"vue",
        content: "vue",
        key:"vue"
      },{
        title:"node",
        content: "node",
        key:"node"
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }
  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey; //打开的页签
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      //判断删除key和打开的key是否一致
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render(){
    return(
      <div>
        <Card title="Tab页签" className="bt-wrap">
          <Tabs defaultActiveKey="react" onChange={this.handleCallback}>
            <TabPane tab="react" key="react">React</TabPane> 
            <TabPane tab="vue" key="vue">Vue</TabPane> 
            <TabPane tab="node" key="node">nodejs</TabPane> 
          </Tabs>
        </Card>

        <Card title="Tab图标页签" className="bt-wrap">
          <Tabs defaultActiveKey="react" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus" />react</span>} key="react">React</TabPane> 
            <TabPane tab={<span><Icon type="edit" />vue</span>} key="vue">Vue</TabPane> 
            <TabPane tab={<span><Icon type="delete" />node</span>} key="node">nodejs</TabPane> 
          </Tabs>
        </Card>

        <Card title="Tab图标页签" className="bt-wrap">
          <Tabs 
            onChange={this.onChange}
            avtiveKey={this.state.activeKey}
            // defaultActiveKey="react" 
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map(ele => {
                return <TabPane 
                  tab={ele.title}
                  key={ele.key}
                />
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}