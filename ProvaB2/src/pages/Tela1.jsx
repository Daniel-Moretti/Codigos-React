import { Link } from 'react-router-dom';
import estilo from './Pages.module.css'
import autoPreenchimento from '../hooks/autoPreenchimento';
import useNomeContext from '../hooks/useNomeContext'
import { useState } from 'react';
import { useEffect } from 'react';

function Tela1() {

    const { nome, setNome } = useNomeContext();

    const [vlr, setVlr] = useState('');
    
    useEffect(() => {
        setVlr('Cesul');
    }, []);

    return (

        <div className={estilo.fundo} >
            <div className={estilo.tela1} >

                <label>Empresa</label>
                <input disabled value={vlr}/>
                <label>Seu nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <Link className={estilo.botao} to='/Tela2' >Acessar</Link>
            </div>


        </div>

    )
}

export default Tela1