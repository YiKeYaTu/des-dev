import React from 'react';
import _ from 'lodash';

import _Controller from '../Controller/Controller';
import loadingElements from '../../../util/loadingElements';

const Components = loadingElements();

export default class JSONToReactComponent extends React.Component {
  static defaultProps = {
    VJSON: null
  };

  shouldComponentUpdate (nextProps) {
    const VJSON = this.props.VJSON;
    const nextVJSON = nextProps.VJSON;
    
    if (!_.isArray(VJSON)) {
      return !(
        VJSON === nextVJSON &&
        VJSON.Class === nextVJSON.Class && 
        VJSON.pos === nextVJSON.pos &&
        VJSON.children === nextVJSON.children &&
        VJSON.props === nextVJSON.props 
      );
    } else {
      if (VJSON.length !== nextVJSON.length || VJSON !== nextVJSON) {
        return true;
      } else {
        let flag = false;

        VJSON.forEach((item, index) => {
          if (item !== nextVJSON[index]) {
            flag = true;
          }
        });

        return flag;
      }
    }
  }

  render () {
    const { VJSON } = this.props;

    const Controller = (props) => {
      return React.createElement(
        _Controller,
        {
          VJSON,
          addElement: this.props.addElement,
          removeElement: this.props.removeElement,
          updateVJSON: this.props.updateVJSON,
          ...props
        },
        props.children
      );
    }

    if (_.isArray(VJSON)) {
      // VJSON 类型为数组的时候进行展开
      return VJSON.map((item, i) => {
        return <JSONToReactComponent
          key={i}
          VJSON={item}
          addElement={this.props.addElement}
          removeElement={this.props.removeElement}
          updateVJSON={this.props.updateVJSON}
          throwError={this.props.throwError}
        />;
      })
    } else if (_.isObject(VJSON)) {
      /**
       * 当传入的 JSON 没有 Class 的时候手动赋予
       * 
       * */
      if (!VJSON.Class) {
        try {
          const target = Components.filter(item => VJSON && VJSON.name && item.name === VJSON.name.path)[0];
          VJSON.Class = target.components.filter(item => item.name === VJSON.name.componentName)[0].component;
        } catch (e) {
          this.props.throwError(
            '组件描述 JSON 有误',
            (
              <pre>
                {
                  JSON.stringify(VJSON, null, 2)
                }
              </pre>
            )
          );
        }
      }
      // 将 VJSON 转化为 React 组件进行显示
      if (VJSON.children && VJSON.children.length > 0) {
        return (
          <Controller>
            <VJSON.Class
              {...VJSON.props}
            >
              <JSONToReactComponent
                VJSON={VJSON.children}
                addElement={this.props.addElement}
                removeElement={this.props.removeElement}
                updateVJSON={this.props.updateVJSON}
                throwError={this.props.throwError}
              />
            </VJSON.Class>
          </Controller>
        );
      } else {
        return (
          <Controller>
            <VJSON.Class
              {...VJSON.props}
            />
          </Controller>
        );
      }
    } else if (_.isString(VJSON)) {
      return (
        <Controller>
          { VJSON }
        </Controller>
      );
    } else {
      return '';
    }
  }
}