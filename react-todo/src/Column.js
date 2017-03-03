import React, { Component } from 'react';
import Panel from './Panel';

class Column extends Component {
  render() {
    return (
      <div className="row">
        <Panel name="Todo"/>
        <Panel name="In progress"/>
        <Panel name="Done"/>
      </div>
    );
  }
}

export default Column;
