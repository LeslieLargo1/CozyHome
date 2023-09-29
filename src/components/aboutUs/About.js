import React from "react";
import "./styles/style.css"
import PhotoGallery from "../photogallery/PhotoGallery";





const About = () => {
    return (
        <main className="about-main">
            {/* <h1 className="about-title">About Us</h1> */}
            <div className="about-body">
                <div className="about-container">
                    <h2 className="about-subtitle">Cozy Home is with you along the way.</h2>
                    <p className="about-paragraph">Born in the heart of brussels, Cozy Home helps you find the perfect accomodation for you. You will be able to discover houses , appartaments , cabins and much more. </p>
                </div>
                <div className="Gallery">
                    <PhotoGallery />
                </div>
            </div>
        </main>
    )
}


export default About