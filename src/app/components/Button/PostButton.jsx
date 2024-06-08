import React from 'react'

const PostButton = ({ topic }) => {
  return (
    <a href="#" className="inline-flex items-center justify-center rounded-md border border-gray-200 border-transparent bg-gray-900 px-2.5 py-1 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
        {topic}
    </a>
  )
}

export default PostButton