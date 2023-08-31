import { Link } from 'react-router-dom'

import { urls, icons } from '../../../assets/constants/data'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-4 border-t border-dotted text-center text-sm font-light">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 py-8">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 hover:text-gray-100 uppercase">
          All Brains Universal Join Admission College
        </h2>
        <ul className="text-gray-400 hover:text-gray-100">
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/programmes">Programmes</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </div>

      {/* Help Center Section */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 hover:text-gray-100 uppercase">
          Help center
        </h2>
        <ul className="text-gray-400 hover:text-gray-100">
          <li>
            <Link to={`https://twitter.com`}>Twitter</Link>
          </li>
          <li>
            <Link to={`https://facebook.com`}>Facebook</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Legal Section */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 hover:text-gray-100 uppercase">
          Legal
        </h2>
        <ul className="text-gray-400 hover:text-gray-100">
          <li>
            <Link to="/privacy-policy">Privacy &amp; Policy</Link>
          </li>
          <li>
            <Link to="/licensing">Licensing</Link>
          </li>
          <li>
            <Link to="/terms-condition">Terms &amp; Conditions</Link>
          </li>
        </ul>
      </div>

      {/* Download Section */}
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 hover:text-gray-100 uppercase">
          Download
        </h2>
        <ul className="text-gray-400 hover:text-gray-100">
          <li>
            <Link to="/download">iOS</Link>
          </li>
          <li>
            <Link to="/download">Android</Link>
          </li>
          <li>
            <Link to="/download">Windows</Link>
          </li>
          <li>
            <Link to="/download">MacOS</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-400 sm:text-center">
        © 2023 <Link to={urls.root} className="text-gray-100">All Brains™</Link>. All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        {/* Social Media Icons */}
        <Link to={`https://facebook.com`} className="text-gray-400 hover:text-indigo-600">
          <icons.facebook size={20} />
        </Link>
        <Link to={`https://twitter.com`} className="text-gray-400 hover:text-indigo-600">
          <icons.twitter size={20} />
        </Link>
        <Link to={`https://instagram.com`} className="text-gray-400 hover:text-indigo-600">
          <icons.instagram size={20} />
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer