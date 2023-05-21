import Post from './Post'
import estilo from './App.module.css'

function App() {
  function pegarDataAtual() {
    data = new Date();
    document.getElementById('data').value = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear();
  }

  return (
    <div>
      <div className={estilo.blog}>
        <h1>ATIVIDADE REACT</h1>
        <Post pergunta="Quais são as duas formas principais de criar um componente em React?"
          data="09 Mai 2023"
          nome="Moretti, Daniel"
          resposta="As duas formas principais de criar um componente em React são: 
          1-Componentes baseados em Classe
          2-Componentes baseados em função"/>

        <Post pergunta="O que são Hooks?"
          data="21 Mai 2023"
          nome="Moretti, Daniel"
          resposta="Os Hooks são funções especiais que podem ser usadas dentro de componentes funcionais para adicionar funcionalidades 
          específicas, como por exemplo, ao declarar uma variável vc pode aletrar o valor dela usando um hooks."/>

        <Post pergunta="Qual o objetivo dos Hooks?"
          data="21 Mai 2023"
          nome="Moretti, Daniel"
          resposta="O objetivo dos Hooks no React é permitir que os componentes funcionais tenham acesso a recursos do React que 
          anteriormente só estavam disponíveis para componentes de classe. Antes dos Hooks, os componentes funcionais eram usados 
          principalmente para tarefas simples, enquanto as funcionalidades mais avançadas, como estado local, ciclo de vida e 
          contexto, eram tratadas por meio de componentes de classe.
          
          Os Hooks foram introduzidos para superar essa limitação, fornecendo uma abordagem mais direta e intuitiva para 
          trabalhar com funcionalidades complexas em componentes funcionais."/>

        <Post pergunta="Descreva a funcionalidade do UseState."
          data="21 Mai 2023"
          nome="Moretti, Daniel"
          resposta="A funcionalidade do useState é permitir que um componente funcional em React tenha um estado interno. 
          O useState é um dos hooks mais utilizados e fornece uma maneira simples de adicionar e atualizar o estado em um 
          componente funcional.

          Ao utilizar o useState, você pode declarar uma variável de estado e uma função para atualizá-la. A função de atualização 
          retornada pelo useState é usada para modificar o valor da variável de estado."/>

        <Post pergunta="Quando devemos utilizar os estados no React?"
          data="21 Mai 2023"
          nome="Moretti, Daniel"
          resposta="Os estados em React devem ser utilizados quando você precisa armazenar e gerenciar informações que podem mudar 
          ao longo do tempo e afetar a renderização do componente.

          Eles são adequados para controlar interações do usuário, gerenciar componentes controlados, lidar com mudanças visuais 
          condicionais e manipular efeitos colaterais. Ao usar estados, você pode criar componentes dinâmicos e interativos em React."/>
      </div>
    </div>
  )
}

export default App
