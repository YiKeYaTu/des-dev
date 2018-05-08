import React from 'react';
import { List, Avatar, Button, Spin, Icon, Modal } from 'antd';

import Editor from './Editor';

import './Component.css';

export default class ComponentList extends React.Component {
  state = {
    modalVisible: false,
    modalLoading: false,

    componentValue: null,
    componentJSON: null,

    data: []
  };
  hideEditComponent = () => {
    this.setState({ modalVisible: false });
  };
  handleOk = (name) => {
    fetch('/api/updateComponent', {
      method: 'POST',
      body: `name=${name}&js=${this.state.componentValue}&json=${this.state.componentJSON}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          Modal.success({
            title: '提示',
            content: '修改成功'
          });
        }
      });
  };
  deleteComponent = (item) => {
    fetch('/api/deleteComponent', {
      method: 'POST',
      body: `name=${item}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          Modal.success({
            title: '提示',
            content: '删除成功'
          });
          window.location.reload();
        }
      })
  };
  showEditComponent = (item) => {
    this.setState({ modalVisible: true });

    fetch('/api/getComponent?name=' + item)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({ 
            componentValue: res.data.js,
            componentJSON: res.data.json
          })
        } else {
          Modal.error({
            title: '错误',
            content: res.msg
          });
        }
      })
  };
  componentDidMount() {
    this.props.setCurrent({ key: 'setting' });

    fetch('/api/getComponentList')
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({ data: res.data })
        } else {
          Modal.error({
            title: '错误',
            content: res.msg
          });
        }
      });
  }
  render() {
    return [
      <Modal
        width={1200}
        visible={this.state.modalVisible}
        title="组件编辑"
        onOk={this.handleOk}
        onCancel={this.hideEditComponent}
        footer={[
          <Button key="back" onClick={this.hideEditComponent}>Return</Button>,
          <Button key="submit" type="primary" loading={this.state.modalLoading} onClick={this.handleOk}>
            Submit
            </Button>,
        ]}
      >
        <section class="editor-box">
          <div>
            <p>
              组件：
            </p>
            <Editor 
              value={this.state.componentValue}
            />
          </div>
          <div>
            <p>
              组件描述：
            </p>
            <Editor 
              value={this.state.componentJSON}
            />
          </div>
        </section>
      </Modal>
      ,
      <List
        id="component-list"
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item actions={[
            <a onClick={this.showEditComponent.bind(this, item)}>编辑组件</a>, 
            <a onClick={this.deleteComponent.bind(this, item)}>删除组件</a>
          ]}>
            <List.Item.Meta
              description={
                <div>
                  <Icon style={{ marginRight: '10px' }} type="api" />
                  { item }
                </div>
              }
            />
          </List.Item>
        )}
      />
    ];
  }
}
