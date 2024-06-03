import React, { Component } from 'react';
import './App.css';
import Lecturas from './Lecturas';
import Navbar from './Navbar';
import Contenido from './Contenido';
import LecturaDetalle from './LecturaDetalle';
import { Routes, Route } from 'react-router-dom';

const fabulas = [{
  title: 'La Paloma y la Hormiga',
  bodyText: `
  Una hormiga bebía agua en un río, con tan mala suerte que cayó al agua. Pasaba por ahí una paloma que, 
  al oír sus gritos de auxilio, corrió a salvar a la pequeña hormiga.
  —Gracias, amiga paloma —dijo la hormiga muy agradecida—. Si algún día estás en peligro, yo te ayudaré.
Varias semanas después, un cazador vio a la paloma sobre una rama. Estaba a punto de disparar su escopeta cuando, de pronto, la hormiga se metió por debajo del pantalón y le mordió la pierna. Y así pudo la paloma escapar, sana y salva.
`,
  img: '/images/paloma_hormiga.jpg',
  questions: [
    {
      header: '¿Qué evento lleva a la paloma a estar en peligro?',
      options: [
        { value: 'Le iban a pegar', correct: false },
        { value: 'Un cazador estaba a punto de dispararle con la escopeta', correct: true },
        { value: 'Se iba a ahogar la paloma', correct: false }
      ]
    },
    {
      header: '¿Cómo logra la hormiga salvar a la paloma? ',
      options: [
        { value: 'Pegando al cazador', correct: false },
        { value: 'Llamando a la policía ', correct: false },
        { value: 'Mordiéndole la pierna al cazador', correct: true }
      ]
    },
    {
      header: '¿Qué promesa hacen la hormiga y la paloma al inicio de la historia? ',
      options: [
        { value: 'Promete darle mucha comida', correct: false },
        { value: 'Ayudar a la paloma si algún día está en peligro', correct: true },
        { value: 'Dándole mucho dinero ', correct: false }
      ]
    },
    {
      header: '¿Por qué la paloma decide salvar a la hormiga cuando cae al agua?',
      options: [
        { value: 'Al escuchar sus gritos de auxilio', correct: true },
        { value: 'Ayudar a la paloma si algún día está en peligro', correct: false },
      ]
    },
  ]
},
{ 
  title: 'El León y el Ratón', 
  bodyText: `Érase una vez un ratón que caminaba, sin saberlo, sobre el lomo de un león. De pronto, una garra atrapó al ratón, con la intención de comérselo.
  —No me coma, por favor. Le prometo que si alguna vez está en apuros, yo lo ayudaré.
  —¡Ja, ja, ja! ¿Cómo podrá ayudarme alguien tan pequeño?
  Pero el león lo dejó marchar por esta vez. Días más tarde, el ratón escuchó unos rugidos cerca de su madriguera. Era el león, que había quedado atrapado en una gran red. Entonces el ratón comenzó a roer la red, hasta hacer un agujero del tamaño del león. Y desde entonces, el pequeño ratón y el enorme león fueron amigos inseparables.
   Moraleja: Hasta los más grandes necesitan de los pequeños.
  `, 
  img: '/images/leon_raton.jpg',
  questions: [
    {
      header: '¿Qué sucede al principio de la historia?',
      options: [
        { value: 'Un gato estaba sobre el lomo de un león', correct: false },
        { value: 'El ratón camina sin saberlo sobre el lomo de un león', correct: true },
        { value: 'El ratón converso con el león', correct: false }
      ]
    },
    {
      header: '¿Qué hace el león cuando atrapa al ratón?',
      options: [
        { value: 'El león quiere que sean amigos', correct: false },
        { value: 'El león quiere jugar con el ratón', correct: false },
        { value: 'El león planea comerse al ratón', correct: true }
      ]
    },
    {
      header: '¿Qué promete el ratón al león para salvar su vida?',
      options: [
        { value: 'Promete ayudar al león si alguna vez está en apuros', correct: true },
        { value: 'Promete que van a salir a jugar', correct: false },
        { value: 'Promete dejarlo ahí sin ayuda al león', correct: false }
      ]
    },
    {
      header: '¿Cómo reacciona el león ante la promesa del ratón?',
      options: [
        { value: 'Se burla del ratón porque es pequeño', correct: true },
        { value: 'Ríen juntos por su promesa', correct: false },
        { value: 'Bailan hasta el amanecer', correct: false },
      ]
    },
  ]
},
{ title: 'La Liebre y la Tortuga', 
bodyText: `
Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga que caminaba muy despacio. La liebre se burló de su lentitud.
—Hagamos una carrera y veamos quién gana —propuso la tortuga.
Al empezar la carrera, la liebre salió disparada, mientras que la tortuga avanzó lentamente. Al ver que sacaba una gran ventaja a la tortuga, la liebre se paró en un árbol a descansar. La tortuga siguió avanzando, poco a poco y sin detenerse. 
Cuando la liebre despertó, vio angustiada que la tortuga estaba a punto de llegar a la meta. La liebre corrió y corrió, pero fue demasiado tarde. La tortuga cruzó la meta, agotada pero feliz. 
Moraleja: De poco vale el talento sin esfuerzo.
`, 
img: '/images/liebre_tortuga.jpg',
questions: [
  {
    header: '¿Qué habilidad presumía tener la liebre?',
    options: [
      { value: 'Presumía ser muy veloz', correct: true },
      { value: 'Presumía que era cantante', correct: false },
      { value: 'Presumía ser bailarín', correct: false }
    ]
  },
  {
    header: '¿Cómo reaccionó la liebre ante la propuesta de la tortuga de hacer una carrera?',
    options: [
      { value: 'No acepto la propuesta y se fue', correct: false },
      { value: 'Acepto la propuesta y se burló de la lentitud de la tortuga', correct: true },
      { value: 'No acepto y se puso a llorar ', correct: false }
    ]
  },
  {
    header: '¿Qué estrategia empleó la liebre al inicio de la carrera? ',
    options: [
      { value: 'Se fue en una bicicleta', correct: false },
      { value: 'Salió disparada y saco gran ventaja sobre la tortuga', correct: true },
      { value: 'Fue caminando y trotando', correct: false }
    ]
  },
  {
    header: '¿Por qué se detuvo la liebre durante la carrera?',
    options: [
      { value: 'Se detuvo en un árbol para descansar porque llevaba mucha ventaja', correct: true },
      { value: 'Porque le dolía mucho sus pies', correct: false },
      { value: 'Para comer con su amigo', correct: false },
    ]
  },
]
}
]

