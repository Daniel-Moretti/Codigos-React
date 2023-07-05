import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import App from './App.jsx'

export const routerAtt2 = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/inicio", element: <Inicio /> }
        ]
    }
])