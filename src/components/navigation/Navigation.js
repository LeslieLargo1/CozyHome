import "./styles/style.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../media/logo.png'


const Navigation = () => {
    const [menuOpen] = useState(false)
    // const navigate = useNavigate()

    // const handleMenuToggle = () => {
    //     setMenuOpen(!menuOpen)
    // }

    return (
        <nav className="nav-container">
            <div className="logo-container">
                <img className="image-logo" src={logo} alt="Logo" />
            </div>
            <div className={`links ${menuOpen ? "open" : ""}`}>
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/about">
                    About Us
                </Link>
                {/* <Link className="nav-link" id="nav-button" to="/register">
                    Register
                </Link>
                <Link className="nav-link" id="nav-button" to="/login">
                    Sign In
                </Link> */}

                {/* <Button label="Primary Button" style="primary" />
                <Button label="Secondary Button" style="secondary" /> */}


            </div>

            {/* hamburger menu */}
            {/* <div
                className={`menu-icon ${menuOpen ? "toggle" : ""}`}
                onClick={handleMenuToggle}
            >
                <div className={`menu-bar ${menuOpen ? "toggle" : ""}`}></div>
                <div className={`menu-bar ${menuOpen ? "toggle" : ""}`}></div>
                <div className={`menu-bar ${menuOpen ? "toggle" : ""}`}></div>
            </div> */}

        </nav>

    )
}
export default Navigation