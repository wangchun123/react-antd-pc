import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
// import dog from '../image/1.jpg';
import "../css/global.scss";

import App from "../js/App";
import Wq from "../js/wq";
import EditTable from '../js/editTable';

import { user, team } from "../util/menus";

import { HashRouter, Route, Switch } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
    
  }

  onCollapse = collapsed => {
    
    this.setState({ collapsed });
  };

  exportElement = () => {
    return <div>123123</div>;
  };

  componentDidMount() {
    // window.onhashchange = ()=>{
    //   this.setState({
    //       hash:window.location.hash
    //   });
    // }
  }

  render() {
    
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="light"
        >
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              {user.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <Link to={item.url}>{item.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <Menu.Item key="9" className="check">
              <Link to="/index/bill">
                <Icon type="file" />
                <span>用户管理</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <HashRouter>
                <div>
                  <Route path="/index/tom" component={Wq} />
                  <Route path="/index/bill" component={App} />
                  <Route path="/index/EditTable" component={EditTable} />
                </div>
              </HashRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
