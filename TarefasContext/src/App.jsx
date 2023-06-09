import { useContext } from 'react';
import './App.css'
import Header from './componentes/Header'
import { ThemeContext } from './context/ThemeContext';

function App() {

  const { theme } = useContext(ThemeContext);


  return (
    <main className={`${theme !== 'dark' ? 'dark' : ''}`}>
      <Header />
    </main>
  )
}

export default App
