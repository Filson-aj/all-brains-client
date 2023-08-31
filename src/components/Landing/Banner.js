import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gray-100 text-gray-800 py-8'>
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* About Us */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>About Us</h2>
          <p className='text-lg'>
            We are a legally incorporated tertiary education institution. We offer Sub-Degree Programs in Affiliation with the Institute of Administration, Ahmadu Bello University Zaria.
          </p>
        </div>
        
        {/* We Offer */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>We Offer</h2>
          <ul className='list-disc pl-6 text-lg'>
            <li>ABU Zaria Diploma in Accounting</li>
            <li>ABU Zaria Diploma in Civil Law</li>
            <li>ABU Zaria Diploma in Management/Business Administration</li>
            <li>ABU Zaria Diploma in Public Administration</li>
            <li>ABU Zaria Diploma in Sharia & Civil Law</li>
          </ul>
        </div>
        
        {/* Sales of Admission Forms */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Sales of Admission Forms</h2>
          <p className='text-lg'>
            This is currently ongoing on a first-come, first-serve basis! Limited spaces available in each program.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner