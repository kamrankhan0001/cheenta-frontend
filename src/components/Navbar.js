import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav  className='bg-blue-600 text-white p-4 flex justify-between'>

      <div>
        <Link to ='/' className='text-xl font-bold'>
        Blog Platform
        </Link>
        </div>  
        <div>
            <Link to="/blogs" className="mx-2">
            Blogs
            </Link>
            <Link to="/profile" className="mx-2">
            Profile
            
            </Link>
            <Link to="/login" className="mx-2">
            Login

            </Link>
        </div>

    </nav>
  )
}

export default Navbar