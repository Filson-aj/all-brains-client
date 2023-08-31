import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'react-feather'

const Dropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  return (
    <li className='relative'>
      <button
        onClick={toggleDropdown}
        className='flex items-center'
      >
        {label}{' '}
        {items && (
          <span className='ml-1 mt-1'>
            <ChevronDown />
          </span>
        )}
      </button>
      {open && (
        <ul className={`absolute left-0 mt-1 bg-white border rounded shadow-lg text-gray-800 w-48 ring-1 ring-gray-100 ring-opacity-5 ${ open ? 'transition-opacity duration-500 opacity-100' : 'transition-opacity duration-500 opacity-0 pointer-events-none'}`}>
          {items.map((item, index) => (
            <li key={index} className='px-4 py-2 hover:bg-gray-100 hover:font-bold'>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default Dropdown