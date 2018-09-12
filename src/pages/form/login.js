import React, { Component } from 'react';
import { Card, Form, Input, Button,message, Icon, Checkbox } from 'antd';


class FormLogin extends Component{

  handleSubmit = () =>{
    let userInfo = this.props.form.getFieldsValue();
    //校验字段
    this.props.form.validateFields((err, values)=>{
      if(!err){
        message.success(`${userInfo.userName}恭喜你，密码为:${userInfo.userPwd}`)
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="登录水平表单" style={{marginTop: 10}}>
          <Form style={{width: 300}}>
            <Form.Item>
              {
                getFieldDecorator('uesrName',{
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 5, max: 10,
                      message: '长度不在范围内'
                    },
                    {
                      pattern:/^\w/g,
                      message: '用户名必须字母或者数字'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('uesrPwd',{
                  initialValue: '',
                  rules: []
                })(
                  <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('remember',{
                  valuePropName:'checked',
                  initialValue: true,
                })(
                  <Checkbox style={{float: 'left'}}>记住密码</Checkbox>
                )
              }
              <a href="#" style={{float: 'right'}}>忘记密码</a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin)