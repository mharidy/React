import React, { Component } from 'react';
import { x as momo } from "./module";
import Item from "./components/Items"
//import { default as me } from "./module"


class App extends Component {
  state = {
    name: ""
  }

  //Function to handle text change
  handelInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  //Function to handle Form submit
  handleSubmitForm = (e) => {
    e.preventDefault();
    { console.log(this.state.name) }
  }

  // Render the Components
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmitForm}>
          <input type="text" onChange={this.handelInputChange} />
          <button> Click Button</button>
        </form>
        {this.state.name}


      </div>
    );
  }
}

export default App;