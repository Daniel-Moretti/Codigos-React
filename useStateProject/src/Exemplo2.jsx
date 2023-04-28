import { useState } from "react"

function Exemplo2() {

    const [nome, setNome] = useState("Daniel")
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [nota4, setNota4] = useState(0)
    let media = (nota1 + nota2 + nota3 + nota4) / 4


    function adicionarNome(event) {
        setNome(event.target.value);
    }

    const obterNota1 = (event) => {
        setNota1(parseFloat(event.target.value));
    }




    return (
        <div>
            <label>Informe o nome</label>
            <input value={nome} type="text" onChange={adicionarNome} />

            <label>Informe a Nota 1</label>
            <input value={nota1} type="number" onChange={obterNota1} />

            <label>Informe a Nota 2</label>
            <input value={nota2} type="number" onChange={(event) => setNota2(parseFloat(event.target.value))} />

            <label>Informe a Nota 3</label>
            <input type="number" value={nota3} onChange={(event) => setNota3(parseFloat(event.target.value))} />

            <label>Informe a Nota 4</label>
            <input type="number" value={nota4} onChange={(event) => setNota4(parseFloat(event.target.value))} />

            <h2>Seu nome é {nome}</h2>


            <h2>Sua média é {media}</h2>

            <h2>O aluno está {media < 6 ? "Reprovado" : media >= 6 && media <= 7 ? "em Recuperação" : "Aprovado"}</h2>



        </div>
    )


}

export default Exemplo2