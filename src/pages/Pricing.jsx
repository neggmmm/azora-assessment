import React from 'react'

export default function 
() {
  return (
    <div className='bg-[#F5F5F5] rounded-lg h-[580px]'>  
        <div className='flex flex-col items-start gap-10 mt-20 mb-35 mx-25 py-20'>
                <img className='w-19' src="./setapp-logo.svg.png" alt="Reviewer" />
                <div className='w-[802px]'>
                    <p className='text-[46px] text-[#26262B] mb-5'>
                        Superpowers starting $9.99/month. Free for 7 days.
                    </p>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-[#26262B] px-5 py-2 rounded'>
                        Get started now
                    </button>
                    <button className='px-5 py-2 rounded border border-[#26262B] text-[#26262B]'>
                        More about Setapp
                    </button>
                </div>
            </div>
    </div>
  )
}
