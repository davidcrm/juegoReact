import React from 'react'
import "./luchador.css"

function Luchador({nombre, rutaImagen}){
  

  return(
    <div className='luchador'>
    <h3>{nombre}</h3>
    <img src={rutaImagen} className='imagenDiv'/>
    </div>
  )
}

export default Luchador;