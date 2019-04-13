import React from 'react';


const personStyling = {
    margin: '16px auto',
    width: '60%',
    backgroundcolor: '#fff',
    border: '1px solid #888',
    padding: '15px',
    textalign: 'center',
}

const person = (props)=> {
    return (
        <div className="App" style={personStyling}>
            <p onClick={props.click}>{props.name} was choosen to be {Math.floor(Math.random() *30)} years old!</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};
export default person;

/* Math.floor(Math.random() * 30 + 1) */