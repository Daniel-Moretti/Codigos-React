import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerProva } from './router'
import { NomeProvider } from './context/nomeContext'
import { ResumoProvider } from './context/ResumoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NomeProvider>

      <ResumoProvider >

        <RouterProvider router={routerProva} />

      </ResumoProvider>

    </NomeProvider>
  </React.StrictMode>,
)
