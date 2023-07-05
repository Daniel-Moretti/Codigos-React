import { useContext } from "react";
import { AcessContext } from "../context/AcessContext";

export default function useAcessContext() {
    const context = useContext(AcessContext);

    return context;
}