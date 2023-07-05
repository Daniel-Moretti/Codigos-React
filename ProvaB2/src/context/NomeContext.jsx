import { createContext, useState } from "react";

export const NomeContext = createContext();

export const NomeProvider = ({ children }) => {

    const [nome, setNome] = useState('');

    function reiniciar(){
        setNome('');
        
    }


    return <NomeContext.Provider value={{ nome, setNome, reiniciar }}>{children}</NomeContext.Provider>
}