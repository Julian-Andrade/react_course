import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      
      {/* Navlink possui como padrão a classe "isAtice" que funciona quando o elemento dentro da navbar está ativo */}
      {/* Navlink has a default class with name "isActive" works with any element inside navbar is active */}
      
      {/* Se você quiser remover a classe padrão, você pode criar uma condição ternaria */}
      {/* If you want remove this default class, you can make a ternary condition  */}
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "new-class" : "other-class")}
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
