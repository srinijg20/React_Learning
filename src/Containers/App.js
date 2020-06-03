import React, { Component } from 'react';
import classes from './App.css';
//import Radium, { StyleRoot } from 'radium';
//import styled from 'styled-components';
import Persons from '../Components/Persons/Persons'
//import Person from '../Components/Persons/Person/Person';
import Cockpit from '../Components/Cockpit/Cockpit'
import Clock from '../Components/Clock/Clock';


class App extends Component {
  state = {
    persons: [
      { id: 'S1', name: 'Srini', age: 37 },
      { id: 'S2', name: 'Priya', age: 36 },
      { id: 'S3', name: 'Adhya', age: 4 }
    ],
    showPersons: false,
    buttonName: "Show"
  }
  switchNameHandler = (newName, newAge) => {
    this.setState({
      persons: [
        { name: 'Srinivasan', age: 37 },
        { name: 'Priya CG', age: 36 },
        { name: newName, age: newAge }
      ],
      showPersons: true
    })
  }

  changedNameHandler = (event, id) => {
    const p2 = this.state.persons.findIndex((p) => p.id === id )//getting the index of the input changed
    const person = { ...this.state.persons[p2] }///taking the copy of the object for which there was a change
    person.name = event.target.value//setting the object name with the user input
    //console.log(person.name)
    const persons = [...this.state.persons]//taking a copy of the array under use (spread operator)
    persons[p2] = person///using array de-structuring change the value

    this.setState({
      persons: persons,
      showPersons: true
    })
  }

  toggleUsers = () => {
    const isdone = this.state.showPersons
    const bName = this.state.buttonName
    this.setState({
      showPersons: !isdone,
      buttonName: bName === 'Show' ? 'Hide' : 'Show'
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons changed={this.changedNameHandler} persons={this.state.persons} />
        </div>
      )

    }
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          sPersons={this.state.showPersons}
          //clicked={() => this.toggleUsers(this.state.buttonName)}
          clicked={this.toggleUsers}
          bName={this.state.buttonName}
          title={this.props.appTitle}
        />
        <Clock />
        {persons}

      </div>
      // </StyleRoot>S
    );

  }

}

export default App;
