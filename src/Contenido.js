import { Component } from "react";
import { Link } from 'react-router-dom';

class Contenido extends Component {
  handleVerLecturaDetalle = (lectura) => {
    this.props.verLecturaDetalle(lectura);
  }

  render() {
    const { nombre, contenido } = this.props;

    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>{nombre}</h4></li>
        {contenido.map((lectura, index) => 
          <li key={index} className="collection-item">
            <Link to="/lectura-detalle" onClick={() => this.handleVerLecturaDetalle(lectura)}>
              {lectura.title}
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default Contenido;
