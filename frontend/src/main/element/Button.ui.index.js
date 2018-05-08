import React from 'react';
import { Button } from 'antd';

import PropTypes from 'prop-types';

export default class Btn extends React.Component {
  static defaultProps = {
    children: '默认按钮'
  };
  render () {
    return (
      <Button 
        {...this.props}
      />
    );
  }
}

Btn.propTypes = {
  htmlType: PropTypes.oneOf([
    'submit',
    'reset',
    'button'
  ]),
  ghost: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  shape: PropTypes.oneOf(['circle', null]),
  size: PropTypes.oneOf(['small', 'large', null]),
  type: PropTypes.oneOf(['primary', 'dashed', 'danger'])
};
