import React from 'react';
import PropsSetting from '../PropsSetting/PropsSetting';
import loadingElements from '../../../util/loadingElements';

import _ from 'lodash';
import './Controller.css';

export default class Controller extends React.Component {

  static boxStyle = {
    padding: 7,
    border: 1
  };

  productControllerStyle () {
    const { pos } = this.props.VJSON;
    const dis = (Controller.boxStyle.padding + Controller.boxStyle.border);

    if (pos) {
      return {
        left: pos.x - dis  + 'px',
        top: pos.y - dis + 'px',
        padding: `${Controller.boxStyle.padding}px ${Controller.boxStyle.padding}px`,
        border: `${Controller.boxStyle.border}px solid rgba(245, 110, 110, 0)`
      };
    }
  }
  // 挂载真实 DOM 信息
  componentDidMount () {
    this.refs.controller && this.props.addElement(
      this.refs.controller.children[0], 
      this.props.VJSON
    );
  }

  componentWillUnmount () {
    this.refs.controller && this.props.removeElement(
      this.props.VJSON
    );
  }
  onMouseDown = (e) => {
    this.timer = setTimeout(() => {
      const VJSON = this.props.VJSON;

      this.onDelete();
      this.props.setActiveComponent({
        activeComponentName: VJSON.name, 
        activeComponent: VJSON.Class,
        activeComponentConfig: VJSON.componentDescription,
        left: VJSON.pos.x,
        top: VJSON.pos.y
      });
    }, 1000);
  };
  onMouseUp = () => {
    clearTimeout(this.timer);
  };
  onDelete = () => {
    this.props.updateVJSON(this.props.VJSON, 'DELETE');
    this.forceUpdate();
  };
  onUpdate = (props) => {
    this.props.updateVJSON(this.props.VJSON, 'UPDATE_PROPS', props);
    this.forceUpdate();
  };

  render () {
    if (_.isString(this.props.children)) {
      return this.props.children;
    } else {
      const Class = this.props.VJSON.Class;
      const children = this.props.children.children;

      const Component = (
        <Class {...this.props.VJSON.props}>
          { children }
        </Class>
      );
      
      return (
        <div 
          ref="controller" 
          className="controller" 
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}

          style={{
            ...this.productControllerStyle()
          }}
        >
          <div 
            className="controller-tool-list">
            <div 
              style={{ 
                display: this.props.VJSON && this.props.VJSON.componentDescription ? 'block' : 'none' 
              }} 
              className="edit" 
              onClick={this.onEdit}
            > E </div>
            <div className="delete" onClick={this.onDelete}> X </div>
            <PropsSetting 
              VJSON={this.props.VJSON}
              onUpdate={this.onUpdate}
            />
          </div>
          { Component }
        </div>
      );
    }
  }
}