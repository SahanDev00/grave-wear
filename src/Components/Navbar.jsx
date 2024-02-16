import React, { useState } from 'react';
import logo from '../Images/Grave_nav.jpg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='flex justify-between w-full h-[70px] bg-gray-300'>
            <img src={logo} alt="grave" className='p-1 ml-5 md:ml-10 cursor-pointer'/>
            <ul className='flex text-black font-bold md:mr-6 px-10 space-x-3 md:space-x-5 my-auto '>
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
                    onClick={() => handleLinkClick('Gothic')}
                >
                    Gothic
                </li>
            </ul>
        </div>
    );
    
}



export default Navbar;
