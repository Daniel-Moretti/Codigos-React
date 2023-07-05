import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Page1 from "./pages/Page1";
import Login from "./pages/Login";

export const routerLogin = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/Login", element: <Login /> },
            { path: "/Page1", element: <Page1 />}

        ]
    }
])