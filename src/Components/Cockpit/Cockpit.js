import React from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
  const btnClass = [classes.Button]
  console.log(btnClass);
  
  if (props.sPersons) {
    btnClass.push(classes.Red)
  }

  return (
    <div>
      <h1 className='App-title'>{props.title}</h1>
      <button className={btnClass.join(' ')} onClick={props.clicked}>{props.bName}</button>
    </div>
  )
}

export default Cockpit
