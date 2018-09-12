import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

export default class Modals extends Component {

  state = {
    Md1: false,
    Md2: false,
    Md3: false,
    Md4: false
  }

  handleOpen(type){
    this.setState({
      [type]: true
    })
  }

  handleConfirm(type){
    Modal[type]({
      title: '确认？',
      content: '你确定你学会了React了吗',
      onOk(){}
    })
  }

  render(){
    return(
      <div>
        <Card title="基础模态框" className="bt-wrap">
          <Button type="primary" onClick={()=>this.handleOpen('Md1')}>Open</Button>
          <Button type="primary" onClick={()=>this.handleOpen('Md2')}>自定义页脚</Button>
          <Button type="primary" onClick={()=>this.handleOpen('Md3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={()=>this.handleOpen('Md4')}>水平垂直居中</Button>
        </Card>
        <Modal 
          title="React"
          visible={this.state.Md1}
          onCancel={()=>{this.setState({Md1:false})}}
          onOk={()=>{this.setState({Md1:false})}}
        >
          <p>加油学习react</p>
        </Modal>
        <Modal 
          title="React"
          visible={this.state.Md2}
          okText="好的"
          cancelText="算了"
          onCancel={()=>{this.setState({Md2:false})}}
        >
          <p>加油学习react</p>
        </Modal>
        <Modal 
          title="React"
          style={{top:20}}
          visible={this.state.Md3}
          onCancel={()=>{this.setState({Md3:false})}}
        >
          <p>加油学习react</p>
        </Modal>
        <Modal 
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.Md4}
          onCancel={()=>{this.setState({Md4:false})}}
        >
          <p>加油学习react</p>
        </Modal>

        <Card title="信息确认框" className="bt-wrap">
          <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
        </Card>
      </div>
    );
  }
}