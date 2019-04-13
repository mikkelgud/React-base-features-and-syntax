
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const switchNameAndAgeButtonStyle = { 
  backgroundcolor: "black",
  font: 'inherit',
  border: '1px solid black',
}

const App = props => {
  
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Mikkel", age: "12"},
      { name: "yoana", age: "14" },
      { name: "Ed Sheeron", age: "43" }
    ]
  });
  console.log(personsState);

  const switchNameHandeler = (newName) => {
    console.log("dette fungerer");
    //this.state.person[0].name = "malagbizaonima"; fungerer ikke
    setPersonsState({
      persons: [
        { name: newName, age: "12" },
        { name: "maka" ,age: "13"},
        { name: "flow", age: "23" }
      ],
      showPersons: false
    });
  };

const nameChangedHandeler = (event) => {
  setPersonsState({
    persons: [
      { name: event.target.value, age: "54"},
      { name: "maka", age:"33" },
      { name: "flow", age: "23" }
    ],
    otherState: personsState.otherState
  });
};

const toggelPersonHandeler = () => {
  const doesShowing = this.state.showPersons;
  this.setState({showPersons: !doesShowing});
};

  return (
    <div className="App">
      <h1>POTATO</h1>
      <button
      style = {switchNameAndAgeButtonStyle}
      onClick={toggelPersonHandeler}>
      Switch name and age</button> 


      {this.state.showPersons ?
      <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
          click={switchNameHandeler.bind(this, "something")}
          changed={nameChangedHandeler}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />

    </div> : null
  }
  </div>
  );
  // return(React.createElement('h1',{className: "App"},"Bullshit POTATO"));
}

export default App;