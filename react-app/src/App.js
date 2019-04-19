import React, { Component } from 'react';
import { x as momo } from "./module";
//import { default as me } from "./module"
import Child from "./child";

class App extends Component {
  state={
    name:"mohamed",
    age: 25
  }

  //function to change the state on click
  changeStateFunction=()=>{
    console.log("name-> "+this.state.name);
    this.setState({
      name:"haridy"
    })
  }


  //function to confirm that the Button is clicked
  clickedFunction = () => {
    console.log("Just clicked!");
  }

  // Render the Components
  render() {
    return (
      <div className="App">
        HELLO {momo}
        <Child />
         <button onClick={this.clickedFunction}> Click Me  </button> 
         <br></br>
         <button onClick={this.changeStateFunction}> Change the State  </button>


      </div>
    );
  }
}

export default App;