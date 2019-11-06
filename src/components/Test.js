import React from 'react';

function Test(props) {
    console.log(props)

    return (
        <div> {props.name} {props.age}</div>
    );
}

export default Test;