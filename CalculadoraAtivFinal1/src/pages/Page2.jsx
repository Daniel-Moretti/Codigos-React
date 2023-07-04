import { Link } from "react-router-dom";
import useCalcContext from "../hooks/useCalcContext"
import { useState } from "react";
import estilo from "./Pages.module.css"
import useEffectContext from "../hooks/useEffectContext";

function Page2() {

    const { inputRef, setLoad } = useEffectContext();

    const { valor, calcular, historico } = useCalcContext();

    const [novoValor, setNovoValor] = useState('');

    setLoad(2);

    return (

        <div>
            <div className={estilo.resultado}>
                <p>Valor atual da conta é: <span className={estilo.valor}> {valor} </span></p>
            </div>
            <div className={estilo.posicao}>

                <label>Informe um número para adicionar</label>
                <input value={novoValor} onChange={(e) => setNovoValor(e.target.value)} ref={inputRef} />
                <Link className={estilo.botao} to='/Page3' onClick={() => calcular(novoValor, "SOMAR")} >Próximo</Link>

            </div>
            <div className={estilo.footer}>
                <p>Histórico</p>
                <ul>
                    {historico.map((numero, index) => (<li key={index}>{numero}</li>))}
                </ul>
            </div>
        </div>

    )
}

export default Page2