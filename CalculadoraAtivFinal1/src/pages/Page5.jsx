import useCalcContext from "../hooks/useCalcContext";
import { Link } from "react-router-dom";
import estilo from "./Pages.module.css"

function Page5() {

    const { valor, calcular, historico } = useCalcContext();

    return (

        <div >
            <div className={estilo.posicao}>
                <div className={estilo.resultadoFinal}>
                    <p>O total da sua conta é: </p>
                    <span> {valor} </span>
                </div>
                <Link className={estilo.botao} to='/Page1' onClick={() => calcular()}>Reiniciar</Link>

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

export default Page5