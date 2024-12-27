import React from 'react'

import "./Datasitem.css"

export default function Datasitem({ title, children, desc }) {
  return (
    <div className='dataitem text-center'>
         <div>{children}</div>
      <p className='pt-3 text-center fs-2'>{title}</p>
      <p className='text-center fst-italic text-secondary'>{desc}</p>
    </div>
  )
}
