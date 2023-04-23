import estilo from './App.module.css'
import Header from './Header'
import Anotacoes from './Anotacoes'

function App() {

  return (
    <div className={estilo.main}>
      <div className={estilo.boxMain}>
        <Header />
        <div className={estilo.positionNote}>

          <div>
            <Anotacoes texto='Fazer Atividades de React.' />
          </div>

          <div>
            <Anotacoes texto='Tomar mais água durante o dia.' />
          </div>

          <div>
            <Anotacoes texto='HTML não é linguagem de programação.' />
          </div>

          <div>
            <Anotacoes texto='Semana de prova.' />
          </div>

          <div>
            <Anotacoes texto='O que é dormir?' />
          </div>

        </div>


      </div>
    </div>
  )
}

export default App
