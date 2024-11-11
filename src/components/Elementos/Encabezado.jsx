import React from 'react'
import "./Encabezado.css"

export default function Encabezado({ modalidad, ganador }) {
  // Recibe por parámetro la modalidad de la ronda que se establecerá cuando se pulse el botón comenzar
  return (
    <div className='encabezado'>
      {
        // comprueba que se recibe el parámetro ganador y lo muestra:
        ganador ? (
          <h1>Ganador: {ganador}</h1>
        ) : (
          // Y si no, muestra el encabezado por defecto
          <h1>LUCHA POR: {modalidad || 'Pulsa en comenzar'}</h1>
        )
      }
    </div>
  )
}


