import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Mikkel" },
      { name: "yoana" },
      { name: "Ed Sheeron" }
    ],
    otherState: "someotherstate",
    showPerson: false
  };

  switchNameHandeler = (newName) => {
    console.log("dette fungerer");
    //this.state.person[0].name = "malagbizaonima"; fungerer ikke
    this.setState({
      persons: [
        { name: newName },
        { name: "maka" },
        { name: "flow" }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShowing = this.state.showPerson;
    this.setState({showPerson: !doesShowing})
  }


  render() {
    return (
      <div className="App">
        <h1>POTATO</h1>
        <button onClick={this.togglePersonHandler}>show content</button>
        {this.state.showPerson === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              click={this.switchNameHandeler.bind(this, 'anothername')}
            > BTW, He is fucking awsome too!</Person>
            <Person name={this.state.persons[1].name} />
            <Person name={this.state.persons[2].name} />
          </div> : null}
      </div>
    );
    // return(React.createElement('h1',{className: "App"},"Bullshit POTATO"));
  }
}

export default App;