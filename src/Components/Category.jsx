import React from 'react';
import Mlogo from '../Images/Grave.jpg';

const Category = () => {
    const categories = [
        { name: 'Men', alt: 'Men Category' },
        { name: 'Women', alt: 'Women Category' },
        { name: 'Accessories', alt: 'Accessories Category' },
        { name: 'Techwear', alt: 'Techwear Category' }
    ];

    return (
        <div className='w-full h-[50%] my-12 mx-auto mt-[100px]'>
            <h1 className='font-bold text-2xl flex justify-center'>Hello There👋</h1>
            <h2 className='text-xl flex justify-center font-bold'>Welcome to our Grave Store. 👻 </h2>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 my-6 mx-5 '>
                {categories.map((category) => (
                    <div key={category.name} className='relative md:w-[270px] md:h-[300px] lg:w-[250px] lg:h-[300px] xl:w-[300px] xl:h-[400px] bg-gray-500 rounded-lg mx-3  md:mx-auto my-3 md:my-7 hover:scale-105 duration-700 hover:drop-shadow-xl'>
                        <img src={Mlogo} alt={category.alt} className='bg-cover object-cover h-full w-full hover:scale-105 rounded-lg ' />
                        <button className='absolute inset-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-40 rounded-lg '>{category.name}</button>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Category;
