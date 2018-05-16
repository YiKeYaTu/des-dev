import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const Menu_ = require('antd').Menu;
const SubMenu = Menu_.SubMenu;
const MenuItemGroup = Menu_.ItemGroup;

export default class Menu extends React.Component {
  static defaultProps = {
    mode: 'horizontal'
  };
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
      <Menu_
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        {...this.props}
      >
        <Menu_.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu_.Item>
        <Menu_.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu_.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu_.Item key="setting:1">Option 1</Menu_.Item>
            <Menu_.Item key="setting:2">Option 2</Menu_.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu_.Item key="setting:3">Option 3</Menu_.Item>
            <Menu_.Item key="setting:4">Option 4</Menu_.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu_.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu_.Item>
      </Menu_>
    );
  }
}

Menu.propTypes = {
  mode: PropTypes.oneOf([
    'horizontal',
    'vertical',
    'vertical-right',
    'inline'
  ]),
  multiple: PropTypes.bool,
  selectable: PropTypes.bool,
  theme: PropTypes.oneOf([
    'light',
    'dark'
  ])
};
