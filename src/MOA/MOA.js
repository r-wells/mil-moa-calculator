import React, { Component } from 'react';
import Distance from './Distance/Distance';
import './MOA.css';

class Moa extends Component {
    
  state = {
    value: ''
  }

  calculateMoa = (event) => {
    this.setState(
        {value: ((event.target.value / 100) * 1.047).toFixed(4),
        distance: event.target.value}
    );
  }

    render() {
    return (
        <div>
            <h3>MOA Calculations</h3>
            <p>This section is used for MOA Calculations. Use it to calculate distance, Mils to MOA, target size, etc.</p>
            <Distance
            distance={this.state.distance}
            value={this.state.value}
            changed={this.calculateMoa} />
        </div>
    )
}
};

export default Moa;