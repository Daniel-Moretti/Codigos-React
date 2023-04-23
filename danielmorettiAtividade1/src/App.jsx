import estilo from './App.module.css'
import Header from './Header'
import Footer from './Footer'
import Info from './Info'

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className={estilo.position}>
        <div>
          <Info texto='A' />
        </div>

        <div>
          <Info texto='B' />
        </div>

        <div>
          <Info texto='C' />
        </div>

      </section>
      <footer>
        <Footer />
      </footer>
    </div>

  )
}

export default App
