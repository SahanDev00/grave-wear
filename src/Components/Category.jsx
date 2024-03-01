import React from 'react';
import mencategory from '../Images/mencategory.png'
import girlcategory from '../Images/girlcategory.jpg'
import bear from '../Images/bear.jpg'
import gothcat from '../Images/gothcat.jpg'
import { Link } from 'react-router-dom';

const Category = () => {
    const categories = [
        { name: 'Men', alt: 'Men Category', picture: mencategory, link: '/men' },
        { name: 'Women', alt: 'Women Category', picture: girlcategory, link: '/women' },
        { name: 'Accessories', alt: 'Accessories Category', picture: bear, link: '/accessories' },
        { name: 'Gothic', alt: 'Techwear Category', picture: gothcat, link: '/gothic' }
    ];

    return (
        <div className='w-full h-[50%] my-12 mx-auto mt-[100px]'>
            <h1 className='font-bold text-2xl flex justify-center font-poppins'>Hello There👋</h1>
            <h2 className='text-xl flex justify-center font-bold font-poppins'>Welcome to our Grave Store. 👻 </h2>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 my-6 mx-5 '>
                {categories.map((category) => (
                    <div key={category.name} className='relative md:w-[270px] md:h-[300px] lg:w-[250px] lg:h-[300px] xl:w-[300px] xl:h-[400px] bg-gray-500 rounded-lg mx-3  md:mx-auto my-3 md:my-7 hover:scale-105 duration-700 hover:drop-shadow-xl'>
                        <img src={category.picture} alt={category.alt} className='bg-cover object-cover h-full w-full hover:scale-105 rounded-lg ' />
                        <Link to={category.link} className='absolute inset-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-40 rounded-lg font-poppins'>{category.name}</Link>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Category;
