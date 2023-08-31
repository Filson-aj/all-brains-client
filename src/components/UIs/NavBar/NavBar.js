import { useState } from 'react'
import { Menu } from 'react-feather'
import { RiCloseLine } from 'react-icons/ri'

import { images } from '../../../assets/constants/data'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
//import NavButton from './NavButton'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return(
        <nav className='bg-white border shadow-lg'> 
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 px-5 md:w-auto w-full flex justify-between items-center'>
                    <img src={images.logo} alt='logo' className='md:cursor-pointer h-12 md:h-16' />
                    <h1 className='md:hidden uppercase font-bold text-teal-500 text-sm text-center mx-2'>
                        All Brains Universal Join Admission College
                    </h1>
                    <div onClick={() => setOpen(!open)} className='md:hidden'>
                        {open ? <RiCloseLine size={20} /> : <Menu size={20} />}
                    </div>
                </div>
                <ul className='hidden md:flex items-center gap-8 font-[Poppins]'>
                    <li>
                        <Link to={`/`} className='py-4 px-1 inline-block'>Home</Link>
                    </li>
                    <NavLinks />
                </ul>
                {/* <div className='hidden md:block'>
                    <NavButton link={`applications`} label={`Apply`} />
                </div> */}
                {/* Mobile device navigation */}
                <ul className={`bg-white absolute w-full h-full bottom-0 md:hidden z-40 py-24 pl-2 font-[Poppins]transform duration-500 ${open ? 'left-0' : 'left-[-100%]'} overflow-y-auto`}>
                    <li>
                        <Link to={`/`} className='py-4 px-1 inline-block'>Home</Link>
                    </li>
                    <NavLinks />
                   {/*  <div className='py-3'>
                        <NavButton link={`applications`} label={`Apply`} />
                    </div> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar