import React from 'react'
import "./Vidas.css"

export default function Vidas({ vidas }) {
  return (
    /*Bucle para recorrer el numero de vidas de cada jugador y mostrar el número correspondiente a las vidas que tiene el jugador*/
    <div className='vidasDiv'>
      {Array.from({ length: vidas }).map(() => (
        <img src="/vida.png" className='vida'/>
      ))}
    </div>
  )
}
