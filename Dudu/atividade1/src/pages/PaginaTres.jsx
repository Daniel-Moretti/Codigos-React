import { useRef, useState } from "react";
import useCalcContext from "../hooks/useCalcContext";
import { Link } from "react-router-dom";
import useFocus from "../hooks/useFocus";

function PaginaTres() {

    const [valorParaSomar, setValor] = useState("");

    const { valor, calcular } = useCalcContext();

    const inputRef = useRef(null);

    useFocus(inputRef);

    return (
        <main className="flex-content-col vh-80">
            <div className="flex-content ">
                <p>Valor atual da conta é: </p>
                <p className="sum-value">{valor}</p>
            </div>
            <h1>Informe um número para subtrair</h1>

            <input ref={inputRef} className="generic-input" type="number" value={valorParaSomar} onChange={(e) => setValor(e.target.value)} />

            <Link className="next-btn" to="/quartaOperacao" onClick={() => calcular(valorParaSomar, "SUBTRAIR")}>Próximo</Link>
        </main>
    )
}

export default PaginaTres;