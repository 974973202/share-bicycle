import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import axios from './../../axios/index';
import utils from '../../utils/utils';

export default class BasicTable extends Component{

  state={
    dataSource2: []
  }
  params = {
    page: 1
  }

  componentDidMount(){
    const data = [
      {
        id: '0',
        userName: 'react',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address:'广东省广州市',
        time: '08:00'
      },
      {
        id: '1',
        userName: 'vue',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address:'广东省广州市',
        time: '08:00'
      },
      {
        id: '2',
        userName: 'nodejs',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address:'广东省广州市',
        time: '08:00'
      },
    ]
    data.map((item, index) => {
      item.key = index;
    })
    this.setState({
      dataSource:data
    })
    this.request();
  }

  //动态获取mock数据
  request = () =>{
    let _this = this;
    axios.ajax({
      url:'/table/list',
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
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: utils.pagination(res, (current)=> {
            //to-do
            _this.params.page = current;
            this.request();
          })
        })
      }
    })
    // axios.get('/table/list').then(res => {
    //   if(res.status === 200 && res.data.code === 0){
    //     this.setState({
    //       dataSource2: res.data.result
    //     })
    //   }
    // })
  }

  onRowClick = (record, index) =>{
    let selectKey = [index];
    Modal.info({
      title: '信息',
      content: `用户名：${record.userName}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    })
  }

  //多选执行删除动作
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map(item => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: `你确定删除这些数据吗? ${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功');
        this.request();
      }
    })
  }

  render(){
    const columns = [
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

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        // let ids = [];
        // selectedRows.map(item =>{
        //   ids.push(item.id)
        // })
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      }
    }
    return(
      <div>
        <Card title="基础表格">
          <Table 
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格-Mock" style={{margin: '10px 0'}}>
          <Table 
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{margin: '10px 0'}}>
          <Table 
            bordered
            rowSelection={rowSelection}
            onRow={(record, index)=> {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                },
              };
            }}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-复选" style={{margin: '10px 0'}}>
          <div style={{marginBottom: 10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table 
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-表格分页" style={{margin: '10px 0'}}>
          <Table 
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            // pagination={utils.pagination}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    )
  }
}