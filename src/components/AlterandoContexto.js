import { useContext } from "react";

import { CounterContext } from "../contextos/CounterContext";



const AlterandoContexto = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Clique para alterar</button>
    </div>
  )
}

export default AlterandoContexto