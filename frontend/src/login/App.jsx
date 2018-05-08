import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import { Link } from 'react-router-dom';

import './App.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('Received values of form: ', values);
      } else {
        fetch('/api/login', {
          method: 'POST',
          credentials: "include",
          body: `username=${values.userName}&password=${values.password}`,
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              Modal.success({
                title: '提示',
                content: '登陆成功'
              });
              setTimeout(() => {
                window.location = '/admin/component';
              }, 1000);
            } else {
              Modal.error({
                title: '提示',
                content: res.msg
              });
            }
          })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="components-form-demo-normal-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            Or
            <Link to="/register" style={{ color: 'rgba(255, 146, 0, 1)' }}> register now!</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
