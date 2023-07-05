import './App.css'

import { Navigate, Outlet } from "react-router-dom";

function App() {

  return (
    <main>
      
      <Outlet />

      <Navigate to={'/Login'} />
      
    </main>
  )
}

export default App
