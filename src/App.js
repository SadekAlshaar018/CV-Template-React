import React, { Component } from 'react';
import './App.css';
import Nav from './component/header/navbar';
import Cont from './component/content/content';
import Footer from './component/footer/footer';
import Cover from './component/cover/cover';
import Pro from './component/progress/pro';


class App extends Component {
  render() {
    return (
      <div className="App">
          <header >
            <div className="App-header fixed">
              <div className="App__nav">
                <Nav />
              </div>
              <div className="App__logo">
                <h2 className="App__logo--text">Shaar Designer</h2>
              </div>
            </div>
          </header>
          <Cover />
          <Cont />
          <Pro />
          <div className="footer">
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
