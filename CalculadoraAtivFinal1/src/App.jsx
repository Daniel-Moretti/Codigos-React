import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'


function App() {


  return (
    <main>
      <Header />

      <Outlet />
    </main>
  )
}

export default App
