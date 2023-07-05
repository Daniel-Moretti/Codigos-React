import { createBrowserRouter } from 'react-router-dom'
import Tela1 from './pages/Tela1'
import Tela2 from './pages/Tela2'
import Tela3 from './pages/Tela3'
import Tela4 from './pages/Tela4'
import Tela5 from './pages/Tela5'
import App from './App'

export const routerProva = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/Tela1", element: <Tela1 /> },
            { path: "/Tela2", element: <Tela2 /> },
            { path: "/Tela3", element: <Tela3 /> },
            { path: "/Tela4", element: <Tela4 /> },
            { path: "/Tela5", element: <Tela5 /> }

        ]
    }
])