
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

import TemplateList from './Template/Template';
import ComponentList from './Component/Component';

import './App.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends React.Component {
  render() {
    return (
      <Menu
        onClick={this.props.setCurrent}
        selectedKeys={[this.props.current]}
        mode="horizontal"
      >
        <Menu.Item key="setting">
          <Link to="/admin/component">
            <Icon type="setting" />组件管理
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/admin/template">
            <Icon type="appstore" />模板管理
          </Link>
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="edit">
          <Link to="/">
            <Icon type="edit" />编辑页面
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}


export default class Admin extends React.Component {
  state = {
    current: 'setting',
  };
  setCurrent = (e) => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    return [
      <Nav current={this.state.current} setCurrent={this.setCurrent} key={1}/>,
      <Switch key={2}>
        <Route path={this.props.path + '/template'}>
          <TemplateList setCurrent={this.setCurrent}/>
        </Route>
        <Route path={this.props.path + '/component'}>
          <ComponentList setCurrent={this.setCurrent}/>
        </Route>
      </Switch>
    ];
  }
}