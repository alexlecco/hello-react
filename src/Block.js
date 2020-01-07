import React, { Component } from 'react';

class Block extends Component {
  constructor() {
    super();
    this.seContruyo();
  }

  componentWillMount() {
    this.seVaAmontar();
  }

  componentWillUnmount() {
    this.seDesmonto()
  }

  seContruyo() {
    console.log("se construyó")
  }

  seVaAmontar() {
    console.log("se va a montar");
  }

  seDesmonto() {
    console.log("se va a desmontó");
  }

  render() {
    console.log("se renderizó");
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