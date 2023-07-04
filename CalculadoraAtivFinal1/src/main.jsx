import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routerCalculadora } from './Router.jsx'
import { CalcProvider } from './context/CalcContext.jsx'
import { EffectProvider } from './context/EffectContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcProvider>
      
      <EffectProvider >

        <RouterProvider router={routerCalculadora} />
        
      </EffectProvider>

    </CalcProvider>
  </React.StrictMode>,
)
