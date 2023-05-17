import { useEffect, useState } from 'react'
import './App.css'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)

  // 1 - Como inicializador
  useEffect(() => {
    console.log('Console ao renderizar o componente')
  })

  // 2 - Com um estado atrelado
  useEffect(() => {
    console.log('Executando quando o estado count muda')
  }, [count])

  // 3 - Como um construtor
  useEffect(() => {
    console.log('Executo só uma vez !')
  }, [])

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>Contar</button>
      {count}

      <button onClick={() => setCount2(prev => prev + 1)}>Contar2</button>
      {count2}

      <Profile> </Profile>
    </>
  )
}

export default App
