import React from 'react'
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css'

const person = props => {
    return (
            <div className={classes.Person}>
                <p onClick={props.click}>My Name is {props.name} and i am {props.age} years old</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.change} value={props.name} />
            </div>
            )
}

export default person
