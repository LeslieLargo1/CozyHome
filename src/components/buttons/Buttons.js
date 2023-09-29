import React from 'react'
import "./styles/style.css"


const Button = ({ label, style }) => {
    return <button className={`custom-button ${style}`}>{label}</button>;
};

export default Button