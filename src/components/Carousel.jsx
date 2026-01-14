import React from 'react'

export default function Carousel() {
    return (
        <div className='bg-[#765070] rounded-lg h-[720px] flex relative'>
            <img src='./reviews/f177202f658078cd2e7b.svg.png' className='w-[14px] h-6 opacity-40 hover:opacity-80 hover:scale-110 absolute right-30 top-20'></img>
            <img src='./reviews/Vector (1).png' className='w-[14px] h-6 opacity-40 hover:opacity-80 hover:scale-110 absolute right-10 top-20'></img>
            <div className='flex flex-col items-start justify-between mt-60 mb-35 mx-25'>
                <div>
                    <p className='text-[20px] xl:text-[26px] mb-5 max-w-[556px]'>
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
            <img className='hidden lg:block mx-auto pt-20' src="./reviews/image 67.png" alt="Reviewer" />
        </div>
    )
}
