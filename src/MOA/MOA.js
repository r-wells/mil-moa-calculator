import React, { Component } from 'react';
import Distance from './Distance/Distance';
import './MOA.css';

class Moa extends Component {
    
  state = {
    value: '',
    units: ''
  }

  changeHandler = (event) => {
    this.setState(
        {units: event.target.value}
    )
    console.log(this.state.units);
  }

  calculateMoa = (event) => {

    if(this.state.units === 'yards') {
        this.setState(
            {value: ((event.target.value / 100) * 1.047).toFixed(4) + ' inches',
            distance: event.target.value + ' yards'}
        );
    } if(this.state.units === 'meters') {
        this.setState(
            {value: ((event.target.value / 100) * 1.047).toFixed(4) + ' centimeters',
            distance: event.target.value + ' meters'}
        );
    }
  }

    render() {
    return (
        <div className="moa-container">
            <h3>MOA Calculations</h3>
            <p>This section is used for MOA Calculations. Use it to calculate distance, Mils to MOA, target size, etc.</p>
            <p>Choose your units of measurement</p>
            <select onChange={this.changeHandler} value={this.state.value}>
                <option value='blank'></option>
                <option value='yards'>Yards</option>
                <option value='meters'>Meters</option>
            </select>
            <Distance
            distance={this.state.distance}
            value={this.state.value}
            changed={this.calculateMoa} />
        </div>
    )
}
};

export default Moa;