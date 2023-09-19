import React from 'react'
import { useState } from 'react';
import banner from './../assets/images/banner.png'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const tags = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'love',
    },
    {
      id: 3,
      name: 'gaming',
    },
    {
      id: 4,
      name: 'programming',
    },
    {
      id: 5,
      name: 'math',
    },

  ]
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='flex justify-center flex-col'>
      <img src={banner} className='rounded-2xl w-[800px] h-64 mt-8 mx-auto' />
      <div className='flex mx-auto bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%]'>
        <IoSearchOutline className='text-[20px] text-gray-400' />
        <input type="text" placeholder='Search' className='outline-none ml-2' />
      </div>
      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul key={item.id} onClick={() => setActiveIndex(index)} className={`${index == activeIndex ? 'bg-red-500 text-white' : null}
           p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]
            border-red-500  transition-all duration-100 ease-in-out`}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Search
