import React from 'react';
import './App.css';
import Block from './Block';

class App extends React.Component {
  state = {
    user: 'roberto'
  }

  changeUser(newUser) {
    this.setState({user: newUser})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Block usuarioActual={this.state.user} />
          <button onClick={() => this.changeUser("Celso")}>cambiar estado</button>
        </header>
      </div>
    );
  }
}

export default App;
