import React from 'react'
import "./luchador.css"
import Habilidades from '../Habilidades/Habilidades';
import Vidas from '../Vidas/Vidas';

function Luchador({ jugador, valor }){
  
  return(
    <div>
      <div className='dado-container'>
      <img src="/dado.png" className='dado' />
      <p className='numero-aleatorio'>{valor}</p>
      </div>
    <div className='luchador'>
      <h3 className='texto'>{jugador.nombre}</h3>
      <img src={jugador.rutaImagen} className='imagenDiv'/>
    </div>
    <Vidas vidas={jugador.vidas} />
    <Habilidades habilidades={jugador.habilidades} />
    </div>
  )
}

export default Luchador;