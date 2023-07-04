import { createBrowserRouter } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import App from "./App";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

export const routerCalculadora = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/Page1", element: <Page1 /> },
            { path: "/Page2", element: <Page2 /> },
            { path: "/Page3", element: <Page3 /> },
            { path: "/Page4", element: <Page4 /> },
            { path: "/Page5", element: <Page5 /> }

        ]
    }
])