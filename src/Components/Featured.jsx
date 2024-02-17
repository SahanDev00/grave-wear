import React from 'react'

const Featured = () => {

    const Products = [
        { 
            name: 'Men', 
            link: '', 
            alt: 'Men Category' 
        },
        { 
            name: 'Women', 
            link: '', 
            alt: 'Women Category' 
        },
        { 
            name: 'Accessories', 
            link: '', 
            alt: 'Accessories Category' 
        },
        { 
            name: 'Techwear', 
            link: '', 
            alt: 'Techwear Category' 
        },
        { 
            name: 'Techwear', 
            link: '', 
            alt: 'Techwear Category' 
        }
    ];

    return (
        <div className=' w-full h-[100%] my-10'>
            <h1 className='font-bold flex items-center mx-auto my-4 drop-shadow-sm justify-center text-2xl '>Featured</h1>
            <div className='grid grid-cols-2 md:grid-cols-5 w-full mx-6 my-4 bg-gray-200'>
            {Products.map((product) => (
                <div key={product.name}>
                    <img src="" alt={product.alt} />
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                    <div>
                        <button>
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
                
            </div>
        </div>
    )
}

export default Featured
