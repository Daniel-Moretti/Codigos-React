import { Link } from "react-router-dom";
import useAcessContext from "../hooks/useAcessContext";

function Inicio() {

    const { setAutenticado } = useAcessContext();

    return (
        <div className='container-inicio'>
            <div className='container-title'>
                <h1>#</h1>
                <h2>Seja bem-vindo</h2>
                <h2>Eduardo Felipe Righes</h2>
            </div>
            <div>
                <Link className="init-btn" to="/login" onClick={() => setAutenticado(false)}>Iniciar</Link>
            </div>
        </div>
    )
}

export default Inicio;