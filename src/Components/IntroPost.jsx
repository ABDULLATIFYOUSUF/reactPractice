import { useEffect } from 'react'


function IntroPost({post}) {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
      <img src={post.coverImage} className='rounded-2xl object-cover w-full h-full' />
      <div>
        <h4 className='text-red-500 text-[20px]'>{post.category}</h4>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='text-gray-400 mt-5 line-clamp-6'>{post.desc}</h4>
        <div className='mt-5 flex items-center gap-2'>
          <img src="src/assets/images/latifyousuf-removebg-preview (1).png" className='w-[50px] rounded-full' />
          <div className='ml-2'>
            <h3 className='font-bold'>Abdul Latif</h3>
            <h3 className='text-gray-500'>19 Sep 2023</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPost
