import React from 'react';

const Antd = require('antd');

export class Input extends React.Component {
  render () {
    return (
      <Antd.Input {...this.props}/>
    );
  }
}
export class TextArea extends React.Component {
  render () {
    return (
      <Antd.Input.TextArea {...this.props}/>
    );
  }
}
export class Search extends React.Component {
  render () {
    return (
      <Antd.Input.Search {...this.props}/>
    );
  }
}

