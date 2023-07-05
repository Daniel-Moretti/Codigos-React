import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'


function App() {


  return (
    <main>
      <Header />

      <Outlet />

      <Navigate to={'/Page1'} />
      
    </main>
  )
}

export default App
