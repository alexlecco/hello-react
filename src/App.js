import React, { Component } from 'react';
import './App.css';
import Block from './Block';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: 'Benja',
        age: 29
      }
    }
  }
  
  changeUser(newName) {
    let currentAge = this.state.user.age;
    this.setState({user: {name: newName, age: currentAge}})
  }
  
  grow() {
    let { name, age }  = this.state.user;
    this.setState({user: {name: name, age: age + 1}})
  }

  render() {
    let { user } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <Block user={user} />

          <button onClick={() => this.changeUser("Roberto")}>cambiar usuario</button>
          <button onClick={() => this.grow()}>sumar edad</button>
          
        </header>
      </div>
    );
  }
}

export default App;
