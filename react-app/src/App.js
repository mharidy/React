import React, { Component } from 'react';
import { x as momo } from "./module";
import Item from "./components/items/Items"
//import { default as me } from "./module"


class App extends Component {

  //Create constructor, which will be triggered when the app runned
  constructor() {
    // super function should be declared
    super();
    { console.log("from con") }


  }
  //componentDidUpdate will be triggered at any change
  componentDidUpdate(prevProps, prevState) {
    { console.log("update--->" , prevState) }
  }

  //componentDidMount will be triggered after rendering the Component
  componentDidMount() {
    { console.log("from componentDidMount") }
  }

  //state to declare and arry or objects calles items 
  state = {
    items: [
      { name: "mohamed", id: "1", age: 25 },
      { name: "nasser", id: "2", age: 35 },
      { name: "khaled", id: "3", age: 45 },
      { name: "khaled", id: "4", age: 45 },
      { name: "khaled", id: "5", age: 45 }
    ]

  }

  //handel add Button by pushing new object to the array
  handleAddButton = () => {
    let items = this.state.items;
    items.push({ name: "azza", id: Math.random() * 10, age: "50" });
    this.setState({
      items:items
    });
  }
  //handle remove button by remove all items except no. 2
  handleRemoveButton = () => {
    let items = this.state.items;
    items.splice(2);
    this.setState(items);
  }



  // Render the Components
  render() {
    { console.log("render") }
    return (
      <div className="App">
        <Item items={this.state.items} />
        <button onClick={this.handleAddButton}>add</button>
        <button onClick={this.handleRemoveButton}>Remove</button>

      </div>
    );
  }
}

export default App;