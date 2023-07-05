import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { routerLogin } from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { LoginProvider } from './context/LoginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={routerLogin} />
    </LoginProvider>

  </React.StrictMode>,
)
