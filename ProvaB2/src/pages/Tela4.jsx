import { Link } from 'react-router-dom';
import estilo from './Pages.module.css'
import useResumoContext from '../hooks/useResumoContext';

function Tela4() {

    const { resumo, setResumo } = useResumoContext();

    return (

        <div>

            <label>Digite o resumo</label>
            <input value={resumo} onChange={(e) => setResumo(e.target.value)} type='text'/>
            <Link className={estilo.botao} to='/Tela5' >Finalizar</Link>

        </div>

    )
}

export default Tela4