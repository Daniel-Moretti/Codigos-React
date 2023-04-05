import Header from "./Header"
import Post from "./Post"
import "./global.css"
import estilo from "./App.module.css"

function App() {
  return (
    <div>
      <Header />
      <section className={estilo.conteiner}>
        <Post titulo="Post 1" texto="Meu texto 2" />
        <Post titulo="Post 2" texto="Meu texto 2" />
      </section>
    </div>
  )
}

export default App
