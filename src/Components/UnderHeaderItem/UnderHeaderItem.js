import React from 'react'
import "./UnderHeaderItem.css"

export default function UnderHeaderItem({ title, children }) {
  return (
    <div className='bg-white text-center underheaderitem'>
        <div className='div-gray'>
            <div>
                {children}
            </div>
        </div>
        <p className='fs-3 fw-bold text-center'>{title}</p>
        <p className="text-secondary text-center">متن لورم و ساختگی</p>
    </div>
  )
}
