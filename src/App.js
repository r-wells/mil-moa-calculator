import React, { Component } from 'react';
import Moa from './MOA/MOA';
import Mil from './Mil/Mil';
import logo from './logo.png';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div className="Body">
          <Moa />
        </div>
        
      </div>
    );
  }
}

export default App;
