import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import { Navigate, Outlet, } from 'react-router-dom';
import useCalcContext from './hooks/useCalcContext';

function App() {
  const { isActive } = useCalcContext();

  return (
    <>
      <Header />

      <Outlet />

      <Navigate to="/primeiraOperacao" />

      {
        isActive && <Footer />
      }
    </>
  )
}

export default App
