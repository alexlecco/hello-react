import React, { Component } from 'react';

class Block extends Component {
  render() {
    return(
      <div>
        <p>Hola {this.props.name}</p>
        <p>Edad: {this.props.age}</p>
      </div>
    )
  }
}

export default Block;