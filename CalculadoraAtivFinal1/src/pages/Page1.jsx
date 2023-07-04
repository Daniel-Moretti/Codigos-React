import useCalcContext from "../hooks/useCalcContext";
import { Link } from "react-router-dom";
import estilo from "./Pages.module.css"
import useEffectContext from "../hooks/useEffectContext";

function Page1() {

    const { inputRef, setLoad } = useEffectContext();

    const { valor, setValor, functionHistorico } = useCalcContext();

    setLoad(1);

    return (

        <div className={estilo.posicao}>

            <label>Informe o primeiro número</label>
            <input value={valor} onChange={(e) => setValor(e.target.value)} ref={inputRef} />
            <Link className={estilo.botao} to='/Page2' onClick={() => functionHistorico(valor)}>Próximo</Link>

        </div>

    )
}

export default Page1