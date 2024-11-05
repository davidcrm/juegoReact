import React from 'react'
import "./Encabezado.css"

export default function Encabezado({modalidad}) {
  return (
    <div className='encabezado'>
      <h1>LUCHA POR: {modalidad || 'Pulsa en comenzar'}</h1>
    </div>
  )
}


