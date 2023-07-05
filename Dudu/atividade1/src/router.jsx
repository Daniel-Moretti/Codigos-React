import { createBrowserRouter } from "react-router-dom";
import PaginaUm from "./pages/PaginaUm";
import PaginaDois from "./pages/PaginaDois";
import PaginaTres from "./pages/PaginaTres";
import PaginaQuatro from "./pages/PaginaQuatro";
import PaginaResultado from "./pages/PaginaResultado";
import App from './App.jsx'

export const routerAtt1 = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/primeiraOperacao", element: <PaginaUm /> },
            { path: "/segundaOperacao", element: <PaginaDois /> },
            { path: "/terceiraOperacao", element: <PaginaTres /> },
            { path: "/quartaOperacao", element: <PaginaQuatro /> },
            { path: "/resultado", element: <PaginaResultado /> },
        ]
    }
])