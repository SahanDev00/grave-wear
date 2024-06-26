import React from 'react';
import { accessories } from '../../Products/Product'; // Import the men array from the Product.js file

const Accessories = () => {
    return (
        <div className='w-full mt-[100px] mb-5'>
            <h1 className='my-5 ml-10 text-lg lg:text-xl font-bold font-poppins'>Accessories</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mx-6 gap-4 ">
                {accessories.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-[93%] h-[95%] md:w-[230px] md:h-[360px] lg:w-[280px] lg:h-[380px] xl:w-[250px] xl:h-[390px] rounded-lg mx-2 md:mx-5 my-5 md:my-2 border border-gray-300 hover:scale-105 duration-300">
                        <a href={item.link}>
                            <img src={item.picture} alt={item.alt} className='p-2 mx-3 w-[90%] md:w-[210px] md:h-[240px] h-[180px] lg:h-[260px] rounded-xl my-1 object-contain' />
                        </a>
                        <h2 className='mx-auto text-xs sm:text-sm px-2 sm:px-4 h-[70px] sm:h-[100px] md:h-[60px] font-poppins'>{item.name}</h2> 
                        <div className='md:py-2 lg:pt-3'>
                            <a href={item.link} className='flex items-center justify-center font-poppins bg-green-300 md:w-[90px] px-2  sm:w-[90px] md:h-8 sm:h-7 w-[70px] h-5 rounded-full text-xs sm:text-sm hover:scale-105 hover:drop-shadow-xl duration-200'>
                                Buy Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accessories;
