import React, { Component } from 'react';
import Yards from './Yards/Yards';
import Meters from './Meters/Meters';
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
  }

  metersHandler = (event) => {
      this.setState(
          {units: 'meters'}
      )
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
          <div>
            {this.state.units === 'yards'? <Yards />: null}
            {this.state.units === 'meters'? <Meters />: null}
          </div>
        </div>
        
      </div>
    );


  }
}

export default App;
