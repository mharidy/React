import React, { Component } from 'react';
import { x as momo } from "./module";
import Item from "./components/items/Items";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  // Render the Components
  render() {
    return (
      //A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;