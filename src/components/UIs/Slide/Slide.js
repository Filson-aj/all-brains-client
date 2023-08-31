import React from 'react';
import { NavLink } from 'react-router-dom';

const Slide = ({ imageUrl, title, description, buttonText, link }) => {
  return (
    <section className='relative h-[300px] md:h-[400px]'>
      <img
        src={imageUrl}
        alt={title}
        className='object-cover h-full w-full'
      />
      <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-800 to-pink-500 opacity-70'></div>
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center text-white py-2'>
          <div className='container mx-auto px-4 text-center'>
            <h1 className='text-xl md:text-2xl font-bold mb-2 md:mb-6'>{title}</h1>
            <p className='text-normal md:text-xl mb-2 md:mb-8'>{description}</p>
            <div className='flex justify-center'>
              <NavLink
                to={link}
                className='bg-slate-100 hover:bg-slate-700 hover:text-white font-bold py-3 px-8 rounded-full shadow-xl text-gray-800'
              >
                {buttonText}
              </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;