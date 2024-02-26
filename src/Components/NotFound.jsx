import React from 'react';

const NotFound = ({ searchTerm }) => {
    return (
        <div className='h-screen'>
            <h2 className='text-lg ml-10'>Sorry, the item "{searchTerm}" is not available</h2>
        </div>
    );
};

export default NotFound;
