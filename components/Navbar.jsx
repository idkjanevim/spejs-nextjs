import React from 'react'

function Navbar() {
  return (
    <div className='text-white fixed top-0 w-screen flex justify-end items-center h-14 mx-[-100px]'>
        <p className='px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300'>Home</p>
        <p className='px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300'>About</p>
        <p className='px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300'>Contact</p>
    </div>
  )
}

export default Navbar