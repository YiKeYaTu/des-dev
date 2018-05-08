import React from 'react';
import ReactDOM from 'react-dom';

import './DragPreview.css';

export default class DragPreview extends React.Component {
  static defaultProps = {
    activeComponent: null,
    left: 0,
    top: 0
  };

  state = {
    leftCorrect: 0,
    topCorrect: 0
  };

  shouldComponentUpdate (nextProps) {
    if (!this.props.activeComponent) {
      return false;
    } else {
      return true;
    }
  }

  render () {
    let { activeComponent, left, top } = this.props;
    let { leftCorrect, topCorrect } = this.state;

    left = parseFloat(left) + leftCorrect + 'px';
    top = parseFloat(top) + topCorrect + 'px';

    activeComponent = activeComponent ? React.createElement(activeComponent, { ref: (instance) => {
      instance = ReactDOM.findDOMNode(instance);

      if (instance) {
        let computed = window.getComputedStyle(instance);

        let leftCorrect = -parseFloat(computed.width) / 2;
        let topCorrect = -parseFloat(computed.height) / 3;

        if (leftCorrect !== this.state.leftCorrect || topCorrect !== this.state.topCorrect) {
          this.setState({
            leftCorrect, topCorrect
          });
        }
      }
    } }) : null;

    return ReactDOM.createPortal(
      <div 
        id="dragPreview"
        className="drag-preview"
        style={{
          left, top
        }}
      >
        <div className="drag-preview-cover"></div>
        {
          activeComponent
        }
      </div>,
      document.getElementById('root')
    );
  }
}