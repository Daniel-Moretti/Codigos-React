import estilo from './App.module.css'
import Header from './Header'
import SectionLeft from './SectionLeft'

function App() {

  return (
    <div className={estilo.fundoMain}>

      <div className={estilo.fundoEsquerdo}>

        <Header />
        <SectionLeft />

      </div>

      <div className={estilo.fundoDireito}>

      </div>

    </div>
  )
}

export default App
