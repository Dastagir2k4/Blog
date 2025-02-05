import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const BlogFavourite = () => {
    const [favoriteBlogs, setFavoriteBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
        if (storedBlogs) {
            const updatedBlogs = storedBlogs.filter((blog) => blog.isFavorite === true);
            setFavoriteBlogs(updatedBlogs);
        }
    }, []);

    return (
        <div>
            <Header/>
            <h1 className='text-5xl text-center text-blue-500'>Favourite Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-20'>
                {favoriteBlogs.map((blog) => (
                    <div key={blog.id} className='bg-white shadow-md rounded-lg overflow-hidden'>
                        <img src={blog.image} className='w-full h-48 object-cover' alt={blog.title} />
                        <div className='p-4'>
                            <h2 className='text-2xl font-bold'>{blog.title}</h2>
                            <p className='mt-2 text-gray-600'>{blog.content.substring(0, 100)}...</p>
                            <button className='mt-4 px-3 py-2 rounded-lg bg-blue-500 text-white cursor-pointer'>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogFavourite;