import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export default function useCalcContext() {
    const context = useContext(CalcContext);

    return context;
}