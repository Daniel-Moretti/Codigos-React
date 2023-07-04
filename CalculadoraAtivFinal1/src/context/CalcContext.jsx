import { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {

    const [valor, setValor] = useState('');

    const [historico, setHistorico] = useState([]);

    function calcular(novoValor, tipo) {


        if (tipo == "SOMAR") {
            setValor(Number(valor) + Number(novoValor));
            
        } else if (tipo == "SUBTRAIR") {
            setValor(Number(valor) - Number(novoValor));

        } else if (tipo == "MULTIPLICAR") {
            setValor(Number(valor) * Number(novoValor));
            
        } else {
            setValor('');
            setHistorico(['']);
            console.log("chegou aqui")
        }

        functionHistorico(novoValor);
        
    }

    function functionHistorico(numero) {
        setHistorico([...historico, numero]);
    }

            

    return <CalcContext.Provider value={({ valor, setValor, calcular, historico, functionHistorico })}> {children} </CalcContext.Provider>

}