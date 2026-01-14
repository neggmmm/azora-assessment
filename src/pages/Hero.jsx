import React from 'react'

export default function Hero() {
  return (
    <div className='relative h-[595px] mx-[116px] my-[118px]'>
        <div className='absolute left-0 top-1/4  -translate-y-1/2 flex flex-col gap-6 [&>img]:hover:rotate-24 [&>img]:transition-all'>
            <img className='translate-y-[240px] w-[173px] hover:rotate-24 transition-all' src="./leftside-hero/pics.svg.png"></img>
            <img className='translate-y-[175px] w-[58px]' src=" ./leftside-hero/macpaw.svg.png"></img>
            <img className='translate-y-[90px] translate-x-[100px] w-[141px]' src="./leftside-hero/pdf.svg.png"></img>
            <img className='translate-y-[90px] w-[226px] h-[113px]' src="./leftside-hero/teamwork.svg.png"></img>
            <img className='w-[176px] z-10 translate-y-[30px]' src="./leftside-hero/secure.svg.png"></img>
        </div>
        <div id="main-content" className='flex flex-col items-center text-center gap-8'>
            <img src="./main-hero/Group.png"></img>
            <div className='text-6xl w-[500px] '>
            Dozens of apps.
            One subscription.
            $9.99
            </div>
            <div className='flex items-center gap-2 [&>button]:px-6 [&>button]:py-2 [&>button]:h-[52px] [&>button]:bg-white [&>button]:rounded-lg [&>button]:hover:scale-110 [&>button]:transition-all'>
                <button className='text-black px-6 py-4  mr-4'>Try Free for 7 days</button>
                <button className='border px-6 py-4 '>
                    <img src="./main-hero/apple.svg.png"></img>
                </button>
                <button>
                    <img src="./main-hero/google.svg.png"></img>
                </button>
            </div>
            <div className='w-[300px] font-avenir-next'>
                Power up your workflow with Setapp, a smart way to get apps.
            </div>
        </div>
        <div className="absolute right-0 top-1/15 -translate-y-1/2 flex flex-col gap-6 [&>img]:hover:rotate-24 [&>img]:transition-all">
            <img className='translate-y-[400px] w-[201px] h-[126px]' src="./rightside-hero/wifi.svg.png"></img>
            <img className='translate-y-[320px] translate-x-[-60px] w-[169px]' src="./rightside-hero/pdf.svg.png"></img>
            <img className='translate-y-[240px] translate-x-[90px] w-[155px] z-10' src="./rightside-hero/converter.svg.png"></img>
            <img className='w-[230px] h-[128px] translate-y-[170px]' src="./rightside-hero/manage.svg.png"></img>
            <img className='w-[152px] translate-y-[125px] translate-x-[50px]' src="./rightside-hero/code.svg.png"></img>
        </div>
    </div>
  )
}
