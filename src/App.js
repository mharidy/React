import React, { Component } from 'react';
import reactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  const elem1= <p>Hellow World!</p>;
  reactDom.render(elem1,document.getElementById("root"))

/*
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/
}

export default App;
