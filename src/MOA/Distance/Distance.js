import React from 'react';
import './Distance.css';

const distance = (props) => {
    return (
        <div>
            <h4>Mils To MOA Calculator</h4>
            <p>Enter distance to Target:</p>
            <input type="text" onChange={props.changed} />
            <p className="value-output">Your 1 MOA at <strong><u> {props.distance}</u> yards</strong> MOA is: {props.value} <strong>inches</strong></p>
        </div>
    )
}

export default distance;