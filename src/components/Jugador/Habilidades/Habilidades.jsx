import React from 'react'
import "./Habilidades.css"

export default function Habilidades({ habilidades }) {
  // Devuelve una lista con las habilidades del jugador que recibe por parámetro y la muestra
  return (
    <div className='habilidadesDiv'>
      <ul>
        <li className='textoHabilidades'>
          Destreza:  <span className='valorHabilidad'>{habilidades.destreza}</span>
        </li>
        <li className='textoHabilidades'>
          Fuerza: <span className='valorHabilidad'>{habilidades.fuerza}</span>
        </li>
        <li className='textoHabilidades'>
          Suerte: <span className='valorHabilidad'>{habilidades.suerte}</span>
        </li>
      </ul>
    </div>
  )
}
