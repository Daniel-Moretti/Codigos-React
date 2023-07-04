import { createContext, useEffect, useRef, useState } from "react";

export const EffectContext = createContext();

export const EffectProvider = ({ children }) => {

    const inputRef = useRef(null); //Juntamente com o UseEffect abaixo faz o cursor ficar automaticamente no input

    const [load, setLoad] = useState('');

    useEffect(() => {
        inputRef.current.focus();
    }, [load]);

    

    return <EffectContext.Provider value={{inputRef, setLoad}}> {children} </EffectContext.Provider>

}