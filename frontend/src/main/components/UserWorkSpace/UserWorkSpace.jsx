import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import './UserWorkSpace.css';

export default class UserWorkSpace extends React.PureComponent {
  state = {
    show: false
  };
  trigger = () => {
    this.setState({
      show: !this.state.show
    })
  };
  render() {
    return (
      <section className="user-work-space">
        <div onClick={this.trigger} className="user-work-space-button">
          <Icon type={!this.state.show ? 'setting' : 'close'} /> 
        </div>
        <section style={{ display: this.state.show ? 'block' : 'none' }} className="user-work-content">
          <section className="user-work-row">
            <div className="user-work-icon" onClick={this.props.saveTemplate}>
              <Icon type="save" />
              <span>
                保存模板
              </span>
            </div>
            <div className="user-work-icon" onClick={this.props.exportCode}>
              <Icon type="share-alt" />
              <span>
                导出模板
              </span>
            </div>
          </section>
          <section className="user-work-row">
            <div className="user-work-icon">
            <Link to="/admin/template">
              <Icon type="desktop" />
              <span>
                模板管理
              </span>
            </Link>
            </div>
            <div className="user-work-icon">
              <Link to="/admin/component">
                <Icon type="api" />
                <span>
                  组件管理
                </span>
              </Link>
            </div>
          </section>
          <section className="user-work-row">
            <div className="user-work-icon" onClick={() => window.location="/api/logout"}>
              <Icon type="user" />
              <span>
                用户登出
              </span>
            </div>
          </section>
        </section>
      </section>
    );
  }
}