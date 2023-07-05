import { createContext, useState } from "react";

export const AcessContext = createContext();

export const AcessProvider = ({ children }) => {

    const [autenticado, setAutenticado] = useState(false);

    const [mensagemValidacao, setMensagemValidacao] = useState(''); 

    function logar(login, senha) {

        if (login === undefined || login === '' || senha === undefined || senha === '') {
            setAutenticado(false);
            setMensagemValidacao("Usuário e a senha devem ser informados.");
            return;
        }

        if (login !== "admin" || senha !== "admin") {
            console.log("dados inválidos");
            setAutenticado(false);
            setMensagemValidacao("Usuário e/ou senha incorretos.");
            return;
        }
        console.log("logou");
        setAutenticado(true);
        setMensagemValidacao("");
    }

    return <AcessContext.Provider value={({ autenticado, logar, mensagemValidacao })}>{children}</AcessContext.Provider>
}