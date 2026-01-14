import React from 'react'

export default function Links() {
    const firstList = ["Home","How it works", "All Apps", "Pricing", "Setapp for teams", "Blog", "Podcast", "Download"];
    const secondList = ["About","Support","Education Discount", "Family Plan", "For Developers", "Gift Cards", "Redeem Card or Code", "Setapp Reviews", "Affiliate Program", "Mac Developer Survey 2023"];
    const lastList =["Getting started with Setapp","Remote access to other Mac","Fix macOS Ventura","problems","Best productivity apps","Best YouTube downloaders","Uninstall apps"];
    const languages = ["English", "Arabic", "Spaniol"]
    return (
    <div className='my-20 mx-20'>

   
    <div className='flex justify-between  h-[50vh]'>
        <div className='flex flex-col justify-between h-1/2'>
            <div className='flex items-center'>
                <img src='Vector.png' className='w-[20px] h-[32px]' />
                <p>SETAPP</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Updates from our team, written with love </p>
                <div className='flex'>
                <input className='rounded-l bg-[#404547] w-full py-2 px-2' placeholder='Enter your email'/>
                <div className='bg-white w-14 text-center py-3 px-5 rounded-r'>
                    <img className='text-[#404547]' src='Frame.png' />
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-around w-1/2'>
        <ul className='text-white'>
            {firstList.map(item=>(
                <li className='py-2' key={item}>
                    {item}
                </li>
            )
            )}
        </ul>
          <ul className='text-white'>
            {secondList.map(item=>(
                <li className='py-2' key={item}>
                    {item}
                </li>
            )
            )}
        </ul>
         <ul className='text-white'>
            {lastList.map(item=>(
                <li className='py-2' key={item}>
                    {item}
                </li>
            )
            )}
        </ul>
        </div>
    </div>
    <div className='flex justify-between'>
            <div>
                <span className='bg-[#969799] px-2 '>
                DMCA
                
                </span>
                <span className='bg-[#404547] px-2'> PROTECTED</span>
            </div>

            <div className='flex items-center'>
                <img className='w-6 h-4' src='en.svg.png' />
                <select>
                    {languages.map(item=>(
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
    </div>
     </div>
  )
}
