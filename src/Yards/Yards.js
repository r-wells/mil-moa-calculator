import React, { Component } from 'react';
import Distance from './Distance/Distance';
import MilToMoa from './MilToMoa/MilToMoa';
import TargetSize from'./TargetSize/TargetSize';

const moa = (props) => {
    
    function Mils(props) {
        return (
            <div>
                <h3>Mils is rendered</h3>
                <Distance />
            </div>
        )
    }

    function Moa(props) {
        return (
            <div>
                <h3>MOA is rendered</h3>
                <Distance />
            </div>
        )
    }

    if( 1 === 1 ) {

    return (
        
        <div className="moa-container">
            <Mils />
            {/* <h3>MOA Calculations</h3>
            <p>This section is used for MOA Calculations. Use it to calculate distance, Mils to MOA, target size, etc.</p>
            <p>Choose your units of measurement</p>
            <p>{props.units}</p>
            <MilToMoa />
            <Distance />
            <TargetSize /> */}
        </div>
    )

    }

    if ( 1 != 1) {
        return(
            <div>
                <Moa />
            </div>
        )
    }
};

export default moa;