import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function useLoginContext() {

    const context = useContext(LoginContext);

    return context;

}