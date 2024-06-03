import React, { Component } from 'react';

class Preguntas extends Component {
  render() {
    const { preguntas, respuestasSeleccionadas, manejarOpcionSeleccionada } = this.props;

    return (
      <div className="container">
        {preguntas.map((pregunta, preguntaIndex) => (
          <div className="card" key={preguntaIndex}>
            <div className="card-content">
              <span className="card-title">{pregunta.header}</span>
              {pregunta.options.map((opcion, opcionIndex) => (
                <p key={opcionIndex}>
                  <label>
                    <input
                    className="filled-in checkbox-orange"
                      type="checkbox"
                      name={`pregunta-${preguntaIndex}`}
                      checked={respuestasSeleccionadas[preguntaIndex] === opcionIndex}
                      onChange={() => manejarOpcionSeleccionada(preguntaIndex, opcionIndex)}
                    />
                    <span>{opcion.value}</span>
                  </label>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Preguntas;
