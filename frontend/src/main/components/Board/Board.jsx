import React from 'react';

import './Board.css';

import grid from './grid';
import JSONToReactComponent from '../JSONToReactComponent/JSONToReactComponent';
import isMouseIn from '../../../util/isMouseIn';
import getOffset from '../../../util/getOffset';

export default class Board extends React.Component {
  static defaultProps = {
    grid: 3
  };

  correctLeft = 0;
  correctTop = 0;

  mouseIn = false;

  DOMVJSONelements = [];

  selectElement = (event) => {
    let i = this.DOMVJSONelements.length - 1;

    while (i > -1) {
      if (isMouseIn(event.clientX, event.clientY, this.DOMVJSONelements[i].instance)) {
        return this.DOMVJSONelements[i].VJSONTarget;
        break;
      }
      i --;
    }

    return null;
  };

  addElement = (instance, VJSONTarget) => {
    this.DOMVJSONelements.push({
      instance, VJSONTarget
    });
  };

  removeElement = (VJSONTarget) => {
    this.DOMVJSONelements = this.DOMVJSONelements.filter(item => item.VJSONTarget !== VJSONTarget);
  }

  setCorrectPosition (instance) {
    let { left, top } = getOffset(instance);

    this.correctLeft = left;
    this.correctTop = top;
  }

  handleMousmove = (event) => {
    if (isMouseIn(event.clientX, event.clientY, this.refs.board)) {
      this.mouseIn = true;
    } else {
      this.mouseIn = false;
    }
  }
  handleMouseup = (event) => {
    if (this.mouseIn && this.props.activeComponent) {
      const el = this.selectElement(event);
      this.props.updateVJSON(
        el,
        'APPEND_CHILD'
      );
    }
  }
  handleResize = (instance) => {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setCorrectPosition(instance);
    }, 100);
  }

  componentDidMount () {
    const instance = this.refs.board;
    this.setCorrectPosition(instance);

    let timer;

    window.addEventListener('resize', this.handleResize.bind(this, instance));
    
    document.body.addEventListener('mousemove', this.handleMousmove);

    document.body.addEventListener('mouseup', this.handleMouseup);
  }

  componentWillUnmount() {
    document.body.removeEventListener('resize', this.handleResize);
    document.body.removeEventListener('mousemove', this.handleMousmove);
    document.body.removeEventListener('mouseup', this.handleMouseup);
  }

  render () {
    return (
      <div 
        id="board"
        className="board"
        ref="board"
        style={{
          width: grid[this.props.grid] + 'px'
        }}
      >
        <div 
          className="board-content"
          style={{
            width: grid[this.props.grid] + 'px'
          }}
        >
          <JSONToReactComponent
            VJSON={this.props.VJSON}
            updateVJSON={this.props.updateVJSON}
            throwError={this.props.throwError}

            addElement={this.addElement}
            removeElement={this.removeElement}
            setActiveComponent={this.props.setActiveComponent}
          />
        </div>
      </div>
    );
  }
}