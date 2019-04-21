import React, { Component } from 'react';
import Item from "./components/items/Items";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Users from "./components/users/Users"
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
          <Route path="/Users" component={Users} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;