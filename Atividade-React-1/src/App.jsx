import Header from "./Header"
import Corpo from './Corpo'
import Menu from "./Menu"
import Footer from "./Footer"
import style from './Header.module.css'
import corpo from './App.module.css'
import foot from './Footer.module.css'

function App() {
  return (
    <div>

      <header className={style.fundo}>
        <Header />
      </header>

      <div className={corpo.posicao}>
        <Menu />
        <Corpo />
      </div>

      <footer className={foot.fundo}>
        <Footer />
      </footer>

    </div>
  )
}

export default App
