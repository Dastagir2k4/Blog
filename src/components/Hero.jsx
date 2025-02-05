import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate=useNavigate()
  const navToAddBlog=()=>{
    navigate('/add')
  }
  return (
    <div className='min-h-screen  flex flex-col md:flex-row'>
      <div className='p-10 md:w-1/2  px-20 py-52'>
        <h1 className='text-5xl text-blue-500 font-sans py-5'>Welcome to Blog World</h1>
        <p className='text-3xl py-5 '>Explore the world of blogs</p>
        <p className='text-3xl py-5'>
        Dive into a universe where ideas come alive, stories unfold, and knowledge knows no bounds.
         Whether you're a passionate reader, an aspiring writer, or someone looking for fresh perspectives, Blog World has something for everyone.
        </p>
        <button className='bg-blue-500 px-4 py-2 mt-5 text-white cursor-pointer' onClick={navToAddBlog}>Explore</button>

      </div>
      <div className='md:w-1/2 p-20'>
        <img src='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg?w=740'/>
      </div>


      
    </div>
  )
}

export default Hero
