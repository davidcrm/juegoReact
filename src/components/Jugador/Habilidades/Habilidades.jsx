import React from 'react'
import "./Habilidades.css"

export default function Habilidades(destreza, fuerza, suerte) {
  const habilidades = [destreza, fuerza, suerte]
  return (
    <div className='habilidadesDiv'>
      <p className='texto'>Destreza: {habilidades.destreza}</p>
      <p className='texto'>Fuerza: {habilidades.fuerza}</p>
      <p className='texto'>Suerte: {habilidades.suerte}</p>
    </div>
    
  )
}
