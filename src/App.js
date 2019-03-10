import React, { Component } from 'react';
import Moa from './Yards/Yards';
import Mil from './Mil/Mil';
import logo from './logo.png';
import './App.css';


class App extends Component {

  state = {
    units: ''
    }

  yardsHandler = (event) => {
      this.setState(
          {units: 'yards'}
      )
      console.log(this.state.units);
  }

  metersHandler = (event) => {
      this.setState(
          {units: 'meters'}
      )
      console.log(this.state.units);
  }

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
          <div className="Input">
            <form>
                <input type="radio" name="units-selection" onChange={this.yardsHandler} value="Yards" />Yards 
                <input type="radio" name="units-selection" onChange={this.metersHandler} value="Meters" />Meters
            </form>
          </div>
          <Moa units={this.state.units} />
          <Mil />
        </div>
        
      </div>
    );

  }
}

export default App;
