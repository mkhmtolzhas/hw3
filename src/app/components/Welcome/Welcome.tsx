import React from 'react'

const Welcome = () => {
  return (
    <section className="w-full h-screen bg-cover items-center pt-[50px] px-[8%] pb-[0] flex font-mono bg-white text-black" id="welcome">
        <div className="max-w-[630px]">
            <h1 className='text-[45px] leading-[1.2]'>Share</h1>
            <h1 className='text-[45px] leading-[1.2]'>Inspire</h1>
            <h1 className='text-[45px] leading-[1.2]'>Connect</h1>


            <p className='text-[16px] mt-[25px] mx-[0] mb-[30px]'>
            Welcome to PostHub, the ultimate platform for writers and readers. Dive into a world of captivating stories, insightful articles, and thought-provoking ideas. Whether you are here to share your knowledge or discover new perspectives, PostHub is your gateway to a vibrant community of minds.
            </p>
        </div>
    </section>
  )
}

export default Welcome;