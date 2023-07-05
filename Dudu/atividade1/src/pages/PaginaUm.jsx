import { useRef, useState } from "react";
import useCalcContext from "../hooks/useCalcContext";
import { Link } from "react-router-dom";
import useFocus from "../hooks/useFocus";
// import style from "./PaginaUm.module.css";
// import { Link } from "react-router-dom";

function PaginaUm() {

    const [valorParaSomar, setValor] = useState("");

    const { calcular } = useCalcContext();

    const inputRef = useRef(null);

    useFocus(inputRef);

    return (
        <main className="flex-content-col vh-80">
            <h1>Informe o primeiro número</h1>

            <input ref={inputRef} className="generic-input" type="number" value={valorParaSomar} onChange={(e) => setValor(e.target.value)} />

            <Link className="next-btn" to="/segundaOperacao" onClick={() => calcular(valorParaSomar, "SOMAR")}>Próximo</Link>
        </main>
    )
}

export default PaginaUm;