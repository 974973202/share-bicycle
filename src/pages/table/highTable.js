import React, { Component } from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import axios from './../../axios/index';
import utils from '../../utils/utils';

export default class BasicTable extends Component{

  state={}
  params={
    page: 1
  }
  componentDidMount(){
    this.request();
  }



  //动态获取mock数据
  request = () =>{
    axios.ajax({
      url:'/table/high/list',
      data: {
        params: {
          page: this.params.page
        },
        // isShowLoading: false
      }
    }).then((res) => {
      if(res.code === 0){
        res.result.list.map((item, index) => {
          item.key = index;
        })
        this.setState({
          dataSource: res.result.list,
        })
      }
    })
  }

  handleChange = (pagination, filters, sorter) =>{
    this.setState({
      sortOrder:sorter.order
    })
  }
  //删除操作
  handleDelete(item){
    let id = item.id;
    Modal.confirm({
      title:'确认',
      content: '你确认要删除此条数据吗',
      onOk:()=>{
        message.success('删除成功');
        this.request();
      }
    })
  }

  render(){
    const columns = [
      {
        title: 'id',
        width: 80,
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 80,
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ? '男':'女'
        }
      },
      {
        title: '状态',
        width: 80,
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        width: 80,
        dataIndex: 'interest',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '地址',
        width: 120,
        dataIndex: 'address',
      },
      {
        title: '早起时间',
        width: 80,
        dataIndex: 'time',
      },
    ]

    const columns2 = [
      {
        title: 'id',
        width: 80,
        fixed: 'left',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 80,
        fixed: 'left',
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ? '男':'女'
        }
      },
      {
        title: '状态',
        width: 80,
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        width: 80,
        dataIndex: 'interest',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday',
      },
      {
        title: '地址',
        width: 120,
        fixed: 'right',
        dataIndex: 'address',
      },
      {
        title: '早起时间',
        fixed: 'right',
        width: 80,
        dataIndex: 'time',
      },
    ]

    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ? '男':'女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter:(a,b)=>{
          return a.age - b.age
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '早起时间',
        dataIndex: 'time',
      },
    ]
    
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ? '男':'女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'react',
            '2':'vue',
            '3':'nodejs'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(state){
          let config = {
            '1':<Badge status="success" text="react"/>,
            '2':<Badge status="error" text="vue"/>,
            '3':<Badge status="default" text="nodejs"/>
          }
          return config[state];
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '操作',
        render:(text, item)=>{
          return <Button size='small' onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
        }
      },
    ]
    return (
      <div>
        <Card title="头部固定">
          <Table 
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y:240}}
          />
        </Card>
        <Card title="左侧固定-Mock" style={{margin: '10px 0'}}>
          <Table 
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{x:1450}}
          />
        </Card>
        <Card title="表格排序" style={{margin: '10px 0'}}>
          <Table 
            bordered
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮" style={{margin: '10px 0'}}>
          <Table 
            bordered
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}