import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AcessProvider } from './context/AcessContext'
import { routerAtt2 } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AcessProvider>
      <RouterProvider router={routerAtt2} />
    </AcessProvider>
  </React.StrictMode>,
)