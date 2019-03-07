import React from 'react';
import './Distance.css';

const distance = (props) => {
    return (
        <div>
            <h4>Mils To MOA Calculator</h4>
            <p>Enter distance to Target:</p>
            <input type="text" onChange={props.changed} />
            <p className="value-output">1 MOA at <strong><u> {props.distance}</u></strong> is: <strong>{props.value}</strong></p>
        </div>
    )
}

export default distance;