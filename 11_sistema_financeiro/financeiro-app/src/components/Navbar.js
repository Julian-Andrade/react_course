// CSS
import styles from "./Navbar.module.css";

// React Router
import { NavLink } from "react-router-dom";

// Hooks
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav>
      <NavLink to="/" className={styles.brand}>
        andrade<span>lima</span>
      </NavLink>
      <ul>
        {user && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Clientes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entry_and_leave"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Financeiro
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/providers"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Fornecedores
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/constructions"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Obras
              </NavLink>
            </li>
            <li className={styles.dropdown}>
              <NavLink
                to="/registration/register_system"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
              <div className={styles.dropdown_content}>
                <NavLink
                  to="/registration/category"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Categoria
                </NavLink>

                <NavLink
                  to="/registration/clients"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Cliente
                </NavLink>

                <NavLink
                  to="/registration/financial"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Financeiro
                </NavLink>

                <NavLink
                  to="/registration/payment"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Forma de Pagamento
                </NavLink>

                <NavLink
                  to="/registration/providers"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Fornecedor
                </NavLink>

                <NavLink
                  to="/registration/construction"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Obra
                </NavLink>

                <NavLink
                  to="/registration/status_payment"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Status do Pagamento
                </NavLink>

                <NavLink
                  to="/registration/type_construction"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Tipo de Obra
                </NavLink>

                <NavLink
                  to="/registration/type_provider"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Tipo de Fornecedor
                </NavLink>
              </div>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Registrar
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>

        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
