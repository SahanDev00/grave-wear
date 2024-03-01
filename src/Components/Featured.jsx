import React from 'react'
import tshirt from '../Images/tshirt.jpg'
import mock from '../Images/mockneck.jpg'
import naruto from '../Images/naruto.jpg'
import gothicWT from '../Images/gothicWT.jpg'
import keychain from '../Images/keychain.jpg'

const Featured = () => {

    const Products = [
        {
            name: 'Men’s Techwear Streetwear Hip Hop Short Sleeve T-Shirts',
            alt: 'Hip Hop Tshirt',
            picture: tshirt,
            link: 'https://amzn.to/3wFWLqn',
        },
        {
            name: 'MANGOPOP Mock Neck Cutout Bodysuit Sleeveless for Women Tops',
            alt: 'womans tops',
            picture: mock,
            link: 'https://amzn.to/49OiQBB',
        },
        {
            name: 'NOTRYA Anime Hoodie for Men, Anime Pullover Sweater Gifts',
            alt: 'naruto hoodie',
            picture: naruto,
            link: 'https://amzn.to/3SNJFPe',
        },
        {
            name: "Gothic Women t-Shirt Women's T-Shirt Clothes Street Summer T-Shirt",
            alt: 'Gothic women tshirt',
            picture: gothicWT,
            link: 'https://amzn.to/4bZMmGyl',
        },
        {
            name: 'YOU WIZV Keychain for Women men Rabbit Key Ring Charm Bag Accessory',
            alt: 'bunny keychain keytags',
            picture: keychain,
            link: 'https://amzn.to/48vyWyU',
        }
    ];

    return (
        <div className=' w-full h-[100%] my-10'>
            <h1 className='font-bold flex items-center mx-auto drop-shadow-sm justify-center text-2xl '>Featured</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 ml-2 sm:ml-0 my-9'>
                {Products.map((product) => (
                    <div key={product.name} className='flex flex-col  items-center w-[210px] h-[360px] sm:w-[190px] sm:h-[350px] md:w-[230px] md:h-[360px] lg:w-[280px] lg:h-[380px] xl:w-[250px] xl:h-[390px] rounded-lg mx-2 md:mx-5 my-5 md:my-2 border border-gray-300 hover:scale-105 duration-300'>
                        <a href={product.link}>
                            <img src={product.picture} alt={product.alt} className='p-2 mx-3 w-[250px] md:h-[240px] h-[210px] lg:h-[260px] rounded-xl my-1 object-contain'/>
                        </a>
                        <div>
                            <h1 className='mx-auto text-sm px-2 md:px-4 h-[80px] md:h-[60px]'>{product.name}</h1>
                        </div>
                        <div className=' md:py-2 lg:pt-3'>
                            <a href={product.link} className='flex items-center justify-center  bg-green-300 md:w-[90px] px-2  w-[90px] md:h-8 h-7 rounded-full  text-sm hover:scale-105 hover:drop-shadow-xl duration-200'>
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
