import React from 'react'

const Welcome = () => {
  return (
    <section className="w-full h-screen bg-cover items-center pt-[50px] px-[8%] pb-[0] flex" id="welcome">
        <div className="max-w-[630px]">
            <h1 className='text-[45px] leading-[1.2]'>Safety</h1>
            <h1 className='text-[45px] leading-[1.2]'>Confidence</h1>
            <h1 className='text-[45px] leading-[1.2]'>Enjoy</h1>


            <p className='text-[16px] mt-[25px] mx-[0] mb-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo non ante accumsan feugiat. Integer nec metus et lorem condimentum cursus. Nam nec convallis eros. In sit amet venenatis nisi. Cras nec ligula non magna fermentum bibendum.
            </p>
        </div>
    </section>
  )
}

export default Welcome;