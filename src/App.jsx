import './App.css'
import Luchador from './components/Jugador/Luchador/Luchador'
import Encabezado from './components/Elementos/Encabezado'
import Boton from './components/Boton/Boton'
import { useState } from 'react'

const modalidades = ["destreza", "fuerza", "suerte"]


function App() {
  const [juego, setJuego] = useState({
    jugador1: {
      nombre: "Luchador 1",
      rutaImagen: "/luchador1.png",
      vidas: 3,
      habilidades: {
        destreza: 125,
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
        fuerza: 150,
        suerte: 124
      },
      valor: 0,
    },
    modalidad: ''
  })
  

  const Comienzo = () => {
    const numero = Math.floor(Math.random() * modalidades.length)

    setJuego(juego => ({
      ...juego,
      modalidad: modalidades[numero],
    }))
    
  }
  const Resolucion = () => {

    const valorJugador1 = Math.floor(Math.random() * 101)
    const valorJugador2 = Math.floor(Math.random() * 101)

    const modalidad = juego.modalidad

    const sumaJugador1 = juego.jugador1.habilidades[modalidad] + valorJugador1
    const sumaJugador2 = juego.jugador2.habilidades[modalidad] + valorJugador2

    let vidasActualizadas1 = juego.jugador1.vidas
    let vidasactualizadas2 = juego.jugador2.vidas


    if (sumaJugador1 > sumaJugador2){
        vidasactualizadas2 -= 1
    }
    if ( sumaJugador1 < sumaJugador2){
      vidasActualizadas1 -= 1
    }
    

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
  
  const NuevaPartida = () => {
    setJuego({
      jugador1: {
      nombre: "Luchador 1",
      rutaImagen: "/luchador1.png",
      vidas: 3,
      habilidades: {
        destreza: 125,
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
        fuerza: 150,
        suerte: 124
      },
      valor: 0,
    },
    modalidad: ''
  })
}

  return (
    <>
      <div>
        <Encabezado modalidad={juego.modalidad} />
        <div className="container">
          <div>
            <Luchador jugador={juego.jugador1} valor={juego.jugador1.valor} habilidades={juego.jugador1.habilidades}/> 
          </div>
          <div>
          <Luchador jugador={juego.jugador2} valor={juego.jugador2.valor} habilidades={juego.jugador2.habilidades} />
          </div>
        </div>
        <div className="container-buttons">
          <Boton onClick={Comienzo} texto="COMENZAR" color="cyan" />
          <Boton onClick={Resolucion} texto="RESOLUCIÓN" color="dodgerblue"/>
          <Boton onClick={NuevaPartida} texto="NUEVA PARTIDA" color="blue"/>
        </div>
      </div>
    </>
  )
}

export default App
