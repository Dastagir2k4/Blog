import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='bg-blue-800 text-white p-4 flex '>
        <h1>
          <a className='cursor-pointer' href='/'>Blog World
          </a></h1>
        <ul className='flex ml-auto gap-10'>
          <li className='cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='cursor-pointer'>
            <a href='/favourites'>
            favourites
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
