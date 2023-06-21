import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [listarTarefas, setListaTarefas] = useState([]);

    function cadastrarTarefa(tarefa) {

        setListaTarefas([tarefa, ...listarTarefas])

    }

    return <TaskContext.Provider value={({ listarTarefas, cadastrarTarefa })}>{children}</TaskContext.Provider>

}