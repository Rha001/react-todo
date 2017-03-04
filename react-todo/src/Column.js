import React, { Component } from 'react';
import Panel from './Panel';

class Column extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4">
          <Panel name="Todo"/>
        </div>
        <div className="col-xs-4">
          <Panel name="In progress"/>
        </div>
        <div className="col-xs-4">
          <Panel name="Done"/>
        </div>
      </div>
    );
  }
}

export default Column;
