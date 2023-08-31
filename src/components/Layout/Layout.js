import { Outlet } from 'react-router-dom'
//import { useSelector } from 'react-redux'

import Header from '../UIs/Header/Header'
import Footer from '../UIs/Footer/Footer'
/* import Spinner from '../UIs/Spinner/Spinner'
import { selectCurrentSpinner } from '../../app/slice/spinnerSlice'
import { selectCurrentToken } from '../../features/Auth/Login/authSlice' */


const Layout = () => {
    /* const spinner = useSelector(selectCurrentSpinner),
        token = useSelector(selectCurrentToken),
        { pathname } = useLocation() */

  return (
    <main className='flex flex-col w-full min-h-screen bg-white dark:bg-gray-100  text-gray-800'>
      {/*  {spinner &&  <Spinner />} */}
       {/* {(!token && !DASH_REGEX.test(pathname)) &&  <Header />} */}
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout