import estilo from './App.module.css'
import Button from './Button'

function App() {

  return (
    <div className={estilo.posicao}>

      <div className={estilo.fundo}>

        <div className={estilo.titulo}>
          <h1 >Calculadora</h1>
        </div>

        <div className={estilo.display}>
          <h2>9*9=81</h2>
        </div>

        <div className={estilo.teclado}>
          <Button texto='9' />
          <Button texto='.' />
          <Button texto='/' />
          <Button texto='*' />
          <Button texto='6' />
          <Button texto='7' />
          <Button texto='8' />
          <Button texto='-' />
          <Button texto='3' />
          <Button texto='4' />
          <Button texto='5' />
          <Button texto='+' />
          <Button texto='0' />
          <Button texto='1' />
          <Button texto='2' />
          <Button texto='=' />
        </div>

      </div>

    </div>
  )
}

export default App
