import React, { Component } from 'react';
import { Modal } from 'antd';
import _ from 'lodash';
import clone from 'deepclone';

import './App.css';

import Board from './components/Board/Board';
import ComponentsList from './components/ComponentsList/ComponentsList';
import PropsSetting from './components/PropsSetting/PropsSetting';
import DragPreview from './components/DragPreview/DragPreview';
import UserWorkSpace from './components/UserWorkSpace/UserWorkSpace';
import Editor from '../admin/Component/Editor';

import getOffset from '../util/getOffset';
import getTemplate from '../util/getTemplate';
import JSONToCode from '../util/JSONToCode';

class App extends Component {

  state = {
    // 选中组件状态
    activeComponent: null,
    activeComponentName: null,
    activeComponentProps: null,
    activeComponentDragPositionLeft: null,
    activeComponentDragPositionTop: null,
    // 组件 JSON
    VJSON: []

  };
  // 选中元素
  setActiveComponent = (activeComponent) => {
    if (!activeComponent) {
      this.clearActiveComponent();
    } else {
      this.setState({ activeComponent });
    }
  };
  setActiveComponentName = (activeComponentName) => {
    this.setState({ activeComponentName });
  };
  setActiveComponentProps = (activeComponentProps) => {
    this.setState({ activeComponentProps });
  };
  setActiveComponentConfig = (activeComponentConfig) => {
    this.setState({ activeComponentConfig });
  };
  // 设置拖拽位置
  setActiveComponentDragPosition = (activeComponentDragPositionLeft, activeComponentDragPositionTop) => {
    this.setState({
      activeComponentDragPositionLeft,
      activeComponentDragPositionTop
    });
  };
  handleMousemove = (event) => {
    this.setActiveComponentDragPosition(event.clientX, event.clientY);
  };
  handleMouseup = () => {
    this.clearActiveComponent();
  };
  exportCode = () => {
    if (this.state.VJSON.length === 0) {
      return Modal.warning({
        title: '警告',
        content: '页面没有包含任何组件'
      });
    }
    const code = JSONToCode(this.state.VJSON);

    Modal.info({
      title: '页面代码',
      width: '800px',
      content: (
        <Editor 
          value={code}
        />
      )
    });
  };
  // 保存模板 JSON
  saveTemplate = () => {
    if (this.state.VJSON.length === 0) {
      return Modal.info({
        title: '提示',
        content: '不能保存空模板'
      });
    }

    fetch('/api/saveTemplate', {
      method: 'POST',
      body: `json=${JSON.stringify(this.state.VJSON)}`,
      credentials: "include",
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          Modal.success({
            title: '提示',
            content: '保存成功'
          });
        } else {
          Modal.error({
            title: '错误',
            content: res.msg
          });
        }
      });
  }
  // 设置组件 JSON
  updateVJSON = (target, type, obj) => {
    switch (type) {
      case 'APPEND_CHILD':
        const child = {
          Class: this.state.activeComponent,
          props: this.state.activeComponentProps,
          componentDescription: this.state.activeComponentConfig,
          name: this.state.activeComponentName,
          pos: this.computedDragComponentPos(),
          parent: target,
          children: null
        };
        if (!target) {
          this.state.VJSON = this.state.VJSON.concat(child);
        } else {
          if (target.children) {
            target.children = [];
          }
          target.children = target.children.concat(child);
        }
        break;
      case 'DELETE':
        if (target.parent) {
          target.parent.children = target.parent.children.filter(item => item !== target);
        } else {
          this.state.VJSON = this.state.VJSON.filter(item => item !== target);
        }
      case 'UPDATE_PROPS':
        target.props = Object.assign({}, target.props, obj);
        break;
    }
    this.setState({
      VJSON: this.state.VJSON
    });
  };
  // 抛出错误
  throwError (title, content) {
    Modal.error({
      title: title,
      content: content,
    });
  }
  // 计算组件实际位置
  computedDragComponentPos() {
    const pre = getComputedStyle(document.getElementById('dragPreview'));
    const board = getOffset(document.getElementById('board'));

    return {
      x: parseFloat(pre.left) - board.left - 1,
      y: parseFloat(pre.top) - board.top,
    }
  }
  // 清除选择中的组件
  clearActiveComponent() {
    this.setState({
      activeComponent: null,
      activeComponentName: null,
      activeComponentProps: null,
      activeComponentDragPositionLeft: null,
      activeComponentDragPositionTop: null,
    });
  }
  // 获取模板
  getTemplate() {
    getTemplate((res) => {
      if (window.location.hash && res.data.length === 0) {
        Modal.info({
          title: '提示',
          content: '未找到该模板，请检查模板 ID 是否正确'
        });
      }

      if (res.data.length > 0) {
        this.setState({ VJSON: JSON.parse(res.data[0].template_json) });
      }

      window.location.hash = '';
    });
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMousemove);
    document.addEventListener('mouseup', this.handleMouseup);
    this.getTemplate();
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMousemove);
    document.removeEventListener('mouseup', this.handleMouseup);
  }

  render() {
    const {
      activeComponent,
      activeComponentDragPositionLeft,
      activeComponentDragPositionTop
    } = this.state;
    return (
      <div className='app' onDragStart={e => e.preventDefault()}>
        <ComponentsList
          setActiveComponent={this.setActiveComponent}
          setActiveComponentName={this.setActiveComponentName}
          setActiveComponentConfig={this.setActiveComponentConfig}
          setActiveComponentDragPosition={this.setActiveComponentDragPosition}
        />
        <Board
          updateVJSON={this.updateVJSON}
          throwError={this.throwError}

          VJSON={this.state.VJSON}
          activeComponent={this.state.activeComponent}
        />
        <DragPreview
          activeComponent={activeComponent}
          left={activeComponentDragPositionLeft}
          top={activeComponentDragPositionTop}
        />
        <UserWorkSpace 
          saveTemplate={this.saveTemplate}
          exportCode={this.exportCode}
        />
      </div>
    );
  }
}

export default App;
