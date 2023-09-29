import React from "react";
import "./styles/style.css"
import { Link } from "react-router-dom"
import Spacer from "../spacing/Spacer";

const Footer = () => {


    return (
        <div className="footer">
            <div className="footer-left">
                <div className="address">
                    <h3>
                        Cantersteen 10/12,

                    </h3>
                    <h3>

                        1000 Brussels, Belgium
                    </h3>
                </div>
                <Spacer height={80} />
                <div className="copyright">
                    <h3>
                        © Cozy Home 2023 All right reserved
                    </h3>
                </div>
            </div>
            <div className="footer-container">

                <nav className="footer-link">
                    <div >
                        <Link className="footer-link" to="/">
                            Homepage
                        </Link>
                        <Link className="footer-link" to="/about">
                            About Us
                        </Link>
                        <Link className="footer-link" to="/register">
                            Register
                        </Link>
                        <Link className="footer-link" to="/login">
                            Sign In
                        </Link>
                    </div>
                </nav>
            </div>


        </div>


    )
}
export default Footer

