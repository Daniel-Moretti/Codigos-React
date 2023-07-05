import { useEffect } from "react";

export default function useEffectFocus(ref) {
    useEffect(() => {
        ref.current.focus();
    }, []);
}