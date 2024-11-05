import './App.css'
import Luchador from './components/Jugador/Luchador/Luchador'
import Encabezado from './components/Elementos/Encabezado'
import ComenzarBoton from './components/Buttons/ComenzarBoton'
import ResolucionBoton from './components/Buttons/ResolucionBoton'
import NuevaPartidaBoton from './components/Buttons/NuevaPartidaBoton'
import { useState } from 'react'
import Vidas from './components/Jugador/Vidas/Vidas'
import Habilidades from './components/Jugador/Habilidades/Habilidades'

function App() {
  const [modalidad, setModalidad] = useState('')
{/*
  const [juego, setJuego] = useState({
    juegador1: null
  })

  juego.juegador1

  setJuego({
    ...juego,
    juegador1:
  })
*/}
  const manejarComienzo = () => {
    const modalidades = ["Destreza", "Fuerza", "Suerte"]
    const numero = Math.floor(Math.random() * 3);
    setModalidad(modalidades[numero])
    
  }

  return (
    <>
    <div>
    <Encabezado
    modalidad={modalidad}
    />
      <div className='container'>
          <div>
          <Luchador
            nombre="Peleador 1"
            rutaImagen="/luchador1.png"
          />
          <Vidas
            destreza= {125}
            fuerza = {100}
            suerte = {90}
          />
          <Habilidades
          />
        </div>
        <div>
          <Luchador
            nombre="Luchador 2"
            rutaImagen="/luchador2.png"
          />
          <Vidas/>
          <Habilidades
            destreza={100}
            fuerza={150}
            suerte={124}
          />
        </div>
        </div>
        <div className='container-buttons'>
          <ComenzarBoton
          onComenzar={manejarComienzo}
          />
          <ResolucionBoton/>
          <NuevaPartidaBoton/>
        </div>
      </div>
    </>
  )
}

export default App
