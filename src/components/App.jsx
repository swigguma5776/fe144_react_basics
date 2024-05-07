import React from 'react';
import Greetings from './Greetings';
import ClassGreetings from './ClassGreetings';

// whenever a file contains a component we capilize that file name
function App() {

  // component must always contain a return which houses the html
  // this is known as XML data transfer, like JSON but html
  // this is why its called .jsx for our file extensions
  const myDogsName = 'Henri'
  const myElement = <p>My name is Alex and my Dog's name is {myDogsName}</p>
  
  return (
    <div>
      <h1>Howdy Y'all from the Yacht Rock crew</h1>
      {/* don't use this a lot unless it's another component */}
      {myElement} 
      <Greetings />
      <ClassGreetings />
    </div>
  )
}

// whenever we only have 1 component in a file we can call it the default component
// in the world of JS we need to export before we can import
export default App
