import React from 'react'

export default function Divider({color = 'black', width = 100}) {
  return (
    <div className='flex justify-center'>
    <div className='h-[2px]' style={{width: `${width}%`, backgroundColor: color}}></div>
    </div>
  )
}
