import React, { Component } from 'react';
import Preguntas from './Preguntas';

class LecturaDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respuestasSeleccionadas: new Array(props.lectura.questions.length).fill(null),
      mostrarRespuestas: false,
      puntaje: 0,
    };
  }

  manejarOpcionSeleccionada = (preguntaIndex, opcionIndex) => {
    const { respuestasSeleccionadas } = this.state;
    respuestasSeleccionadas[preguntaIndex] = opcionIndex;
    this.setState({ respuestasSeleccionadas });
  };

  validarRespuestas = () => {
    const { lectura } = this.props;
    const { respuestasSeleccionadas } = this.state;
    let puntaje = 0;
    lectura.questions.forEach((pregunta, index) => {
      if (pregunta.options[respuestasSeleccionadas[index]].correct) {
        puntaje++;
      }
    });
    this.setState({ mostrarRespuestas: true, puntaje });
  };

  render() {
    const { lectura } = this.props;
    const { respuestasSeleccionadas, mostrarRespuestas, puntaje } = this.state;

    if (!lectura) {
      return <p>Selecciona una lectura para ver su contenido.</p>;
    }

    return (
      <div>
        <div className="center-align">
          <h2>{lectura.title}</h2>
          {lectura.img && <img src={lectura.img} alt={lectura.title} className="responsive-img" />}
        </div>
        <div className="container">
          <p style={{ textAlign: 'justify' }}>{lectura.bodyText}</p>
          {lectura.questions && (
            <Preguntas
              preguntas={lectura.questions}
              respuestasSeleccionadas={respuestasSeleccionadas}
              manejarOpcionSeleccionada={this.manejarOpcionSeleccionada}
              disabled={mostrarRespuestas}
            />
          )}
          {mostrarRespuestas && (
            <div>
              <h3>Respuestas Correctas:</h3>
              <ul>
                {lectura.questions.map((pregunta, index) => (
                  <li key={index}>
                    <strong>{pregunta.header}</strong>: {pregunta.options.find(opcion => opcion.correct).value}
                  </li>
                ))}
              </ul>
              <p>Puntaje: {puntaje} / {lectura.questions.length}</p>
              <p>Equivocaciones: {lectura.questions.length - puntaje}</p>
            </div>
          )}
          {!mostrarRespuestas && (
            <div className="center-align">
             <button className=" findbtn waves-effect waves-light btn-large btn-primary" onClick={this.validarRespuestas}>Enviar respuestas</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LecturaDetalle;
