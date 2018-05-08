import React from 'react';
import { List, Avatar, Button, Spin, Icon, Modal } from 'antd';

import './Template.css';

export default class TemplateList extends React.Component {
  state = {
    data: []
  };
  deleteComponent = (item) => {
    fetch('/api/deleteTemplate', {
      method: 'POST',
      body: `id=${item.template_id}`,
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
  componentDidMount() {
    this.props.setCurrent({ key: 'app' });

    fetch('/api/getTemplate')
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
    return (
      <List
        id="component-list"
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item actions={[
            <a href={'/index#' + item.template_id}>使用模板</a>, 
            <a onClick={this.deleteComponent.bind(this, item)}>删除模板</a>
          ]}>
            <List.Item.Meta
              description={
                <div>
                  <Icon style={{ marginRight: '10px' }} type="appstore" />
                  { item.template_name }
                </div>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}
