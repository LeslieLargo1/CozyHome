import "./styles/style.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"


const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    // const navigate = useNavigate()

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="nav-container">
            <div className={`links ${menuOpen ? "open" : ""}`}>
                <Link className="nav-link" to="/">
                    Homepage
                </Link>
                <Link className="nav-link" to="/about">
                    About Us
                </Link>
                <Link className="nav-link" id="nav-button" to="/register">
                    Register
                </Link>
                <Link className="nav-link" id="nav-button" to="/login">
                    Sign In
                </Link>

                {/* <Button label="Primary Button" style="primary" />
                <Button label="Secondary Button" style="secondary" /> */}


            </div>

            {/* hamburger menu */}
            <div
                className={`menu-icon ${menuOpen ? "toggle" : ""}`}
                onClick={handleMenuToggle}
            >
                <div className={`menu-bar ${menuOpen ? "toggle" : ""}`}></div>
                <div className={`menu-bar ${menuOpen ? "toggle" : ""}`}></div>
                <div className={`menu-bar ${menuOpen ? "toggle" : ""}`}></div>
            </div>

        </nav>

    )
}
export default Navigation