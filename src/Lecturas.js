import { Component } from 'react';
import Lectura from './Lectura';

class Lecturas extends Component {
  render() {
    const { listaLecturas, verContenido } = this.props;
    return (
      <div className="row valign-wrapper">
        {listaLecturas.map((lectura) => (
          <Lectura
            key={lectura.name}
            lectura={lectura}
            verContenido={verContenido}
          />
        ))}
      </div>
    );
  }
}

export default Lecturas;
