import { useState } from 'react'
import estilo from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className={estilo.boxLista}>

      </div>
      <h1>Olá Mundo</h1>
    </div>
  )
}

export default App
