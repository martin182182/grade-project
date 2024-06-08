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


const cuentos = [{
  title: 'El Patito Feo',
  bodyText: `
    En una granja, nacen varios polluelos de Mamá Pata, pero uno de ellos, el más grande, tarda en salir del cascarón. 
    Cuando finalmente lo hace, resulta ser diferente a los demás: grande, gris y con un sonido peculiar.
    Los demás animales de la granja se burlan de él, haciéndolo sentir triste y rechazado. 
    Por ello, el patito feo decide escapar y buscar un lugar donde pertenecer. Durante su viaje, encuentra refugio temporal 
    con diferentes personas y animales, pero nunca se siente completamente feliz.
    Finalmente, tras pasar por diversas experiencias, el patito feo descubre que en realidad es un hermoso cisne. 
    Al ver su reflejo en el agua, comprende su verdadera identidad y encuentra su lugar junto a una familia de cisnes, 
    donde es aceptado y querido.
  `,
  img: '/images/patito_feo.jpg',
  questions: [
    {
      header: '¿Por qué los demás animales de la granja se burlan del patito feo?',
      options: [
        { value: 'Porque era diferente de ellos y con un sonido diferente', correct: true },
        { value: 'Porque era muy colorido', correct: false },
        { value: 'Porque era muy bonito', correct: false }
      ]
    },
    {
      header: '¿Qué decide hacer el patito feo después de ser objeto de burlas?',
      options: [
        { value: 'Decide quedarse y vivir ahí', correct: false },
        { value: 'Decide escapar y buscar un lugar donde pertenecer', correct: true },
        { value: 'Decide nadar sin rumbo', correct: false }
      ]
    },
    {
      header: '¿Qué experiencias tiene el patito feo durante su viaje?',
      options: [
        { value: 'Encuentra un refugio temporal con diferentes animales y no es feliz', correct: true },
        { value: 'Se encuentra con un amigo', correct: false },
        { value: 'Conoce a muchas personas', correct: false }
      ]
    },
    {
      header: '¿Qué descubre finalmente el patito feo sobre su verdadera identidad?',
      options: [
        { value: 'Que si era un patito', correct: false },
        { value: 'Que era un hermoso cisne', correct: true },
        { value: 'Que no sabía quién era', correct: false }
      ]
    },
  ]
},
{
  title: 'Hansel y Gretel',
  bodyText: `
    Los hermanos que son abandonados en el bosque por sus padres debido a la falta de comida. Hansel, el hermano mayor, 
    deja un rastro de migas de pan para encontrar el camino de regreso a casa, pero las migas son comidas por los pájaros. 
    Los hermanos se encuentran con una casa hecha de dulces y son capturados por una bruja que vive allí. Finalmente, 
    logran escapar y regresar a casa con tesoros que habían encontrado en la casa de la bruja.
  `,
  img: '/images/hansel_gretel.jpg',
  questions: [
    {
      header: '¿Por qué fueron abandonados Hansel y Gretel en el bosque?',
      options: [
        { value: 'Porque se perdieron', correct: false },
        { value: 'Porque estaban jugando', correct: false },
        { value: 'Porque sus padres no tenían suficiente comida', correct: true }
      ]
    },
    {
      header: '¿Qué dejó Hansel para encontrar el camino de regreso a casa?',
      options: [
        { value: 'Piedras', correct: false },
        { value: 'Migas de pan', correct: true },
        { value: 'Huellas de zapatos', correct: false }
      ]
    },
    {
      header: '¿De qué estaba hecha la casa que encontraron Hansel y Gretel en el bosque?',
      options: [
        { value: 'De madera', correct: false },
        { value: 'De piedra', correct: false },
        { value: 'De dulces', correct: true }
      ]
    },
    {
      header: '¿Quién vivía en la casa que encontraron Hansel y Gretel?',
      options: [
        { value: 'Un ogro', correct: false },
        { value: 'Un gigante', correct: false },
        { value: 'Una bruja', correct: true },
        { value: 'Un hada', correct: false }
      ]
    },
  ]
}
]

