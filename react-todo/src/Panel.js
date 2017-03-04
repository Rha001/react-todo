import React, { Component } from 'react';

class Panel extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      addItem: false
    };

    this.add = this.add.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  add(){
    this.setState((oldState) =>{
      return {
        items: oldState.items,
        addItem: true
      }
    });

  }
  addItem(item){

  }
  handleKeyPress(event){
    if(event.key == 'Enter'){
      const newValue = event.target.value;

      this.setState((oldState) =>{
        var tmpState = oldState.items.slice();
        tmpState.push(newValue);

        return {
          items: tmpState,
          addItem: false
        }
      });
    }
  }
  componentDidUpdate(prevProps, prevState){
    const input = document.getElementById('newItem');
    if(input)
      input.focus();
  }
  render() {
    const name = this.props.name;
    const items = this.state.items;
    const add = this.state.addItem;
    let addItem;
    if(add)
      addItem = <input className="form-control" id="newItem" placeholder="add task" onKeyPress={this.handleKeyPress}/>;
    else
      addItem = null;
    return (
      <div className="col-xs-12 panel">
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
