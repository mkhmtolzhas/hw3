import React from 'react'
import Link from 'next/link'
import PostButton from '../Button/PostButton'

const PostItem = () => {
  return (
    <Link href="">
      <div className="box-border p-4 md:p-6">
        <span className="mb-2 md:mb-0">
          <Link href="">Author's name</Link>
          <span className='text-gray-50 dark:text-gray-400'> • </span>
          <Link href="">Topic's name</Link>
          <span className='text-gray-50 dark:text-gray-400'> • </span>
          <Link href="" className='text-gray-50 dark:text-gray-400'>May 2024</Link>
        </span>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 pr-0 md:pr-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">The Surprising Benefits of Embracing Boredom</h2>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
              In our fast-paced, constantly stimulated world, boredom is often seen as something to be avoided at all
              costs. However, recent research suggests that embracing boredom can actually have surprising benefits for
              our mental and physical well-being.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex-shrink-0 w-full md:w-1/3 h-40 md:h-full rounded-[15px]">
            <img src="https://static.tildacdn.pro/tild3039-3932-4433-b533-613365646663/722bab55-4a08-4e09-a.png" alt="Description of image" className="w-full h-full object-cover rounded-[15px]"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <span className="flex items-center">
            <PostButton topic="JavaScript" />
            <span className='text-gray-50 dark:text-gray-400 mx-2'> • </span>
            <span className='text-gray-50 dark:text-gray-400'>12 min ago</span>
            <span className='text-gray-50 dark:text-gray-400 mx-2'> • </span>
            <Link href="" className='text-gray-50 dark:text-gray-400'>Selected for you</Link>
          </span>
        </div>
        <br />
        <hr className='border'/>
      </div>
    </Link>
  )
}

export default PostItem
