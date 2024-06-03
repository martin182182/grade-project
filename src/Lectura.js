import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Lectura extends Component {
  handleVerContenido = () => {
    this.props.verContenido(this.props.lectura);
  }

  render() {
    const { lectura } = this.props;
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt={lectura.name} src={lectura.img} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{lectura.name}</span>
            <p><Link to="/contenido" onClick={this.handleVerContenido}>Explorar contenido</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectura;
