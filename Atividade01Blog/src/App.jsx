import UpPost from './componentes/UpPost'
import estilo from './App.module.css'

function App() {

  return (
    <div>
      <div className={estilo.blog}>
        <h1>ATIVIDADE REACT</h1>
      </div>
      <div>
        <UpPost />

      </div>

    </div>
  )
}

export default App
