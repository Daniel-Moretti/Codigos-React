import { Navigate, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <main>
      <Outlet />
      <Navigate to='/Tela1' />
    </main>
  )
}

export default App
