import React from 'react';

export default class Block extends React.Component {
  render() {
    return(
      <p>Hola {this.props.usuarioActual}</p>
    )
  }
}