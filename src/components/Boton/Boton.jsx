import React from 'react'
import "./Boton.css"

export default function Boton({onClick, texto}) {

  return (
      <button className='custom-button-com' onClick={onClick}>
        {texto}
      </button>
  )
}
