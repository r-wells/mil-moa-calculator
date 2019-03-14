import React, { Component } from 'react';
import Yards from './Calculations/Yards';
// import Yards from './Yards/Yards';
import Meters from './Meters/Meters';
import logo from './logo.png';
import './App.css';
import { timingSafeEqual } from 'crypto';


class App extends Component {

  state = {
    units: '',
    distance: '',
    moa: '',
    mil: ''
    }

  setDistanceHandler = (event) => {
    this.setState(
      {distance: event.target.value,
      moa: (this.state.distance / 100) * 1.047,
      mil: this.state.moa * 3.438}
    )
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
          <a href="https://bluelineoptics.com/">
						<img src="https://bluelineoptics.com/wp-content/uploads/2018/10/blue-line-optics-logo-small.png" alt="Blue Line Optics" id="logo" data-height-percentage="54" />
					</a>
        </header>
        <div className="Body">
          <div className="Input">
            <form>
                <div className="col-2">
                  <h3>Enter distance to target</h3>
                  <input type="text" name="distance-input" value={this.state.value} onChange={this.setDistanceHandler} />
                </div>
                <div className="col-2">
                  <h3>What is your unit of measurement?</h3>
                  <input type="radio" name="units-selection" onChange={this.yardsHandler} value="Yards" />Yards 
                  <input type="radio" name="units-selection" onChange={this.metersHandler} value="Meters" />Meters
                </div>
            </form>
          </div>
          <div>
            {this.state.units === 'yards'? <Yards distance={this.state.distance} moa={this.state.moa} mil={this.state.mil} />: null}
            {this.state.units === 'meters'? <Meters />: null}
          </div>
        </div>
        
      </div>
    );


  }
}

export default App;
