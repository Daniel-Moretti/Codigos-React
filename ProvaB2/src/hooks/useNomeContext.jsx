import { useContext } from "react";
import { NomeContext } from "../context/nomeContext";

export default function useNomeContext() {
    const context = useContext(NomeContext);

    return context;
}