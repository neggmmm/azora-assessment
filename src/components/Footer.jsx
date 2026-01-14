import React from 'react'

export default function Footer() {
    const links = ["./footer/Vector.png","./footer/Frame.png","./footer/Frame (1).png", "./footer/Frame (2).png"]
  return (
    <div className='mx-20 my-10'>
        <div className='mb-2 flex justify-between'>
            <p className='font-light text-xs'>
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>
            <div className='flex gap-2 '>
                {links.map(link=>(
                    <img className='brightness-0 invert opacity-60 hover:opacity-100 hover:scale-125 transition-all cursor-pointer' src={link} key={link} />
                ))}
            </div>
        </div>
        <div className='flex gap-4 text-xs text-[#969799]'>
            <p className='hover:text-white cursor-pointer'>Terms of Use</p>
            <p className='hover:text-white cursor-pointer'>Privacy Policy</p>
        </div>
    </div>
  )
}
