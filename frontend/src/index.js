import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import Main from './main/App';
import Login from './login/App';
import Register from './register/App';
import Admin from './admin/App';
import { Menu, Icon } from 'antd';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    );
  }
}

class App extends React.Component {
  state = {
    auth: window.uid !== undefined && window.uid !== null
  };
  componentWillMount() {

  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <AuthRoute {...this.props} auth={this.state.auth} path="/admin" component={Admin} />
          <AuthRoute {...this.props} auth={this.state.auth} path="/(index)?" component={Main} />
        </Switch>
      </Router>
    );
  }
}

class AuthRoute extends React.Component {
  render() {
    const Component = this.props.component;
    return (
      <Route path={this.props.path}>
        {
          this.props.auth ? (<Component {...this.props}/>) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.location }
              }}
            />
          )
        }
      </Route> 
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
