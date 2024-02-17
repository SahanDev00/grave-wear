import React, { useState } from 'react';
import logo from '../Images/Grave_nav.jpg';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }

    return (
        <div className='flex justify-between w-full h-[70px] bg-gray-300'>
            <img src={logo} alt="grave" className='p-1 ml-5 md:ml-10 cursor-pointer'/>
            <ul className='hidden md:flex text-black font-bold md:mr-6 px-10 space-x-3 md:space-x-5 my-auto '>
                <li
                    className={`text-sm md:text-lg cursor-pointer uppercase hover:scale-105 duration-800 ease-in-out ${activeLink === 'Home' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Home')}
                >
                    Home
                </li>
                <li
                    className={`text-sm md:text-lg cursor-pointer uppercase hover:scale-105 duration-800 ease-in-out ${activeLink === 'Men' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Men')}
                >
                    Men
                </li>
                <li
                    className={`text-sm md:text-lg cursor-pointer uppercase hover:scale-105 duration-800 ease-in-out ${activeLink === 'Women' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Women')}
                >
                    Women
                </li>
                <li
                    className={`text-sm md:text-lg cursor-pointer uppercase hover:scale-105 duration-800 ease-in-out ${activeLink === 'Anime' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Anime')}
                >
                    Anime
                </li>
                <li
                    className={`text-sm md:text-lg cursor-pointer uppercase hover:scale-105 duration-800 ease-in-out ${activeLink === 'Gothic' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Gothic')}>
                    Gothic
                </li>
                <li
                    className={`text-sm md:text-lg cursor-pointer uppercase hover:scale-105 duration-800 ease-in-out ${activeLink === 'Accessories' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Accessories')}>
                    Accessories
                </li>
            </ul>

            <div onClick={handleNav} className='block md:hidden cursor-pointer pr-6 z-10 my-auto'> 
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-300 ease-in-out duration-500  z-10' : 'fixed left-[-100%]'}>
            <img src={logo} alt="grave" className='p-1 ml-5 md:ml-10 cursor-pointer w-[120px] '/>
            <ul className='text-black font-bold md:mr-6 px-10 space-x-3 md:space-x-5 my-auto '>
                <li
                    className={` text-lg ml-3 my-6 hover:scale-105 cursor-pointer ${activeLink === 'Home' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Home')}
                >
                    Home
                </li>
                <li
                    className={` text-lg ml-3 my-6 hover:scale-105 cursor-pointer ${activeLink === 'Men' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Men')}
                >
                    Men
                </li>
                <li
                    className={` text-lg ml-3 my-6 hover:scale-105 cursor-pointer ${activeLink === 'Women' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Women')}
                >
                    Women
                </li>
                <li
                    className={` text-lg ml-3 my-6 hover:scale-105 cursor-pointer ${activeLink === 'Anime' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Anime')}
                >
                    Anime
                </li>
                <li
                    className={` text-lg ml-3 my-6 hover:scale-105 cursor-pointer ${activeLink === 'Gothic' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Gothic')}>
                    Gothic
                </li>
                <li
                    className={` text-lg ml-3 my-6 hover:scale-105 cursor-pointer ${activeLink === 'Accessories' ? 'underline' : ''}`}
                    onClick={() => handleLinkClick('Accessories')}>
                    Accessories
                </li>
            </ul>
            </div>

        </div>
    );
    
}



export default Navbar;
