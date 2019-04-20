import React, { Component } from 'react';
import { x as momo } from "./module";
import Item from "./components/Items"
//import { default as me } from "./module"


class App extends Component {
  state = {
    items: [
      { id: "1", name: "mohamed", age: "22" },
      { id: "2", name: "nasser", age: "32" },
      { id: "3", name: "khaled", age: "52" },
      { id: "4", name: "momo", age: "62" },
      { id: "5", name: "haridy", age: "72" }
    ]
  }
  // Render the Components
  render() {
    return (
      <div className="App">
        <Item items={this.state.items} />


      </div>
    );
  }
}

export default App;