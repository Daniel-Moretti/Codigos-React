import { useState } from 'react'
import imagem from './assets/siviero-logo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={imagem} className='logo'/>
        <p>Daniel</p>
      </div>
        
    </>
  )
}

export default App
