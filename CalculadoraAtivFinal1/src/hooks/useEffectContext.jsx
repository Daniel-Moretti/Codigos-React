import { useContext } from "react";
import { EffectContext } from "../context/EffectContext";

export default function useEffectContext(){

    const context = useContext(EffectContext);

    return context;

}