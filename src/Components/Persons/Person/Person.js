import React, {Fragment} from 'react'
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css'
//import Auxiliary from '../../HOC/Auxiliary';


const person = props => {
    return (
            //<div className={classes.Person}>
               // <Auxiliary className ={classes.Person}>
                <Fragment>
                <div className={classes.Person}>
                <p onClick={props.click}>My Name is {props.name} and i am {props.age} years old</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.change} value={props.name} />
                </div>
                </Fragment>
                //</Auxiliary>
           // </div>
            )
}

export default person
