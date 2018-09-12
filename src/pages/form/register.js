import React, { Component } from 'react';
import { Card, Button,Form, Input, Checkbox, Radio, Select, Swith, DatePicker, TimePicker, Upload, Icon, message, InputNumber, Switch } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends Component{

  state={}
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleChange = (info) =>{
    if(info.file.status === 'uploading'){
      this.setState({loading:true});
      return;
    }
    if(info.file.status === 'done'){
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({ 
        uesrImg:imageUrl, loading:false 
      }));
    }
  }

  handleSubmit= () =>{
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12
      }
    }
    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span: 12,
          offset:4
        }
      }
    }
    return(
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('uesrName',{
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名"/>
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('uesrPwd',{
                  initialValue: '',
                  rules: []
                })(
                  <Input type="password" placeholder="请输入密码"/>
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex',{
                  initialValue: '1',
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age',{
                  initialValue: 18,
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state',{
                  initialValue: '1',
                })(
                  <Select>
                    <Option value="1">react</Option>
                    <Option value="2">vue</Option>
                    <Option value="3">nodejs</Option>
                    <Option value="4">react native</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('interest',{
                  initialValue: [],
                })(
                  <Select mode="multiple">
                    <Option value="1">react</Option>
                    <Option value="2">vue</Option>
                    <Option value="3">nodejs</Option>
                    <Option value="4">react native</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried',{
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  initialValue: moment('2018-08-08 12:00:59')
                })(
                  <DatePicker 
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  initialValue: '广东省广州市'
                })(
                  <TextArea 
                    autosize={{minRows: 2, maxRows: 4,}}
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time')(
                  <TimePicker />
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                  {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout} labelCol={{}}>
              {
                getFieldDecorator('react',{
                  initialValue: true
                })(
                  <Checkbox>
                    点击请看:<a href="#">react宝典大全</a>
                  </Checkbox> 
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(Register)