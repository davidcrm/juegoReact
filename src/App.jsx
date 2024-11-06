import './App.css';
import Luchador from './components/Jugador/Luchador/Luchador';
import Encabezado from './components/Elementos/Encabezado';
import Boton from './components/Boton/Boton';
import { useState } from 'react';
import Vidas from './components/Jugador/Vidas/Vidas';
import Habilidades from './components/Jugador/Habilidades/Habilidades';

function App() {
  const [juego, setJuego] = useState({
    jugador1: null,
    modalidad: ''
  });

  const Comienzo = () => {
    const modalidades = ["Destreza", "Fuerza", "Suerte"];
    const numero = Math.floor(Math.random() * modalidades.length);

    setJuego(juego => ({
      ...juego,
      modalidad: modalidades[numero]
    }));
  };

  return (
    <>
      <div>
        
        <Encabezado modalidad={juego.modalidad} />
        
        <div className="container">
          <div>
            <Luchador 
            nombre="Peleador 1" 
            rutaImagen="/luchador1.png" />
            <Vidas/>
            <Habilidades
              destreza={125}
              fuerza={100}
              suerte={90}
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

        <div className="container-buttons">
          <Boton onClick={Comienzo} texto="COMENZAR" />
        </div>
      </div>
    </>
  );
}

export default App;
