import { useContext } from "react";
import { ResumoContext } from "../context/ResumoContext";

export default function useResumoContext() {
    const context = useContext(ResumoContext);

    return context;
}