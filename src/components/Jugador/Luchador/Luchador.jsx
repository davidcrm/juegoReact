import React from 'react'
import "./luchador.css"
import Habilidades from '../Habilidades/Habilidades';
import Vidas from '../Vidas/Vidas';

// Componente luchador que recibe por parametro un objeto luchador, el valor aleatorio y las habilidades que tiene
function Luchador({ jugador, valor, habilidades, info = true }){
  return(
    // Comprueba si el parámetro info es true y modifica el estilo del div
    <div style={{ marginBottom: info ? '' : '20px' }}>
      <div className='dado-container'>
        {// Imagen del dado y texto con el valor aleatorio 
        }
        {info && (
          <>
            <img src="/dado.png" className='dado' />
            <p className='numero-aleatorio'>{valor}</p>
          </>  
        )}
      </div>
      {// Imagen y nombre del luchador
      }
    <div className='luchador'>
      <h3 className='texto'>{jugador.nombre}</h3>
      <img src={jugador.rutaImagen} className='imagenDiv'/>
    </div>
    {// Llamada a componentes Vidas y
    }
    {info && (
      <>
        <Vidas vidas={jugador.vidas} />
        <Habilidades habilidades={habilidades} />
      </>
    )}
    </div>
  )
}

export default Luchador;