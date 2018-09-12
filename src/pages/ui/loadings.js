import React, { Component } from 'react';
import './ui.less';
import { Card, Button, Icon, Spin, Alert } from 'antd';

export default class Loadings extends Component {
  render(){
    const icon = <Icon type="loading" stylt={{fontSize:24}}/>
    return(
      <div>
        <Card title="Spin用法" className="bt-wrap">
          <Spin size="small"/>
          <Spin style={{margin: '0 10px'}}/>
          <Spin size="large"/>
          <Spin indicator={icon} style={{marginLeft: 10}}></Spin>
        </Card>
        <Card title="内容遮罩" className="bt-wrap"> 
          <Alert
            message="React"
            description="今天的你学react了吗"
            type="info"
          />
          <Spin>
            <Alert
              message="React"
              description="今天的你学react了吗"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="今天的你学react了吗"
              type="warning"
            />
          </Spin>
          <Spin indicator={icon}>
            <Alert
              message="React"
              description="今天的你学react了吗"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}