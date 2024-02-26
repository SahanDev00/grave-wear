import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ products }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?q=${searchQuery}`);
    };

    return (
        <form onSubmit={handleSubmit} className='lg:flex hidden ml-[18%] xl:ml-[300px] pt-5 absolute top-0'>
            <input
                type="text"
                placeholder="Search for a product..."
                value={searchQuery}
                onChange={handleChange}
                className='rounded-lg w-[200px] xl:w-[300px] h-7 pl-4 pb-1 border border-black relative z-10'
            />
            <button className='ml-3 size-5 mt-1 cursor-pointer relative z-10 hover:scale-105 duration-300 ' type="submit"> <FaSearch/> </button>
        </form>
    );
};

export default SearchBar;
