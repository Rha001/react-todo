import React, { Component } from 'react';

class Panel extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    };

    this.add = this.add.bind(this);
  }
  add(){
    this.setState((oldState) =>{
      var tmpState = oldState.items.slice();
      tmpState.push('asd');
      return {
        items: tmpState
      }
    });
    return false;
  }
  render() {
    const items = this.state.items;
    return (
      <div className="col-xs-4">
        <h3>{ this.props.name }</h3>
        <ul >
          {items.map((item, key) => {
            return <li key={key}>{ item }</li>;
          })}
        </ul>
        <a href="#" onClick={this.add}>Add card...</a>
      </div>
    );
  }
}

export default Panel;
