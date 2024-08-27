import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Produtos</NavLink>
        <NavLink to={"/sobre"}>Sobre</NavLink>
    </nav>
  )
}

export default NavBar