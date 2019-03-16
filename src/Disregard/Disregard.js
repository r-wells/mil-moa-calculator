import React, { Component } from 'react';
// import Distance from './Distance/Distance';
// import MilToMoa from './MilToMoa/MilToMoa';
// import TargetSize from'./TargetSize/TargetSize';
import './Yards.css';

class Yards extends Component {

    state ={
        moa: 0,
        distance: 0,
        mils: 0
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
            moa: event.target.value,
            distance: event.target.value * 95.5109838,
            mils: event.target.value * 3.438
        })
    }

    calculateMilsToMoaHandler = (event) => {
        this.setState({
            moa: event.target.value / 3.438,
            distance: ( (event.target.value * 1000) / 12)  / 3,
            mils: event.target.value
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
                <p>Distance To Target (Yards): {this.state.distance}</p>
                <p>1 MOA (Inches): {this.state.moa}</p>
                <p>1 Mils (Inches): {this.state.mils}</p>
            </div>
        </div>
    )

}

};