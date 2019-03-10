import React, { Component } from 'react';
// import Distance from './Distance/Distance';
// import MilToMoa from './MilToMoa/MilToMoa';
// import TargetSize from'./TargetSize/TargetSize';
import './Yards.css';

class Yards extends Component {

    state ={
        mils: 0,
        moa: 0,
        distance: 0
    }

    calculateMoaHandler = (event) => {
        this.setState({
            moa: (event.target.value / 100) * 1.047,
            distance: event.target.value,
            mils: this.state.moa * 3.438
        })
    }

    calculateDistanceHandler = (event) => {
        this.setState({
            distance: event.target.value * 95.5109838,
            moa: event.target.value,
            mils: event.target.value * 3.438
        })
    }

    calculateMilsToMoaHandler = (event) => {
        this.setState({
            mils: event.target.value,
            moa: event.target.value / 3.438,
            distance: ( (event.target.value * 1000) / 12)  / 3
        })
    }

    render() {
    //MOA Rendering
    return(
        <div className="row">
            <div className="col-2">
                <div className="distanceContainer">
                    <h3>Calculate MOA</h3>
                    <p>Insert Distance To Target</p>
                    <input onChange={this.calculateMoaHandler} value={this.state.distance} />
                </div>
                <div className="milsContainer">
                    <h3>Calculate Distance</h3>
                    <p>Insert 1 MOA in inches</p>
                    <input onChange={this.calculateDistanceHandler} value={this.state.moa} />
                </div>
                <div className="milsContainer">
                    <h3>Calculate Mils</h3>
                    <p>Insert 1 Mils in inches</p>
                    <input onChange={this.calculateMilsToMoaHandler} value={this.state.mils} />
                </div>
            </div>
            <div className="col-2">
                <p>1 MOA (Inches): {this.state.moa}</p>
                <p>Distance To Target (Yards): {this.state.distance}</p>
                <p>1 Mils (Inches): {this.state.mils}</p>
            </div>
        </div>
    )

    //Mils rendering

}

};

export default Yards;