import { Link, NavLink } from 'react-router-dom'

import { urls } from '../../../../assets/constants/data'
import Dropdown from '../Dropdown/Dropdown'

const Navigation = () => {  
    return (
      <nav className='flex justify-between items-center'>
        <div className='text-xl font-bold uppercase pl-4 w-[200px]'>
            <NavLink to={urls.root} className={`flex items-center hover:text-teal-500`}>nacest</NavLink>
        </div>
        <ul className='flex flex-grow space-x-4'>
            <li>
                <Link to={urls.root}>Home</Link>
            </li>
            <Dropdown label={`About us`} items={[
                {label: 'About', link: urls.about},
                {label: 'Polytechnic Council', link: urls.council},
                {label: 'Management Team', link: urls.offices},
                {label: 'Departments & Units', link: urls.units},
            ]} />
            <Dropdown label={`Academics`} items={[
                {label: 'School of Sciences', link: urls.about},
                {label: 'School of Management', link: urls.council},
                {label: 'Management Team', link: urls.offices},
                {label: 'Departments & Units', link: urls.units},
            ]} />
            <Dropdown label={`Admissions`} items={[
                {label: 'Undergraduates', link: urls.about},
                {label: 'Postgraduate', link: urls.council},
            ]} />
            <li>
                <Link to={urls.contact}>Contact us</Link>
            </li>
        </ul>
        <div className='w-[100px]'>
            <NavLink to={urls.signin} className={`hover:font-bold`}>Login</NavLink>
        </div>
      </nav>
    )
  }
  
export default Navigation