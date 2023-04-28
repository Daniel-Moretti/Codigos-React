import { useState } from "react"

function App() {

  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()
  const [classificacao, setClassificacao] = useState()
  const [resultado, setResultado] = useState()



  function calcular() {

    setResultado(peso / (altura * altura))

    setClassificacao(resultado <= 18.5 ? "Baixo Peso" : resultado > 18.5 && resultado < 25 ? "Peso Normal" : resultado >= 25 && resultado < 30 ? "Sobrepeso" :
      resultado >= 30 && resultado < 35 ? "Obesidade Grau I" : resultado >= 35 && resultado < 40 ? "Obesidade Grau II" : "Obesidade Grau III")
  }

  return (
    <div>
      <h1>CALCULE O SEU IMC</h1>
      <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela OMS para calcular o peso ideal de cada pessoa.</p>

      <div>
        <label>Informe sua altura</label>
      </div>

      <div>
        <input type="number" value={altura} onChange={(event) => setAltura(parseFloat(event.target.value))} />
      </div>

      <div>
        <label>Informe seu peso</label>
      </div>

      <div>
        <input type="number" value={peso} onChange={(event) => setPeso(parseFloat(event.target.value))} />
      </div>

      <div>
        <button onClick={calcular}>CALCULAR</button>
      </div>

      <div>
        <p>{classificacao}</p>
        <p>Seu IMC é {resultado}</p>

      </div>


    </div>
  )
}

export default App
