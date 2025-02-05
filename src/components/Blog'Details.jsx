import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';

const BlogDetails = () => {
  const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
        if (storedBlogs) {
            const foundBlog = storedBlogs.find(blog => blog.id === parseInt(id));
            setBlog(foundBlog);
        }
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <Header/>
        <div className='p-20'>
            <h1 className='text-5xl font-bold mb-4'>{blog.title}</h1>
            <img src={blog.image} className='w-full h-96 object-cover mb-4' alt={blog.title} />
          <div className='text-3xl py-10'>
          <p className='text-gray-700'>{blog.content}</p>
          </div>
        </div>
      </div>
    )
}

export default BlogDetails
