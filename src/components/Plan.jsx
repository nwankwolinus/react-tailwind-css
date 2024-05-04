import React from 'react';
import beach1 from '../assets/bich1.jpeg'
import beach2 from '../assets/bich2.jpeg'
import beach3 from '../assets/bich3.jpg'
import beach4 from '../assets/bich4.jpeg'
import beach5 from '../assets/bich5.jpg'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src= {beach1}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src= {beach2}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src= {beach3}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src= {beach4}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src= {beach5}
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, architecto.
         Qui distinctio atque quibusdam rem!
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vero nulla provident alias 
          expedita esse quod nesciunt debitis a, totam architecto eaque accusamus, dignissimos, iste 
          blanditiis aliquid veritatis! Ab, architecto.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
