import React, { Component } from 'react';

class Panel extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: 0
    };

    this.add = this.add.bind(this);
  }
  add(){
    console.log('click !');
    this.setState((oldState) =>{
      return {
        items: oldState.items + 1
      }
    });
    return false;
  }
  render() {
    const items = this.state.items;
    return (
      <div className="col-xs-4">
        <h3>{ this.props.name }</h3>
        <p>{ items }</p>
        <a href="#" onClick={this.add}>Add card...</a>
      </div>
    );
  }
}

export default Panel;
