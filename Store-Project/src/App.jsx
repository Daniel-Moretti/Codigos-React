import { useEffect, useState } from 'react'
import './App.css'
import Item from './componentes/Item';

function App() {

  const [categoria, setCategoria] = useState("");
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setListaProdutos(json))
  }, [])

  useEffect(() => {

    const param = categoria ? `/category/${categoria}` : ''

    fetch(`https://fakestoreapi.com/products${param}`)
      .then(res => res.json())
      .then(json => setListaProdutos(json))

  }, [categoria])

  return (
    <>

      <header>
        <div>
          <p>Selecione uma categoria</p>

          <select onChange={(event) => setCategoria(event.target.value)} >
            <option value="" defaultValue>Todos</option>
            <option value="jewelery">JOIAS</option>
            <option value="electronics">ELETRONICOS</option>
            <option value="mens's clothing">ROUPAS MASCULINAS</option>
            <option value="women's clothing">ROUPAS FEMININAS</option>
          </select>

        </div>

        <div>
          <button>Buscar</button>
        </div>

      </header>

      <section>
        {
          listaProdutos.map((produto) => <Item produto={produto} />)
        }
      </section >

    </>
  )
}

export default App
