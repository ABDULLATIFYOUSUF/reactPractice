import React from 'react'

function Blogs({posts}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {posts.map((item)=>(
        <div className='m-4 cursor-pointer'>
          <img src={item.coverImage} className='w-full rounded-2xl object-cover h-[200px]' />
          <h3 className='text-red-500 mt-3'>{item.category}</h3>
          <h3 className='font-bold mt-3'>{item.title}</h3>
          <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.desc}</h3>
          <div className='mt-5 flex items-center gap-2'>
          <img src="src/assets/images/latifyousuf-removebg-preview (1).png" className='w-[50px] rounded-full' />
          <div className='ml-2'>
            <h3 className='font-bold text-[12px]'>Abdul Latif</h3>
            <h3 className='text-gray-500 text-[10px]'>19 Sep 2023</h3>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs
