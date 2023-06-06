import { createContext, useContext, useState } from 'react'
import './App.css'

const contextExemplo = createContext();

function App() {
  const [nome, setNome] = useState('Carlos')
  const [sobrenome, setSobrenome] = useState('Moretti')
  const [idade, setIdade] = useState('51 anos')

  return (
    <>
      <contextExemplo.Provider value={{ nome, sobrenome, setNome, idade }}>
        <ComponenteFilho />
      </contextExemplo.Provider>

    </>
  )
}

function ComponenteFilho() {

  const { setNome } = useContext(contextExemplo)

  setNome('João')

  return <ComponenteNeto />

}

function ComponenteNeto() {

  const { nome, sobrenome } = useContext(contextExemplo);

  return (
    <div>

      <h1>O nome da pessoa é {nome} {sobrenome}</h1>
      <ComponenteBisneto />
    </div>
  )

}

function ComponenteBisneto() {

  const { idade } = useContext(contextExemplo)

  return <h2>A idade da pessoa é {idade}</h2>
}

export default App
