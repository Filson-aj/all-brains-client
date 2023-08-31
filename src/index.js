import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import './index.css'
import App from './App'

//diable react devtools on production
process.env.NODE_ENV === 'production' && disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
