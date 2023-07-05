import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routerAtt1 } from './router'
import { CalcProvider } from './context/CalcContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcProvider>
      <RouterProvider router={routerAtt1} />
    </CalcProvider>
  </React.StrictMode>,
)
