import React, { Component } from 'react';
// import Distance from './Distance/Distance';
// import MilToMoa from './MilToMoa/MilToMoa';
// import TargetSize from'./TargetSize/TargetSize';
//import './Yards.css';

const yards = (props) => {

    // state ={
    //     moa: 0,
    //     distance: 0,
    //     mils: 0
    // }

    // calculateMoaHandler = (event) => {
    //     this.setState({
    //         moa: (event.target.value / 100) * 1.047,
    //         distance: event.target.value,
    //         mils: this.state.moa * 3.438
    //     })
    // }

    // calculateDistanceHandler = (event) => {
    //     this.setState({
    //         moa: event.target.value,
    //         distance: event.target.value * 95.5109838,
    //         mils: event.target.value * 3.438
    //     })
    // }

    // calculateMilsToMoaHandler = (event) => {
    //     this.setState({
    //         moa: event.target.value / 3.438,
    //         distance: ( (event.target.value * 1000) / 12)  / 3,
    //         mils: event.target.value
    //     })
    // }

    return(
        <div className="row">
            <div className="data-display">
                <p>Distance To Target (Yards): {props.targetDistance}</p>
                <p>1 MOA (Inches): {props.moa}</p>
                <p>1 Mils (Inches): {props.mil}</p>
            </div>
        </div>
    )

};

export default yards;