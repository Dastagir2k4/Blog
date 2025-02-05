import React, { useEffect, useState } from 'react'
import { use } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const navigate=useNavigate()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [image, setImage] = useState(null);
    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
        if (storedBlogs) {
            setBlogs(storedBlogs);
        }

    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        console.log(title, content);
        const newBlog = {
            id: Date.now(),
            title: title,
            content: content,
            image: image,
        };
        const updatedBlogs = [...blogs, newBlog];
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
        navigate('/');
    }
    useEffect(() => {
        console.log('Blogs Updated', blogs);
    }, [blogs]);

    
    
    return (
        <div>
            <Header />
            <div className='mt-20'>
                <h1 className='text-5xl text-center text-blue-500'>Add a New Blog</h1>
                <div>
                    <div className='flex items-center justify-center p-10 flex-col gap-10'>
                        <input type='file' className='bg-gray-200 px-5 py-2 cursor-pointer rounded-lg' onChange={handleImageChange}/>
                        <input type='text' placeholder='Enter Blog Title' className=' w-1/2 px-4 py-5 border-gray-300 rounded-lg border-4' onChange={(e) => setTitle(e.target.value)} />

                        <textarea placeholder='Enter Blog Content' className=' w-1/2 min-h-32 border-gray-300 rounded-lg border-4 ' onChange={(e) => setContent(e.target.value)}></textarea>
                        <button className='w-1/2 px-4 py-2 bg-blue-500 text-white cursor-pointer' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
