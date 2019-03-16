import React, { Component } from 'react';
import Yards from './Yards/Yards';
import Meters from './Meters/Meters';
import logo from './logo.png';
import './App.css';
import { timingSafeEqual } from 'crypto';


class App extends Component {

  state = {
    units: '',
    distance: 0,
    moa: 0,
    mil: 0
    }

  yardsHandler = (event) => {
      this.setState(
          {units: 'yards',
          distance: event.target.value,
          moa: (event.target.value / 100) * 1.047,
          mil: (event.target.value * 3 * 12) / 1000 }
      )
  }

  metersHandler = (event) => {
      this.setState(
          {units: 'meters',
          distance: event.target.value,
          mil: (event.target.value * 100) / 1000,
          moa: this.state.mil / 3.438 }
      )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
          <div class="header">
            <a href="https://bluelineoptics.com/" class="logo"><img src="https://bluelineoptics.com/wp-content/uploads/2018/10/blue-line-optics-logo-small.png" 
            alt="Blue Line Optics" className="logo" data-height-percentage="54" /></a>
            <div class="header-right">
              <a className="HeaderLinkHover" href="https://bluelineoptics.com">Home</a>
              <a className="HeaderLinkHover" href="https://bluelineoptics.com/shop/">Shop</a>
              <a className="HeaderLinkHover" href="https://bluelineoptics.com/about-blue-line-optics/">About</a>
              <a className="HeaderLinkHover" href="https://bluelineoptics.com/optics-database/">Articles and Videos</a>
              <a className="HeaderLinkHover" href="https://bluelineoptics.com/contact/">Contact Us</a>
            </div>
          </div>
        </header>
        <div className="Body">
          <h2 className="HeaderTitleText">PRS Calculators & Apps</h2>
          <br />
          <p><strong>This calculator will give you 1 MOA, .25 MOA, 1 Mil and 0.1 Mil values at the 
            distance you enter in both inches and centimeters.</strong></p>
          <p>You can enter in distance to target in either Yards or Meters</p>
          <form>
            <div className="row">
              <div className="col-2">
                <h3>Enter distance to target in Yards</h3>
                <input type="text" name="distance-input" value={this.state.value} onChange={this.yardsHandler} />
              </div>
              <div className="col-2">
              <h3>Enter distance to target in Meters</h3>
                <input type="text" name="distance-input" value={this.state.value} onChange={this.metersHandler} />
              </div>
            </div>
          </form>
        <div>
          {this.state.units === 'yards'? <Yards distance={this.state.distance} moa={this.state.moa} mil={this.state.mil} />: null}
          {this.state.units === 'meters'? <Meters distance={this.state.distance} moa={this.state.moa} mil={this.state.mil} />: null}
        </div>
        </div>
        
      </div>
    );


  }
}

export default App;
