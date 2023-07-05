import { Link } from 'react-router-dom';
import estilo from './Pages.module.css'
import useResumoContext from '../hooks/useResumoContext';
import useNomeContext from '../hooks/useNomeContext';

function Tela5() {

    const { titulo, autor, resumo } = useResumoContext();
    const {reiniciar} = useNomeContext();

    return (

        <div>
            <div className={estilo.tela5}>
                <h1>{titulo}</h1>
                <h3>{autor}</h3>
                <p>{resumo}</p>

            </div>


            <Link className={estilo.botao} to='/Tela1' onClick={() => reiniciar}>Finalizar</Link>

        </div>

    )
}

export default Tela5