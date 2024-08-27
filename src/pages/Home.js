import { useContext } from "react"
import {CounterContext} from "../contextos/CounterContext"

const Home = () => {
    const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>valor: {counter}</p>
    </div>
  )
}

export default Home