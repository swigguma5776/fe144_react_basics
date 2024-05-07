import React from 'react';
import '../styles.css';
import styles from './Greetings.module.css';

// these are now the standard/modern approach
// before the introduction of hooks
// functional based components weren't able to manage state of variables

function Greetings() {
    
    // styling objects don't follow regular CSS syntaax but rather JS object syntax
    const greetingStyles = {
        fontFamily: 'Arial', 
        color: 'blue', 
        fontWeight: 500
    }
  return (
    <div>
         {/* Two different ways to do inline CSS styling */}
      <h1 style={greetingStyles}>This is a functional based Component</h1>
      <h1 style={{color: 'red', fontWeight: 1000}}>This is more text</h1>
      <p className='greeting'>This uses CSS stylesheet styling in React</p>
      {/* Usually the preferred method of doing adding CSS is through the module */}
      <p className={styles.farewell}>This uses CSS Modules to style in React</p>
    </div>
  )
}

export default Greetings