class App extends Component {
  state = {
    lecturas: [
      { name: 'Cuentos', img: '/images/book.jpg', contenido: [{ title: 'Cuento1', bodyText: 'Contenido del Cuento1', img: '/images/book.jpg' }] },
      { name: 'Fabulas', img: '/images/book.jpg', contenido: fabulas },
      { name: 'Lecturas tradicionales', img: '/images/book.jpg', contenido: [{ title: 'LectTrad1', bodyText: 'Contenido de LectTrad1', img: '/images/book.jpg' }] }
    ],
    categoriaSeleccionada: null,
    lecturaSeleccionada: null,
    respuestasSeleccionadas: {} // Inicializado como objeto vacío
  }

  verContenido = (categoria) => {
    this.setState({ categoriaSeleccionada: categoria, lecturaSeleccionada: null });
  }

  verLecturaDetalle = (lectura) => {
    this.setState({ lecturaSeleccionada: lectura });
  }

  manejarOpcionSeleccionada = (preguntaIndex, opcionIndex) => {
    this.setState(prevState => ({
      respuestasSeleccionadas: {
        ...prevState.respuestasSeleccionadas,
        [preguntaIndex]: opcionIndex
      }
    }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={
            <Lecturas
              verContenido={this.verContenido}
              listaLecturas={this.state.lecturas}
            />
          } />
          <Route path='/contenido' element={
            <Contenido
              nombre={this.state.categoriaSeleccionada?.name}
              contenido={this.state.categoriaSeleccionada?.contenido}
              verLecturaDetalle={this.verLecturaDetalle}
            />
          } />
          <Route path='/lectura-detalle' element={
            <LecturaDetalle
              lectura={this.state.lecturaSeleccionada}
              respuestasSeleccionadas={this.state.respuestasSeleccionadas}
              manejarOpcionSeleccionada={this.manejarOpcionSeleccionada}
            />
          } />
        </Routes>
      </div>
    )
  }
}

export default App;
