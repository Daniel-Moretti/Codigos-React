import Header from './Header'
import Menu from './Menu'
import Body from './Body'
import Footer from './Footer'
import estilo from './App.module.css'

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Menu />
      </div>

      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
