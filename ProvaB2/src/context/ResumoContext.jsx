import { createContext, useState } from "react";

export const ResumoContext = createContext();

export const ResumoProvider = ({ children }) => {

    const [titulo, setTitulo] = useState('');

    const [autor, setAutor] = useState('');

    const [resumo, setResumo] = useState('');

    


    return <ResumoContext.Provider value={{ titulo, setTitulo, autor, setAutor, resumo, setResumo }}>{children}</ResumoContext.Provider>
}