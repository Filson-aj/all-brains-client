import { Link } from 'react-router-dom'

const NavButton = ({ link, label }) => {
    return(
        <Link to={link} className='bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg border'>{label}</Link>
    )
}

export default NavButton