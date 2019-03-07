import React from 'react';
import './Mil.css';

const mil = (props) => {
    return <input name="input" type="text" className="Input" onChange={props.changed}></input>
};

export default mil;