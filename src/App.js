import React, { Component } from 'react';
import './App.css';
import Block from './Block';

class App extends Component {
  state = {
    user: {
      name: 'Benja',
      age: 29
    }
  }

  changeUser(newName) {
    let currentAge = this.state.user.age;
    this.setState({user: {name: newName, age: currentAge}})
  }

  grow() {
    let currentAge = this.state.user.age;
    let currentName = this.state.user.name;
    this.setState({user: {name: currentName,age: currentAge + 1}})
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
