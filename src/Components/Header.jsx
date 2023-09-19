import React from 'react'
import logo from "./../assets/images/logo.jpg"
import { IoLogoYoutube } from "react-icons/io5";

function Header() {
  return (
    <div className='mx-2 my-2 flex justify-between items-center'>
      <img src={logo} className='w-[180px]'  />
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
      <button className='bg-red-500 rounded-full w-[150px] p-3 text-white text-[20px] flex items-center'>Subscribe <IoLogoYoutube className='ml-3'/> </button>
    </div>
  )
}

export default Header
