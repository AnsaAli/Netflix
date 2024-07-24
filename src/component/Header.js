import React from 'react'

const Header = () => {
    return (
        <div className='flex fixed items-center z-10 w-full px-8 py-2  justify-between bg-black bg-opacity-70 '>
            <img
                className='w-44 '
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo' />

               <div className=' '>
               <ul className='flex space-x-8 ml-0 mr-52 font-bold-200 text-white cursor-pointer'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
               </div>

               <div className='text-white flex space-x-4 cursor-pointer' >
                <p className='py-4'>Search</p>
                <button className='text-white pr-4'>Sign In</button>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
               </div>

        </div>
    )
}

export default Header;