import React from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';

const SearchResults = ({ products }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='w-full mt-[100px] mb-5'>
            {filteredProducts.length === 0 ? (
                <NotFound searchTerm={query} />
            ) : (
                <div>
                    <h2 className='text-lg ml-10'>Search Results for "{query}"</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 mx-2 lg:gap-10 gap-4'>
                        {/* Iterate over filtered products and directly apply grid-related styles */}
                        {filteredProducts.map((product, index) => (
                            <div key={index} className='flex flex-col  items-center w-[210px] h-[360px] md:w-[230px] md:h-[350px] lg:w-[280px] lg:h-[380px] xl:w-[250px] xl:h-[390px] rounded-lg mx-2 md:mx-5 my-5 md:my-2 border border-gray-300 hover:scale-105 duration-300'>
                                <a href={product.link}>
                                    <img src={product.picture} alt={product.alt} className='p-2 mx-3 w-[250px] md:h-[240px] h-[210px] lg:h-[260px] rounded-xl my-1 object-contain' />
                                </a>
                                <p className='mx-auto md:text-sm px-4 h-[100px] md:h-[60px]'>{product.name}</p>
                                <div>
                                    <a href={product.link} className='flex items-center justify-center  bg-green-300 md:w-[90px] px-2  w-[80px] md:h-8 h-6 rounded-full  text-sm hover:scale-105 hover:drop-shadow-xl duration-200'>
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
