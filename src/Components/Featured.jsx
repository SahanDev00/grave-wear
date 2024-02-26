import React from 'react'
import Grave from '../Images/Grave.jpg'

const Featured = () => {

    const Products = [
        { 
            name: 'Men', 
            link: '', 
            alt: 'Men Category',
            img: Grave
        },
        { 
            name: 'Women', 
            link: '', 
            alt: 'Women Category',
            img: Grave
        },
        { 
            name: 'Accessories', 
            link: '', 
            alt: 'Accessories Category',
            img: Grave
        },
        { 
            name: 'Techwear', 
            link: '', 
            alt: 'Techwear Category',
            img: Grave
        },
        { 
            name: 'Techwear', 
            link: 'facebook.com', 
            alt: 'Techwear Category',
            img: Grave
        }
    ];

    return (
        <div className=' w-full h-[100%] my-10'>
            <h1 className='font-bold flex items-center mx-auto drop-shadow-sm justify-center text-2xl '>Featured</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 ml-10 my-9'>
                {Products.map((product) => (
                    <div key={product.name} className='flex flex-col justify-center items-center border border-gray-300 rounded-xl m-1 w-[210px] h-[290px] md:w-[230px] md:h-[340px] lg:w-[280px] lg:h-[350px] xl:w-[250px] xl:h-[350px]'>
                        <img src={product.img} alt={product.alt} className='p-2 mx-3 w-[250px] md:h-[250px] h-[210px] rounded-xl  my-1'/>
                        <div>
                            <h1 className='md:text-lg mb-1 md:mb-2'>{product.name}</h1>
                        </div>
                        <div>
                            <a href={product.link} className='bg-green-300 py-1 px-2 md:w-[90px] w-[80px] md:h-8 h-6 rounded-full mb-5 text-sm hover:scale-105 hover:drop-shadow-xl duration-200'>
                                Buy Now
                            </a>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Featured
