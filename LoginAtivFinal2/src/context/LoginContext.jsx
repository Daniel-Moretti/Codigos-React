import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [nome, setNome] = useState('');

    function gravarNome(vlr) {
        setNome(vlr);
    }

    function apagarNome() {
        setNome('');
    }

    return <LoginContext.Provider value={({ nome, setNome, gravarNome, apagarNome })}> {children} </LoginContext.Provider>
}