import React from 'react'
import { images } from '../../../assets/constants/data'

const Testionial = () => {
  return (
    <div className='flex py-2'>
      <img src={images.photo1} alt='NACEST VC' className='w-24 h-24 bg-white p-1 rounded-full absolute left-0 mb-4' />
      <div className='bg-white shadow-lg rounded-lg px-4 py-8 mx-4 w-full text-justify mt-12'>
          <h1 className='uppercase font-bold text-center text-xl mb-2 underline'>Welcome to Abuja College - Your Path to Excellence!</h1>
          <span className='ml-12'>At Abuja College,</span>  we take pride in being a legally incorporated tertiary education institution dedicated to shaping the leaders of tomorrow. Our commitment to excellence drives us to provide exceptional educational experiences that empower our students to reach their full potential.
          We offer a wide range of Sub-Degree Programs in affiliation with the prestigious Institute of Administration at Ahmadu Bello University Zaria. This affiliation ensures that our students receive a comprehensive and quality education that is recognized and respected both nationally and internationally.
          Whether you're taking your first steps into higher education or looking to further enhance your academic journey, Abuja College is here to support and guide you every step of the way. Our experienced faculty, state-of-the-art facilities, and student-centric approach create an environment where learning thrives and aspirations are realized.
          Join us in your pursuit of knowledge, growth, and success. Welcome to Abuja College, where your educational journey takes flight.
      </div>
    </div>
  )
}

export default Testionial