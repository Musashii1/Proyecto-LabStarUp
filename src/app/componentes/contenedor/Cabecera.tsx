import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/Clipboard 2024-11-18 16-36-22.ico"

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <NavLink className="navbar-brand" to="/">
          <img src={miLogo} alt="LogalTech" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Inicio <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solicitudes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/Abogado">
                    Abogado
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Certificado">
                    Certificado
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Mision">
                Mision
                </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contactos">
                Contactanos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
