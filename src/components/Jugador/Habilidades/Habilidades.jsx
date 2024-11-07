import React from 'react'
import "./Habilidades.css"

export default function Habilidades({destreza, fuerza, suerte}) {
  return (
    <div className='habilidadesDiv'>
      <ul>
        <li className='textoHabilidades'>
          Destreza:  <span className='valorHabilidad'>{destreza}</span>
        </li>
        <li className='textoHabilidades'>
          Fuerza: <span className='valorHabilidad'>{fuerza}</span>
        </li>
        <li className='textoHabilidades'>
          Suerte: <span className='valorHabilidad'>{suerte}</span>
        </li>
      </ul>
    </div>
    
  )
}
