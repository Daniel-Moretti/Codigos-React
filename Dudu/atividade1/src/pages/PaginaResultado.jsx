import useCalcContext from "../hooks/useCalcContext";
import { Link } from "react-router-dom";

function PaginaResultado() {

    const { reiniciar, valor } = useCalcContext();

    return (
        <main className="flex-content-col vh-80">
            <div className="flex-content-col">
                <p>Total da sua conta é</p>

                <p className="sum-value-no-pad">{valor}</p>

                <Link className="next-btn" to="/primeiraOperacao" onClick={() => reiniciar()}>Reiniciar</Link>
            </div>
        </main>
    )
}

export default PaginaResultado;