import React from 'react'

export default function Carousel() {
    return (
        <div className='bg-[#765070] rounded-lg h-[720px] flex' >
            <div className='flex flex-col items-start justify-between mt-60 mb-35 mx-25'>
                <div >
                    <p className='text-[26px] mb-5'>
                        Musicians like Jason use Setapp to push the
                        limits of their creativity, dancing through tasks
                        for more time to play.
                    </p>
                    <span className='font-light'>Jason Staczek</span>
                </div>
                <button>
                    <img src="./reviews/Button - Watch now.png" alt="Left Arrow" />
                </button>
            </div>
            <img className='mx-auto pt-20' src="./reviews/image 67.png" alt="Reviewer" />
        </div>
    )
}
