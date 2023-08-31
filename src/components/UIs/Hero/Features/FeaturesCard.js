import { Link } from 'react-router-dom'
import { Eye } from 'react-feather'

const FeaturesCard = ({ img, link, title, text }) =>(
    <div className='block bg-white p-4 rounded-lg transition duration-500 border
        border shadow-lg' to={link}>
        <img src={img} alt='an' className='w-full h-48 object-cover mb-4 rounded' />
        <h3 className='text-xl font-semibold mb-2 text-center'>--- {title} ---</h3>
        <p className='text-gray-700 mb-4 text-justify'>{text} </p>
        <p className='flex w-full justify-end'>
            <Link to={link} className='bg-teal-400 px-4 py-2 rounded text-white flex items-center hover:text-lg hover:text-bold'>
                View <span className='ml-2'><Eye size={15} /></span>
            </Link>
        </p>
    </div>
)

export default FeaturesCard