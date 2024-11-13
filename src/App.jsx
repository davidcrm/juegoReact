import './App.css'
import Luchador from './components/Jugador/Luchador/Luchador'
import Encabezado from './components/Elementos/Encabezado/Encabezado'
import Boton from './components/Elementos/Boton/Boton'
import { useState } from 'react'

const modalidades = ["destreza", "fuerza", "suerte"]

function App() {
  // Establecer el estado inicial del juego y su estado
  const [juego, setJuego] = useState({
    jugador1: {
      nombre: "Gladiador Furioso",
      rutaImagen: "/luchador1.png",
      vidas: 3,
      habilidades: {
        destreza: 110,
        fuerza: 100,
        suerte: 90,
      },
      valor: 0,
    },
    jugador2: {
      nombre: "Gladiador Mago",
      rutaImagen: "/luchador2.png",
      vidas: 3,
      habilidades: {
        destreza: 100,
        fuerza: 90,
        suerte: 110
      },
      valor: 0,
    },
    modalidad: ''
  })
  // Variable para controlar que el juego ha terminado cuando alguno de los jugadores se queda sin vidas
  const finDeJuego = juego.jugador1.vidas === 0 || juego.jugador2.vidas === 0;
  
  // Función flecha para comenzar el juego eligiendo una modalidad
  const Comienzo = () => {
    const numero = Math.floor(Math.random() * modalidades.length)

    setJuego(juego => ({
      ...juego,
      modalidad: modalidades[numero],
    }))
  }
  // Función flecha para cada ronda
  const Resolucion = () => {
    // constantes para el valor aleatorio de los jugadores
    const valorJugador1 = Math.floor(Math.random() * 101)
    const valorJugador2 = Math.floor(Math.random() * 101)
    // constante para la modalidad actual del juego
    const modalidad = juego.modalidad
    // Suma el valor aleatorio a la habilidad correspondiente de cada jugador
    const sumaJugador1 = juego.jugador1.habilidades[modalidad] + valorJugador1
    const sumaJugador2 = juego.jugador2.habilidades[modalidad] + valorJugador2
    // variables para actualizar las vidas
    let vidasActualizadas1 = juego.jugador1.vidas
    let vidasactualizadas2 = juego.jugador2.vidas
    // Resta las vidas según el resultado de la suma obtenida antes
    if (sumaJugador1 > sumaJugador2){
        vidasactualizadas2 -= 1
    }
    if ( sumaJugador1 < sumaJugador2){
      vidasActualizadas1 -= 1
    }
    // Actualiza el estado del juego con los valores de cada ronda
    setJuego(prevJuego => {
      const nuevoJuego = {
        ...prevJuego,
        jugador1: {
          ...prevJuego.jugador1,
          valor: valorJugador1,
          habilidades: {
            ...prevJuego.jugador1.habilidades,
            [modalidad]: prevJuego.jugador1.habilidades[modalidad] + valorJugador1
          },
          vidas: vidasActualizadas1
        },
        jugador2: {
          ...prevJuego.jugador2,
          valor: valorJugador2,
          habilidades: {
            ...prevJuego.jugador2.habilidades,
            [modalidad]: prevJuego.jugador2.habilidades[modalidad] + valorJugador2
          },
          vidas: vidasactualizadas2
        }
      };
      return nuevoJuego;
    });
  }
  // Establece el estado del juego predefinido
  const NuevaPartida = () => {
    setJuego({
      jugador1: {
      nombre: "Luchador 1",
      rutaImagen: "/luchador1.png",
      vidas: 3,
      habilidades: {
        destreza: 110,
        fuerza: 100,
        suerte: 90,
      },
      valor: 0,
    },
    jugador2: {
      nombre: "Luchador 2",
      rutaImagen: "/luchador2.png",
      vidas: 3,
      habilidades: {
        destreza: 100,
        fuerza: 90,
        suerte:110
      },
      valor: 0,
    },
    modalidad: ''
  })
}
  // Componente devuelto con los oomponentes creados y sus valores
  return (
    <>
      <div>
        <Encabezado 
          modalidad={juego.modalidad}
          // comprueba que findeJuego es true, y si el jugador 1 tiene vidas, muestra luchador 1 como ganador, si no muestra el jugador dos 
          // y si finDeJuego es false (No puede serlo salvo un error), devuelve null
          ganador={finDeJuego ? juego.jugador1.vidas > 0 ? 'Luchador 1' : 'Luchador 2' : null}
        />
        <div className="container">
          {// Comprueba que el jugador1 tiene vidas y muestra el componente completo
          }
          {juego.jugador1.vidas > 0 && (
            <div>
              <Luchador 
                jugador={juego.jugador1} 
                valor={juego.jugador1.valor} 
                habilidades={juego.jugador1.habilidades}
                info={!finDeJuego}
              /> 
            </div>
          )}
          {// Lo mismo con el jugador 2
          }
          {juego.jugador2.vidas > 0 && (
            <div>
              <Luchador 
                jugador={juego.jugador2} 
                valor={juego.jugador2.valor} 
                habilidades={juego.jugador2.habilidades} 
                info={!finDeJuego}
              />
            </div>
          )}
        </div>
        {// Botones
        }
        <div className="container-buttons">
          {
          finDeJuego ? (
            <>
            <Boton onClick={NuevaPartida} texto="NUEVA PARTIDA" color="yellow" />
            </>):
            (
            <>
            <Boton onClick={Comienzo} texto="COMENZAR" color="cyan" />
            <Boton onClick={Resolucion} texto="RESOLUCIÓN" color="magenta" />
            </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
