import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { urls } from './assets/constants/data'
import useTitle from './hooks/useTitle'
import Layout from './components/Layout/Layout'
import Landing from './components/Landing/Landing'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  useTitle('Home Page | Abuja College')
  return (
    <Routes>
      <Route path={urls.root} element={<Layout />}>{/* --- root route --- */}
      
        {/* --- Public Routes --- */}
        <Route index element={<Landing />} />
        {/* <Route path={urls.signin} element={<Login />} /> */}

        {/* This is the catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />

      </Route>{/* --- end root route --- */}
    </Routes>
  )
}

export default App
