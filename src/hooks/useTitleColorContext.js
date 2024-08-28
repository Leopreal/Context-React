import { useContext } from "react";
import { TitleColorContext } from "../contextos/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    if(!context){
        console.log("erro")
    }

    return context
}