const leyendas = [{
  title: 'El Diablo Huma',
  bodyText: `
    El Diablo Huma, también conocido como Aya Huma, es un ser que, según la tradición, apareció en el pueblo indígena y mestizo como un rechazo a la imposición católica. 
    Durante la Fiesta del Sol o Inti Raymi, durante el mes de junio, aparece como parte del conjunto de danzantes en las plazas principales y atrios de las iglesias. 
    La palabra quichua “huma” significa “cabeza”, por lo que Diablo Huma, quiere decir “Cabeza de diablo”.
  `,
  img: '/images/diablo_huma.jpg',
  questions: [
    {
      header: '¿Cómo se conoce también al Diablo Huma?',
      options: [
        { value: 'Aya Huma', correct: false },
        { value: 'Cabeza de diablo', correct: false },
        { value: 'Ambas son correctas', correct: true },
        { value: 'Ninguna es correcta', correct: false }
      ]
    },
    {
      header: '¿Cuándo aparece el Diablo Huma según la tradición?',
      options: [
        { value: 'Durante la Fiesta del Sol o Inti Raymi', correct: true },
        { value: 'Durante la Fiesta de la Luna', correct: false },
        { value: 'Durante la Fiesta de las Estrellas', correct: false },
        { value: 'Durante la Fiesta de los Vientos', correct: false }
      ]
    },
    {
      header: '¿Qué significa la palabra quichua “huma”?',
      options: [
        { value: 'Diablo', correct: false },
        { value: 'Cabeza', correct: true },
        { value: 'Danza', correct: false },
        { value: 'Fiesta', correct: false }
      ]
    },
    {
      header: '¿Por qué apareció el Diablo Huma según la tradición?',
      options: [
        { value: 'Como un rechazo a la imposición católica', correct: true },
        { value: 'Como un rechazo a la imposición indígena', correct: false },
        { value: 'Como un rechazo a la imposición mestiza', correct: false }
      ]
    },
  ]
},
{
  title: 'La Leyenda de Cantuña',
  bodyText: `
    La leyenda de Cantuña es una de las más conocidas en Ecuador. Según la leyenda, Cantuña era un indígena famoso por su habilidad en la construcción. 
    Los padres de la Iglesia de San Francisco de Quito le encargaron construir el atrio de la iglesia en un plazo de seis meses. Si no terminaba la construcción en ese periodo, no le pagarían ni un centavo. 
    Cantuña comenzó la labor con mucho entusiasmo, pero era una tarea bastante difícil. Al ver que el plazo se acercaba a su fin, le invade la preocupación y desesperación. 
    Su gran sufrimiento llega a oídos del Diablo, quien decide presentarse ante él para ofrecerle su ayuda construyendo el atrio antes del amanecer, solo que la única condición sería que a cambio le entregaría su alma como recompensa. 
    Cantuña acepta, pero le impone la regla de que deberá concluir las obras lo más rápido posible. Lucifer accede y con la ayuda de sus diablillos avanza rápidamente, colocando cada piedra en su lugar. 
    Fueron tan acelerados los trabajos que el atrio estuvo listo a la media noche. Entonces el Diablo se prepara para recibir su paga; ahí es cuando Cantuña lo detiene y le dice que había incumplido con el trato porque no colocó hasta la última piedra de la construcción.
  `,
  img: '/images/cantuna.jpg',
  questions: [
    {
      header: '¿Quién era Cantuña?',
      options: [
        { value: 'Un sacerdote', correct: false },
        { value: 'Un indígena famoso por su habilidad en la construcción', correct: true },
        { value: 'Un diablo', correct: false },
        { value: 'Un rey', correct: false }
      ]
    },
    {
      header: '¿Qué le encargaron construir a Cantuña?',
      options: [
        { value: 'Una casa', correct: false },
        { value: 'Una escuela', correct: false },
        { value: 'El atrio de la Iglesia de San Francisco de Quito', correct: true },
        { value: 'Un puente', correct: false }
      ]
    },
    {
      header: '¿Qué ofreció el Diablo a Cantuña a cambio de su ayuda?',
      options: [
        { value: 'Oro', correct: false },
        { value: 'Fama', correct: false },
        { value: 'Su alma', correct: true },
        { value: 'Poder', correct: false }
      ]
    },
    {
      header: '¿Cómo logró Cantuña engañar al Diablo?',
      options: [
        { value: 'Escondió una de las piedras de la construcción', correct: true },
        { value: 'No aceptó su ayuda', correct: false },
        { value: 'Le dio una piedra falsa', correct: false }
      ]
    },
  ]
}
]



class App extends Component {
  state = {
    lecturas: [
      { name: 'Cuentos', img: '/images/book.jpg', contenido: cuentos },
      { name: 'Fabulas', img: '/images/book.jpg', contenido: fabulas },
      { name: 'Leyendas', img: '/images/book.jpg', contenido: leyendas }
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
