import React from 'react'

export default function About() {
  return (
    <div className='h-[200vh] mx-40 my-20'>
        <div className='flex justify-between items-center my-20'>
            <h1 className='w-[420px] text-4xl'>What you get on Setapp.</h1>
            <p className='w-[460px] font-light'>With a single monthly subscription at $9.99, you get 240+ apps for your Mac.</p>
        </div>
        <div className='grid grid-cols-2 gap-6 my-20'>
            <img className='col-span-2' src='./about/Link.png'></img>
            <img src='./about/Link (1).png'></img>
            <img src='./about/Link (2).png'></img>
        </div>

        <div className='flex justify-center gap-2'>
            <img className='' src='./about/Vector (1).png'></img>
            <p>View all superpowers</p>
        </div>

        <div className='flex justify-between items-center my-20'>
            <h1 className='w-[420px] text-4xl'>Your Setapp journey</h1>
            <p className='w-[460px] font-light'>Type in your task into Setapp search and get instant app recommendations.</p>
        </div>
    </div>
  )
}
