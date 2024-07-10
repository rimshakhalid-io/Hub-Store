import React from 'react'
import { TbDeviceMobileDollar } from "react-icons/tb";
import img1 from '../..//public/Images/M1.jpg'
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
    return (
        <>
            <div className='bg-gradient-to-r  from-cyan-100 via-cyan-200 to-cyan-300 xs:h-[680px] lg:h-[591px] lg:flex  lg:flex-col '>
                <div className='flex xs:ml-[40px] pt-[40px] lg:ml-[90px] '>
                    <div >
                        <TbDeviceMobileDollar className='xs:h-[43px] xs:w-[25px] text-cyan-800 ' />
                    </div>
                    <div className='flex-col'>
                        <h3 className='ml-4 tracking-widest font-bold'>Hub</h3>
                        <h3 className='ml-4 tracking-widest font-bold'>store</h3>
                    </div>
                </div>
                <div>
                    <img className="lg:hidden xs:justify-center xs:w-[800px] xs:pt-8 lg:absolute lg:top-0 lg:bottom-0  " src={img1} alt="" />
                </div>
                <div className='hidden lg:block'>
                    <img className="  lg:ml-[745px] lg:w-[90vh] lg:h-[589px] lg:absolute lg:top-0 lg:bottom-0" src={img1} alt="" />
                </div>
                <div>
                    <div className='  lg:hidden xs:justify-center xs:text-center xs:mt-7'>
                        <h1 className='  text-cyan-800 text-2xl tracking-widest font-serif '>WE'RE </h1>
                        <h1 className='  font-semibold text-2xl tracking-widest font-serif '> COMING  </h1>
                        <h1 className='  font-semibold text-2xl tracking-widest  font-serif'> SOON </h1>
                        <p className=' text-cyan-600 '>Hello Fellow shoppers! we're currently building our new Mobile store .
                            <span> Add your email below to story up -to-date with announcemnts and out launch deals.</span></p>
                    </div>
                    <div className=' hidden lg:block lg:ml-[100px] lg:mt-[50px]'>
                        <h1 className='  text-cyan-800 text-5xl tracking-widest mt-3 font-serif '>WE'RE </h1>
                        <h1 className='  font-semibold text-5xl tracking-widest mt-3 font-serif '> COMING  </h1>
                        <h1 className='  font-semibold text-5xl tracking-widest mt-3 font-serif'> SOON </h1>
                        <p className=' text-cyan-600 mt-5 lg:w-[450px]'>Hello Fellow shoppers! we're currently building our new Mobile store .
                            <span> Add your email below to story up -to-date with announcemnts and out launch deals.</span></p>
                    </div>
                </div>
                <div className=' lg:hidden flex xs:justify-center mt-11 '>
                    <div className="relative">
                        <input
                            className='bg-transparent hover:border-cyan-800 text-cyan-800 outline-none border-2 border-cyan-500 placeholder-cyan-500 p-2 rounded-lg pr-11'type='email' placeholder='Email Address' style={{ borderRadius: '50px' }} />
                        <button
                            type="button" className="absolute -right-7 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 focus:ring-3 focus:outline-none hover:border-white border-2 border-cyan-500 font-medium rounded-xl text-sm px-8 py-3.5"
                            style={{ borderRadius: '80px' }}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className='hidden lg:block'>  
                 <div className='  flex lg:ml-[100px] lg:mt-9 '>
                    <div className="relative">
                        <input
                            className='bg-transparent hover:border-cyan-800 text-cyan-800 outline-none border-2 border-cyan-500 placeholder-cyan-500 p-2 rounded-lg pr-11'type='email' placeholder='Email Address' style={{ borderRadius: '50px' }} />
                        <button
                            type="button" className="absolute -right-7 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 focus:ring-3 focus:outline-none hover:border-white border-2 border-cyan-500 font-medium rounded-xl text-sm px-8 py-3.5"
                            style={{ borderRadius: '80px' }}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}
