import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
 
  return (
    <div>
      <div className='bg-blue-800 text-white p-4 flex '>
        <h1>
          <a className='cursor-pointer' href='/'>Blog World
          </a></h1>
        <ul className='flex ml-auto gap-10'>
          <li className='cursor-pointer'>
            <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='/favourites'>
            favourites
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
