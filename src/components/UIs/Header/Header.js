import { Link } from 'react-router-dom'
import { Calendar } from 'react-feather'

import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <header className='bg-white shadow-lg w-full'>
        <div className='flex flex-col justify-between w-full bg-slate-100'>
            <div className='bg-sky-500 w-full text-white z-50'>
                <div className='container mx-auto w-full flex justify-between '>
                    <div className=''>
                        <ul className='flex justify-between py-2 text-sm md:text-base'>
                            <li className='mx-2'>
                                <Link to={`students-resource`}>Students</Link>
                            </li>
                            <li className='mx-2'>
                                <Link to={`staff-resource`}>Staff</Link>
                            </li>
                            <li className='mx-2'>
                                <Link to={`alumni`}>Alumni</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden md:block py-2'>
                        <h1 className='uppercase font-bold text-gray-100 text-lg mx-2'>
                            All Brains Universal Join Admission College
                        </h1>
                    </div>
                    <div>
                        <ul className='flex justify-around items-center py-2 text-sm md:text-base'>
                            <li className='mx-2'>
                                <Link to={`school-calender`} title='Calender'>
                                    <span><Calendar size={20} /></span>
                                </Link>
                            </li>
                            <li className='mx-2'>
                                <Link to={`staff`} title='Staff Directory'>Staff Directory</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='hidden md:flex container mx-auto p-8 items-center justify-between'>
                <Link to={urls.root} className='flex items-center'>
                    <img src={images.logo} alt='NACEST Logo' className='w-32 h-32 rounded-full shadow' />
                </Link>
                <div className='w-2/4 bg-white border border-teal-300 border-t-4 rounded-lg shadow flex flex-col justify-center items-center relative'>
                    <h1 className='font-bold text-xl uppercase text-center text-teal-400'>All Brains Universal Join Admission College</h1>
                    <p className='text-center text-lg font-bold'>
                        Affiliated To Institute of Administration <br />
                        Ahmadu Bello University, Zaria.
                    </p>
                    <address className='text-sm mb-8 italic text-center'>
                        <span className='text-red-500 font-bold'>Address: </span> FCT Agency for Mass Education Gwagwalada Zonal Office,
                        Opposite Marriage Registry, Gwagwalada Area Council, Secretariate Road, Gwagwalada FCT Abuja, Nigeria.<br/>
                        <span className='text-red-500 font-bold'>Tel: </span> +2348037098857, +2348059948675, +2348129652026
                    </address>
                    <div className='bg-teal-400 text-white font-semibold text-center rounded p-1 absolute bottom-[-12px] left-1/2 transform -translate-x-1/2'>
                        <DateTime />
                    </div>
                </div>
                <div>
                    <Link to={urls.signin} className='bg-teal-400 text-white text-center rounded p-2 text-sm text-semibold hover:bg-white hover:text-gray-800 hover:border-teal-400 hover:border hover:font-bold flex items-center justify-between'>
                        Visit GES Portal
                        <span className='px-2 font-bold'><BiLink /></span>
                    </Link>
                </div>
            </div> */}
            <NavBar />
        </div>
    </header>
  )
}

export default Header