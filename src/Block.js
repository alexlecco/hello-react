import React, { Component } from 'react';

class Block extends Component {
  render() {
    let { name, age } = this.props.user;

    return(
      <div>
        <p>Hola {name}</p>
        <p>Edad: {age}</p>
      </div>
    )
  }
}

export default Block;