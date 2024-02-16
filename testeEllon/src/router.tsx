import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Cotacoes from "./Pages/Cotacoes";

export const routerCotacao = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            { path: "Home", element: <Home></Home>},
            { path: "Cotacoes", element: <Cotacoes></Cotacoes>},
            
        ]
    }
])