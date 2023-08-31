import React from 'react'

const Events = () => {
  return (
    <div className='flex flex-col space-y-2'>
        <h1 className='font-bold text-center border-b border-gray-300 py-2'>Top Upcoming Events</h1>
        <div className='bg-white border rounded-lg mx-2 p-4 mb-2'>
            <h1 className='font-bold'>Salse of Admission Forms</h1>
            <p>
            This is currently ongoing on a first-come, first-serve basis! Limited spaces available in each program.
            </p>
        </div>
    </div>
  )
}

export default Events