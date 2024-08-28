// import { useContext } from "react"
// import {CounterContext} from "../contextos/CounterContext"
import AlterandoContexto from "../components/AlterandoContexto"

// novo hook
import { useCounterContext } from "../hooks/useCounterContext"

// context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
    // const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext()

    // context mais complexo
    const {color, dispatch} = useTitleColorContext()
    console.log(color)

    // alterando state complexo
    const setTitleColor = (color) => {
      dispatch({type: color})
    }


  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>valor: {counter}</p>
      <AlterandoContexto />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home