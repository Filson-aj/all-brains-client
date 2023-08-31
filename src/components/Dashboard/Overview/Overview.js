import React from 'react'

const Overview = ({ user }) => {
    return(
        <div className='container mx-auto bg-white text-gray-800 rounded-lg border shadow-lg w-full'>
            <div className='border-b border-gray-200 pb-2 mb-4'>
                <h2 className='text-xl font-bold text-gray-700 hover:text-gray-400 p-2'>
                    {user?.role} Dashboard</h2>
            </div>
        </div>
    )
}

export default Overview