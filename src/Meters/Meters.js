import React from 'react';


const meters = (props) => {
    return <input name="input" type="text" className="Input" onChange={props.changed}></input>
};

export default meters;