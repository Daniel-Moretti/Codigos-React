import Post from './Post'

function App() {
  function pegarDataAtual() {
    data = new Date();
    document.getElementById('data').value = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear();
  }

  return (
    <div>
      <div>
        <h1>ATIVIDADE REACT</h1>
      </div>
      <div>
        <Post pergunta="Quais são as duas formas principais de criar um componente em React?"
          data="09 Mai 2023"
          nome="Moretti, Daniel"
          resposta="As duas formas principais de criar um componente em React são: 
          1-Componentes baseados em Classe
          2-Componentes baseados em função"/>
      </div>
    </div>
  )
}

export default App
