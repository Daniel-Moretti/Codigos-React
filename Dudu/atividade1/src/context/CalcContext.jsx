import { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {

    const [valor, setValor] = useState(0);

    const [isActive, setActive] = useState(false)

    const [valores, setListaValores] = useState([]);

    function calcular(valorSomar, tipoOperacao) {
        setActive(true)

        if (tipoOperacao === 'SOMAR') {
            setValor(valor + Number(valorSomar));
        } else if (tipoOperacao === 'SUBTRAIR') {
            setValor(valor - Number(valorSomar));
        } else {
            setValor(valor * Number(valorSomar));
        }

        setListaValores([...valores, valorSomar])
    }

    function reiniciar() {
        setValor(0);
        setListaValores([])
    }

    return <CalcContext.Provider value={({ valor, calcular, valores, isActive, reiniciar })}>{children}</CalcContext.Provider>
}