import React from 'react'
import Carousel from '../components/Carousel'

export default function Reviews() {
    return (
        <div className='bg-white'>
            <div className='relative h-[200vh] my-120 mx-7'>
                <div>
                    <div className='absolute translate-y-[-360px]'>
                    <Carousel />
                    </div>
                </div>
                <div className='absolute right-1/2 translate-y-[393px] '>
                    <div className='flex gap-4 [&>img]:w-3 '>
                     <img className='' src="./reviews/Button.png" alt="Left Arrow" />
                    <img className='' src="./reviews/Button (1).png" alt="Right Arrow" />
                    <img className='' src="./reviews/Button (1).png" alt="Right Arrow" />
                    <img className='' src="./reviews/Button (1).png" alt="Right Arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}
