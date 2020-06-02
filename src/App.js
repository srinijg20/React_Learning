import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';
import Clock from './Clock/Clock';

const StyledButton = styled.button`
  background-color: ${(props)=>props.alt ? 'red' : 'green'};
  color: white;
  font: verdana;
  padding: 8px;
  &:hover {
    background-color: ${props=>props.alt ? 'lightgreen' : 'salmon'}
  }
`
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
    const p2 = this.state.persons.findIndex((p) => { return p.id === id })
    const person = { ...this.state.persons[p2] }
    person.name = event.target.value
    //console.log(person.name)
    const persons = [...this.state.persons]
    persons[p2] = person

    this.setState({
      persons: persons,
      showPersons: true
    })
  }

  toggleUsers = (newName) => {
    const isdone = this.state.showPersons
    const bName = this.state.buttonName
    // this.setState({showPersons : !isdone})
    this.setState({
      showPersons: !isdone,
      buttonName: bName === 'Show' ? 'Hide' : 'Show'
    })
  }
  // state = {
  //   name : 'Srini'
  // }
  // nameChangeHandler = (event) =>{
  //   this.setState({
  //     name : event.target.value
  //   })

  // }
  render() {
    // const cssStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'verdana',
    //   padding: '8px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen'
    //   }
    // }
    let persons = null;
    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              change={(event) => this.changedNameHandler(event, person.id)}

            ></Person>
          }
          )}

        </div>
      )
      // cssStyle.backgroundColor = 'red'
      // cssStyle[':hover'] = {
      //   backgroundColor: 'lightblue'
      // }
    }
    return (
     // <StyleRoot>
        <div className="App">
          <h1 className="App-title">Hi! Welcome to React</h1>
          <StyledButton alt={this.state.showPersons} onClick={this.toggleUsers}>{this.state.buttonName}</StyledButton>
          <Clock />
          {persons}

        </div>
       // </StyleRoot>
    );

  }
      
}

  export default App;
