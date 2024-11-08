import './App.css'
import Luchador from './components/Jugador/Luchador/Luchador'
import Encabezado from './components/Elementos/Encabezado'
import Boton from './components/Boton/Boton'
import { useState } from 'react'

const modalidades = ["Destreza", "Fuerza", "Suerte"]

function comparar(num1, num2){
  return num1 >num2
}

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
    modalidad: '',
  })
  

  const Comienzo = () => {
    const numero = Math.floor(Math.random() * modalidades.length)

    setJuego(juego => ({
      ...juego,
      modalidad: modalidades[numero],
    }))
    
  }
  const Resolucion = () => {

    juego.jugador1.valor = Math.floor(Math.random() * 100)
    juego.jugador2.valor = Math.floor(Math.random() * 100)

    juego.jugador1.habilidades[juego.modalidad] + jugador1.valor
    juego.jugador2.habilidades[juego.modalidad] + jugador2.valor
    
    setJuego(juego => ({
      ...juego
    }))

    /*if (jugador1.vidas === 0){
      setGanador(jugador2)
    }
    else{
      setGanador(jugador1)
    }*/


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
            <Luchador jugador={juego.jugador1} valor={juego.jugador1.valor}/> 
          </div>
          <div>
          <Luchador jugador={juego.jugador2} valor={juego.jugador2.valor} />
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
