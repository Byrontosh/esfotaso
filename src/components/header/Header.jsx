import { useState } from "react"
import { Link } from "react-router"

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    const closeMenu = () => {
        setMenuActive(false)
    }

    return (
        <header className="header">
            <nav className="header__container">
                <div className="header__logo">
                    <h1>ASO<span className="header__site">ESFOT</span></h1>
                </div>

                <div className={`header__barra ${menuActive ? "active" : ""}`}>
                    <div className="navegacion">
                        <Link to="/" className="navegacion__link" onClick={closeMenu}>Inicio</Link>
                        <Link to="/about" className="navegacion__link" onClick={closeMenu}>Nosotros</Link>
                        <Link to="/service" className="navegacion__link" onClick={closeMenu}>Servicios</Link>
                        <Link to="/contact" className="navegacion__link" onClick={closeMenu}>Contactos</Link>
                    </div>
                    <div className="buttons">
                        <Link to="/login" className="button" onClick={closeMenu}>Login</Link>
                        <Link to="/register" className="button" onClick={closeMenu}>Registro</Link>
                    </div>
                </div>

                <div className="header__hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars hamburger"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
