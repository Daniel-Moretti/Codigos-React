import { useState } from "react"
import ItemTodo from "./ItemTodo";

function Todo() {

    const [tarefa, setTarefa] = useState("");
    const [prioridade, setPrioridade] = useState(false);
    const [listaTarefas, setListaTarefas] = useState([]);

    function modificarNome(tarefa) {
        setTarefa(tarefa);

    }

    //Utilizando Arrow Function
    const adicionarTarefa = () => {

        setTarefa("")
        setPrioridade(false)

        setListaTarefas([
            {
                mensagem: tarefa,
                prioridade: prioridade,
                data: new Date().toDateString()
            }, ...listaTarefas
        ])

        console.log(listaTarefas)

    }


    return (
        <main>
            <h1>Todo Cesul</h1>

            <section>

                <div>
                    <input type="text" value={tarefa} onChange={(event) => modificarNome(event.target.value)} />
                    <input type="checkbox" checked={prioridade} defaultChecked={prioridade} onChange={(event) => setPrioridade(event.target.checked)} />
                </div>

                <button type="button" onClick={adicionarTarefa}>ADICIONAR</button>

                <div>

                    {
                        listaTarefas.map(item => (
                            <ItemTodo item={item} />
                        ))

                    }

                </div>

            </section>

        </main>
    )


}

export default Todo