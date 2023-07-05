import { Link } from 'react-router-dom';
import estilo from './Pages.module.css'
import useResumoContext from '../hooks/useResumoContext';

function Tela2() {

    const { titulo, setTitulo } = useResumoContext();

    return (
        <div className={estilo.posicao}>

            <div className={estilo.Tela2}>

                <label>Informe o título do seu resumo</label>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type='text' />
                <Link className={estilo.botao} to='/Tela3' >Próximo</Link>

            </div>
        </div>

    )
}

export default Tela2