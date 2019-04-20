import React, { Component } from 'react';
import { x as momo } from "./module";
import Item from "./components/Items"
//import { default as me } from "./module"


class App extends Component {
  state = {
    items: [
      { name: "mohamed", id: "1", age: 25 },
      { name: "nasser", id: "2", age: 35 },
      { name: "khaled", id: "3", age: 45 },
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