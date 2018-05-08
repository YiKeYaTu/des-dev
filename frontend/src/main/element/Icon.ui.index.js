import React from 'react';
import { Icon } from 'antd';

import PropTypes from 'prop-types';

export default class Icon_ extends React.Component {
  static defaultProps = {
    type: 'question'
  };

  render () {
    return (
      <Icon 
        {...this.props}
      />
    );
  }
}
