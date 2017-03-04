import React, { Component } from 'react';

class Panel extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      addItem: false
    };

    this.add = this.add.bind(this);
  }
  add(){
    this.setState((oldState) =>{
      /*var tmpState = oldState.items.slice();
      tmpState.push('asd');*/
      return {
        items: oldState.items,
        addItem: true
      }
    });

  }
  render() {
    const name = this.props.name;
    const items = this.state.items;
    const add = this.state.addItem;
    let addItem;
    if(add)
      addItem = <textarea></textarea>;
    else
      addItem = null;
    return (
      <div className="col-xs-4">
        <h3>{ name }</h3>
        <ul className="list-group">
          { 
            items.map((item, key) => {
            return <li className="list-group-item justify-content-between" key={key}>
                      { item } 
                      <a href="#" className="pullright">x</a>
                  </li>;
            }) 
          }
        </ul>
        { addItem }
        <a href="#" onClick={this.add}>Add card...</a>
      </div>
    );
  }
}

export default Panel;
