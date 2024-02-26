import React from 'react'
import logo from '../Images/Grave_nav.jpg'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTiktok,
    FaPinterest
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-[70px] md:h-[100px] '>
            <div className='w-full h-full bg-gray-400'>
                <div className='w-full h-full grid grid-cols-3'>
                    <div className='flex items-center ml-10 justify-center'>
                        <img src={logo} alt="" className='md:w-[120px] md:h-[60px] w-[100px] h-[50px]' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <h1 className='font-bold drop-shadow-xl text-sm md:text-xl'>Dumidus86@gmail.com</h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <FaFacebookSquare size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        <FaInstagram size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        <FaTiktok size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        <FaPinterest size={25} className='cursor-pointer mx-1 md:mx-3'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
