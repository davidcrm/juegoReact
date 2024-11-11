import React from 'react'
import "./Boton.css"

export default function Boton({onClick, texto, color}) {

  return (
    // Devuelve un div con un boton que realiza una acción pasada por parámetro 
    //junto con el color que se usa también en el css y el texto del propio botón
    <div className='button-container'>
      <button className="custom-button-com"
        onClick={onClick}
        style={{
          color: color,
          borderColor: color,
          boxShadow: `2px 2px 10px ${color}80`
        }}>
        {texto}
      </button>
  </div>
  )
}
