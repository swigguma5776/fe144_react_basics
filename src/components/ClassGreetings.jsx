import React, { Component } from 'react';

// extends keyword allows us to inherit Component from React
export class ClassGreetings extends Component {
    // now we have a render() method in our class based component
    
    // going to talk about this more in depth tomorrow
    constructor(props){
        super(props);
        this.state = {
            name: this.props.initialName,
            pet: this.props.initialPet
        }
        //Bind the method to the class instance
        this.changeName = this.changeName.bind(this);
        this.changePet = this.changePet.bind(this);
        // if we have a method that is the same name on a different component our interpretor won't get confused
    }
    
    
    
    changeName = () => {
        this.setState({name: 'Alex'})
    }
    
    changePet = () => {
        this.setState({pet: 'Henri'})
    }
    
    render() {
        return (
        <div>
            <h1>This is a Class Based Component {this.state.name} and my pet's name is {this.state.pet }</h1>
            <button onClick={ this.changeName }>Change the Name</button>
            <button onClick={ this.changePet }>Change the Pet</button>
        </div>
        )
    }
}

// good practice to setup default properties just in case data does not get passed
ClassGreetings.defaultProps = {
    initialName: 'Jose',
    initialPet: 'Lana'
}

export default ClassGreetings;
