import React, { Component } from 'react';

// extends keyword allows us to inherit Component from React
export class ClassGreetings extends Component {
    // now we have a render() method in our class based component
    
    // going to talk about this more in depth tomorrow
    state = {
        name: 'James'
    }
    
    
    changeName = () => {
        this.setState({name: 'Alex'})
    }
  render() {
    return (
      <div>
        <h1>This is a Class Based Component {this.state.name} </h1>
        <button onClick={this.changeName }>Change the Name</button>
      </div>
    )
  }
}

export default ClassGreetings;
