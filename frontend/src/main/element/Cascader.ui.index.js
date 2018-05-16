import React from 'react';
import PropTypes from 'prop-types';

const Cascader_ = require('antd').Cascader;

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

export default class Cascader extends React.Component {
  render() {
    return (
      <Cascader_ 
        options={options} 
        onChange={onChange} 
        placeholder="Please select" 
        {...this.props}
      />
    );
  }
}

Cascader.propTypes = {
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  changeOnSelect: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  expandTrigger: PropTypes.oneOf([
    'click', 'hover'
  ]),
  notFoundContent: PropTypes.oneOf([
    'notFoundContent'
  ])
};
