import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = () => {
    const initialBlogs = [
        {
            id: "1",
            title: "Getting Started with Blogging",
            content: "Blogging is a great way to express yourself and share your ideas with the world...",
            image: "https://th.bing.com/th?id=OIP.4Y2h2gPCOtlLSaEuO2uSlAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            isFavorite: true,
        },
        {
            id: "2",
            title: "The Power of Software Development",
            content: "Software development has the power to change the world. It can be used to solve real-world problems...",
            image: "https://th.bing.com/th/id/OIP.rlOiirrcpdSZEZ8nLlt6JgHaGC?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            isFavorite: false,
        },
        {
            id: "3",
            title: "Mastering JavaScript",
            content: "JavaScript is one of the most popular programming languages in the world. It is used to create interactive websites...",
            image: "https://th.bing.com/th/id/OIP.BPSx-c--z6r7tY29L19ukQHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            isFavorite: true,
        },
    ];

    const [userBlog, setUserBlog] = useState([]);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
        if (storedBlogs && storedBlogs.length > 0) {
            setUserBlog(storedBlogs);
        } else {
            localStorage.setItem('blogs', JSON.stringify(initialBlogs));
            setUserBlog(initialBlogs);
        }
    }, []);

    console.log(userBlog);

    const deleteBlog = (id) => {
        const updatedBlogs = userBlog.filter((blog) => blog.id !== id);
        setUserBlog(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    const isFavorite = (id) => {
        const updatedBlogs = userBlog.map((blog) => {
            if (blog.id === id) {
                return { ...blog, isFavorite: !blog.isFavorite };
            }
            return blog;
        });
        setUserBlog(updatedBlogs);
        if (updatedBlogs.find((blog) => blog.id === id).isFavorite) {
            toast.success("Blog is added to favourite", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
        console.log("successfully sent mail from client");
    };

    const navigate = useNavigate();
    const navToAddBlog = () => {
        navigate('/add');
    };

    const navToBlogDetail = (id) => {
        navigate(`/blog/${id}`);
    };

    const isInitialBlog = (id) => {
        return initialBlogs.some(blog => blog.id === id);
    };

    return (
        <div>
            <div className='flex justify-between px-10 py-10 m-5'>
                <h1 className='text-5xl text-center text-blue-500'>Your Recent Blogs</h1>
                <button className='bg-gray-700 text-white px-3 py-2 cursor-pointer rounded-lg' onClick={navToAddBlog}>Add Blog</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-10'>
                {userBlog.map((blog) => (
                    <div key={blog.id} className='bg-white shadow-md rounded-lg overflow-hidden'>
                        <img src={blog.image} className='w-full h-48 object-cover' alt={blog.title} />
                        <div className='p-4'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-2xl font-bold'>{blog.title}</h2>
                                <div className='flex space-x-2'>
                                    <div onClick={() => deleteBlog(blog.id)} className='cursor-pointer'>
                                        <Trash2 color='red' />
                                    </div>
                                    <div className='cursor-pointer' onClick={() => isFavorite(blog.id)}>
                                        <Heart color={blog.isFavorite ? 'red' : 'gray'} />
                                    </div>
                                </div>
                            </div>
                            <p className='mt-2 text-gray-600'>{blog.content.substring(0, 100)}...</p>
                            {!isInitialBlog(blog.id) && (
                                <button className='mt-4 px-3 py-2 rounded-lg bg-blue-500 text-white cursor-pointer' onClick={() => navToBlogDetail(blog.id)}>Read More</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blog;