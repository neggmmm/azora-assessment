import React from 'react'
import Carousel from '../components/Carousel'
import Pricing from './Pricing'
import Divider from '../components/Divider'

export default function Reviews() {
    const testimonials = [
        {
            quoteImage: './reviews/div.testimonial-card__quote (0).png',
            name: 'Arash Pourhabibi',
            username: '@ArashPourhabibi',
            platform: './reviews/SVG (0).png',
        },
        {
            quoteImage: './reviews/div.testimonial-card__quote (1).png',
            name: 'Mauricio Sanchez',
            username: '@m741s',
            platform: './reviews/SVG (1).png',
        },
        {
            quoteImage: './reviews/div.testimonial-card__quote (2).png',
            name: 'Meredith Sweet',
            username: '@meredith.sweet.silberstein',
            platform: './reviews/SVG (2).png',
        }
    ]
    return (
        <div className='bg-white mt-20 mb-70'>
            {/* Carousel with negative margin to overlap */}
            <div className=''>
                <div className=' h-[360px] bg-[#26262B]'></div>
                <div className='px-7 -mt-[320px]'>
                    <Carousel />

                </div>
            </div>

            {/* Pagination dots - centered below carousel */}
            <div className='flex justify-center gap-4 py-8'>
                {[0, 1, 2, 3].map((dot, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-colors ${i === 0 ? 'bg-gray-800' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            {/* Testimonials Section */}
            <div className='max-w-6xl mx-auto px-7 py-16'>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-black text-3xl font-bold mb-2'>Setapp in your words.</h2>
                    <div className='flex gap-10'>
                        <p className='text-gray-600 w-[300px]'>What you say about how Setapp powers you up.</p>
                        <div className='flex gap-4'>
                            {[0, 1, 2, 3].map((i) => (
                                <button key={i} className=' rounded-full '>
                                    <img src={`./reviews/Frame (${i}).png`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonial cards grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {testimonials.map((testimonial) => (
                        <div>
                            <img src={testimonial.quoteImage} alt="Quote" className='mb-4' />
                            <div className='flex items-center'>
                                <div className='flex flex-col mr-auto'>
                                    <p className='text-black'>{testimonial.name}</p>
                                    <p className='text-gray-600 mb-2'>{testimonial.username}</p>
                                </div>
                                <img src={testimonial.platform} alt="Platform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Divider color={'#E5E5E5'} width={100} />
            <div className='h-[360px]'>
                <div className='px-7'>
                    <Pricing />
                </div>
            </div>
        </div>
    )
}
