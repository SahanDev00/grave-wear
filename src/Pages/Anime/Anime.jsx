import React from 'react';
import { anime } from '../../Products/Product'; // Import the men array from the Product.js file

const Anime = () => {
    return (
        <div className='w-full mt-[100px] mb-5'>
            <h1 className='my-5 ml-10 text-lg lg:text-xl font-bold'>Anime Collection</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mx-6 gap-4 ">
                {anime.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-[210px] h-[290px] md:w-[230px] md:h-[320px] lg:w-[280px] lg:h-[350px] xl:w-[250px] xl:h-[350px] rounded-lg mx-2 md:mx-5 my-5 md:my-2 border border-gray-300 hover:scale-105 duration-300">
                        <img src={item.picture} alt={item.alt} className='p-2 mx-3 w-[250px] md:h-[240px] h-[210px] lg:h-[260px] rounded-xl my-1' />
                        <h2 className='mx-auto md:text-lg mb-2'>{item.name}</h2> 
                        <div>
                            <a href={item.link} className='bg-green-300 md:w-[90px] px-2 py-1 w-[80px] md:h-8 h-6 rounded-full mb-5 text-sm hover:scale-105 hover:drop-shadow-xl duration-200'>
                                Buy Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Anime;
