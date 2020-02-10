import React, { Component } from 'react';
import {Button,Divider,Row, Col,Table,Pagination,Icon,LocaleProvider} from 'antd';
import '../css/App.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Global from '../components/Global';

import Search from './components/search';
import AddModal from './components/addmodal';

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

class App extends Component {
  constructor(){
    super()
    this.state={
      visible:false,
      editMessage:{}
    }
  }

   onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

//输入框查询
  search(e){
    //在这里发请求

    console.log('123',e);
  }

//编辑
  edit=(e)=>{
    console.log('e',e);
    this.setState({
      editMessage:e
    })
    this.modal.showModal();
    
  }

  onRef = (e) => {
    this.modal = e
  }
//添加
  add=(e)=>{
    
    this.modal.showModal();
  }

  //删除
  delete=()=>{
let some=123;
    this.search();//调用查询方法
  }

  render() {
    
    const columns = [{
      title: '序号',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '普通用户名称',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '手机号',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '权限',
      key: 'tags',
      dataIndex: 'tags',
    }, {
      title: '单位名称',
      key: 'action',
      render: (text, record) => (
        <span></span>
      ),
    },{
      title: '可查询合作项目',
      key: 'action1',
      render: (text, record) => (
        <span>
          
        </span>
      ),
    },{
      title: '操作',
      key: 'action2',
      render: (text, record) => {
        return(
          <div>
          <a onClick={this.edit.bind(this,text)}>编辑</a><a style={{marginLeft:'20px'}} onClick={this.delete}>删除</a>
          </div>
        )
      },
    }];
    console.log('editmessage',this.state.editMessage)
    return (
      <div className="App">
        <div className="top">普通人员列表</div>
        <Divider dashed={true}></Divider>
        <div className="serch">
        <Row gutter={0}>
          <Col span={2} ><Button id='add' icon='plus' onClick={this.add}>新增</Button></Col>
          <Col span={5} >
          <Search search={this.search}></Search>
          </Col>
        </Row>
        <div style={{height:'30px'}}></div>
        <Table columns={columns} dataSource={data} pagination={false} bordered={true}></Table>
        <Row type="flex" justify="space-bewteen">
          <Col span={12}>每页显示<span style={{color:'blue'}}>10条<Icon type="caret-down" theme="outlined" /></span></Col>
          <Col span={12} style={{textAlign:'right'}}><LocaleProvider locale={zhCN}><Pagination total={50} showSizeChanger onShowSizeChange={this.onShowSizeChange}></Pagination></LocaleProvider></Col>
        </Row>
        </div>
        <AddModal onRef={this.onRef} Parent={this} editMessage={this.state.editMessage}></AddModal>
      </div>
    );
  }
}

export default App;
