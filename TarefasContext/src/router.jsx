import { createBrowserRouter } from "react-router-dom";
import Cadastrar from "./pages/Cadastrar";
import ListarTarefas from "./pages/ListarTarefas";
import App from "./App";

export const routerCesul = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/Cadastrar", element: <Cadastrar /> },
            { path: "/ListarTarefas", element: <ListarTarefas /> }
        ]
    }
])