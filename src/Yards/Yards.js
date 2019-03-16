import React from 'react';
import './Yards.css';

const yards = (props) =>  {

    //Distance in meters
    let meters = Number((props.distance * 0.9144).toFixed(3))

    //Find moa & mil in Inches and round to 3 digits first
    //moai = moa (inches) -- mili = mil (Inches) etc.. 
    let moai = Number((props.moa).toFixed(3));
    let mili = Number((props.mil).toFixed(3));
    let moac = Number((moai * 2.54).toFixed(3));
    let milc = Number((mili * 2.54).toFixed(3));

    
    //Find click values, round to nearest 10
    // moaclicki = moa click value (inches) etc...
    let moaclicki = Number((moai / 4 ).toFixed(3));
    let milclicki = Number((mili / 10).toFixed(3));
    let moaclickc = Number((moac / 4 ).toFixed(3));
    let milclickc = Number((milc / 10).toFixed(3));

    return(
        <div className="row">
            <div><p className="distanceText">Distance To Target (Yards): {props.distance}</p></div>
            <div><p className="distanceText">Distance To Target (Meters): {meters}</p></div>
            <div className="col-2">
                <div className="border-raised">
                    <p><strong>Base Values</strong></p>
                    <p>1 MOA (Inches): {moai}</p>
                    <p>1 Mils (Inches): {mili}</p>
                    <p>1 MOA (Centimeters): {moac}</p>
                    <p>1 Mils (Centimeters): {milc}</p>
                </div>
            </div>
            <div className="col-2">
                <div className="border-raised">
                    <p><strong>Click Values</strong></p>
                    <p>1/4 MOA (Inches): {moaclicki}</p>
                    <p>0.1 Mils (Inches): {milclicki}</p>
                    <p>1/4 MOA (Centimeters): {moaclickc}</p>
                    <p>0.1 Mils (Centimeters): {milclickc}</p>
                </div>
            </div>
        </div>
    )

};

export default yards;