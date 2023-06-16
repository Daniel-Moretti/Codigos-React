import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useThemeContext() {

    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw Error(" Não está dentro do contexto ")
    }

    return context;

}