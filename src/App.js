import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './header/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App__nav">
            <Nav />
          </div>
          <div className="App__logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>

      </div>
    );
  }
}

export default App;
