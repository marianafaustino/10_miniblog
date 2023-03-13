import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Início</NavLink>
        </li>

        <li>
        <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar