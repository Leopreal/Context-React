import { useContext } from "react";
import { CounterContext } from "../contextos/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if(!context){
        console.log("ERRO")
    }

    return context
}