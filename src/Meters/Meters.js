import React from 'react';
import './Meters.css';

const meters = (props) =>  {

    //Distance in meters
    let yards = Number((props.distance * 1.09361).toFixed(3));
    //let inches = yards * 3 * 12;

    //Find moa & mil in Inches and round to 3 digits first
    //moai = moa (inches) -- mili = mil (Inches) etc.. 
    let milc = Number((props.mil).toFixed(3));
    //Checking my math 1 MOA inches = inches to target / 100 * 1.047
    let moai = Number(((yards / 100) * 1.047 ).toFixed(3));
    //1 inch == 2.54 cm
    let moac = Number((moai * 2.54).toFixed(3));
    let mili = Number((milc * 0.393701 ).toFixed(3));
    
    //Find click values, round to nearest 10
    // moaclicki = moa click value (inches) etc...
    let moaclickc = Number((moac / 4).toFixed(3));
    let milclickc = Number((milc / 10).toFixed(3));
    let moaclicki = Number((moai / 4).toFixed(3));
    let milclicki = Number((mili / 10).toFixed(3));

    return(
        <div className="row">
            <div><p className="distanceText">Distance To Target (Meters): {props.distance}</p></div>
            <div><p className="distanceText">Distance To Target (Yards): {yards}</p></div>
            <div className="col-2">
                <div className="border-raised">
                    <p><strong>Base Values</strong></p>
                    <p>1 MOA (Centimeters): {moac}</p>
                    <p>1 Mils (Centimeters): {milc}</p>
                    <p>1 MOA (Inches): {moai}</p>
                    <p>1 Mils (Inches): {mili}</p>
                </div>
            </div>
            <div className="col-2">
                <div className="border-raised">
                    <p><strong>Click Values</strong></p>
                    <p>1/4 MOA (Centimeters): {moaclickc}</p>
                    <p>0.1 Mils (Centimeters): {milclickc}</p>
                    <p>1/4 MOA (Inches): {moaclicki}</p>
                    <p>0.1 Mils (Inches): {milclicki}</p>
                </div>
            </div>
        </div>
    )

};

export default meters;