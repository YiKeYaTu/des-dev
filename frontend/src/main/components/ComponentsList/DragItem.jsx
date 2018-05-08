import React from 'react';

export default class DragItem extends React.Component {
  static defaultProps = {
    cb: () => {},
    name: null,
    component: null
  };

  render () {
    return (
      <li onMouseDown={(event) => {
        this.props.cb(
          this.props.name,
          this.props.component,
          this.props.config,
          event.clientX,
          event.clientY
        );
      }}>
        {this.props.name.componentName}
      </li>
    );
  }
} 