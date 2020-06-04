import React ,{useEffect} from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
useEffect(() => {  
  return () => {
    alert('something changed')
  }
}, [props.persons])

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
