import React from 'react';
import _ from 'lodash';

import './PropsSetting.css';

const filterList = ['children'];

export default class PropsSetting extends React.PureComponent {
  renderPropsSetting (props) {
    return Object.keys(props)
      .filter(key => filterList.indexOf(key) === -1 && props[key].type)
      .map(key => {
        const obj = props[key];
        const type = obj.type;
        
        switch (type.name) {
          case 'enum':
            if (!_.isArray(type.value)) {
              type.value = [ type.value ];
            }
            return (
              <div key={key} className="props-box">
                <label htmlFor={key}>
                  { key }
                </label>
                <select
                  className="props-editor" 
                  id={key}
                  key={key}
                  onChange={(e) => {
                    this.props.onUpdate({
                      [key]: (e.target.value === '空' ? null : e.target.value)
                    });
                  }}
                >
                  {
                    type.value.map(item => {
                      const value = normalizeProps(item.value);
                      return (
                        <option key={value} value={value}>{ value || '空' }</option>
                      );
                    })
                  }
                </select>
              </div>
            );
          case 'bool':
          case 'number':
          case 'string':
            return (
              <div key={key} className="props-box">
                <label htmlFor={key}>
                  { key }
                </label>
                <input
                  onChange={(e) => {
                    this.props.onUpdate({
                      [key]: e.target.value
                    });
                  }}
                  className="props-editor" 
                  id={key}
                  type="text"
                />
              </div>
            );
        }

      });
  }

  render () {
    if (this.props.VJSON && this.props.VJSON.componentDescription) {
      const { props } = this.props.VJSON.componentDescription;

      return (
        <ul className="props-setting">
          {
            this.renderPropsSetting(props || {})
          }
        </ul>
      );
    } else {
      return '';
    }
  }
}

function normalizeProps (propsValue) {
  if (
    propsValue[0] === propsValue[propsValue.length - 1] &&
    (propsValue[0] === '\'' || propsValue === '"')
  ) {
    return propsValue.slice(1, propsValue.length - 1);
  } else {
    return eval(propsValue);
  }
}