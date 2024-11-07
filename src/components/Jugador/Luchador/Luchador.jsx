import React from 'react'
import "./luchador.css"

function Luchador({nombre, rutaImagen}){
  

  return(
    <div>
      <div className='dado-container'>
      <img src="/dado.png" className='dado' />
      <p className='numero-aleatorio'>000</p>
      </div>
    <div className='luchador'>
      <h3 className='texto'>{nombre}</h3>
      <img src={rutaImagen} className='imagenDiv'/>
    
    </div>
    </div>
  )
}

export default Luchador;