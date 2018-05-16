import React from 'react';
import { Menu, Icon } from 'antd';

import loadingElements from '../../../util/loadingElements';
import DragItem from './DragItem';
import './ComponentsList.css';

const SubMenu = Menu.SubMenu;

export default class ComponentsList extends React.PureComponent {
  elements = loadingElements();

  rootSubmenuKeys = this.elements.map(item => item.name);

  state = {
    openKeys: [],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  DragItemCallBack = (activeComponentName, activeComponent, activeComponentConfig, left, top) => {
    this.props.setActiveComponent({
      activeComponentName, activeComponent,
      activeComponentConfig,
      left,
      top
    });
  }

  renderList() {
    return this.elements.map((item, index) => {
      return (
        <SubMenu
          key={item.name}
          title={<span><Icon type="api" /><span>{loadingElements.getName(item.name)}</span></span>}
        >
          {
            item.components.map(component => {
              const name = {
                path: item.name,
                componentName: component.name
              };

              return (
                <Menu.Item 
                  key={component.component.name}
                  style={{
                    background: 'rgba(255, 146, 0, 1)',
                  }}  
                >
                  <DragItem
                    name={name}
                    component={component.component}
                    config={item.config}
                    cb={this.DragItemCallBack}
                    key={component.component.name}
                  />
                </Menu.Item>
              );
            })
          }
        </SubMenu>
      );
    });
  }
  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ 
          width: 256,
          paddingTop: '10px',
          background: 'rgba(255, 146, 0, 0.7)',
          color: '#fff'
        }}
      >
        {
          this.renderList()
        }
      </Menu>
    );
  }
}