import useLoginContext from '../hooks/useLoginContext';
import logo from './img/logo.png'
import { Link } from "react-router-dom";
import estilo from './Pages.module.css'

function Page1() {

    const { nome, apagarNome } = useLoginContext();

    return (
        <div>
            <div className={estilo.page1}>
                <img src={logo} />
                <h1>Seja bem-vindo</h1>
                <h2>{nome}</h2>
                <Link className={estilo.botao2} to="/Login" onClick={() => apagarNome}>Iniciar</Link>
            </div>
            
        </div>
    )

}

export default Page1