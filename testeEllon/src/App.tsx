import { Navigate, Outlet } from "react-router-dom"
import './App.module.css'



function App() {

  return (
    <div>
      <Outlet />
      <Navigate to="/Home" />
    </div>
  )
}

export default App
