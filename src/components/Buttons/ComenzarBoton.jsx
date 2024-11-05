import React from 'react'
import "./ComenzarBoton.css"

export default function ComenzarBoton({onComenzar}) {

  return (
    <div className='button-container'>
      <button className='custom-button-com' onClick={onComenzar}>COMENZAR</button>
    </div>
  )
}
