import React, { useState }from 'react';
import '../styles.css';
import styles from './Greetings.module.css';
import Farewell from './Farewell';

// these are now the standard/modern approach
// before the introduction of hooks
// functional based components weren't able to manage state of variables

function Greetings(props) {
    // declare our hooks at the top of your functional component
    const [ nation, setNation ] = useState(props.initialNation); // using the props aka properties passed into this component as the initial state
    const [allNations, setAllNations] = useState([{nation: 'Fire', fighter: 'Zuko'}, {nation: 'Water', fighter: 'Katara'}, {nation: 'Air', fighter: 'Aang'}, {nation: 'Earth', fighter: 'Toph'}]); //useState can manage any type of data
    const [name, setName ] = useState(props.initialName)
    // styling objects don't follow regular CSS syntaax but rather JS object syntax
    const greetingStyles = {
        fontFamily: 'Arial', 
        color: 'blue', 
        fontWeight: 500
    }
    
    // can build custon functions inside your component
    const changeNation = () => {
        setNation('Fire')
    }
    
  return (
    <div>
         {/* Two different ways to do inline CSS styling */}
    <h1>Here are all the Nations: </h1>
    <ul>
        {allNations.map((nation, index) => (
            <li key={index}>Nation: {nation.nation},   Fighter: {nation.fighter}</li>
        ))}
    </ul>
      <h1 style={greetingStyles}>This is a functional based Component and I reign from the {nation} nation and my name is {name}</h1>
        {/* Utilizing a componenet within another component */}
        {/* if you only have 1 conditional utilize the && if there is an else or if/elif/else use the ternary */}
        { (name === 'Sokka') && <Farewell initialName={name} />  } 
        { (nation === 'Fire') ? <p>I am Zuko from the Fire Nation!!!</p> : <p>I am a badass Earth Bender!!!</p>}
      
      {/* two different ways to edit state utilizing events */}
      <button onClick={ ()=> setName('Sokka') }>Change Name</button>
      <button onClick={changeNation}>Change Nation</button>
      <h1 style={{color: 'red', fontWeight: 1000}}>This is more text</h1>
      <p className='greeting'>This uses CSS stylesheet styling in React</p>
      {/* Usually the preferred method of doing adding CSS is through the module */}
      <p className={styles.farewell}>This uses CSS Modules to style in React</p>
    </div>
  )
}

// having a default just in case no data get's passed to your component
Greetings.defaultProps = {
    initialName: 'Aang'
}

export default Greetings


