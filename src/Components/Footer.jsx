import React from 'react';
import logo from '../Images/footerpic.png';
import {
    FaInstagram,
    FaTiktok,
    FaPinterest
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-[50px] md:h-[100px] '>
            <div className='w-full h-full bg-gray-400'>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-3'>
                    <div className='flex items-center ml-10 justify-center'>
                        <img src={logo} alt="" className='md:w-[120px] md:h-[40px] w-[100px] h-[30px]' />
                    </div>
                    <div className='hidden md:flex items-center justify-center'>
                        <h1 className='font-bold drop-shadow-xl text-sm md:text-xl font-poppins'>Gravestore666@gmail.com</h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a href="https://www.instagram.com/grave.wear">
                            <FaInstagram size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                        <a href="https://www.tiktok.com/@grave.wear">
                            <FaTiktok size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                        <a href="https://pin.it/wOHFyP3Gc">
                            <FaPinterest size={25} className='cursor-pointer mx-1 md:mx-3'/>
                        </a>
                    </div>
                </div>
                <div className='flex md:hidden items-center justify-center bg-gray-400 mx-auto'>
                    <h1 className='font-bold drop-shadow-xl text-sm py-2 font-poppins'>Gravestore666@gmail.com</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
