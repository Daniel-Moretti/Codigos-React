import { Link } from 'react-router-dom';
import estilo from './Pages.module.css'
import useResumoContext from '../hooks/useResumoContext';

function Tela3() {

    const { autor, setAutor } = useResumoContext();

    return (

        <div>

            <label>Informe o autor do resumo</label>
            <input value={autor} onChange={(e) => setAutor(e.target.value)} type='text'/>
            <Link className={estilo.botao} to='/Tela4' >Próximo</Link>

        </div>

    )
}

export default Tela3