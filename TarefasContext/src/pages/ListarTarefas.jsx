import useTaskContext from "../hooks/useTaskContext";

function ListarTarefas() {

    const { listarTarefas } = useTaskContext();

    return (
        <main>
            <h1> Lista de Tarefas </h1>

            <section>

                <ul>
                    {

                        listarTarefas.map((tarefa) => (
                            <li>{tarefa.nomeTarefa}</li>
                        ))
                    }
                </ul>

            </section>

        </main>
    )
}

export default ListarTarefas;