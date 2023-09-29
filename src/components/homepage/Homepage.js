import React from "react"
import "./styles/style.css"
import Search from "../search/Search";
import TopCities from "../topCities/TopCities";
import { Link } from "react-router-dom";



const Homepage = () => {




    return (
        <>
            <main className="home-page">
                <div className="photo">
                    <div className="intro">
                        {/* <p className="sub-title">DISCOVER - STAY - EXPERIENCE</p> */}
                    </div>
                    {<Search />}
                </div>
                <div className="browse-properties">
                    <Link to="/property/properties">
                        <button className="browse">Browse all Properties</button>
                    </Link>
                </div>
                <div className="top-cities-section">
                    <p className="sub-title"> Top - Destinations  </p>
                </div>

                {<TopCities />}
                <div className="become-member">
                    <p className="invite-text">
                        Join our growing community of hosts and unlock the potential of your space. Start hosting with us today and turn your property into an unforgettable destination for travelers worldwide.                    </p>
                    <div className="action-section">
                        <Link to="/register">
                            <button className="action-button" >
                                <p className="action-text">Become a Host</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
};

export default Homepage
