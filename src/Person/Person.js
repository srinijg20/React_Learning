import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
//import  './Person.css'

const DivElement=styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px){
        width : 450px
    }
`;

const person = props => {
    // const style={
    //     '@media (min-width: 500px)':{
    //         width : '450px'
    //     }
    // }
    return (<DivElement >
    <p onClick = {props.click}>My Name is {props.name} and i am {props.age} years old</p>
    <p>{props.children}</p>
    <input type= 'text' onChange = {props.change} value={props.name}></input>
    </DivElement>)
}

export default person;