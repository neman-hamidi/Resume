import React from 'react'
import "./Historyitem.css"

export default function Historyitem({ date, title, desc }) {
  return (
    <div className='historyitem'>
       <p className='text-secondary'>{date}</p>
       <p className="fs-4 fw-bold">{title}</p>
       <p className="text-secondary">{desc}</p>
       <div className='underline'></div>
    </div>
  )
}
